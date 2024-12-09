export interface PricingTier {
  id: string;
  name: string;
  price: number | undefined;
  description: string;
  features: string[];
  highlighted: boolean;
  isPopular?: boolean;
}

export const gptPricingTiers: PricingTier[] = [
  {
    id: 'basic',
    name: "Basic",
    price: 19.99,
    description: "Kickstart your journey with essential tools for success.",
    features: [
     
      "2,400 Messages per month",
      "Knowledge Base Access",
      "Share and embed your assistant seamlessly",
      "Access actionable Insights & Statistics",
      "1,000 FREE messages for testing your GPT Prior to launching"
     
    ],
    highlighted: false
  },
  {
    id: 'professional',
    name: "Professional",
    price: 37.99,
    description: "Empower your growing business with advanced capabilities.",
    features: [
      "Everything in Basic plus",
      
      "4,800 Messages per Month",
      "Enhanced Knowledge Base Access for deeper insights",
      "Effortless Assistant Sharing & Embedding",
      "Unleash next-level Insights & Statistics",
      "1,000 FREE messages for testing your GPT Prior to launching"
    ],
    highlighted: true
  },
  {
    id: 'premium',
    name: "Premium",
    price: 53.99,
    description: "Unleash the full power of IntelliSync for your organization.",
    features: [
      "Everything in Professional Plus",
      
      "7,200 Messages per Month",
      "Advanced Knowledge Base Access for strategic insights",
      "Share and embed across your organization with ease",
      "Detailed Insights & Statistics to fuel decisions",
      "Larger Embedding File Sizes for expansive projects",
      "Get exclusive Early Beta Feature Releases",
      "Unlimited Custom GPT Builds",
      "1,000 FREE messages for testing your GPT Prior to launching",
      "1,000 FREE messages for testing your GPT Prior to launching",
      "API Access for total customization (Coming Soon)"
    ],
    highlighted: false
  },
  {
    id: 'enterprise',
    name: "Enterprise",
    price: undefined,
    description: "Tailored AI solutions for ultimate performance and control.",
    features: [
      "Custom AI Models with your own OpenAI API Keys",
      "All Enterprise Features & More!",
      "Train AI Models with your unique business data",
      "Customize System Prompts to match your needs",
      "Create tailored AI Personas for your team",
      "One of a kind Chat Interface UI for total branding control",
      "Experience Multi-Modal Support for seamless interaction",
      "Custom Built to your specification"
    ],
    highlighted: false
  }
];
