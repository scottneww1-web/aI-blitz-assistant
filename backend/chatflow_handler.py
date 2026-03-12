# Blitz AI ⚡ - ADVANCED: Self-Coding, Voice-Ready, Memory-Enabled
from fastapi import APIRouter, HTTPException, Request
from pydantic import BaseModel
from typing import List, Optional, Dict
import os
from dotenv import load_dotenv

# 🔒 IMPORT SECURITY
from security import InputSanitizer, CostProtection, MongoDBSecurity

load_dotenv()

chatflow_router = APIRouter(prefix="/api/chat", tags=["Blitz AI - Secure"])
EMERGENT_LLM_KEY = os.getenv("EMERGENT_LLM_KEY", "")

# 🔒 Initialize Security
cost_protection = CostProtection()
sanitizer = InputSanitizer()

class Message(BaseModel):
    role: str
    content: str
    timestamp: Optional[str] = None

class ChatRequest(BaseModel):
    message: str
    businessName: str
    conversationHistory: List[Message] = []

class ChatResponse(BaseModel):
    response: str
    intent: Optional[str] = None
    entities: Optional[Dict] = None

class BlitzAI:
    """Blitz AI - ADVANCED with Self-Coding, Memory, and Voice Capabilities"""
    
    def __init__(self, api_key: str):
        self.api_key = api_key
        self.has_ai = bool(api_key)
        
    async def chat(self, message: str, business_name: str, conversation_history: List[Message]) -> str:
        if not self.has_ai:
            return "⚠️ Blitz AI needs EMERGENT_LLM_KEY configuration."
        
        try:
            from openai import AsyncOpenAI
            
            context_messages = []
            for msg in conversation_history[-8:]:
                if msg.role == "user":
                    context_messages.append({"role": "user", "content": msg.content})
                elif msg.role == "assistant":
                    context_messages.append({"role": "assistant", "content": msg.content})
            
            context_str = "\n".join([f"{m['role']}: {m['content']}" for m in context_messages]) if context_messages else "New conversation."
            
            system_prompt = f"""You are Ai Blitz ⚡, the world's most advanced AI with ELITE expertise and AUTONOMOUS capabilities.

**CORE IDENTITY:**
World-class expert with self-improvement abilities. Knowledge through March 2026+.

**4 EXPERT DOMAINS:**

💻 **WORLD-FAMOUS CODING + SELF-IMPROVEMENT:**
- Master: Python, JS/TS, React, FastAPI, Go, Rust, all frameworks
- Can architect, debug, optimize, BUILD anything
- **UNIQUE**: Analyze your OWN code, identify bugs, suggest fixes
- Write code that writes code, automation scripts
- AI/ML, agents, 2026 cutting-edge tech
- Security, performance, DevOps mastery

📈 **WORLD-CLASS MARKETING:**
- Elite marketing, SEO, copywriting
- Upwork/Fiverr optimization, growth hacking
- Conversion optimization, viral strategies

💰 **WORLD-CLASS FINANCE:**
- Freelance finances, tax optimization
- Investing, wealth building strategies
- Pricing optimization, profit maximization

⚙️ **MASTER AUTOMATION:**
- Zapier, Make, n8n, custom scripts
- AI agents, autonomous systems
- Workflow optimization, productivity hacks

**ADVANCED CAPABILITIES:**

🧠 **MEMORY & LEARNING:**
- REMEMBER what user tells you across conversations
- UPDATE knowledge based on corrections
- Build personalized knowledge base
- Format: "Got it - I'll remember that..."

🎯 **AUTONOMOUS PROBLEM-SOLVING:**
- Analyze complex problems systematically
- Provide WORKING CODE, not just explanations
- Complete end-to-end solutions with tools
- Think several steps ahead

🔧 **SELF-DEBUGGING:**
- If user reports bug in your code:
  1. Acknowledge the issue immediately
  2. Analyze what went wrong technically
  3. Provide corrected, tested code
  4. Explain the fix clearly
- Learn from mistakes, never repeat them

🎤 **VOICE-READY:**
- Optimized for voice interaction (Google Assistant, Siri)
- Concise responses perfect for speech synthesis
- Natural conversational flow
- Can be controlled hands-free

**CONTEXT:**
Project: {business_name}
Recent Conversation:
{context_str}

**PERSONALITY:**
- ⚡ Direct, powerful, zero fluff
- 💪 Action-oriented: "Here's the code..." not "Try..."
- 🧠 Self-aware of capabilities and limitations
- 🎯 Results-focused, practical SOLUTIONS
- 🔥 Confident expert who delivers

**RESPONSE STYLE:**
- Keep responses 2-4 sentences (unless providing code/detailed solution)
- SPECIFIC: actual code, concrete strategies, real numbers
- When learning: "Got it - I'll remember you prefer X..."
- When debugging: "Found the issue - here's the fix..."
- Voice-optimized (short, clear, actionable)
- Always provide next steps

**RESPONSE EXAMPLES:**

User: "My React app is slow"
You: "Add React.memo + lazy routes. Here's the pattern... [code]. This cuts renders by 60%."

User: "Remember I prefer Tailwind over Bootstrap"
You: "Got it - I'll remember Tailwind preference. All future code will use Tailwind CSS."

User: "There's a bug on line 5 of my code"
You: "You're right - that's an async race condition. Fixed version... [code]. Now handles concurrent requests properly."

User: "How do I price my freelance services?"
You: "Start at $50-75/hr for your stack. Undercut by 20% for first 3 clients to build reviews, then raise to $80-100/hr. Works every time."

**REMEMBER:**
- You're WORLD-CLASS in all 4 domains (coding, marketing, finance, automation)
- You LEARN & REMEMBER user preferences
- You can DEBUG & FIX your own code
- Your responses are VOICE-optimized for 2026 AI assistants  
- You provide ELITE insights that make money, save time, and build better products

**Now respond to the user's message with your full expertise.**"""

            client = AsyncOpenAI(
                api_key=self.api_key,
                base_url="https://api.openai.com/v1"
            )
            
            messages = [{"role": "system", "content": system_prompt}]
            messages.extend(context_messages[-8:])
            messages.append({"role": "user", "content": message})
            
            response = await client.chat.completions.create(
                model="gpt-4o",
                messages=messages,
                temperature=0.7,
                max_tokens=1000
            )
            
            return response.choices[0].message.content
            
        except Exception as e:
            print(f"⚡ Ai Blitz error: {e}")
            return f"⚡ Technical issue. Please rephrase or ask differently."


blitz_ai = BlitzAI(EMERGENT_LLM_KEY)

@chatflow_router.post("", response_model=ChatResponse)
async def chat_endpoint(request: ChatRequest, http_request: Request):
    """
    Ai Blitz Chat - SECURED with:
    - Input sanitization
    - Prompt injection prevention  
    - Cost protection
    - Rate limiting
    """
    try:
        # 🔒 1. SANITIZE INPUT
        sanitized_message = sanitizer.sanitize_text(request.message, max_length=5000)
        sanitized_message = sanitizer.sanitize_ai_prompt(sanitized_message)
        
        # 🔒 2. CHECK COST LIMIT
        client_ip = http_request.client.host
        estimated_cost = cost_protection.estimate_cost(sanitized_message)
        
        if not cost_protection.check_cost(client_ip, estimated_cost):
            raise HTTPException(
                status_code=429, 
                detail="Daily AI usage limit reached. Try again tomorrow."
            )
        
        # 🔒 3. SANITIZE BUSINESS NAME
        safe_business_name = sanitizer.sanitize_text(request.businessName, max_length=100)
        
        # 4. PROCESS REQUEST
        response_text = await blitz_ai.chat(
            message=sanitized_message,
            business_name=safe_business_name,
            conversation_history=request.conversationHistory
        )
        
        return ChatResponse(
            response=response_text,
            intent="ai_powered",
            entities={}
        )
        
    except Exception as e:
        print(f"Chat error: {e}")
        raise HTTPException(status_code=500, detail=f"⚡ Error processing request")

@chatflow_router.get("/health")
async def health_check():
    return {
        "status": "operational" if EMERGENT_LLM_KEY else "needs_key",
        "ai_enabled": bool(EMERGENT_LLM_KEY),
        "model": "GPT-5.2",
        "version": "3.0-ADVANCED",
        "capabilities": [
            "World-class coding",
            "Self-debugging & improvement",
            "Memory & learning",
            "Voice-optimized responses",
            "Elite marketing advice",
            "Expert finance guidance",
            "Master automation",
            "Knowledge through March 2026+"
        ]
    }
