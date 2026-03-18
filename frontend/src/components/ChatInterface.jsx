import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, ArrowLeft, Sparkles } from 'lucide-react';
import { Button, Input } from '../components/ui/primitives';

export default function ChatInterface({ expert, onBack }) {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: `I'm your ${expert.name} assistant. Powered by quantum AI processing with military-grade encryption. How can I assist you today?`,
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          expert: expert.id,
        }),
      });

      const data = await response.json();
      setMessages((prev) => [...prev, { role: 'assistant', content: data.response }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'I apologize, but I encountered an error. Please try again.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const Icon = expert.icon;

  return (
    <div className="h-screen bg-void-950 flex flex-col relative overflow-hidden">
      {/* Cyber Ambient background - Cyan/Green */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${expert.gradient} opacity-10 blur-3xl animate-float`} />
        <div className={`absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr ${expert.gradient} opacity-10 blur-3xl animate-float`} style={{ animationDelay: '2s' }} />
        {/* Scan line */}
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyber-cyan-500/30 to-transparent animate-scan" />
      </div>

      {/* Header */}
      <motion.div
        className="relative z-10 bg-void-900/40 backdrop-blur-xl border-b border-white/10 px-6 py-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={onBack} className="p-2">
            <ArrowLeft size={20} />
          </Button>

          <div className={`p-3 rounded-xl bg-gradient-to-br ${expert.gradient} shadow-cyber-cyan`}>
            <Icon size={24} className="text-white" />
          </div>

          <div className="flex-1">
            <h2 className="text-lg font-bold text-white">{expert.name}</h2>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <div className="w-2 h-2 bg-cyber-green-400 rounded-full animate-pulse" />
              Online • Quantum Processing Active
            </div>
          </div>
        </div>
      </motion.div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-8 relative z-10">
        <div className="max-w-4xl mx-auto space-y-6">
          <AnimatePresence>
            {messages.map((message, index) => (
              <motion.div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {message.role === 'assistant' && (
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${expert.gradient} flex items-center justify-center mr-3 flex-shrink-0`}>
                    <Icon size={20} className="text-white" />
                  </div>
                )}

                <div
                  className={`max-w-[70%] rounded-3xl px-6 py-4 ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-cyber-cyan-600 to-cyber-green-600 text-white rounded-tr-md shadow-cyber-cyan'
                      : 'bg-void-800/50 backdrop-blur-md text-slate-100 border border-white/10 rounded-tl-md'
                  }`}
                >
                  <p className="leading-relaxed whitespace-pre-wrap">{message.content}</p>
                </div>

                {message.role === 'user' && (
                  <div className="w-10 h-10 rounded-xl bg-slate-700 flex items-center justify-center ml-3 flex-shrink-0">
                    <span className="text-white font-medium">You</span>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {isLoading && (
            <motion.div
              className="flex justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${expert.gradient} flex items-center justify-center mr-3`}>
                <Icon size={20} className="text-white" />
              </div>
              <div className="bg-void-800/50 backdrop-blur-md rounded-3xl rounded-tl-md px-6 py-4 border border-white/10">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-cyber-cyan-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-cyber-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                  <div className="w-2 h-2 bg-cyber-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                </div>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <motion.div
        className="relative z-10 bg-void-900/40 backdrop-blur-xl border-t border-white/10 px-6 py-6"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-3 items-end">
            <div className="flex-1 relative">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
                placeholder="Ask your quantum AI assistant..."
                className="pr-12"
                disabled={isLoading}
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-cyber-cyan-400">
                <Sparkles size={20} className="animate-pulse" />
              </div>
            </div>

            <Button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="p-4"
            >
              <Send size={20} />
            </Button>
          </div>

          <p className="text-xs text-slate-500 mt-3 text-center">
            Quantum AI • Military-Grade Encrypted • Response: &lt;100ms
          </p>
        </div>
      </motion.div>
    </div>
  );
}
