import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Cpu, User } from 'lucide-react';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "System initialized. I am John's AI avatar. Ask me about his tech stack or experience.", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { id: Date.now(), text: userMsg, sender: 'user' }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = "Please contact John directly for more specific details!";
      const lowerInput = userMsg.toLowerCase();
      
      if (lowerInput.includes('experience') || lowerInput.includes('work')) {
        botResponse = "John is currently building scalable AI architectures and data pipelines. Previously, he led the ML division at TechCorp.";
      } else if (lowerInput.includes('skills') || lowerInput.includes('stack')) {
        botResponse = "Core Stack: Python, PyTorch, React, Node.js, AWS, Kubernetes, and highly optimized SQL/NoSQL databases.";
      } else if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
        botResponse = "Hello, human. How can I assist your evaluation of John's profile?";
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, text: botResponse, sender: 'bot' }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={styles.chatWindow}
            className="surface"
          >
            <div style={styles.chatHeader}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Cpu size={20} color="var(--primary)" />
                <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: '600' }}>AI Assistant</h3>
              </div>
              <button onClick={() => setIsOpen(false)} style={styles.closeBtn}>
                <X size={18} />
              </button>
            </div>
            
            <div style={styles.chatBody}>
              {messages.map((msg) => (
                <div key={msg.id} style={{ ...styles.messageWrapper, justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                  {msg.sender === 'bot' && (
                    <div style={styles.avatarBot}><Cpu size={14} /></div>
                  )}
                  <div style={{
                    ...styles.messageBubble,
                    background: msg.sender === 'user' ? 'var(--primary)' : 'var(--bg-surface)',
                    color: msg.sender === 'user' ? '#000' : 'var(--text-main)',
                    border: msg.sender === 'user' ? 'none' : '1px solid var(--border-color)',
                  }}>
                    {msg.text}
                  </div>
                  {msg.sender === 'user' && (
                    <div style={styles.avatarUser}><User size={14} /></div>
                  )}
                </div>
              ))}
              
              {isTyping && (
                <div style={{...styles.messageWrapper, justifyContent: 'flex-start'}}>
                  <div style={styles.avatarBot}><Cpu size={14} /></div>
                  <div style={{...styles.messageBubble, background: 'var(--bg-surface)', border: '1px solid var(--border-color)'}}>
                    <motion.div style={{ display: 'flex', gap: '4px', padding: '4px 0' }} animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1 }}>
                      <span style={styles.dot}></span><span style={styles.dot}></span><span style={styles.dot}></span>
                    </motion.div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSend} style={styles.chatFooter}>
              <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message..." style={styles.input} />
              <button type="submit" style={{...styles.sendBtn, opacity: input.trim() ? 1 : 0.5}} disabled={!input.trim()}>
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        style={styles.floatingBtn}
      >
        <MessageSquare size={24} color="#000" />
      </motion.button>
    </>
  );
};

const styles = {
  floatingBtn: {
    position: 'fixed',
    bottom: '40px',
    right: '40px',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: 'var(--primary)',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 1000,
    boxShadow: '0 0 25px var(--primary-glow)',
  },
  chatWindow: {
    position: 'fixed',
    bottom: '120px',
    right: '40px',
    width: '360px',
    height: '500px',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  chatHeader: {
    padding: '1.2rem',
    borderBottom: '1px solid var(--border-color)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'var(--bg-card)',
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    color: 'var(--text-muted)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
  chatBody: {
    flex: 1,
    padding: '1.2rem',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    background: 'var(--bg-main)',
  },
  messageWrapper: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: '10px',
  },
  messageBubble: {
    padding: '12px 16px',
    borderRadius: '16px',
    fontSize: '0.95rem',
    lineHeight: '1.5',
    maxWidth: '75%',
    wordBreak: 'break-word',
  },
  avatarBot: {
    width: '28px',
    height: '28px',
    borderRadius: '8px',
    background: 'linear-gradient(135deg, rgba(0,230,118,0.2) 0%, transparent 100%)',
    border: '1px solid var(--primary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--primary)',
  },
  avatarUser: {
    width: '28px',
    height: '28px',
    borderRadius: '8px',
    background: '#222',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
  chatFooter: {
    padding: '1rem',
    borderTop: '1px solid var(--border-color)',
    display: 'flex',
    gap: '10px',
    background: 'var(--bg-surface)',
  },
  input: {
    flex: 1,
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid var(--border-color)',
    borderRadius: '100px',
    padding: '12px 20px',
    color: 'var(--text-main)',
    outline: 'none',
    fontSize: '0.95rem',
    fontFamily: 'Outfit',
  },
  sendBtn: {
    background: 'var(--primary)',
    border: 'none',
    borderRadius: '50%',
    width: '45px',
    height: '45px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: '#000',
    transition: 'all 0.2s',
  },
  dot: {
    width: '6px',
    height: '6px',
    backgroundColor: 'var(--text-muted)',
    borderRadius: '50%',
    display: 'inline-block',
  }
};

export default ChatbotWidget;
