import { motion } from 'framer-motion';
import { Terminal, TrendingUp, BadgeDollarSign, Zap, ArrowRight, Sparkles, Shield, Lock, CheckCircle2, Code2, Layers, Brain, Cpu, Infinity } from 'lucide-react';
import { Button, Badge, GlassCard } from '../components/ui/primitives';

const experts = [
  {
    id: 'coding',
    name: 'Cyber Coding',
    icon: Terminal,
    gradient: 'from-cyber-cyan-400 via-cyber-green-400 to-cyber-cyan-500',
    description: 'AI-powered code generation with precision. Self-debugging, self-optimizing architecture.',
    skills: ['Full-Stack', 'Auto-Debug', 'Code Review'],
  },
  {
    id: 'marketing',
    icon: Brain,
    name: 'Cyber Marketing',
    gradient: 'from-cyber-green-400 via-cyber-cyan-500 to-teal-500',
    description: 'Predictive campaign intelligence. AI optimize ROI in real-time across all channels.',
    skills: ['SEO/SEM', 'AI Content', 'Analytics'],
  },
  {
    id: 'finance',
    icon: BadgeDollarSign,
    name: 'Cyber Finance',
    gradient: 'from-emerald-400 via-cyber-green-500 to-cyan-500',
    description: 'AI-powered financial forecasting with blockchain-grade security. Predictive market analysis.',
    skills: ['Forecasting', 'Risk AI', 'Investment'],
  },
  {
    id: 'automation',
    icon: Cpu,
    name: 'Cyber Automation',
    gradient: 'from-cyber-cyan-500 via-teal-500 to-cyber-green-400',
    description: 'Self-evolving workflows that adapt to your needs. Deploy infinite intelligent agents instantly.',
    skills: ['AI Agents', 'Auto-Scale', 'Workflows'],
  },
];

const securityFeatures = [
  { icon: Shield, text: 'Military-Grade AES-256' },
  { icon: Lock, text: 'HIPAA Compliant' },
  { icon: CheckCircle2, text: 'Zero-Trust Security' },
  { icon: Code2, text: 'SOC 2 Type II' },
];

export default function LandingPage({ onSelectExpert }) {
  return (
    <div className="min-h-screen bg-void-950 text-white relative overflow-hidden">
      {/* 2027 Cyber Matrix Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Cyber Orbs - Cyan and Green */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyber-cyan-500/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyber-green-500/15 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[80px] animate-float" style={{ animationDelay: '4s' }} />
        
        {/* Cyber Grid */}
        <div className="absolute inset-0 bg-cyber-grid opacity-50" />
        
        {/* Scan Line Effect - Cyan */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyber-cyan-500/50 to-transparent animate-scan" />
        </div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-6 pt-20 pb-16">
          <motion.div
            className="text-center max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* 2027 Self-Evolving Badge - PROMINENT - Cyan/Green */}
            <div className="flex justify-center mb-10">
              <motion.div
                className="relative group"
                animate={{
                  boxShadow: [
                    '0 0 30px rgba(34, 211, 238, 0.8)',
                    '0 0 50px rgba(16, 185, 129, 0.9)',
                    '0 0 30px rgba(34, 211, 238, 0.8)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan-500 via-cyber-green-500 to-cyber-cyan-400 rounded-full blur-xl opacity-60 animate-pulse-glow" />
                <Badge 
                  variant="glow" 
                  className="relative px-8 py-3 text-lg font-bold bg-void-900/90 backdrop-blur-xl border-2 border-cyber-cyan-400/50"
                >
                  <Infinity size={24} className="inline mr-2 animate-spin" style={{ animationDuration: '3s' }} />
                  <span className="bg-gradient-to-r from-cyber-cyan-400 via-cyber-green-400 to-cyber-cyan-300 text-transparent bg-clip-text animate-gradient-x">
                    SELF-EVOLVING AI
                  </span>
                  <Sparkles size={20} className="inline ml-2 text-cyber-green-400 animate-pulse" />
                </Badge>
              </motion.div>
            </div>

            {/* Security Badges Row - Cyan/Green theme */}
            <div className="flex justify-center gap-4 mb-10 flex-wrap">
              {[
                { icon: Shield, text: 'Military-Grade', color: 'cyber-cyan' },
                { icon: Lock, text: 'HIPAA Compliant', color: 'cyber-green' },
                { icon: CheckCircle2, text: 'Zero-Trust', color: 'cyan' },
              ].map((badge) => {
                const Icon = badge.icon;
                return (
                  <Badge 
                    key={badge.text}
                    className={`px-4 py-2 bg-void-900/60 backdrop-blur-md border border-${badge.color}-500/30 hover:border-${badge.color}-400 transition-all`}
                  >
                    <Icon size={16} className={`inline mr-2 text-${badge.color}-400`} />
                    <span className="text-white/90 font-medium">{badge.text}</span>
                  </Badge>
                );
              })}
            </div>

            <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 leading-none">
              <span className="block bg-gradient-to-r from-cyber-cyan-400 via-cyber-green-400 to-cyan-300 text-transparent bg-clip-text animate-gradient-x bg-[length:200%_auto]">
                Cyber AI
              </span>
              <span className="block text-white mt-2">2027 Edition</span>
            </h1>

            <p className="text-2xl md:text-3xl text-gray-300 mb-6 leading-relaxed max-w-4xl mx-auto font-light">
              The world's first{' '}
              <span className="text-cyber-cyan-400 font-semibold">self-upgrading</span>{' '}
              AI assistant.
              <br />
              Automatically evolves with{' '}
              <span className="text-cyber-green-400 font-semibold">zero intervention</span>.{' '}
              Deploy to{' '}
              <span className="text-cyan-400 font-semibold">any application</span>.
            </p>

            <p className="text-lg text-gray-400 mb-10 max-w-3xl mx-auto">
              AI systems that continuously learn, adapt, and upgrade themselves. 
              Military-grade security. Infinite scalability. Welcome to 2027.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button
                onClick={() => {
                  const expertSection = document.getElementById('experts');
                  expertSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="relative group px-10 py-5 text-lg font-bold bg-gradient-to-r from-cyber-cyan-600 via-cyber-green-600 to-cyber-cyan-600 bg-[length:200%_auto] animate-gradient-x hover:shadow-cyber-cyan transition-all text-white rounded-2xl"
              >
                <span className="relative z-10">Launch Cyber AI</span>
                <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" size={24} />
                <div className="absolute inset-0 bg-matrix-glow rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity blur-xl" />
              </Button>
              <Button 
                variant="secondary"
                className="px-10 py-5 text-lg font-semibold bg-void-900/60 backdrop-blur-xl border-2 border-cyber-green-500/30 hover:border-cyber-green-400 hover:shadow-cyber-green text-white rounded-2xl transition-all"
              >
                View Pricing
              </Button>
            </div>

            {/* 2027 Cyber Stats */}
            <div className="grid grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
              {[
                { label: 'Response Time', value: '<100ms', subtext: 'Lightning Fast', icon: Zap, color: 'cyber-cyan' },
                { label: 'Auto-Upgrades', value: '∞', subtext: 'Self-Evolving', icon: Infinity, color: 'cyber-green' },
                { label: 'Uptime SLA', value: '99.99%', subtext: 'Always On', icon: Cpu, color: 'cyan' },
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    className={`relative group p-6 bg-void-900/40 backdrop-blur-xl border border-${stat.color}-500/20 rounded-2xl hover:border-${stat.color}-400 hover:shadow-${stat.color} transition-all`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                  >
                    <Icon className={`w-8 h-8 text-${stat.color}-400 mb-3 mx-auto animate-pulse`} />
                    <div className={`text-5xl font-black bg-gradient-to-r from-${stat.color}-400 to-white text-transparent bg-clip-text mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                    <div className="text-xs text-gray-500">{stat.subtext}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* Neural Expert Selection */}
        <section id="experts" className="container mx-auto px-6 py-24">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Select Your{' '}
              <span className="bg-gradient-to-r from-neon-violet-400 via-neon-pink-400 to-neon-cyan-400 text-transparent bg-clip-text">
                Neural Agent
              </span>
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Quantum-encrypted AI expertise that evolves with you. Zero configuration required.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
                  <div
                    onClick={() => onSelectExpert(expert)}
                    className="group relative h-full p-8 bg-void-900/40 backdrop-blur-2xl border border-white/10 rounded-3xl hover:border-neon-violet-400/50 hover:shadow-holographic transition-all duration-300 cursor-pointer overflow-hidden"
                  >
                    {/* Holographic Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                    
                    <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${expert.gradient} mb-6 shadow-holographic relative`}>
                      <Icon size={40} className="text-white relative z-10" />
                      <div className="absolute inset-0 bg-holographic rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity blur-xl" />
                    </div>

                    <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-neon-violet-300 transition-colors">
                      {expert.name}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed text-lg">{expert.description}</p>

                    <div className="flex flex-wrap gap-3 mb-6">
                      {expert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-300 backdrop-blur-sm hover:border-neon-violet-400/50 transition-all"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center text-neon-violet-400 font-semibold text-lg group-hover:gap-3 transition-all">
                      Launch Neural Session
                      <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Self-Evolving Intelligence Section */}
        <section className="container mx-auto px-6 py-24 relative">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="relative inline-block mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-violet-500 via-neon-pink-500 to-neon-cyan-500 rounded-full blur-2xl opacity-40 animate-pulse-glow" />
                <div className="relative p-6 rounded-full bg-gradient-to-br from-neon-violet-500 via-neon-pink-500 to-neon-cyan-500 shadow-holographic">
                  <Infinity size={56} className="text-white animate-spin" style={{ animationDuration: '4s' }} />
                </div>
              </div>
              
              <h3 className="text-5xl font-black mb-6">
                <span className="bg-gradient-to-r from-neon-violet-400 via-neon-pink-400 to-neon-cyan-400 text-transparent bg-clip-text animate-gradient-x bg-[length:200%_auto]">
                  Infinite Self-Evolution
                </span>
              </h3>
              <p className="text-gray-300 text-2xl mb-8 font-light">
                Neural AI autonomously upgrades itself with the latest models, features, and knowledge.
                <br />
                <span className="text-neon-pink-400 font-semibold">Zero manual updates. Ever.</span>
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Quantum Model Sync',
                  desc: 'Seamlessly upgrades to GPT-6, Claude Opus 5, and beyond. Always the cutting-edge.',
                  icon: Brain,
                  color: 'neon-violet',
                },
                {
                  title: 'Neural Learning',
                  desc: 'Continuously learns from interactions while maintaining military-grade privacy.',
                  icon: Sparkles,
                  color: 'neon-pink',
                },
                {
                  title: 'Zero-Downtime Evolution',
                  desc: 'Updates happen in quantum parallel. Your workflow never interrupts.',
                  icon: Infinity,
                  color: 'neon-cyan',
                },
              ].map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`p-8 bg-void-900/40 backdrop-blur-2xl border border-${feature.color}-500/20 rounded-3xl hover:border-${feature.color}-400 hover:shadow-${feature.color} transition-all group`}
                  >
                    <Icon className={`w-12 h-12 text-${feature.color}-400 mb-5 group-hover:scale-110 transition-transform`} />
                    <h4 className="text-2xl font-bold mb-4 text-white">{feature.title}</h4>
                    <p className="text-gray-400 leading-relaxed text-lg">{feature.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Quantum Security */}
        <section className="container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-5xl font-black mb-12">
              <span className="bg-gradient-to-r from-neon-violet-400 to-neon-cyan-400 text-transparent bg-clip-text">
                Quantum-Grade Security
              </span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                'AES-256 Quantum',
                'HIPAA Certified',
                'SOC 2 Type II',
                'GDPR Compliant',
                'Zero-Trust Arch',
                'End-to-End Encrypted',
                'Biometric 2FA',
                'Real-Time Audits',
              ].map((cert, i) => (
                <motion.div
                  key={cert}
                  className="bg-void-900/40 border border-neon-violet-500/20 rounded-2xl p-6 backdrop-blur-xl hover:border-neon-violet-400 hover:shadow-neon-violet transition-all"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <CheckCircle2 size={24} className="text-neon-violet-400 mx-auto mb-3" />
                  <p className="text-sm text-gray-300 font-medium">{cert}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
