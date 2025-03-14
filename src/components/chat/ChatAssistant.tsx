
import { useState, useEffect } from "react";
import { MessageCircle, X, Send, Maximize2, Minimize2 } from "lucide-react";
import { cn } from "@/lib/utils";

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<{text: string, sender: 'user' | 'bot', timestamp: Date}[]>([
    {
      text: "Hello! I'm your Processimo AI assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Add user message to chat
      setChatHistory([
        ...chatHistory,
        {
          text: message,
          sender: 'user',
          timestamp: new Date()
        }
      ]);
      
      // Simulate bot response
      setTimeout(() => {
        setChatHistory(prev => [
          ...prev, 
          {
            text: "I'm a demo assistant for Processimo. In the full version, I would be able to answer your questions about our platform, help you set up AI agents, and provide customer support.",
            sender: 'bot',
            timestamp: new Date()
          }
        ]);
      }, 1000);
      
      setMessage("");
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:bg-primary/90 transition-all duration-300 z-40"
        aria-label="Open chat assistant"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 w-96 rounded-2xl bg-background border border-border shadow-lg transition-all duration-300 z-40",
        isMinimized ? "h-16" : "h-[500px]"
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
          <h3 className="font-medium">Processimo Assistant</h3>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={toggleMinimize}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label={isMinimized ? "Maximize chat" : "Minimize chat"}
          >
            {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
          </button>
          <button
            onClick={toggleChat}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close chat"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          <div className="p-4 h-[380px] overflow-y-auto scrollbar-hidden">
            {chatHistory.map((msg, index) => (
              <div
                key={index}
                className={cn(
                  "mb-4 max-w-[80%] p-3 rounded-lg animate-fade-in",
                  msg.sender === "user"
                    ? "ml-auto bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground"
                )}
              >
                <p className="text-sm">{msg.text}</p>
                <span className="text-xs opacity-70 mt-1 block">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="border-t border-border p-4">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 py-2 px-3 bg-secondary rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground p-2 rounded-lg hover:bg-primary/90 transition-colors"
                aria-label="Send message"
              >
                <Send size={18} />
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default ChatAssistant;
