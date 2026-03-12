import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, Zap, Brain, Globe, MessageCircle, ArrowRight, Check, Star, Code, Rocket, Radio } from 'lucide-react'
import BlitzLive from '../components/BlitzLive'
import chatflowConfig from '../chatflow-config.json'

function BlitzAIPage() {
  const [showDemo, setShowDemo] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      {/* Standalone - No Navigation */}
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Animated Background - MASCULINE */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute top-40 -right-20 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-slate-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* Logo + Tag */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full shadow-2xl mb-8 animate-in zoom-in-50 duration-500">
              <Zap className="w-6 h-6 text-yellow-400 animate-pulse" />
              <span className="text-white font-bold text-xl">Ai Blitz</span>
              <Zap className="w-6 h-6 text-yellow-400 animate-pulse" />
            </div>
            
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 animate-in fade-in slide-in-from-top duration-700">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                World-Class Expert
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-slate-300 bg-clip-text text-transparent">
                At Your Command
              </span>
            </h1>
            
            <p className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom duration-700">
              Elite-level <span className="font-bold text-cyan-400">coding, marketing, finance & automation</span> expertise. 
              Powered by <span className="font-bold text-blue-400">GPT-5.2</span> with knowledge through March 2026.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center animate-in fade-in zoom-in-95 duration-700 delay-300">
              <button
                onClick={() => setShowDemo(true)}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-105 transition-all flex items-center gap-3"
              >
                <Radio className="w-6 h-6 animate-pulse" />
                Start Live Mode
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <Link
                to="/"
                className="px-8 py-4 bg-slate-800 text-cyan-400 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:bg-slate-700 transform hover:scale-105 transition-all border-2 border-cyan-600"
              >
                See BookEasy AI
              </Link>
            </div>
          </div>

          {/* Feature Pills - MASCULINE */}
          <div className="flex flex-wrap gap-3 justify-center mb-16">
            {[
              { icon: Code, text: "World-Famous Coding" },
              { icon: Brain, text: "Elite Marketing" },
              { icon: Star, text: "Expert Finance" },
              { icon: Zap, text: "Master Automation" }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="px-6 py-3 bg-slate-800/80 backdrop-blur-xl rounded-full shadow-lg border border-cyan-600/30 flex items-center gap-2 animate-in fade-in zoom-in-95 duration-500"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <feature.icon className="w-5 h-5 text-cyan-400" />
                <span className="font-semibold text-gray-200">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What Ai Blitz Can Do - DARK THEME */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">4 World-Class Expert Domains</h2>
          <p className="text-xl text-gray-400">Elite-level mastery. At your command.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: Code,
              title: "💻 World-Famous Coding",
              description: "Master of ALL languages & frameworks. Can debug, architect, and build ANYTHING. Latest 2026 tech & best practices.",
              gradient: "from-blue-600 to-cyan-600"
            },
            {
              icon: Star,
              title: "📈 World-Class Marketing",
              description: "Elite digital marketing, copywriting, Upwork/Fiverr optimization, growth hacking. Strategies that actually convert.",
              gradient: "from-cyan-600 to-teal-600"
            },
            {
              icon: Brain,
              title: "💰 World-Class Finance",
              description: "Expert financial advisor for freelancers. Pricing, investing, taxes, wealth building. 2026 market knowledge.",
              gradient: "from-emerald-600 to-green-600"
            },
            {
              icon: Zap,
              title: "⚙️ Master Automation",
              description: "Workflow automation expert. Zapier, Make, custom scripts, AI agents. Save hours, scale faster.",
              gradient: "from-orange-600 to-yellow-600"
            }
          ].map((feature, idx) => (
            <div
              key={idx}
              className="group bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-cyan-500/20 border-2 border-slate-700 hover:border-cyan-600 transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom duration-500"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg mb-4`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Use Cases */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-16">
            <h2 className="text-5xl font-bold mb-4">Perfect For Any Business</h2>
            <p className="text-xl opacity-90">One AI widget that works for EVERYTHING</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { emoji: "💇", name: "Salons & Spas", desc: "Book appointments & answer questions" },
              { emoji: "🏥", name: "Healthcare", desc: "Patient scheduling & info" },
              { emoji: "💼", name: "Consulting", desc: "Client inquiries & bookings" },
              { emoji: "🍽️", name: "Restaurants", desc: "Reservations & menu questions" },
              { emoji: "💪", name: "Fitness", desc: "Class bookings & training advice" },
              { emoji: "🎓", name: "Education", desc: "Course info & enrollment" },
              { emoji: "⚖️", name: "Legal", desc: "Consultation scheduling" },
              { emoji: "🏠", name: "Real Estate", desc: "Property info & viewings" }
            ].map((use, idx) => (
              <div
                key={idx}
                className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 border border-white/30 hover:bg-white/30 transition-all animate-in fade-in zoom-in-95 duration-500"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className="text-5xl mb-3">{use.emoji}</div>
                <h3 className="text-xl font-bold text-white mb-2">{use.name}</h3>
                <p className="text-white/80">{use.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing / CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-12 border-2 border-gray-100 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-white font-bold mb-8">
            <Rocket className="w-5 h-5" />
            READY TO USE
          </div>
          
          <h2 className="text-5xl font-bold text-gray-800 mb-4">
            Add Ai Blitz to Your Project
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Fully integrated into BookEasy AI. Can be deployed as standalone widget for ANY website.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {[
              "5-minute setup",
              "Works with any tech stack",
              "Customizable branding",
              "GPT-5.2 powered",
              "Unlimited conversations"
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 text-gray-700">
                <Check className="w-5 h-5 text-green-500" />
                <span className="font-semibold">{feature}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => setShowDemo(true)}
            className="px-12 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all"
          >
            ⚡ Try Ai Blitz Now
          </button>
        </div>
      </div>

      {/* Ai Blitz LIVE - Floating, Draggable, Always-On */}
      {showDemo && <BlitzLive config={{...chatflowConfig}} />}
      
      {/* Floating action button */}
      {!showDemo && (
        <button
          onClick={() => setShowDemo(true)}
          className="fixed bottom-8 right-8 p-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all z-40 group"
        >
          <div className="absolute -inset-2 rounded-full bg-cyan-500 animate-ping opacity-30" />
          <Radio className="w-8 h-8 animate-pulse relative z-10" />
        </button>
      )}
    </div>
  )
}

export default BlitzAIPage
