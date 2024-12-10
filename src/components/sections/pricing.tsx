import { motion } from 'framer-motion';
import { Check, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from 'react';
import { ContactModal } from '@/components/contact-modal';
import { pricingTiers } from '@/lib/pricing-data';
import type { PricingTier } from '@/lib/gpt-pricing-data';

export default function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<PricingTier | null>(null);

  const handleOpenModal = (tier: typeof pricingTiers[0]) => {
    setSelectedTier({
      id: tier.id,
      name: tier.name,
      price: tier.price,
      description: tier.description,
      features: tier.features.map(f => f.name),
      highlighted: tier.highlighted,
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTier(null);
  };

  return (
    <section id="pricing" className="py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Simple, Transparent Pricing
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Choose the perfect plan for your needs. All plans include our one-time build fee and monthly maintenance.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12 items-stretch">
            {pricingTiers.map((tier) => (
              <Card
                key={tier.id}
                className={`flex flex-col ${
                  tier.highlighted ? 'border-primary shadow-lg' : ''
                }`}
              >
                <CardHeader>
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 flex-1">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold">
                      ${tier.buildCost}
                      <span className="text-sm font-normal"> build fee</span>
                    </div>
                    <div className="text-2xl font-bold text-muted-foreground">
                      ${tier.price}
                      <span className="text-sm font-normal">/month</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {tier.features.map((feature, index) => (
                      <div key={`${tier.id}-feature-${index}`} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <div className="flex items-start justify-between gap-1.5 flex-1 min-w-0">
                          <span className="text-sm leading-6 truncate">{feature.name}</span>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <button className="inline-flex mt-1 flex-shrink-0">
                                  <Info className="h-3.5 w-3.5 text-muted-foreground/70 hover:text-primary/90 transition-colors" />
                                </button>
                              </TooltipTrigger>
                              <TooltipContent side="right" className="max-w-[280px] p-3">
                                <p className="text-sm leading-relaxed">{feature.description}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    onClick={() => handleOpenModal(tier)}
                    variant={tier.highlighted ? 'default' : 'outline'}
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              <span className="font-medium">Note:</span> Clients are responsible for their own domain name registration and hosting fees. We can assist with domain and hosting setup at an additional cost. Please contact us for more information about these services.
            </p>
          </div>
        </div>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} selectedTier={selectedTier} />
    </section>
  );
}