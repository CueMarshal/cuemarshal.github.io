import React from 'react';
import { motion } from 'framer-motion';
import { User, Building, Code, Shield, GitBranch, Eye } from 'lucide-react';

const useCases = [
  {
    icon: User,
    title: 'Solo Developers',
    description: 'Get the leverage of a full team. File an issue, get a reviewed PR — architect, developer, reviewer, tester included.',
  },
  {
    icon: Code,
    title: 'Small Teams',
    description: 'Automate code reviews with Reese, testing with Tess, and documentation with Dot. Focus your humans on what matters.',
  },
  {
    icon: Building,
    title: 'Organizations',
    description: 'Self-hosted, air-gapped, fully auditable. Every AI action is a Git commit by a named author. Built for compliance.',
  },
];

const principles = [
  {
    icon: GitBranch,
    title: 'Git Is the Audit Log',
    description: 'Every agent action is a branch, commit, or pull request. No hidden state, no mystery. Review the diff like any other contributor.',
  },
  {
    icon: Eye,
    title: 'Full Transparency',
    description: 'Named agents with visible identities. You always know who did what, when, and why — because it\'s all in the Git history.',
  },
  {
    icon: Shield,
    title: 'Your Infrastructure',
    description: 'Runs entirely on your hardware. Your code never leaves your network. MIT licensed, no vendor lock-in, no phone-home telemetry.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/5 to-transparent rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-[#1E90FF] tracking-wider uppercase mb-4 block">
            Built For
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Developers Who Want
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#1E90FF] to-[#4BA3FF] bg-clip-text text-transparent">
              Control, Not Magic
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            CueMarshal isn't a black box. It's a team of named agents that work through Git — the tool you already trust.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-xl border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1E90FF]/10 to-[#2D3E50]/10 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <useCase.icon className="w-7 h-7 text-[#1E90FF]" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">{useCase.title}</h4>
              <p className="text-slate-400 leading-relaxed">{useCase.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-2">Core Principles</h3>
          <p className="text-slate-400">Why teams choose CueMarshal over cloud AI tools</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#1E90FF]/10 border border-[#1E90FF]/20 flex items-center justify-center flex-shrink-0">
                  <principle.icon className="w-5 h-5 text-[#1E90FF]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">{principle.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{principle.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}