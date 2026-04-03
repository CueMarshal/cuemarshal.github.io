import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Github,
  Twitter,
  FileText,
  ArrowRight
} from 'lucide-react';

const footerLinks = {
  Product: [
    { name: 'Features', href: '#features' },
    { name: 'The Orchestra', href: '#orchestra' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Open Source', href: '#pricing' },
  ],
  Resources: [
    { name: 'GitHub', href: 'https://github.com/cuemarshal/cuemarshal', icon: Github },
    { name: 'Documentation', href: 'https://github.com/cuemarshal/cuemarshal/tree/main/docs', icon: FileText },
    { name: 'README', href: 'https://github.com/cuemarshal/cuemarshal#readme' },
    { name: 'Issues', href: 'https://github.com/cuemarshal/cuemarshal/issues' },
  ],
  Community: [
    { name: 'Twitter / X', href: 'https://twitter.com/cuemarshal', icon: Twitter },
    { name: 'Discussions', href: 'https://github.com/cuemarshal/cuemarshal/discussions' },
    { name: 'Contributing', href: 'https://github.com/cuemarshal/cuemarshal/blob/main/CONTRIBUTING.md' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative pt-24 pb-12 px-4 border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
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
                    Ready to Meet the Orchestra?
                  </span>
                </h2>
                <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                  Clone the repo, add your API keys, and run <code className="text-[#4BA3FF] bg-slate-800/50 px-2 py-0.5 rounded text-sm">quick-start.sh</code>. That's it.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="bg-[#1E90FF] hover:bg-[#1a7fd9] text-white h-12 px-8">
                    <a href="https://github.com/cuemarshal/cuemarshal" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5 mr-2" />
                      Star on GitHub
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/assets/logo.png"
                alt="CueMarshal"
                className="h-8"
              />
            </div>
            <p className="text-slate-400 text-sm mb-6">
              From issue to reviewed PR without leaving Git. An open-source AI dev team that works through your existing workflow.
            </p>

            <div className="flex gap-3">
              <a href="https://twitter.com/cuemarshal" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://github.com/cuemarshal/cuemarshal" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
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

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} CueMarshal. MIT License.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <span>Open Source · Self-Hosted · Git-Native</span>
          </div>
        </div>
      </div>
    </footer>
  );
}