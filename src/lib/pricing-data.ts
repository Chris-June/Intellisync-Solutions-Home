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

interface Feature {
  name: string;
  description: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  buildCost: number;
  description: string;
  features: Feature[];
  maxAddOns: number;
  highlighted: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 19.99,
    buildCost: 500,
    description: 'Essential features for any website',
    features: [
      {
        name: 'One-time $500 Build Fee',
        description: 'Initial setup cost for building and deploying your website. This covers the development, testing, and launch of your site.'
      },
      {
        name: 'Set and Forget',
        description: 'Monthly maintenance fee that covers hosting, security updates, and basic technical support, including an annual UI refresh'
      },
      {
        name: 'Header Navigation',
        description: 'Professional navigation menu that adapts to all screen sizes. Includes dropdown menus and mobile-friendly hamburger menu.'
      },
      {
        name: 'Footer Links',
        description: 'Organized footer section with important links, contact information, and social media integration.'
      },
      {
        name: 'Basic Contact Form',
        description: 'User-friendly contact form with email notifications, spam protection, and basic form validation.'
      },
      {
        name: 'Mobile Responsive',
        description: 'Website automatically adjusts to look and function perfectly on all devices - phones, tablets, and computers.'
      },
      {
        name: 'SEO Optimization',
        description: 'Basic search engine optimization including meta tags, sitemap generation, and proper heading structure.'
      },
      {
        name: 'SSL Certificate',
        description: 'Secure HTTPS encryption to protect user data and improve search engine rankings.'
      },
      {
        name: 'Domain Setup',
        description: 'Configuration of your domain name with proper DNS settings.'
      },
      {
        name: 'Basic Analytics',
        description: 'Integration of Google Analytics to track visitor behavior, traffic sources, and user engagement.'
      }
    ],
    maxAddOns: 2,
    highlighted: false
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 29.99,
    buildCost: 500,
    description: 'Complete solution for growing businesses',
    features: [
     
      {
        name: 'All Basic Features',
        description: 'Includes all features from the Basic plan with enhanced capabilities and professional customization.'
      },
      {
        name: 'Set and Forget',
        description: 'Everything in Basic Plan plus annual UI and SEO refresh included.'
      },
  
      {
        name: 'Blog Integration',
        description: 'Full-featured blog system with categories, tags, comments, and RSS feed. Perfect for content marketing.'
      },
      {
        name: 'Newsletter Signup',
        description: 'Email list building tool with custom signup forms, automated welcome emails, and integration with major email providers.'
      },
      {
        name: 'Social Media Integration',
        description: 'Advanced social media feeds, sharing buttons, and automatic post scheduling capabilities.'
      },
      {
        name: 'Advanced Contact Forms',
        description: 'Multiple custom forms with file uploads, conditional logic, and integration with CRM systems.'
      },
      {
        name: 'Custom Styling',
        description: 'Professional design customization including custom colors, fonts, and layouts matching your brand identity.'
      },
      {
        name: 'Performance Optimization',
        description: 'Advanced caching, image optimization, and code minification for faster page loads and better user experience.'
      },
      {
        name: 'Advanced Analytics',
        description: 'Enhanced tracking with conversion goals, event tracking, and detailed user behavior analysis.'
      }
    ],
    maxAddOns: 4,
    highlighted: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 79.99,
    buildCost: 500,
    description: 'Advanced features for large organizations',
    features: [
      {
        name: 'All Professional Features',
        description: 'Includes all features from the Professional plan with enterprise-level customization and scalability.'
      },
      
      {
        name: 'Set and Forget',
        description: 'Everything in Professional Plan plus  Semi-annual UI review and SEO refresh. Add 2 new custom interactive features per year.'
      },
      
      {
        name: 'Custom API Integration',
        description: 'Connect your website with third-party services, CRM systems, and business tools through custom API development.'
      },
      {
        name: 'Advanced Security Features',
        description: 'Enterprise-grade security with regular penetration testing, advanced firewall, and DDoS protection.'
      },
      {
        name: 'Priority Support',
        description: "Coming Soon"
        
        //'Priority technical support with dedicated account manager and emergency response team.'
      },
      
      {
        name: 'Multiple User Accounts',
        description: 'Manage multiple user accounts with different permission levels and access controls.'
      },
      {
        name: 'Custom Feature Development',
        description: 'Development of custom features and functionalities specific to your business needs.'
      }
    ],
    maxAddOns: 8,
    highlighted: false
  }
];
