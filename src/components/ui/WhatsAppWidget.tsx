import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Set the current time in HH:MM format for the chat bubble timestamp
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}`);
    };
    updateTime();
  }, []);

  // Show a tooltip above the WhatsApp icon 3 seconds after loading to grab user attention
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowTooltip(true);
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [isOpen]);

  // Focus the input when the popup opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 200);
    }
  }, [isOpen]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    
    const phoneNumber = "919443333733"; // Primary Academy Phone Number
    const defaultText = "Hi, I am interested in joining Vasanth Academy and would like to get more information about your courses.";
    const textToSend = message.trim() ? message.trim() : defaultText;
    
    // Construct the WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(textToSend)}`;
    
    // Open in a new tab
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    
    // Reset state and close popup
    setMessage("");
    setIsOpen(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend(e);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end font-sans">
      
      {/* Tooltip Alert */}
      <AnimatePresence>
        {showTooltip && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-16 right-0 mb-2 whitespace-nowrap rounded-xl bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 px-4 py-2.5 text-xs font-medium shadow-[0_4px_15px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_15px_rgba(0,0,0,0.5)] border border-black/5 dark:border-white/5 flex items-center gap-2 cursor-pointer"
            onClick={() => {
              setIsOpen(true);
              setShowTooltip(false);
            }}
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Need help? Chat with us on WhatsApp!
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="ml-1 hover:text-zinc-500 dark:hover:text-zinc-400 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mb-4 w-[360px] max-w-[calc(100vw-2rem)] rounded-2xl bg-white dark:bg-zinc-900 overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.15)] dark:shadow-[0_10px_35px_rgba(0,0,0,0.6)] border border-black/5 dark:border-white/10 flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-700 dark:from-emerald-700 dark:to-teal-800 p-4 text-white flex items-center justify-between shadow-md">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20 bg-white flex items-center justify-center">
                    <img 
                      src="/images/app-logo.png" 
                      alt="Vasanth Academy" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // fallback if logo is not found
                        (e.target as HTMLImageElement).src = "https://placehold.co/100x100/10b981/ffffff?text=VA";
                      }}
                    />
                  </div>
                  {/* Pulsing online status indicator */}
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-emerald-600 rounded-full animate-pulse"></span>
                </div>
                <div>
                  <h3 className="font-semibold text-sm leading-tight tracking-wide">Vasanth Academy</h3>
                  <p className="text-[11px] text-emerald-100/95 flex items-center gap-1 mt-0.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 inline-block animate-ping"></span>
                    Typically replies in minutes
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div 
              className="h-[260px] overflow-y-auto p-4 flex flex-col gap-4 bg-[#efeae2] dark:bg-zinc-950/90 relative"
              style={{
                backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.04) 1px, transparent 0)`,
                backgroundSize: '16px 16px'
              }}
            >
              {/* Message from Academy */}
              <div className="flex flex-col items-start max-w-[85%] self-start">
                <div className="bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 p-3 rounded-2xl rounded-tl-none shadow-sm text-xs leading-relaxed relative">
                  <p className="font-medium text-emerald-600 dark:text-emerald-400 text-[11px] mb-1">Support Assistant</p>
                  <p>Hello! Welcome to Vasanth Academy. 👋</p>
                  <p className="mt-1">How can we help you today with our coaching classes or courses? Let us know!</p>
                  <span className="block text-[9px] text-zinc-400 dark:text-zinc-500 text-right mt-1 font-medium">{currentTime || "Just now"}</span>
                </div>
              </div>
            </div>

            {/* Input area */}
            <form onSubmit={handleSend} className="p-3 bg-white dark:bg-zinc-900 border-t border-black/5 dark:border-white/5 flex gap-2 items-end">
              <textarea
                ref={inputRef}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type a message to send..."
                rows={1}
                className="flex-1 bg-zinc-100 dark:bg-zinc-800/60 border border-transparent focus:border-emerald-500 dark:focus:border-emerald-600 focus:bg-white dark:focus:bg-zinc-800/90 rounded-xl px-4 py-2.5 text-xs resize-none focus:outline-none dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 max-h-20 transition-all font-sans leading-normal"
              />
              <button
                type="submit"
                className="p-2.5 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white rounded-xl transition-all shadow-md shadow-emerald-600/10 cursor-pointer flex items-center justify-center hover:scale-105 active:scale-95 duration-200"
                aria-label="Send message on WhatsApp"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowTooltip(false);
        }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1da851] text-white rounded-full flex items-center justify-center shadow-[0_5px_20px_rgba(37,211,102,0.45)] dark:shadow-[0_5px_20px_rgba(37,211,102,0.25)] relative z-50 cursor-pointer overflow-hidden"
        aria-label="Toggle WhatsApp chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="whatsapp"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center"
            >
              <svg 
                className="w-7 h-7 fill-current" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.46h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
