export interface AddOn {
  id: string;
  name: string;
  description: string;
}

export const addOns: AddOn[] = [
  {
    id: 'animated-cards',
    name: 'Animated Cards',
    description: 'Smooth animations for card components when they enter the viewport'
  },
  {
    id: 'parallax',
    name: 'Parallax Scrolling',
    description: 'Create depth with background elements that move at different speeds'
  },
  {
    id: 'smooth-scroll',
    name: 'Smooth Scroll',
    description: 'Enhanced scrolling experience with smooth transitions between sections'
  },
  {
    id: 'animated-icons',
    name: 'Animated Icons',
    description: 'Interactive icons with hover and click animations'
  },
  {
    id: 'image-carousel',
    name: 'Image Carousel with Timer',
    description: 'Automated image slideshow with customizable timing'
  },
  {
    id: 'infinite-scroll',
    name: 'Infinite Component Scrolling',
    description: 'Endless scrolling effect for content sections'
  },
  {
    id: 'hover-effects',
    name: 'Hover Effects',
    description: 'Interactive hover animations for buttons and cards'
  },
  {
    id: 'gradient-fills',
    name: 'Gradient Colour Fills',
    description: 'Beautiful gradient backgrounds and text effects'
  },

  {
    id: 'sticky-nav',
    name: 'Sticky Navigation Bar',
    description: 'Navigation bar that remains fixed at the top while scrolling, with smooth visibility toggles based on scroll direction'
  },
  {
    id: 'custom-tooltips',
    name: 'Customizable Tooltips',
    description: 'Dynamic tooltips with adjustable styles, animations, and content based on user interaction'
  },
  {
    id: 'accordion',
    name: 'Accordion Components',
    description: 'Expandable and collapsible sections for content organization, with smooth animation effects'
  },
  {
    id: 'loading-indicators',
    name: 'Loading Spinners & Skeleton Screens',
    description: 'Animated loading indicators and placeholder screens to enhance perceived performance'
  },
  {
    id: 'responsive-modals',
    name: 'Responsive Modals',
    description: 'Highly customizable modals with entrance and exit animations, optimized for different devices'
  },
  {
    id: 'context-menus',
    name: 'Context Menus',
    description: 'Interactive right-click menus with animated transitions and customizable options'
  },
  {
    id: 'fab-buttons',
    name: 'Floating Action Buttons (FAB)',
    description: 'Circular buttons with expanding radial menus or smooth pop-out options for quick actions'
  },
  {
    id: 'micro-interactions',
    name: 'Micro-Interaction Indicators',
    description: 'Subtle animations like button ripples, toggle switches, or checkmark animations for enhanced feedback on user actions'
  },
  {
    id: 'progress-bars',
    name: 'Dynamic Progress Bars',
    description: 'Animated progress indicators with customizable colors, gradients, and labels'
  },
  {
    id: 'tab-animations',
    name: 'Tabs with Sliding Animations',
    description: 'Multi-tab components with sleek sliding or fading transitions between content areas'
  }
];

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  maxAddOns: number;
  highlighted: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 19.99,
    description: 'Essential features for any website',
    features: [
      'Header Navigation',
      'Hero Section',
      'CTA Section',
      'Features Section',
      'Choose 2 Add-ons',
      'Footer with Contact Details'
    ],
    maxAddOns: 2,
    highlighted: false
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 29.99,
    description: 'Complete solution for growing businesses',
    features: [
      'All Basic Features',
      'About Us Section',
      'Pricing Section',
      'Choose 4 Add-ons',
      'SEO Optimization',
      'Footer with Contact Details'
    ],
    maxAddOns: 4,
    highlighted: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 79.99,
    description: 'Advanced features for large organizations',
    features: [
      'All Professional Features',
      '8 Interactive Add-ons',
      'Custom Contact Form',
      'SEO Optimization',
      'Footer with Contact Details & Social Media Links'
    ],
    maxAddOns: 8,
    highlighted: false
  }
];
