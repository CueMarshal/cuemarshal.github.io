import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  GitBranch,
  Wand2,
  Zap,
  Lock,
  Wifi
} from 'lucide-react';

const benefits = [
  {
    icon: Lock,
    title: '100% Private & Offline-Capable',
    description: 'Your code never leaves your infrastructure. Full air-gap support for maximum security.',
  },
  {
    icon: GitBranch,
    title: 'Git-Centric from Issue to Deploy',
    description: 'Every action tracked in Git. Complete audit trail and version control built-in.',
  },
  {
    icon: Wand2,
    title: 'Transform Chaos into Harmony',
    description: 'Turn chaotic repositories into harmonious pipelines with intelligent automation.',
  },
  {
    icon: Zap,
    title: 'AI That Cues the Next Step',
    description: 'Boost productivity with an AI that knows exactly what comes next in your workflow.',
  },
];

export default function Benefits() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Main card */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1E90FF] to-[#2D3E50] flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Enterprise Security</h3>
                    <p className="text-slate-400 text-sm">Self-hosted & Private</p>
                  </div>
                </div>

                {/* Security indicators */}
                <div className="space-y-4">
                  {['End-to-end encryption', 'SOC 2 compliant architecture', 'Zero data retention'].map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-3 text-sm"
                    >
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      <span className="text-slate-300">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-gradient-to-br from-[#2D3E50]/30 to-[#1E90FF]/20 backdrop-blur-xl rounded-2xl border border-white/10 p-4"
              >
                <Wifi className="w-6 h-6 text-[#1E90FF]" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-br from-[#1E90FF]/20 to-[#4BA3FF]/20 backdrop-blur-xl rounded-2xl border border-white/10 p-4"
              >
                <GitBranch className="w-6 h-6 text-[#1E90FF]" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Benefits list */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium text-[#1E90FF] tracking-wider uppercase mb-4 block">
              Why CueMarshal
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                Built for Teams That
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#1E90FF] to-[#4BA3FF] bg-clip-text text-transparent">
                Value Privacy & Control
              </span>
            </h2>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors">
                    <benefit.icon className="w-5 h-5 text-[#1E90FF]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1 group-hover:text-[#1E90FF] transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}