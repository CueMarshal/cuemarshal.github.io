import React from 'react';
import { motion } from 'framer-motion';

const AGENTS = [
  {
    name: 'Marshal',
    species: 'Lion',
    role: 'Conductor',
    desc: 'Starts the symphony and coordinates handoffs between agents',
    avatar: '/assets/avatars/marshal.png',
    gradient: 'from-slate-700 to-slate-800',
    border: 'border-slate-500/40',
    glow: 'from-slate-400/10 to-slate-600/10',
  },
  {
    name: 'Ava',
    species: 'Snowy Owl',
    role: 'Architect',
    desc: 'Designs the solution and opens a spec PR',
    avatar: '/assets/avatars/ava.png',
    gradient: 'from-indigo-600 to-indigo-700',
    border: 'border-indigo-400/40',
    glow: 'from-indigo-400/10 to-indigo-600/10',
  },
  {
    name: 'Dave',
    species: 'Beaver',
    role: 'Developer',
    desc: 'Writes the implementation on a feature branch',
    avatar: '/assets/avatars/dave.png',
    gradient: 'from-green-600 to-green-700',
    border: 'border-green-400/40',
    glow: 'from-green-400/10 to-green-600/10',
  },
  {
    name: 'Reese',
    species: 'Bald Eagle',
    role: 'Reviewer',
    desc: 'Checks for bugs, risks, and code quality issues',
    avatar: '/assets/avatars/reese.png',
    gradient: 'from-amber-500 to-amber-600',
    border: 'border-amber-400/40',
    glow: 'from-amber-400/10 to-amber-600/10',
  },
  {
    name: 'Tess',
    species: 'Raccoon',
    role: 'Tester',
    desc: 'Runs test suites and validates behavior',
    avatar: '/assets/avatars/tess.png',
    gradient: 'from-purple-600 to-purple-700',
    border: 'border-purple-400/40',
    glow: 'from-purple-400/10 to-purple-600/10',
  },
  {
    name: 'Devin',
    species: 'Octopus',
    role: 'DevOps',
    desc: 'Handles infrastructure and deployment tasks',
    avatar: '/assets/avatars/devin.png',
    gradient: 'from-cyan-600 to-cyan-700',
    border: 'border-cyan-400/40',
    glow: 'from-cyan-400/10 to-cyan-600/10',
  },
  {
    name: 'Dot',
    species: 'Parrot',
    role: 'Docs',
    desc: 'Keeps documentation clear and current',
    avatar: '/assets/avatars/dot.png',
    gradient: 'from-rose-500 to-rose-600',
    border: 'border-rose-400/40',
    glow: 'from-rose-400/10 to-rose-600/10',
  },
  {
    name: 'Linton',
    species: 'Siamese Cat',
    role: 'Linter',
    desc: 'Enforces code quality checks before merge',
    avatar: '/assets/avatars/linton.png',
    gradient: 'from-slate-600 to-slate-700',
    border: 'border-slate-400/40',
    glow: 'from-slate-400/10 to-slate-600/10',
  },
];

export default function Orchestra() {
  return (
    <section id="orchestra" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-[#1E90FF] tracking-wider uppercase mb-4 block">
            Meet the Orchestra
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Not a Black Box.
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#1E90FF] to-[#4BA3FF] bg-clip-text text-transparent">
              A Team You Can See.
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Each agent has a name, a face, and a specialty. You always know who did what and why —
            because every action is a commit, comment, or PR by a named team member.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {AGENTS.map((agent, index) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${agent.glow} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className={`relative bg-slate-900/50 backdrop-blur-xl border ${agent.border} rounded-2xl p-6 h-full hover:border-white/20 transition-all duration-300`}>
                <div className="flex flex-col items-center text-center gap-4">
                  <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 ${agent.border} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <img src={agent.avatar} alt={agent.name} className="w-full h-full object-cover" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white">{agent.name}</h3>
                    <p className="text-xs text-slate-500 font-medium mb-1">{agent.species}</p>
                    <span className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${agent.gradient} text-white text-xs font-medium`}>
                      {agent.role}
                    </span>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {agent.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
