'use client';

import { motion } from 'motion/react';
import { ShieldCheck, Target, DollarSign, TrendingUp, Clock } from 'lucide-react';
import Image from 'next/image';

const reasons = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    title: 'Certified Experts',
    description: 'Our team consists of highly trained and certified professionals.',
  },
  {
    icon: <Target className="w-6 h-6 text-secondary" />,
    title: 'Customized Plans',
    description: 'Every program is uniquely tailored to your specific needs.',
  },
  {
    icon: <DollarSign className="w-6 h-6 text-primary" />,
    title: 'Affordable Pricing',
    description: 'Premium wellness solutions that fit within your budget.',
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-secondary" />,
    title: 'Proven Results',
    description: 'A track record of successful transformations and happy clients.',
  },
  {
    icon: <Clock className="w-6 h-6 text-primary" />,
    title: '24/7 Support',
    description: 'Continuous guidance and motivation whenever you need it.',
  },
];

export default function WhyChoose() {
  return (
    <section id="why-us" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] lg:h-[700px] rounded-[3rem] overflow-hidden border border-border/50 order-2 lg:order-1"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-primary/20 z-10" />
            <Image
              src="https://picsum.photos/seed/wellness2/1000/1000"
              alt="Yoga and wellness"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            
            {/* Overlay Stats */}
            <div className="absolute bottom-10 left-10 right-10 z-20 bg-background/60 backdrop-blur-xl p-8 rounded-3xl border border-white/10 flex justify-between items-center">
              <div>
                <p className="text-4xl font-bold text-gradient-primary">98%</p>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider mt-1">Client Satisfaction</p>
              </div>
              <div className="w-px h-12 bg-border/50" />
              <div>
                <p className="text-4xl font-bold text-gradient-primary">500+</p>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider mt-1">Lives Transformed</p>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8 order-1 lg:order-2"
          >
            <div>
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Why Choose Purezal</h2>
              <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                The Purezal <span className="text-gradient-primary">Difference</span>
              </h3>
              <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
                We don&apos;t just offer quick fixes. We provide sustainable, science-backed solutions that empower you to take control of your health for the long term.
              </p>
            </div>

            <div className="grid gap-6 mt-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-6 p-6 rounded-2xl bg-accent/50 border border-border/50 hover:border-primary/30 transition-colors group"
                >
                  <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center border border-border group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,200,83,0.1)]">
                    {reason.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{reason.title}</h4>
                    <p className="text-muted-foreground text-sm">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
