'use client';

import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    name: 'Basic',
    price: '$99',
    period: '/month',
    description: 'Essential wellness guidance for beginners.',
    features: [
      { name: 'Personalized Diet Plan', included: true },
      { name: 'Basic Fitness Routine', included: true },
      { name: 'Monthly Check-in Call', included: true },
      { name: 'Email Support', included: true },
      { name: 'Mental Wellness Coaching', included: false },
      { name: '24/7 Priority Support', included: false },
    ],
    isPopular: false,
  },
  {
    name: 'Pro',
    price: '$199',
    period: '/month',
    description: 'Comprehensive care for serious transformations.',
    features: [
      { name: 'Personalized Diet Plan', included: true },
      { name: 'Advanced Fitness Routine', included: true },
      { name: 'Weekly Check-in Calls', included: true },
      { name: 'Email & Chat Support', included: true },
      { name: 'Mental Wellness Coaching', included: true },
      { name: '24/7 Priority Support', included: false },
    ],
    isPopular: true,
  },
  {
    name: 'Premium',
    price: '$349',
    period: '/month',
    description: 'The ultimate holistic wellness experience.',
    features: [
      { name: 'Dynamic Diet & Nutrition', included: true },
      { name: '1-on-1 Personal Training', included: true },
      { name: 'Unlimited Check-ins', included: true },
      { name: 'VIP Concierge Support', included: true },
      { name: 'Advanced Mental Wellness', included: true },
      { name: '24/7 Priority Support', included: true },
    ],
    isPopular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-primary uppercase mb-4"
          >
            Pricing Plans
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Invest in Your <span className="text-gradient-primary">Future Self</span>
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 ${
                plan.isPopular
                  ? 'bg-accent/50 border-primary shadow-[0_0_30px_rgba(0,200,83,0.15)] scale-105 z-10'
                  : 'bg-background border-border/50 hover:border-primary/30'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8 text-center">
                <h4 className="text-2xl font-bold mb-2">{plan.name}</h4>
                <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-extrabold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    {feature.included ? (
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <Check size={14} className="text-primary" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center shrink-0">
                        <X size={14} className="text-muted-foreground" />
                      </div>
                    )}
                    <span className={`text-sm ${feature.included ? 'text-foreground' : 'text-muted-foreground line-through'}`}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="#contact"
                className={`w-full py-4 rounded-full font-bold text-center transition-all ${
                  plan.isPopular
                    ? 'bg-gradient-primary text-primary-foreground glow-primary-hover hover:scale-105'
                    : 'bg-accent text-foreground hover:bg-primary/20 hover:text-primary border border-border'
                }`}
              >
                Choose {plan.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
