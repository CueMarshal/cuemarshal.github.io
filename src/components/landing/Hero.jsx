import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, GitBranch, Lock, Github, Menu, X } from 'lucide-react';

const AGENTS = [
  { name: 'Ava', role: 'Architect', avatar: '/assets/avatars/ava.png', color: 'border-indigo-400/60' },
  { name: 'Dave', role: 'Developer', avatar: '/assets/avatars/dave.png', color: 'border-green-400/60' },
  { name: 'Reese', role: 'Reviewer', avatar: '/assets/avatars/reese.png', color: 'border-amber-400/60' },
  { name: 'Tess', role: 'Tester', avatar: '/assets/avatars/tess.png', color: 'border-purple-400/60' },
  { name: 'Devin', role: 'DevOps', avatar: '/assets/avatars/devin.png', color: 'border-cyan-400/60' },
  { name: 'Dot', role: 'Docs', avatar: '/assets/avatars/dot.png', color: 'border-rose-400/60' },
  { name: 'Linton', role: 'Linter', avatar: '/assets/avatars/linton.png', color: 'border-slate-400/60' },
];

export default function Hero() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLinks = [
    { label: 'The Orchestra', href: '#orchestra' },
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Get Started', href: '#pricing' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-16">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1E90FF]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#2D3E50]/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#1E90FF]/5 to-transparent rounded-full" />

        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-950/60 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <img src="/assets/logo.png" alt="CueMarshal" className="h-8" />
          </motion.div>

          {/* Desktop nav */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center gap-8"
          >
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">{link.label}</a>
            ))}
            <Button
              asChild
              className="bg-[#1E90FF] hover:bg-[#1a7fd9] text-white border-0"
            >
              <a href="https://github.com/cuemarshal/cuemarshal" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
              </a>
            </Button>
          </motion.div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-slate-400 hover:text-white transition-colors p-2"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/5 bg-slate-950/95 backdrop-blur-xl overflow-hidden"
            >
              <div className="px-4 py-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-white transition-colors py-1"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="https://github.com/cuemarshal/cuemarshal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm bg-[#1E90FF] hover:bg-[#1a7fd9] text-white px-4 py-2 rounded-lg transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#1E90FF]/10 to-[#2D3E50]/20 border border-[#1E90FF]/30 text-sm text-[#1E90FF]">
            <Sparkles className="w-4 h-4" />
            Open Source · MIT Licensed · Self-Hosted
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            From Issue to Reviewed PR
          </span>
          <br />
          <span className="bg-gradient-to-r from-[#1E90FF] via-[#4BA3FF] to-[#1E90FF] bg-clip-text text-transparent">
            Without Leaving Git
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          CueMarshal is self-hosted AI DevOps: <span className="text-white font-medium">GitHub Actions + an AI engineering orchestra</span> on
          your own infrastructure. Open an issue and 7 specialized agents plan, build,
          review, test, and document the change. You review and merge.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Button
            asChild
            className="bg-[#1E90FF] hover:bg-[#1a7fd9] text-white h-12 px-8"
          >
            <a href="https://github.com/cuemarshal/cuemarshal" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              Get Started on GitHub
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 h-12 px-8"
          >
            <a href="#how-it-works">See How It Works</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-6 text-sm text-slate-500 mb-16"
        >
          <span className="flex items-center gap-2">
            <GitBranch className="w-4 h-4 text-[#1E90FF]" />
            Git-native workflow
          </span>
          <span className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-[#1E90FF]" />
            Your servers, your data
          </span>
          <span className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#1E90FF]" />
            ~$0.50 per issue
          </span>
        </motion.div>

        {/* Hero Visual — Agent Orchestra around Conductor */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
        >
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#1E90FF] via-[#2D3E50] to-[#1E90FF] rounded-2xl blur-lg opacity-30" />

            <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-white/10 p-8 md:p-12 overflow-hidden">
              <div className="flex flex-col items-center gap-8">
                {/* Conductor in center */}
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="relative"
                >
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white flex items-center justify-center shadow-xl shadow-[#1E90FF]/25 overflow-hidden">
                    <img src="/assets/avatars/marshal.png" alt="Marshal — Conductor" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -inset-3 bg-gradient-to-r from-[#1E90FF] to-[#2D3E50] rounded-full blur-xl opacity-20 animate-pulse" />
                </motion.div>
                <div className="text-center -mt-2">
                  <p className="text-white font-semibold text-lg">Marshal</p>
                  <p className="text-slate-500 text-sm">The Conductor</p>
                </div>

                {/* Agents in a row */}
                <div className="grid grid-cols-4 md:grid-cols-7 gap-4 md:gap-6 w-full max-w-2xl">
                  {AGENTS.map((agent, i) => (
                    <motion.div
                      key={agent.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + i * 0.08 }}
                      className="flex flex-col items-center gap-2"
                    >
                      <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full border-2 ${agent.color} overflow-hidden bg-slate-800 shadow-lg`}>
                        <img src={agent.avatar} alt={agent.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="text-center">
                        <p className="text-white text-xs font-medium">{agent.name}</p>
                        <p className="text-slate-500 text-[10px]">{agent.role}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}