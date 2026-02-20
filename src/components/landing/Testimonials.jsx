import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, User, Building, Code } from 'lucide-react';

const testimonials = [
  {
    quote: "CueMarshal turned my solo project into an orchestrated masterpiece. The Conductor agent is pure magic.",
    author: "Alex Chen",
    role: "Indie Developer",
    avatar: null,
    rating: 5,
  },
  {
    quote: "We deployed CueMarshal in our air-gapped environment. Finally, AI that respects our security requirements.",
    author: "Sarah Mitchell",
    role: "Security Engineer, Fortune 500",
    avatar: null,
    rating: 5,
  },
  {
    quote: "The Git-centric approach means every AI action is tracked and auditable. Perfect for compliance.",
    author: "Marcus Johnson",
    role: "DevOps Lead",
    avatar: null,
    rating: 5,
  },
];

const useCases = [
  {
    icon: User,
    title: 'Indie Developers',
    description: 'Multiply your productivity with AI agents that handle the boring stuff.',
  },
  {
    icon: Code,
    title: 'Dev Teams',
    description: 'Streamline code reviews, testing, and deployments across your team.',
  },
  {
    icon: Building,
    title: 'Enterprises',
    description: 'Self-hosted solution that meets security and compliance requirements.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/5 to-transparent rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-[#1E90FF] tracking-wider uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Loved by Developers
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#1E90FF] to-[#4BA3FF] bg-clip-text text-transparent">
              Worldwide
            </span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1E90FF]/10 to-[#2D3E50]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-2xl p-8 h-full hover:border-white/10 transition-all duration-300">
                <Quote className="w-10 h-10 text-[#1E90FF]/30 mb-4" />

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>

                <p className="text-slate-300 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1E90FF] to-[#2D3E50] flex items-center justify-center text-white font-semibold">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{testimonial.author}</p>
                    <p className="text-slate-500 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Perfect For</h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-xl border border-white/5 rounded-2xl p-6 text-center hover:border-white/10 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1E90FF]/10 to-[#2D3E50]/10 border border-white/10 flex items-center justify-center mx-auto mb-4">
                <useCase.icon className="w-7 h-7 text-[#1E90FF]" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{useCase.title}</h4>
              <p className="text-slate-400 text-sm">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}