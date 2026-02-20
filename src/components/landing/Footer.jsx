import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  ArrowRight,
  Github,
  Twitter,
  Mail,
  FileText,
  Shield
} from 'lucide-react';

const footerLinks = {
  Product: [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Roadmap', href: '#' },
  ],
  Resources: [
    { name: 'Documentation', href: '#', icon: FileText },
    { name: 'GitHub', href: '#', icon: Github },
    { name: 'API Reference', href: '#' },
    { name: 'Changelog', href: '#' },
  ],
  Company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Contact', href: '#' },
  ],
  Legal: [
    { name: 'Privacy Policy', href: '#', icon: Shield },
    { name: 'Terms of Service', href: '#' },
    { name: 'Security', href: '#' },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="relative pt-24 pb-12 px-4 border-t border-white/5">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#1E90FF] via-[#2D3E50] to-[#1E90FF] rounded-2xl blur-lg opacity-30" />
              <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-white/10 p-8 md:p-12">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                    Ready to Orchestrate Your Development?
                  </span>
                </h2>
                <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                  Join thousands of developers who are already using CueMarshal to streamline their workflow.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-[#1E90FF] h-12"
                  />
                  <Button
                    type="submit"
                    className="bg-[#1E90FF] hover:bg-[#1a7fd9] text-white h-12 px-6 whitespace-nowrap"
                  >
                    {subscribed ? 'Subscribed!' : 'Sign Up Now'}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/assets/logo.png"
                alt="CueMarshal"
                className="h-8"
              />
            </div>
            <p className="text-slate-400 text-sm mb-6">
              Orchestrate your SDLC from idea to completion with AI-powered automation.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              <a href="https://twitter.com/cuemarshal" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all">
                <Github className="w-4 h-4" />
              </a>
              <a href="mailto:hello@cuemarshal.com" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-400 text-sm hover:text-white transition-colors flex items-center gap-2"
                    >
                      {link.icon && <link.icon className="w-4 h-4" />}
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 CueMarshal. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <span>cuemarshal.com</span>
            <span>•</span>
            <span>Made with ♥ for developers</span>
          </div>
        </div>
      </div>
    </footer>
  );
}