'use client';

import { motion } from 'motion/react';
import { Calendar, Clock, Video, Users, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setStep(3);
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Book Now</h2>
              <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                Your Health Transformation <span className="text-gradient-primary">Starts Here</span>
              </h3>
              <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
                Schedule a one-on-one discovery call with our certified wellness experts. We&apos;ll discuss your goals, analyze your current lifestyle, and map out a personalized strategy.
              </p>
            </div>

            <div className="grid gap-6 mt-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Video size={16} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">Virtual or In-Person</h4>
                  <p className="text-muted-foreground">Choose between a secure video call or visit our wellness center in Mumbai.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                  <Clock size={16} className="text-secondary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">45-Minute Deep Dive</h4>
                  <p className="text-muted-foreground">A comprehensive session to understand your unique body constitution (Prakriti).</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Users size={16} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">Expert Matchmaking</h4>
                  <p className="text-muted-foreground">We&apos;ll pair you with the perfect specialist based on your specific health needs.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Booking Widget */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-accent/30 p-8 rounded-[2rem] border border-border/50 relative shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10" />
            
            {/* Steps Indicator */}
            <div className="flex items-center justify-between mb-8 relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-border -z-10" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary transition-all duration-500 -z-10" style={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }} />
              
              {[1, 2, 3].map((s) => (
                <div key={s} className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${step >= s ? 'bg-primary text-primary-foreground' : 'bg-background border border-border text-muted-foreground'}`}>
                  {s}
                </div>
              ))}
            </div>

            {step === 1 && (
              <form onSubmit={handleNext} className="flex flex-col gap-6 animate-in fade-in slide-in-from-right-4 duration-500">
                <h4 className="text-2xl font-bold mb-2">Select Date & Time</h4>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-foreground">Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                      <input
                        type="date"
                        required
                        className="w-full bg-background border border-border rounded-xl pl-10 pr-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-foreground">Time</label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                      <select
                        required
                        className="w-full bg-background border border-border rounded-xl pl-10 pr-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none"
                      >
                        <option value="">Select...</option>
                        <option value="09:00">09:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:30">11:30 AM</option>
                        <option value="14:00">02:00 PM</option>
                        <option value="16:00">04:00 PM</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-foreground">Consultation Type</label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className="flex items-center gap-3 p-4 border border-border rounded-xl cursor-pointer hover:border-primary/50 transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                      <input type="radio" name="type" value="video" className="text-primary focus:ring-primary" defaultChecked />
                      <span className="font-medium">Video Call</span>
                    </label>
                    <label className="flex items-center gap-3 p-4 border border-border rounded-xl cursor-pointer hover:border-primary/50 transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                      <input type="radio" name="type" value="inperson" className="text-primary focus:ring-primary" />
                      <span className="font-medium">In-Person</span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-gradient-primary text-primary-foreground w-full py-4 rounded-xl font-bold text-lg glow-primary-hover transition-all hover:scale-[1.02] mt-4"
                >
                  Continue to Details
                </button>
              </form>
            )}

            {step === 2 && (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="flex items-center gap-4 mb-2">
                  <button type="button" onClick={() => setStep(1)} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    ← Back
                  </button>
                  <h4 className="text-2xl font-bold">Your Details</h4>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-foreground">First Name</label>
                    <input type="text" required className="bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Priya" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-foreground">Last Name</label>
                    <input type="text" required className="bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Sharma" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-foreground">Email Address</label>
                  <input type="email" required className="bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="priya@example.com" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-foreground">Primary Goal</label>
                  <select required className="bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none">
                    <option value="">Select your main focus...</option>
                    <option value="weight">Weight Management</option>
                    <option value="stress">Stress & Anxiety</option>
                    <option value="energy">Low Energy / Fatigue</option>
                    <option value="digestion">Digestive Health</option>
                    <option value="general">General Wellness</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-primary text-primary-foreground w-full py-4 rounded-xl font-bold text-lg glow-primary-hover transition-all hover:scale-[1.02] mt-4 disabled:opacity-70 disabled:hover:scale-100 flex justify-center items-center"
                >
                  {isSubmitting ? <span className="animate-pulse">Confirming...</span> : 'Confirm Booking'}
                </button>
              </form>
            )}

            {step === 3 && (
              <div className="flex flex-col items-center justify-center text-center py-8 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} className="text-primary" />
                </div>
                <h4 className="text-3xl font-bold mb-4">Booking Confirmed!</h4>
                <p className="text-muted-foreground mb-8">
                  Thank you for taking the first step towards better health. We&apos;ve sent a calendar invitation and preparation details to your email.
                </p>
                <button
                  onClick={() => setStep(1)}
                  className="text-primary font-semibold hover:text-secondary transition-colors"
                >
                  Book another session
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
