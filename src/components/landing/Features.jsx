import React from 'react';
import { motion } from 'framer-motion';
import {
  Workflow,
  Bot,
  Route,
  Server,
  Brain,
  Container
} from 'lucide-react';

const features = [
  {
    icon: Workflow,
    title: 'Conductor',
    description: 'The secret sauce – orchestrates all workflows seamlessly, ensuring every agent knows its cue.',
    gradient: 'from-[#1E90FF] to-[#4BA3FF]',
    bgGradient: 'from-[#1E90FF]/10 to-[#4BA3FF]/10',
  },
  {
    icon: Bot,
    title: 'OpenCode Agents',
    description: 'Specialized AI agents execute SDLC tasks like code reviews, bug fixes, and deployments with precision.',
    gradient: 'from-[#2D3E50] to-[#4A5D6F]',
    bgGradient: 'from-[#2D3E50]/20 to-[#4A5D6F]/20',
  },
  {
    icon: Route,
    title: 'LiteLLM Routing',
    description: 'Intelligent LLM fallback for reliable AI performance. Never miss a beat with smart model switching.',
    gradient: 'from-[#1E90FF] to-[#2D3E50]',
    bgGradient: 'from-[#1E90FF]/10 to-[#2D3E50]/10',
  },
  {
    icon: Server,
    title: 'MCP Servers',
    description: 'Unified tool access for agents and humans. One interface to rule them all.',
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-500/10 to-teal-500/10',
  },
  {
    icon: Brain,
    title: 'Zep Memory',
    description: 'Persistent, semantic memory for context-aware operations. Your agents remember everything.',
    gradient: 'from-[#4BA3FF] to-[#1E90FF]',
    bgGradient: 'from-[#4BA3FF]/10 to-[#1E90FF]/10',
  },
  {
    icon: Container,
    title: 'Docker Integration',
    description: 'Runs entirely in containers for easy self-hosting. Deploy anywhere with a single command.',
    gradient: 'from-[#2D3E50] to-[#1E90FF]',
    bgGradient: 'from-[#2D3E50]/10 to-[#1E90FF]/10',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-[#1E90FF] tracking-wider uppercase mb-4 block">
            Powerful Features
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Everything You Need to
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#1E90FF] to-[#4BA3FF] bg-clip-text text-transparent">
              Orchestrate Development
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A complete suite of tools designed to transform your development workflow into a harmonious symphony of automation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-2xl p-8 h-full hover:border-white/10 transition-all duration-300">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}