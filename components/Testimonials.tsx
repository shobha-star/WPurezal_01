'use client';

import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Marketing Executive',
    image: 'https://picsum.photos/seed/person1/200/200',
    content: 'Purezal completely changed my approach to health. The personalized diet plan and mental wellness coaching helped me manage my stress and lose 15 pounds. I feel more energetic than ever.',
    rating: 5,
  },
  {
    name: 'Rahul Desai',
    role: 'Software Engineer',
    image: 'https://picsum.photos/seed/person2/200/200',
    content: 'As someone who sits at a desk all day, the fitness coaching was a lifesaver. My coach designed a program that fit my busy schedule and fixed my posture issues. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Ananya Patel',
    role: 'Entrepreneur',
    image: 'https://picsum.photos/seed/person3/200/200',
    content: 'The holistic approach is what sets Purezal apart. They didn\'t just give me a meal plan; they helped me understand the connection between my diet, sleep, and overall productivity.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-accent/30 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-primary uppercase mb-4"
          >
            Client Success Stories
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Transformation <span className="text-gradient-primary">Anecdotes</span>
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-background p-8 rounded-3xl border border-border/50 relative group hover:border-primary/50 transition-colors"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-accent opacity-50 group-hover:text-primary/20 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-muted-foreground leading-relaxed italic mb-8 relative z-10">
                &quot;{testimonial.content}&quot;
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/30">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
