'use client';

import { motion } from 'motion/react';
import { Leaf, Activity, Brain } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    icon: <Leaf className="w-8 h-8 text-primary" />,
    title: 'Holistic Health',
    description: 'We treat the whole person, not just symptoms, focusing on physical, emotional, and spiritual well-being.',
  },
  {
    icon: <Activity className="w-8 h-8 text-secondary" />,
    title: 'Personalized Care',
    description: 'Custom-tailored plans designed specifically for your unique body type, lifestyle, and goals.',
  },
  {
    icon: <Brain className="w-8 h-8 text-primary" />,
    title: 'A Scientific Approach',
    description: 'Our programmes are rooted in the latest scientific research and proven methodologies.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase">About Purezal</h2>
            <h3 className="text-4xl md:text-5xl font-bold leading-tight">
              Wellness for your <span className="text-gradient-primary">best self</span>.
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Purezal, we believe that true health goes beyond the absence of illness. It&apos;s about thriving in every aspect of your life. Our team of certified experts is committed to guiding you on a transformative journey towards optimal wellness.
            </p>
            
            <div className="grid gap-8 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 items-start group">
                  <div className="p-3 rounded-2xl bg-accent border border-border group-hover:border-primary/50 transition-colors">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image/Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-3xl overflow-hidden border border-border/50 glow-primary"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
            <Image
              src="https://picsum.photos/seed/yoga/800/800"
              alt="Indian woman doing yoga"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Floating Badge */}
            <div className="absolute bottom-8 left-8 z-20 bg-background/80 backdrop-blur-md p-6 rounded-2xl border border-border/50 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                  15
                </div>
                <div>
                  <p className="font-bold text-lg">Years of</p>
                  <p className="text-muted-foreground">Excellence</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
