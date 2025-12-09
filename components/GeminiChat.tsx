import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Language } from '../types';

interface Message {
  role: 'user' | 'model';
  text: string;
}

interface GeminiChatProps {
  currentLang: Language;
}

const GeminiChat: React.FC<GeminiChatProps> = ({ currentLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: currentLang === 'en' ? 'Hi! Ask me anything about Samuel.' : (currentLang === 'es' ? '¡Hola! Pregúntame lo que quieras sobre Samuel.' : 'Olá! Pergunte-me qualquer coisa sobre o Samuel.') }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    try {
      if (!process.env.API_KEY) {
         throw new Error("API Key not found");
      }
      
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const systemInstruction = `
        You are a helpful AI assistant for Samuel Albarran's portfolio website. 
        Samuel is a Systems Engineering Student (3 years completed) based in Curitiba, PR.
        He has experience in IT Support (Pizza Hut), Web Design (Apache Creative), and Freelance hardware/networking.
        He speaks Spanish, Portuguese, and English.
        Answer questions about his skills, services (Web Development, IT Support), and background politely and concisely.
        Answer in the language: ${currentLang}.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: [
            ...messages.map(m => ({
                role: m.role,
                parts: [{ text: m.text }]
            })),
            { role: 'user', parts: [{ text: userMsg }] }
        ],
        config: {
            systemInstruction: systemInstruction,
        }
      });

      const text = response.text;
      if (text) {
        setMessages(prev => [...prev, { role: 'model', text: text }]);
      } else {
         setMessages(prev => [...prev, { role: 'model', text: "Sorry, I couldn't generate a response." }]);
      }

    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: "Error connecting to AI service." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-8 w-14 h-14 bg-slate-800 border border-brand-orange/50 rounded-full flex items-center justify-center shadow-lg hover:bg-slate-700 transition z-50 text-brand-orange"
        title="AI Chat"
      >
        <span className="material-icons font-bold text-xl">
            {isOpen ? 'close' : 'voice_chat'}
        </span>
      </button>

      {isOpen && (
        <div className="fixed bottom-40 right-8 w-80 md:w-96 h-[500px] bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 animate-in fade-in slide-in-from-bottom-10">
          <div className="p-4 border-b border-white/10 bg-white/5 flex justify-between items-center">
            <h3 className="font-display text-white">Samuel<span className="text-brand-orange">AI</span></h3>
            <span className="text-xs text-slate-400 bg-white/5 px-2 py-1 rounded">gemini-3-pro</span>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-brand-orange text-black font-medium rounded-tr-none' 
                    : 'bg-white/10 text-slate-200 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                 <div className="bg-white/10 text-slate-400 p-3 rounded-xl text-xs animate-pulse">
                    Thinking...
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-white/10 bg-black/20">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about Samuel..."
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-orange/50"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-brand-orange text-black p-2 rounded-lg hover:bg-orange-400 transition disabled:opacity-50 font-bold"
              >
                ➤
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GeminiChat;