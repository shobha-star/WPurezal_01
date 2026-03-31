'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/30 rounded-full blur-[120px] opacity-50 animate-pulse-slow" />
      <div className="absolute top-1/2 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-[100px] opacity-40 animate-pulse-slow" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-center gap-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4 shadow-[0_0_15px_rgba(0,200,83,0.2)]">
            <Sparkles size={16} className="text-secondary" />
            <span>Premium Wellness Agency</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Transform Your Health. <br />
            <span className="text-gradient-primary">Naturally.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-4 leading-relaxed">
            Purezal delivers personalized wellness solutions for a healthier, happier life. 
            Experience holistic care backed by science and tailored to your unique body.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto">
            <Link
              href="#contact"
              className="w-full sm:w-auto bg-gradient-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 glow-primary-hover transition-all hover:scale-105 whitespace-nowrap"
            >
              Book Now
              <ArrowRight size={20} />
            </Link>
            <Link
              href="#services"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-lg border border-border bg-background/50 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground transition-all flex items-center justify-center gap-2"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>

        {/* Floating Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 border-t border-border/50 pt-10"
        >
          {[
            { label: 'Happy Clients', value: '10k+' },
            { label: 'Expert Coaches', value: '50+' },
            { label: 'Success Rate', value: '98%' },
            { label: 'Years Experience', value: '15+' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center p-4">
              <span className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</span>
              <span className="text-sm text-muted-foreground mt-1">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
