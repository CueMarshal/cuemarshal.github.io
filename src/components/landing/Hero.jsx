import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Sparkles, GitBranch, Zap } from 'lucide-react';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-16">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1E90FF]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#2D3E50]/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#1E90FF]/5 to-transparent rounded-full" />

        {/* Floating particles */}
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
            <img
              src="/assets/logo.png"
              alt="CueMarshal"
              className="h-8"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center gap-8"
          >
            <a href="#features" className="text-sm text-slate-400 hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm text-slate-400 hover:text-white transition-colors">How It Works</a>
            <a href="#pricing" className="text-sm text-slate-400 hover:text-white transition-colors">Pricing</a>
            <Button className="bg-[#1E90FF] hover:bg-[#1a7fd9] text-white border-0">
              Get Started
            </Button>
          </motion.div>
        </div>
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
            Now in Public Beta
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Orchestrate Your SDLC
          </span>
          <br />
          <span className="bg-gradient-to-r from-[#1E90FF] via-[#4BA3FF] to-[#1E90FF] bg-clip-text text-transparent">
            from Idea to Completion
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Self-hosted AI platform with Gitea as your single source of truth.
          Let the <span className="text-[#1E90FF] font-medium">Conductor</span> guide specialized agents through every dev task.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <form onSubmit={handleSubmit} className="flex gap-2 w-full sm:w-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-72 bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-[#1E90FF] h-12"
            />
            <Button
              type="submit"
              className="bg-[#1E90FF] hover:bg-[#1a7fd9] text-white h-12 px-6 whitespace-nowrap"
            >
              {submitted ? 'Subscribed!' : 'Get Started Free'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-6 text-sm text-slate-500"
        >
          <span className="flex items-center gap-2">
            <GitBranch className="w-4 h-4 text-[#1E90FF]" />
            Git-centric
          </span>
          <span className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#2D3E50]" />
            100% Private
          </span>
          <span className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#1E90FF]" />
            AI-Powered
          </span>
        </motion.div>

        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 relative"
        >
          <div className="relative mx-auto max-w-4xl">
            {/* Glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#1E90FF] via-[#2D3E50] to-[#1E90FF] rounded-2xl blur-lg opacity-30" />

            {/* Main visual container */}
            <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-white/10 p-8 overflow-hidden">
              {/* Conductor visualization */}
              <div className="flex items-center justify-center gap-8 py-8">
                {/* Left agents */}
                <div className="flex flex-col gap-4">
                  {['Code Review', 'Bug Fix', 'Testing'].map((task, i) => (
                    <motion.div
                      key={task}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      className="px-4 py-2 bg-[#1E90FF]/10 border border-[#1E90FF]/30 rounded-lg text-sm text-[#1E90FF]"
                    >
                      {task}
                    </motion.div>
                  ))}
                </div>

                {/* Conductor */}
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="relative"
                >
                  <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center shadow-xl shadow-[#1E90FF]/25">
                    <img
                      src="/assets/icon.png"
                      alt="CueMarshal"
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#1E90FF] to-[#2D3E50] rounded-full blur-xl opacity-20 animate-pulse" />
                </motion.div>

                {/* Right agents */}
                <div className="flex flex-col gap-4">
                  {['Deploy', 'Monitor', 'Document'].map((task, i) => (
                    <motion.div
                      key={task}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      className="px-4 py-2 bg-[#2D3E50]/30 border border-[#2D3E50]/50 rounded-lg text-sm text-slate-300"
                    >
                      {task}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Flow lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#ec4899" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}