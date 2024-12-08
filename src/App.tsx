import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Hero from '@/components/sections/hero';
import Features from '@/components/sections/features';
import About from '@/components/sections/about';
import Work from '@/components/sections/work';
import Pricing from '@/components/sections/pricing';
import PrivacyPolicy from '@/components/sections/policies/privacy-policy';
import TermsOfService from '@/components/sections/policies/terms-of-service';
import CookiePolicy from '@/components/sections/policies/cookie-policy';
import Documentation from '@/components/sections/documentation';
import Cta from '@/components/sections/cta';
import Footer from '@/components/sections/footer';
import { Toaster } from '@/components/ui/sonner';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const isStaticPage = ['/privacy-policy', '/terms-of-service', '/cookie-policy', '/docs'].includes(location.pathname);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="intellisync-ui-theme">
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="relative">
          {isStaticPage ? (
            {
              '/privacy-policy': <PrivacyPolicy />,
              '/terms-of-service': <TermsOfService />,
              '/cookie-policy': <CookiePolicy />,
              '/docs': <Documentation />,
            }[location.pathname]
          ) : (
            <>
              <Hero />
              <Features />
              <About />
              <Work />
              <Pricing />
              <Cta />
            </>
          )}
        </main>
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
