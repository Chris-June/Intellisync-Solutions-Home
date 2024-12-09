import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Label } from '@/components/ui/label';
import { addOns, PricingTier } from '@/lib/pricing-data';
import { sendContactEmail } from '@/lib/email-service';
import { toast } from 'sonner';
import { Info } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTier: PricingTier;
}

export function ContactModal({ isOpen, onClose, selectedTier }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    selectedAddOns: [] as string[],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await sendContactEmail({
        ...formData,
        selectedTier: {
          name: selectedTier.name,
          price: selectedTier.price ?? 0
        }
      });
      
      toast.success('Thank you for your interest! We will contact you soon.');
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send your request. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAddOnToggle = (addOnId: string) => {
    setFormData(prev => {
      const currentAddOns = prev.selectedAddOns;
      
      if (currentAddOns.includes(addOnId)) {
        return {
          ...prev,
          selectedAddOns: currentAddOns.filter((id) => id !== addOnId)
        };
      }
      
      // Check if adding another add-on would exceed the limit
      if (currentAddOns.length >= selectedTier.maxAddOns) {
        toast.error(`The ${selectedTier.name} plan only allows ${selectedTier.maxAddOns} add-ons.`);
        return prev;
      }
      
      return {
        ...prev,
        selectedAddOns: [...currentAddOns, addOnId]
      };
    });
  };

  const remainingAddOns = selectedTier.maxAddOns - formData.selectedAddOns.length;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full sm:max-w-[800px] max-h-[90vh] overflow-y-auto bg-background border-2 border-emerald-400/50 focus-within:border-emerald-400">
        <DialogHeader className="flex-shrink-0">
          <DialogTitle className="text-2xl">Get Started with {selectedTier.name} Plan</DialogTitle>
          <DialogDescription className="text-base">
            Fill out the form below and we'll get back to you within 24 hours.
          </DialogDescription>
        </DialogHeader>
        <div className="flex-1 overflow-y-auto pr-6 -mr-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone (optional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Additional Features</Label>
                <span className="text-sm text-muted-foreground">
                  {remainingAddOns} add-on{remainingAddOns !== 1 ? 's' : ''} remaining
                </span>
              </div>
              <div className="text-sm text-muted-foreground">
                Select up to {selectedTier.maxAddOns} additional features you'd like to discuss
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {addOns.map((addon) => {
                  const isSelected = formData.selectedAddOns.includes(addon.id);
                  const isDisabled = !isSelected && formData.selectedAddOns.length >= selectedTier.maxAddOns;
                  
                  return (
                    <div
                      key={addon.id}
                      className="relative flex items-center gap-1"
                    >
                      <Button
                        type="button"
                        variant={isSelected ? "default" : "outline"}
                        className={`flex-1 justify-start ${isDisabled ? 'opacity-50' : ''}`}
                        onClick={() => handleAddOnToggle(addon.id)}
                        disabled={isDisabled}
                      >
                        <span className="truncate">{addon.name}</span>
                      </Button>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
                            >
                              <Info className="h-4 w-4 stroke-emerald-400 cursor-help" />
                              <span className="sr-only">More information</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent side="top" align="end" className="max-w-[250px]">
                            {addon.description}
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Additional Information</Label>
              <Textarea
                id="message"
                placeholder="Tell us about your project requirements..."
                value={formData.message}
                onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                className="h-32"
              />
            </div>
          </form>
        </div>
        <DialogFooter className="flex justify-end gap-4 sticky bottom-0 bg-background py-4 border-t">
          <Button type="button" variant="outline" onClick={onClose} disabled={isSubmitting}>
            Cancel
          </Button>
          <Button 
            type="submit" 
            className="gradient-primary"
            disabled={isSubmitting}
            form="contact-form"
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
