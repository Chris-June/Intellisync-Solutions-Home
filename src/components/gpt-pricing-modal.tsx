import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { gptPricingTiers } from '@/lib/gpt-pricing-data';
import { ContactModal } from './contact-modal';
import { motion } from 'framer-motion';

interface GptPricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GptPricingModal({ isOpen, onClose }: GptPricingModalProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<typeof gptPricingTiers[0] | null>(null);

  const handleOpenContactModal = (tier: typeof gptPricingTiers[0]) => {
    setSelectedTier(tier);
    setIsContactModalOpen(true);
  };

  const handleCloseContactModal = () => {
    setIsContactModalOpen(false);
    setSelectedTier(null);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-auto">
          <DialogHeader className="pb-2">
            <DialogTitle className="text-2xl text-center">GPT Builder Pricing Plans</DialogTitle>
            <DialogDescription className="text-center text-lg">
              Choose the perfect plan for your custom AI needs
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 md:grid-cols-3 lg:gap-6 py-4">
            {gptPricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className={`relative h-full rounded-lg border bg-card p-4 shadow-sm ${
                  tier.highlighted ? 'border-primary' : 'border-border'
                }`}>
                  {tier.highlighted && (
                    <div className="absolute -top-3 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground">
                      Popular
                    </div>
                  )}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold">{tier.name}</h3>
                    <div className="space-y-1">
                      <p className="text-2xl font-bold">
                        {tier.price}
                        {!tier.isCustom && (
                          <span className="text-sm font-normal text-muted-foreground">
                            /month
                          </span>
                        )}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {tier.description}
                      </p>
                    </div>
                    <ul className="space-y-1.5">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="h-4 w-4 stroke-emerald-400" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${tier.highlighted ? 'gradient-primary' : ''}`}
                      variant={tier.highlighted ? 'default' : 'outline'}
                      onClick={() => handleOpenContactModal(tier)}
                    >
                      {tier.isCustom ? "Contact Sales" : "Get Started"}
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {selectedTier && (
        <ContactModal
          isOpen={isContactModalOpen}
          onClose={handleCloseContactModal}
          selectedTier={selectedTier}
        />
      )}
    </>
  );
}
