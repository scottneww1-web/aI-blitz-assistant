// Blitz AI - Lightning-Fast AI Chatbot Widget (2026)
import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Zap } from 'lucide-react'

const ChatFlow = ({ config = {} }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const {
    businessName = 'Business',
    aiName = 'Blitz AI',
    primaryColor = '#1E40AF',
    accentColor = '#0891B2',
    position = 'bottom-right',
    welcomeMessage = '⚡ Blitz AI here. World-class expert. What do you need?',
    apiEndpoint = '/api/chat',
    avatarIcon = '⚡'
  } = config

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        role: 'assistant',
        content: welcomeMessage,
        timestamp: new Date()
      }])
    }
  }, [isOpen])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = async () => {
    if (!input.trim()) return

    const userMessage = {
      role: 'user',
      content: input,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: input,
          businessName,
          conversationHistory: messages
        })
      })

      const data = await response.json()
      
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: data.response,
        timestamp: new Date()
      }])
    } catch (error) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date()
      }])
    } finally {
      setIsTyping(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'bottom-center': 'bottom-6 left-1/2 -translate-x-1/2'
  }

  return (
    <>
      {/* Chat Widget Container */}
      <div className={`fixed ${positionClasses[position]} z-50`}>
        {/* Collapsed Button */}
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="group relative"
            style={{ color: primaryColor }}
          >
            {/* Pulse Animation */}
            <div className="absolute -inset-2 rounded-full animate-ping opacity-20"
                 style={{ backgroundColor: primaryColor }} />
            
            {/* Button */}
            <div className="relative flex items-center gap-2 px-6 py-4 rounded-full shadow-2xl backdrop-blur-xl border border-white/20 transition-all duration-300 hover:scale-105"
                 style={{ 
                   background: `linear-gradient(135deg, ${primaryColor}20, ${primaryColor}40)`,
                   backdropFilter: 'blur(20px)'
                 }}>
              <MessageCircle className="w-6 h-6" />
              <span className="font-semibold text-gray-800">Chat with us</span>
              <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-white animate-pulse" />
            </div>
          </button>
        )}

        {/* Expanded Chat Window */}
        {isOpen && (
          <div className="w-[400px] h-[600px] flex flex-col rounded-3xl shadow-2xl border border-white/20 overflow-hidden"
               style={{
                 background: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.85))',
                 backdropFilter: 'blur(40px)'
               }}>
            
            {/* Header */}
            <div className="px-6 py-4 border-b border-white/20"
                 style={{
                   background: `linear-gradient(135deg, ${primaryColor}15, ${primaryColor}25)`,
                   backdropFilter: 'blur(20px)'
                 }}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-2xl"
                         style={{ 
                           background: `linear-gradient(135deg, ${primaryColor}, ${accentColor})`
                         }}>
                      {avatarIcon}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{aiName}</h3>
                    <p className="text-xs text-gray-600 flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      Lightning Fast AI
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/50 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom duration-300`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-3 rounded-2xl shadow-sm ${
                      msg.role === 'user'
                        ? 'rounded-br-md'
                        : 'rounded-bl-md'
                    }`}
                    style={{
                      backgroundColor: msg.role === 'user' ? primaryColor : 'rgba(255,255,255,0.8)',
                      color: msg.role === 'user' ? 'white' : '#1f2937',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <p className="text-sm leading-relaxed">{msg.content}</p>
                    <p className={`text-xs mt-1 ${msg.role === 'user' ? 'text-white/70' : 'text-gray-500'}`}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start animate-in slide-in-from-bottom duration-300">
                  <div className="px-4 py-3 rounded-2xl rounded-bl-md bg-white/80 backdrop-blur-10">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="px-6 py-4 border-t border-white/20 bg-white/50 backdrop-blur-xl">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 focus:outline-none focus:ring-2 transition-all"
                  style={{ '--tw-ring-color': primaryColor }}
                  disabled={isTyping}
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || isTyping}
                  className="p-3 rounded-full shadow-lg transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: primaryColor }}
                >
                  <Send className="w-5 h-5 text-white" />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center flex items-center justify-center gap-1">
                <Zap className="w-3 h-3" />
                Powered by Blitz AI • Press Enter to send
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default ChatFlow
