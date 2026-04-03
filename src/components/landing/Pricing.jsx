import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, Github, Server, DollarSign, Scale } from 'lucide-react';

const highlights = [
  {
    icon: Scale,
    title: 'MIT Licensed',
    description: 'Use it, modify it, ship it. No license fees, no seat limits, no usage caps. Forever.',
  },
  {
    icon: Server,
    title: 'Self-Hosted',
    description: 'Runs on your hardware — a laptop, a VM, or a Kubernetes cluster. Your code never leaves your network.',
  },
  {
    icon: DollarSign,
    title: '~$0.50 per Issue',
    description: 'You only pay for the LLM API calls your agents make. Typical cost: under 50 cents per issue resolved.',
  },
];

const included = [
  '7 specialized AI agents with named identities',
  'Conductor orchestration engine',
  'Multi-provider LLM gateway with 3-tier fallback',
  '5 MCP tool servers (Gitea, Conductor, System, Vector, Sonar)',
  'Custom Gitea Act Runner with OpenCode',
  'Mobile app (React Native Expo)',
  'Docker Compose one-command deployment',
  'Self-improvement loop — the system upgrades itself',
  'Full Git audit trail for every AI action',
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-[#1E90FF] tracking-wider uppercase mb-4 block">
            Open Source
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              No Subscription.
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#1E90FF] to-[#4BA3FF] bg-clip-text text-transparent">
              Just Run It.
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            CueMarshal is free, open-source software. Clone the repo, bring your own API keys, and deploy in minutes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-2xl p-8 text-center hover:border-white/10 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1E90FF]/10 to-[#2D3E50]/10 border border-white/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-7 h-7 text-[#1E90FF]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#1E90FF] via-[#2D3E50] to-[#1E90FF] rounded-2xl blur-lg opacity-20" />

            <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-white/10 p-8 md:p-12">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                Everything Included
              </h3>

              <div className="grid md:grid-cols-2 gap-4 mb-10">
                {included.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#1E90FF] flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-[#1E90FF] hover:bg-[#1a7fd9] text-white h-12 px-8 text-base">
                  <a href="https://github.com/cuemarshal/cuemarshal" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2" />
                    Get Started on GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}