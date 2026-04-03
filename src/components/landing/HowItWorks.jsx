import React from 'react';
import { motion } from 'framer-motion';
import {
  MessageSquarePlus,
  Workflow,
  GitPullRequest,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquarePlus,
    title: 'Create an Issue',
    description: 'Describe what you need in a Gitea issue. "Add a /health endpoint" is enough — the Conductor handles the rest.',
    color: 'blue',
  },
  {
    number: '02',
    icon: Workflow,
    title: 'Agents Go to Work',
    description: 'Marshal routes the task. Ava designs the approach. Dave writes the code. Tess runs tests. Each agent commits to Git.',
    color: 'purple',
  },
  {
    number: '03',
    icon: GitPullRequest,
    title: 'PR Ready for Review',
    description: 'Reese reviews the code for bugs and quality. Linton enforces style. Dot updates documentation. You get a clean PR.',
    color: 'pink',
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'You Review & Merge',
    description: 'Every decision is visible in Git. Review the diff, request changes if needed, and merge when you\'re satisfied.',
    color: 'green',
  },
];

const colorClasses = {
  blue: {
    gradient: 'from-[#1E90FF] to-[#4BA3FF]',
    bg: 'bg-[#1E90FF]/10',
    border: 'border-[#1E90FF]/30',
    text: 'text-[#1E90FF]',
  },
  purple: {
    gradient: 'from-[#2D3E50] to-[#4A5D6F]',
    bg: 'bg-[#2D3E50]/20',
    border: 'border-[#2D3E50]/50',
    text: 'text-slate-300',
  },
  pink: {
    gradient: 'from-[#1E90FF] to-[#2D3E50]',
    bg: 'bg-[#1E90FF]/10',
    border: 'border-[#1E90FF]/30',
    text: 'text-[#4BA3FF]',
  },
  green: {
    gradient: 'from-emerald-500 to-teal-500',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    text: 'text-emerald-400',
  },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-[#1E90FF] tracking-wider uppercase mb-4 block">
            How It Works
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Issue to Merged PR
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#1E90FF] to-[#4BA3FF] bg-clip-text text-transparent">
              In Four Steps
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1E90FF]/30 via-[#2D3E50]/30 to-emerald-500/30 -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const colors = colorClasses[step.color];
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 z-10 -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-slate-600" />
                    </div>
                  )}

                  <div className={`relative bg-slate-900/50 backdrop-blur-xl rounded-2xl border ${colors.border} p-6 h-full hover:bg-slate-800/50 transition-all duration-300 group`}>
                    <div className={`absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br ${colors.gradient} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                      {step.number}
                    </div>

                    <div className={`w-16 h-16 rounded-2xl ${colors.bg} border ${colors.border} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className={`w-8 h-8 ${colors.text}`} />
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-3">
                      {step.title}
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}