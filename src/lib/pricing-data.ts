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
  }
];

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  maxAddOns: number;
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 19.99,
    description: 'Essential features for any website',
    features: [
      'Navigation Header',
      'Hero Section with Background Image',
      'Call To Action Section',
      'About Us Section',
      'Features Section',
      'Pricing Section',
      'Footer',
      'Single Page Website (SPA)',
      'Choose 2 Add-ons'
    ],
    maxAddOns: 2
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 39.99,
    description: 'Advanced features for growing businesses',
    features: [
      'All Basic Features',
      'Blog Section',
      'Team Section',
      'Testimonials Section',
      'FAQ Section',
      'Contact Form Integration',
      'Google Analytics Integration',
      'Basic SEO Optimization',
      'Choose 4 Add-ons',
      'Priority Support'
    ],
    maxAddOns: 4
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 79.99,
    description: 'Complete solution for large organizations',
    features: [
      'All Professional Features',
      'E-commerce Integration',
      'Custom Database Integration',
      'User Authentication',
      'Admin Dashboard',
      'Content Management System',
      'Advanced SEO Features',
      'Performance Optimization',
      'All Add-ons Included',
      'Premium Support',
      'Monthly Maintenance'
    ],
    maxAddOns: 8
  }
];
