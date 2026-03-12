# ⚡ Ai Blitz

Advanced AI assistant powered by GPT with 4 expert domains.

## Features
- 🧠 **4 Expert Personas:** Coding, Marketing, Finance, Automation
- 💬 **Conversational Memory** - Remembers your preferences
- 🔧 **Self-Debugging** - Can analyze and fix code issues
- 🎤 **Voice-Ready** - Optimized for Google Assistant/Siri  
- 🔒 **Security Built-In** - Rate limiting & cost protection
- 📱 **PWA-Enabled** - Installable as native app
- 🎨 **Dark Professional Theme**

## Tech Stack
- **Frontend:** React + Vite + Tailwind CSS
- **Backend:** FastAPI + Python + OpenAI
- **AI:** GPT-4o via Emergent LLM Key
- **Deployment:** Railway, Render, Fly.io

## Quick Start

### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn server:app --reload
```

### Frontend
```bash
cd frontend
yarn install
yarn dev
```

## Environment Variables

**Backend (.env):**
```
EMERGENT_LLM_KEY=your_emergent_llm_key
CORS_ORIGINS=*
```

**Frontend (.env):**
```
VITE_API_URL=/api
```

## Deploy to Railway

1. Push to GitHub
2. Connect Railway to your repo  
3. Set root directory: `backend`
4. Add EMERGENT_LLM_KEY to environment variables
5. Deploy!

## Expert Capabilities

### 💻 World-Class Coding
- Python, JavaScript, React, FastAPI mastery
- Can write, debug, and optimize code
- Self-improving algorithms

### 📈 Elite Marketing  
- SEO, copywriting, conversion optimization
- Upwork/Fiverr profile optimization
- Growth hacking strategies

### 💰 Financial Advisor
- Freelance finance management
- Investment strategies  
- Pricing optimization

### ⚙️ Automation Master
- Zapier, Make, n8n workflows
- AI agents and autonomous systems
- Process optimization

## Market Value
**$5,000 - $7,000** as a standalone AI product

## License
MIT - 100% yours to customize and sell!
