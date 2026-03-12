import React, { useEffect, useRef, useState } from 'react';
import Reveal from 'reveal.js';
import 'reveal.js/reveal.css';
import 'reveal.js/theme/black.css';
import { ChevronLeft, ChevronRight, Mic, MicOff } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PresentationProps {
  children: React.ReactNode;
}

const Presentation: React.FC<PresentationProps> = ({ children }) => {
  const deckRef = useRef<HTMLDivElement>(null);
  const [reveal, setReveal] = useState<Reveal.Api | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const [showVoiceHint, setShowVoiceHint] = useState(false);

  useEffect(() => {
    if (deckRef.current) {
      const deck = new Reveal(deckRef.current, {
        hash: true,
        transition: 'slide',
        transitionSpeed: 'slow',
        backgroundTransition: 'fade',
        controls: false,
        progress: false,
        center: true,
        touch: true,
        keyboard: true,
        embedded: false,
        help: false,
        autoAnimate: true,
        width: 1600,
        height: 900,
        margin: 0.05,
        minScale: 0.2,
        maxScale: 2.0,
      });

      deck.initialize().then(() => {
        setReveal(deck);
        setTotalSlides(deck.getTotalSlides());
        deck.layout(); // Force layout update
      });

      deck.on('slidechanged', (event: any) => {
        setCurrentSlide(event.indexh);
      });
    }
  }, []);

  // Sync layout on resize
  useEffect(() => {
    const handleResize = () => reveal?.layout();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [reveal]);

  // Voice Control
  useEffect(() => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) return;

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onresult = (event: any) => {
      const command = event.results[event.results.length - 1][0].transcript.toLowerCase().trim();
      if (command.includes('next') || command.includes('forward')) reveal?.next();
      else if (command.includes('previous') || command.includes('back')) reveal?.prev();
    };

    if (isListening) {
      recognition.start();
      setShowVoiceHint(true);
      setTimeout(() => setShowVoiceHint(false), 4000);
    } else {
      recognition.stop();
    }

    return () => recognition.stop();
  }, [isListening, reveal]);

  const toggleVoice = () => setIsListening(!isListening);

  return (
    <div className="relative w-screen h-screen overflow-hidden z-10">
      {/* Futuristic HUD */}
      <div className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6 flex justify-between items-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="pointer-events-auto flex items-center gap-3"
        >
          <div className="text-[10px] md:text-sm font-medium tracking-[0.2em] md:tracking-[0.3em] text-[#00f2fe] uppercase opacity-90">
            SCRAP MANAGEMENT SYSTEM
          </div>
          <div className="h-px w-4 md:w-8 bg-gradient-to-r from-[#00f2fe] to-transparent" />
        </motion.div>

        <div className="pointer-events-auto flex items-center gap-3 md:gap-5">
          <button
            onClick={toggleVoice}
            className={`p-2 md:p-3 rounded-2xl transition-all duration-300 border ${isListening
                ? 'border-red-500/50 bg-red-500/10 text-red-400 shadow-[0_0_20px_#ef4444]'
                : 'border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 text-white/70'
              }`}
            title={isListening ? 'Stop Voice Control' : 'Activate Voice Control'}
          >
            {isListening ? <Mic size={18} className="animate-pulse" /> : <MicOff size={18} />}
          </button>

          <AnimatePresence>
            {isListening && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="text-[10px] md:text-xs font-mono text-red-400 flex items-center gap-2"
              >
                <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-red-500" />
                </span>
                LISTENING
              </motion.div>
            )}
          </AnimatePresence>

          <div className="text-white/40 text-[10px] md:text-xs font-mono tracking-widest">
            {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
          </div>
        </div>
      </div>

      {/* Voice Hint */}
      <AnimatePresence>
        {showVoiceHint && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed top-16 md:top-20 left-1/2 -translate-x-1/2 z-50 bg-black/70 backdrop-blur-xl border border-white/10 text-white/70 text-[10px] md:text-xs px-4 md:px-6 py-2 rounded-2xl font-mono"
          >
            Say <span className="text-[#00f2fe]">“next”</span> or <span className="text-[#00f2fe]">“previous”</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="reveal w-full h-full" ref={deckRef}>
        <div className="slides">
          {children}
        </div>
      </div>

      {/* Neon Navigation */}
      <div className="fixed bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 md:gap-8 w-[90vw] md:w-auto justify-center">
        <button
          onClick={() => reveal?.prev()}
          className="p-3 md:p-4 glass-card rounded-2xl md:rounded-3xl text-white/70 hover:text-white transition-all hover:shadow-[0_0_25px_#00f2fe] active:scale-95"
        >
          <ChevronLeft size={20} className="md:w-7 md:h-7" />
        </button>

        <div className="flex-1 md:flex-none w-full md:w-80 h-1 bg-white/10 rounded-full overflow-hidden shadow-inner">
          <motion.div
            className="h-full bg-gradient-to-r from-[#00f2fe] via-[#00fe9b] to-[#4facfe]"
            initial={{ width: '0%' }}
            animate={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
            transition={{ type: 'spring', stiffness: 280, damping: 25 }}
          />
        </div>

        <button
          onClick={() => reveal?.next()}
          className="p-3 md:p-4 glass-card rounded-2xl md:rounded-3xl text-white/70 hover:text-white transition-all hover:shadow-[0_0_25px_#00fe9b] active:scale-95"
        >
          <ChevronRight size={20} className="md:w-7 md:h-7" />
        </button>
      </div>
    </div>
  );
};

export default Presentation;