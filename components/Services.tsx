'use client';

import { motion } from 'motion/react';
import { Apple, Dumbbell, BrainCircuit, Droplets, Briefcase, ArrowRight, Bot } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: <Apple className="w-10 h-10 text-primary" />,
    title: 'Personalized Diet Plans',
    description: 'Nutrition strategies tailored to your metabolism, preferences, and health goals.',
  },
  {
    icon: <Dumbbell className="w-10 h-10 text-secondary" />,
    title: 'Fitness Coaching',
    description: 'Expert-guided workouts designed to build strength, endurance, and flexibility safely.',
  },
  {
    icon: <BrainCircuit className="w-10 h-10 text-primary" />,
    title: 'Mental Wellness Programs',
    description: 'Mindfulness, stress management, and cognitive behavioral techniques for a balanced mind.',
  },
  {
    icon: <Droplets className="w-10 h-10 text-secondary" />,
    title: 'Detox & Lifestyle Programs',
    description: 'Comprehensive resets to eliminate toxins and establish sustainable, healthy habits.',
  },
  {
    icon: <Briefcase className="w-10 h-10 text-primary" />,
    title: 'Corporate Wellness',
    description: 'Programs designed to boost employee health, morale, and productivity in the workplace.',
  },
  {
    icon: <Bot className="w-10 h-10 text-secondary" />,
    title: 'Purezal AI Chatbot',
    description: 'Chat with our advanced AI assistant, Purezal, for real-time wellness tips, symptom checking, and personalized Ayurvedic recommendations.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-accent/30 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-primary uppercase mb-4"
          >
            Our Services
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Comprehensive Solutions for <span className="text-gradient-primary">Balanced Well-being</span>
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-background p-8 rounded-3xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,200,83,0.1)]"
            >
              <div className="mb-6 p-4 inline-block rounded-2xl bg-accent group-hover:bg-primary/10 transition-colors">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h4>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {service.description}
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors"
              >
                Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
          
          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: services.length * 0.1, duration: 0.5 }}
            className="group relative bg-gradient-primary p-8 rounded-3xl flex flex-col justify-center items-center text-center text-primary-foreground glow-primary-hover transition-all duration-300 hover:-translate-y-2"
          >
            <h4 className="text-3xl font-bold mb-4">Not sure where to start?</h4>
            <p className="mb-8 opacity-90">
              Book a free consultation and let our experts guide you to the perfect plan.
            </p>
            <Link
              href="#contact"
              className="bg-background text-foreground px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
