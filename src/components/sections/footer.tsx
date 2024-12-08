import { motion } from 'framer-motion';
import { Brain, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const links = {
  product: [
    { name: 'Features', to: 'features' },
    { name: 'Pricing', to: 'pricing' },
    { name: 'About', to: 'about' },
    { name: 'Contact', to: 'contact' },
  ],
  legal: [
    { name: 'Privacy Policy', to: '/privacy-policy' },
    { name: 'Terms of Service', to: '/terms-of-service' },
    { name: 'Cookie Policy', to: '/cookie-policy' },
  ],
  social: [
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'GitHub', icon: Github, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/intellisync' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-muted/50 py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <ScrollLink
              to="hero"
              smooth
              className="flex items-center space-x-2 cursor-pointer"
            >
              <Brain className="h-8 w-8 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-lg p-1.5" />
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                IntelliSync
              </span>
            </ScrollLink>
            <p className="text-sm text-muted-foreground">
              Empowering businesses with AI-driven solutions for the modern web.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {links.product.map((link) => (
                <li key={link.name}>
                  <ScrollLink
                    to={link.to}
                    smooth
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {links.legal.map((link) => (
                <li key={link.name}>
                  <RouterLink
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </RouterLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <Button
              variant="outline"
              className="w-full mb-4"
              onClick={() => window.location.href = 'mailto:contact@intellisync.com'}
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Us
            </Button>
            <div className="flex space-x-4">
              {links.social.map((social) => (
                <a
                  key={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={social.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">Visit our {social.name} page</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 IntelliSync Solutions. All rights reserved.</p>
          <div className="flex space-x-4">
            {links.legal.map((link) => (
              <RouterLink
                key={link.name}
                to={link.to}
                className="hover:text-foreground transition-colors"
              >
                {link.name}
              </RouterLink>
            ))}
            <LinkedInShare />
          </div>
        </div>
      </div>
    </footer>
  );
}