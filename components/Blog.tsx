'use client';

import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const articles = [
  {
    title: '5 Superfoods to Boost Your Immune System',
    category: 'Nutrition',
    image: 'https://picsum.photos/seed/blog1/600/400',
    date: 'Oct 12, 2023',
    author: 'Dr. Kavita Rao',
    excerpt: 'Discover the top five nutrient-dense foods that can help fortify your body\'s natural defenses against illness.',
  },
  {
    title: 'The Science of High-Intensity Interval Training',
    category: 'Fitness',
    image: 'https://picsum.photos/seed/blog2/600/400',
    date: 'Oct 05, 2023',
    author: 'Vikram Singh',
    excerpt: 'Why HIIT is one of the most effective ways to burn fat, build endurance, and save time in the gym.',
  },
  {
    title: 'Mindfulness Techniques for Busy Professionals',
    category: 'Mental Health',
    image: 'https://picsum.photos/seed/blog3/600/400',
    date: 'Sep 28, 2023',
    author: 'Sneha Gupta',
    excerpt: 'Simple, actionable mindfulness exercises you can integrate into your hectic workday to reduce stress.',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-accent/30 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold tracking-widest text-primary uppercase mb-4"
            >
              Resources & Insights
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold leading-tight"
            >
              Latest from the <span className="text-gradient-primary">Purezal Blog</span>
            </motion.h3>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors group"
            >
              View All Articles <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-background rounded-3xl border border-border/50 overflow-hidden hover:border-primary/50 transition-all hover:shadow-[0_10px_40px_rgba(0,200,83,0.1)]"
            >
              <div className="relative h-60 overflow-hidden">
                <div className="absolute top-4 left-4 z-20 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wider">
                  {article.category}
                </div>
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    <span>{article.author}</span>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  <Link href="#">{article.title}</Link>
                </h4>
                
                <p className="text-muted-foreground text-sm line-clamp-3 mb-6">
                  {article.excerpt}
                </p>
                
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
                >
                  Read More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
