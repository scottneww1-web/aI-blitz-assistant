import { motion } from 'framer-motion';

export function Button({ children, variant = 'primary', className = '', onClick, ...props }) {
  const variants = {
    primary: 'relative overflow-hidden bg-gradient-to-r from-cyber-cyan-600 via-cyber-green-600 to-cyber-cyan-600 text-white font-semibold py-3 px-8 rounded-2xl hover:shadow-cyber-cyan transition-all duration-300 active:scale-95 hover:scale-105',
    secondary: 'bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-cyber-cyan-400/30 transition-all duration-300 py-3 px-8 rounded-2xl backdrop-blur-md',
    ghost: 'text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200 py-2 px-4 rounded-lg',
  };

  return (
    <motion.button
      className={`${variants[variant]} ${className}`}
      onClick={onClick}
      whileHover={{ scale: variant === 'ghost' ? 1 : 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
      )}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}

export function Card({ children, className = '', glow = false, ...props }) {
  return (
    <motion.div
      className={`bg-void-900/40 border border-white/10 backdrop-blur-xl rounded-3xl p-6 hover:border-cyber-cyan-400/30 transition-all duration-300 ${
        glow ? 'hover:shadow-cyber-cyan' : ''
      } ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function Input({ className = '', ...props }) {
  return (
    <input
      className={`bg-void-950/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-cyber-cyan-500/50 focus:border-transparent placeholder:text-slate-500 w-full backdrop-blur-sm transition-all duration-200 ${className}`}
      {...props}
    />
  );
}

export function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-cyber-cyan-400/10 text-cyber-cyan-400 border-cyber-cyan-400/20',
    success: 'bg-cyber-green-400/10 text-cyber-green-400 border-cyber-green-400/20',
    glow: 'bg-gradient-to-r from-cyber-cyan-500/20 to-cyber-green-500/20 text-cyber-cyan-300 border-cyber-cyan-400/30 shadow-cyber-cyan animate-pulse-glow',
  };

  return (
    <span className={`px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wider border inline-flex items-center gap-2 ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}

export function GlassCard({ children, className = '', interactive = false }) {
  return (
    <div
      className={`
        relative group
        bg-gradient-to-br from-white/5 to-white/[0.02]
        border border-white/10
        backdrop-blur-2xl
        rounded-3xl
        p-8
        shadow-glass-dark
        ${interactive ? 'cursor-pointer hover:border-cyber-cyan-400/40 hover:shadow-cyber-cyan hover:scale-[1.02] transition-all duration-300' : ''}
        ${className}
      `}
    >
      {/* Gradient overlay on hover */}
      {interactive && (
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan-500/0 to-cyber-green-500/0 group-hover:from-cyber-cyan-500/5 group-hover:to-cyber-green-500/5 rounded-3xl transition-all duration-500" />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
