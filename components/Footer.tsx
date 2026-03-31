import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/50 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-xl glow-primary">
                P
              </div>
              <span className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                Purezal
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Premium health and wellness agency providing personalized holistic care for a healthier, happier life.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About Us</Link>
              </li>
              <li>
                <Link href="#why-us" className="text-muted-foreground hover:text-primary transition-colors text-sm">Why Choose Us</Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors text-sm">Testimonials</Link>
              </li>
              <li>
                <Link href="#pricing" className="text-muted-foreground hover:text-primary transition-colors text-sm">Pricing</Link>
              </li>
              <li>
                <Link href="#blog" className="text-muted-foreground hover:text-primary transition-colors text-sm">Blog & Resources</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-bold mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Personalized Diet</Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Fitness Coaching</Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Mental Wellness</Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Detox Programs</Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Corporate Wellness</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-foreground font-bold mb-6 uppercase tracking-wider text-sm">Newsletter</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to get the latest health tips and exclusive offers.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-accent border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                required
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-4 py-3 rounded-lg font-bold text-sm hover:bg-secondary transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Purezal Wellness Agency. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Privacy Policy</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Terms of Service</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
