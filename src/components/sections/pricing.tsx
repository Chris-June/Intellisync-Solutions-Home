import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const plans = [
  {
    name: 'Basic',
    price: '$15',
    description: 'Essential features for small websites',
    features: [
      'Basic AI Integration',
      'Analytics Dashboard',
      'Email Support',
      '5 Team Members',
      '10GB Storage',
    ],
  },
  {
    name: 'Pro',
    price: '$35',
    description: 'Advanced tools for growing businesses',
    features: [
      'Advanced AI Features',
      'Priority Support',
      'Custom Integrations',
      'Unlimited Team Members',
      '100GB Storage',
      'API Access',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions for large organizations',
    features: [
      'Custom AI Development',
      'Dedicated Support Team',
      'Custom SLA',
      'Enterprise Security',
      'Unlimited Storage',
      'Advanced Analytics',
      'Training Sessions',
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-4"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gradient-primary">
            Flexible Pricing for Every Need
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Choose the perfect plan for your business. Start with a free demo to
            experience our platform firsthand.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid gap-8 mt-16 md:grid-cols-3"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`h-full ${
                  plan.popular
                    ? 'border-emerald-400 shadow-lg shadow-emerald-400/10'
                    : ''
                }`}
              >
                <CardHeader>
                  {plan.popular && (
                    <div className="px-3 py-1 text-sm text-emerald-400 border border-emerald-400 rounded-full w-fit mb-4">
                      Most Popular
                    </div>
                  )}
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== 'Custom' && <span>/month</span>}
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-emerald-400" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${
                      plan.popular ? 'gradient-primary' : ''
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}