interface PricingTier {
  id: string;
  name: string;
  price: number;
  isCustom?: boolean;
  description: string;
  features: string[];
  highlighted: boolean;
  maxAddOns: number;
}

export const gptPricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: "Starter",
    price: 0,
    description: "Perfect for individuals and small projects",
    features: [
      "1 Custom GPT Model",
      "Basic Knowledge Base (up to 10MB)",
      "100 Chat Sessions/month",
      "Basic Analytics",
      "Community Support",
      "Standard Response Time"
    ],
    highlighted: false,
    maxAddOns: 1
  },
  {
    id: 'professional',
    name: "Professional",
    price: 49,
    description: "Ideal for growing businesses and content creators",
    features: [
      "5 Custom GPT Models",
      "Advanced Knowledge Base (up to 100MB)",
      "1,000 Chat Sessions/month",
      "Advanced Analytics Dashboard",
      "Priority Support",
      "Custom AI Persona Templates",
      "Multiple Website Integration",
      "API Access"
    ],
    highlighted: true,
    maxAddOns: 3
  },
  {
    id: 'enterprise',
    name: "Enterprise",
    price: 99,
    isCustom: true,
    description: "Tailored solutions for large organizations",
    features: [
      "Unlimited Custom GPT Models",
      "Massive Knowledge Base",
      "Unlimited Chat Sessions",
      "Full Analytics Suite",
      "Dedicated Support Team",
      "Advanced Security Protocols",
      "Custom Integration",
      "Compliance Consulting"
    ],
    highlighted: false,
    maxAddOns: 10
  }
];
