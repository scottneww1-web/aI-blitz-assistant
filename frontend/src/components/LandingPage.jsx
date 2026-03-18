import { motion } from 'framer-motion';
import { Terminal, TrendingUp, BadgeDollarSign, Zap, ArrowRight, Sparkles } from 'lucide-react';
import { Button, Badge, GlassCard } from '../components/ui/primitives';

const experts = [
  {
    id: 'coding',
    name: 'Precision Coding',
    icon: Terminal,
    gradient: 'from-precision-emerald-500 to-precision-cyan-500',
    description: 'World-class code with surgical precision. Build, debug, optimize.',
    skills: ['Full-Stack Dev', 'System Design', 'Code Review'],
  },
  {
    id: 'marketing',
    icon: TrendingUp,
    name: 'Precision Marketing',
    gradient: 'from-pink-500 to-rose-500',
    description: 'Data-driven campaigns that hit every mark. ROI guaranteed.',
    skills: ['SEO/SEM', 'Content Strategy', 'Analytics'],
  },
  {
    id: 'finance',
    icon: BadgeDollarSign,
    name: 'Precision Finance',
    gradient: 'from-amber-400 to-orange-500',
    description: 'Strategic financial guidance with mathematical accuracy.',
    skills: ['Forecasting', 'Investment', 'Risk Analysis'],
  },
  {
    id: 'automation',
    icon: Zap,
    name: 'Precision Automation',
    gradient: 'from-precision-cyan-500 to-precision-teal-600',
    description: 'Eliminate repetitive tasks with flawless automation workflows.',
    skills: ['Process Design', 'Integration', 'Optimization'],
  },
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
            <Badge variant="glow" className="mb-8">
              <Sparkles size={16} />
              Powered by GPT-5.2
            </Badge>

            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6">
              <span className="bg-gradient-to-r from-precision-cyan-400 via-precision-teal-400 to-precision-emerald-400 text-transparent bg-clip-text animate-gradient-x">
                Precision AI
              </span>
              <br />
              <span className="text-white">Workforce</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Elite AI experts at your command. Surgical accuracy in{' '}
              <span className="text-precision-cyan-400 font-semibold">coding</span>,{' '}
              <span className="text-pink-400 font-semibold">marketing</span>,{' '}
              <span className="text-amber-400 font-semibold">finance</span>, and{' '}
              <span className="text-precision-teal-400 font-semibold">automation</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => {
                  const expertSection = document.getElementById('experts');
                  expertSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Choose Your Expert
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="secondary">
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
              {[
                { label: 'Response Time', value: '<1s', subtext: 'Average' },
                { label: 'Accuracy Rate', value: '99.7%', subtext: 'Verified' },
                { label: 'Users Served', value: '50k+', subtext: 'And growing' },
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
            <p className="text-slate-400 text-lg">Each expert trained to deliver flawless results in their domain</p>
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
                      Start Session
                      <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Features */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-12">Why Choose Precision AI?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Instant Expertise', desc: 'No hiring, no training, no delays. Expert help in under 1 second.' },
                { title: '24/7 Availability', desc: 'Your AI workforce never sleeps. Get answers anytime, anywhere.' },
                { title: 'Cost Effective', desc: 'Elite expertise at a fraction of traditional consulting costs.' },
              ].map((feature) => (
                <div key={feature.title} className="p-6">
                  <h4 className="text-xl font-semibold mb-3 text-precision-cyan-400">{feature.title}</h4>
                  <p className="text-slate-400">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
