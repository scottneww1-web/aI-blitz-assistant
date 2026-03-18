import { motion } from 'framer-motion';
import { Terminal, TrendingUp, BadgeDollarSign, Zap, ArrowRight, Sparkles, Shield, Lock, CheckCircle2, Code2, Layers } from 'lucide-react';
import { Button, Badge, GlassCard } from '../components/ui/primitives';

const experts = [
  {
    id: 'coding',
    name: 'Precision Coding',
    icon: Terminal,
    gradient: 'from-precision-emerald-500 to-precision-cyan-500',
    description: 'World-class code with surgical precision. Build, debug, optimize with military-grade accuracy.',
    skills: ['Full-Stack Dev', 'System Design', 'Code Review'],
  },
  {
    id: 'marketing',
    icon: TrendingUp,
    name: 'Precision Marketing',
    gradient: 'from-pink-500 to-rose-500',
    description: 'Data-driven campaigns that hit every mark. ROI guaranteed with precision targeting.',
    skills: ['SEO/SEM', 'Content Strategy', 'Analytics'],
  },
  {
    id: 'finance',
    icon: BadgeDollarSign,
    name: 'Precision Finance',
    gradient: 'from-amber-400 to-orange-500',
    description: 'Strategic financial guidance with mathematical accuracy and encrypted security.',
    skills: ['Forecasting', 'Investment', 'Risk Analysis'],
  },
  {
    id: 'automation',
    icon: Zap,
    name: 'Precision Automation',
    gradient: 'from-precision-cyan-500 to-precision-teal-600',
    description: 'Eliminate repetitive tasks with flawless automation workflows. Deploy anywhere.',
    skills: ['Process Design', 'Integration', 'Optimization'],
  },
];

const securityFeatures = [
  { icon: Shield, text: 'Military-Grade Encryption' },
  { icon: Lock, text: 'HIPAA Compliant' },
  { icon: CheckCircle2, text: 'End-to-End Security' },
  { icon: Code2, text: 'SOC 2 Type II' },
];

export default function LandingPage({ onSelectExpert }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-precision-cyan-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-precision-teal-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-precision-emerald-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-6 pt-20 pb-16">
          <motion.div
            className="text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center gap-4 mb-8 flex-wrap">
              <Badge variant="glow" className="mb-2">
                <Sparkles size={16} />
                Self-Evolving AI
              </Badge>
              <Badge variant="default" className="mb-2">
                <Shield size={16} />
                Military-Grade Security
              </Badge>
              <Badge variant="success" className="mb-2">
                <Lock size={16} />
                HIPAA Compliant
              </Badge>
            </div>

            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6">
              <span className="bg-gradient-to-r from-precision-cyan-400 via-precision-teal-400 to-precision-emerald-400 text-transparent bg-clip-text animate-gradient-x">
                Precision AI
              </span>
              <br />
              <span className="text-white">Universal Assistant</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-4 leading-relaxed max-w-3xl mx-auto">
              Self-evolving AI that <span className="text-precision-cyan-400 font-semibold">automatically updates</span> and upgrades.
              <br />
              Embed into <span className="text-precision-emerald-400 font-semibold">any application</span>. Military-grade security. Zero maintenance.
            </p>

            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              Add Precision AI to your workflow and boost knowledge across all your activities. 
              Background intelligence that runs with every app you need.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => {
                  const expertSection = document.getElementById('experts');
                  expertSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Try Free Demo
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="secondary">
                View Pricing
              </Button>
            </div>

            {/* Security Badges */}
            <div className="flex justify-center gap-6 mt-12 flex-wrap">
              {securityFeatures.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.text}
                    className="flex items-center gap-2 text-sm text-slate-400"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <Icon size={18} className="text-precision-cyan-400" />
                    <span>{feature.text}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
              {[
                { label: 'Response Time', value: '<1s', subtext: 'Lightning Fast' },
                { label: 'Auto-Updates', value: '24/7', subtext: 'Self-Evolving' },
                { label: 'Uptime', value: '99.9%', subtext: 'Guaranteed' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-precision-cyan-400 to-precision-emerald-400 text-transparent bg-clip-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                  <div className="text-xs text-slate-500">{stat.subtext}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Expert Selection */}
        <section id="experts" className="container mx-auto px-6 py-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Select Your{' '}
              <span className="bg-gradient-to-r from-precision-cyan-400 to-precision-teal-400 text-transparent bg-clip-text">
                Precision Expert
              </span>
            </h2>
            <p className="text-slate-400 text-lg">Secure, encrypted AI expertise for any workflow or application</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {experts.map((expert, index) => {
              const Icon = expert.icon;
              return (
                <motion.div
                  key={expert.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassCard
                    interactive
                    onClick={() => onSelectExpert(expert)}
                    className="h-full"
                  >
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${expert.gradient} mb-6 shadow-lg`}>
                      <Icon size={32} className="text-white" />
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-white">{expert.name}</h3>
                    <p className="text-slate-300 mb-6 leading-relaxed">{expert.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {expert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center text-precision-cyan-400 font-medium group-hover:gap-2 transition-all">
                      Start Secure Session
                      <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Universal Integration */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-precision-cyan-500 to-precision-teal-600 mb-6 shadow-glow-cyan">
                <Sparkles size={40} className="text-white animate-pulse" />
              </div>
              <h3 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-precision-cyan-400 to-precision-emerald-400 text-transparent bg-clip-text">
                  Self-Evolving Intelligence
                </span>
              </h3>
              <p className="text-slate-300 text-lg mb-8">
                Precision AI automatically updates itself with the latest models, features, and knowledge.
                <br />
                <span className="text-precision-cyan-400 font-semibold">Zero manual intervention required.</span>
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  title: 'Auto-Model Updates',
                  desc: 'Seamlessly upgrades to latest AI models (GPT-5.2+). Always cutting-edge performance.',
                },
                {
                  title: 'Continuous Learning',
                  desc: 'Learns from interactions while maintaining privacy. Gets smarter over time without configuration.',
                },
                {
                  title: 'Zero Downtime',
                  desc: 'Updates happen in the background. Your workflow never stops. Always available.',
                },
              ].map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <GlassCard className="text-center h-full">
                    <h4 className="text-xl font-semibold mb-3 text-precision-cyan-400">{feature.title}</h4>
                    <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Embed Anywhere */}
        <section className="container mx-auto px-6 py-20 bg-slate-900/20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-precision-cyan-500 to-precision-teal-600 mb-6 shadow-glow-cyan">
                <Layers size={40} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">
                Embed Precision AI{' '}
                <span className="bg-gradient-to-r from-precision-cyan-400 to-precision-emerald-400 text-transparent bg-clip-text">
                  Anywhere
                </span>
              </h3>
              <p className="text-slate-300 text-lg mb-8">
                Add intelligent assistance to any application. One integration, unlimited knowledge enhancement.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Universal Widget',
                  desc: 'Drop-in component for any web or mobile app. Works with all tech stacks.',
                },
                {
                  title: 'Self-Evolving AI',
                  desc: 'Automatic updates and upgrades. Always running the latest AI models without manual intervention.',
                },
                {
                  title: 'Secure & Private',
                  desc: 'Military-grade encryption. HIPAA compliant. Your data never leaves secure channels.',
                },
              ].map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <GlassCard className="text-center h-full">
                    <h4 className="text-xl font-semibold mb-3 text-precision-cyan-400">{feature.title}</h4>
                    <p className="text-slate-400">{feature.desc}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-slate-400 mb-6">
                Start with a free trial. Upgrade for unlimited access and background mode.
              </p>
              <Button>Get Started Free</Button>
            </div>
          </div>
        </section>

        {/* Security Compliance */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-8">Enterprise-Grade Security</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                'AES-256 Encryption',
                'HIPAA Compliant',
                'SOC 2 Type II',
                'GDPR Ready',
                'Zero-Trust Architecture',
                'End-to-End Encrypted',
                '2FA Authentication',
                'Regular Security Audits',
              ].map((cert) => (
                <div
                  key={cert}
                  className="bg-slate-900/40 border border-precision-cyan-400/20 rounded-xl p-4 backdrop-blur-sm"
                >
                  <CheckCircle2 size={20} className="text-precision-cyan-400 mx-auto mb-2" />
                  <p className="text-sm text-slate-300">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
