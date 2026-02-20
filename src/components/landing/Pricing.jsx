import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for getting started and personal projects.',
    features: [
      'Up to 3 repositories',
      'Basic Conductor orchestration',
      '1,000 AI operations/month',
      'Community support',
      'Core integrations',
    ],
    cta: 'Get Started Free',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$49',
    period: '/month',
    description: 'For teams that need advanced features and scale.',
    features: [
      'Unlimited repositories',
      'Advanced Conductor workflows',
      'Unlimited AI operations',
      'Priority support',
      'All integrations',
      'Custom agent training',
      'Team collaboration',
      'Advanced analytics',
    ],
    cta: 'Start Pro Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For organizations with specific security and scale needs.',
    features: [
      'Everything in Pro',
      'Dedicated infrastructure',
      'SSO & SAML',
      'SLA guarantee',
      'Custom integrations',
      'On-premise deployment',
      'Dedicated success manager',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-[#1E90FF] tracking-wider uppercase mb-4 block">
            Pricing
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Simple, Transparent
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#1E90FF] to-[#4BA3FF] bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Start free, scale as you grow. No hidden fees, no surprises.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-[#1E90FF] text-white text-sm font-medium">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className={`relative h-full rounded-2xl border ${plan.popular ? 'border-[#1E90FF]/50 bg-gradient-to-b from-[#1E90FF]/10 to-[#2D3E50]/10' : 'border-white/10 bg-slate-900/50'} backdrop-blur-xl p-8`}>
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1E90FF]/5 to-[#2D3E50]/5 rounded-2xl" />
                )}

                <div className="relative">
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>

                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400">{plan.period}</span>
                  </div>

                  <p className="text-slate-400 text-sm mb-6">{plan.description}</p>

                  <Button
                    className={`w-full mb-8 ${plan.popular ? 'bg-[#1E90FF] hover:bg-[#1a7fd9] text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}
                  >
                    {plan.cta}
                  </Button>

                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <Check className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-[#1E90FF]' : 'text-slate-500'}`} />
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}