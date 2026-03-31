'use client';

import { motion } from 'motion/react';
import { Sparkles, Brain, Activity, ScanFace, Upload, LineChart, CheckCircle2, ClipboardList } from 'lucide-react';
import { useState } from 'react';

const features = [
  {
    icon: <Brain className="w-8 h-8 text-primary" />,
    title: 'Enhanced Pari Chatbot',
    description: 'Chat with our advanced AI assistant, Pari, for real-time wellness tips, symptom checking, and personalized Ayurvedic recommendations.',
  },
  {
    icon: <ScanFace className="w-8 h-8 text-secondary" />,
    title: 'AI-Driven Body Scan',
    description: 'Upload a photo or answer a quick quiz to let our AI determine your unique body type (Prakriti) and suggest the best lifestyle changes.',
  },
  {
    icon: <Activity className="w-8 h-8 text-primary" />,
    title: 'AI Health Metric Tracking',
    description: 'Our AI algorithms analyze your daily habits and health metrics to predict trends and adjust your diet and fitness plans dynamically.',
  },
];

export default function AIFeatures() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [scanStatus, setScanStatus] = useState<'idle' | 'scanning' | 'complete' | 'quiz'>('idle');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const quizQuestions = [
    {
      question: "How would you describe your body frame?",
      options: [
        "Thin, light, prominent joints (Vata)",
        "Medium, well-proportioned (Pitta)",
        "Broad, heavy, solid build (Kapha)"
      ]
    },
    {
      question: "How is your skin typically?",
      options: [
        "Dry, rough, or thin (Vata)",
        "Warm, reddish, sensitive (Pitta)",
        "Thick, oily, smooth (Kapha)"
      ]
    }
  ];

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(curr => curr + 1);
      setSelectedAnswer(null);
    } else {
      handleScan();
    }
  };

  const handleScan = () => {
    setScanStatus('scanning');
    setTimeout(() => setScanStatus('complete'), 2000);
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden border-y border-border/50">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4 shadow-[0_0_15px_rgba(0,200,83,0.2)]"
          >
            <Sparkles size={16} className="text-secondary" />
            <span>Next-Gen Technology</span>
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Powered by <span className="text-gradient-primary">Artificial Intelligence</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground mt-6 leading-relaxed"
          >
            Experience the future of health. Purezal integrates cutting-edge AI to provide hyper-personalized, data-driven wellness solutions.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-accent/30 p-8 rounded-3xl border border-border/50 hover:border-primary/40 transition-all hover:-translate-y-2 group cursor-pointer"
              onClick={() => setActiveDemo(feature.title)}
            >
              <div className="mb-6 p-4 inline-block rounded-2xl bg-background border border-border group-hover:shadow-[0_0_20px_rgba(0,200,83,0.2)] transition-all">
                {feature.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {feature.description}
              </p>
              <span className="text-primary font-semibold text-sm group-hover:underline">Try Demo &rarr;</span>
            </motion.div>
          ))}
        </div>

        {/* Interactive Demo Section */}
        {activeDemo === 'AI-Driven Body Scan' && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="bg-accent/20 border border-border rounded-3xl p-8 max-w-2xl mx-auto text-center"
          >
            <h4 className="text-2xl font-bold mb-4">AI Body Scan Demo</h4>
            <p className="text-muted-foreground mb-8">Upload a photo or take a quick quiz to analyze your Prakriti (Body Constitution).</p>
            
            {scanStatus === 'idle' && (
              <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch w-full">
                {/* Upload Option */}
                <div className="flex-1 flex flex-col items-center justify-center p-6 border-2 border-dashed border-primary/50 rounded-2xl hover:bg-primary/5 transition-colors">
                  <Upload className="w-10 h-10 text-primary mb-4" />
                  <span className="font-medium mb-4">Select a photo</span>
                  <label className="cursor-pointer px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 flex items-center gap-2 text-sm">
                    <Upload size={16} />
                    Upload Image
                    <input 
                      type="file" 
                      accept="image/*" 
                      className="hidden" 
                      onChange={handleScan} 
                    />
                  </label>
                  <span className="text-xs text-muted-foreground mt-4">JPG, PNG (Max 5MB)</span>
                </div>

                <div className="flex items-center justify-center text-muted-foreground font-medium">OR</div>

                {/* Quiz Option */}
                <div className="flex-1 flex flex-col items-center justify-center p-6 border-2 border-dashed border-secondary/50 rounded-2xl hover:bg-secondary/5 transition-colors">
                  <ClipboardList className="w-10 h-10 text-secondary mb-4" />
                  <span className="font-medium mb-4">Answer a few questions</span>
                  <button 
                    onClick={() => setScanStatus('quiz')}
                    className="px-6 py-2 bg-secondary text-secondary-foreground rounded-full font-medium hover:bg-secondary/90 transition-colors shadow-lg shadow-secondary/20 flex items-center gap-2 text-sm"
                  >
                    <ClipboardList size={16} />
                    Take Quiz
                  </button>
                  <span className="text-xs text-muted-foreground mt-4">Takes ~2 minutes</span>
                </div>
              </div>
            )}

            {scanStatus === 'quiz' && (
              <div className="flex flex-col items-center justify-center w-full text-left animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h5 className="text-xl font-bold mb-6 text-center w-full">Quick Prakriti Quiz ({currentQuestion + 1}/{quizQuestions.length})</h5>
                <div className="w-full max-w-md space-y-3">
                  <p className="font-medium mb-3 text-lg">{currentQuestion + 1}. {quizQuestions[currentQuestion].question}</p>
                  {quizQuestions[currentQuestion].options.map((option, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setSelectedAnswer(idx)} 
                      className={`w-full p-4 border rounded-xl text-left transition-all ${selectedAnswer === idx ? 'border-primary bg-primary/10 ring-2 ring-primary/20' : 'border-border hover:border-primary/50 hover:bg-primary/5'}`}
                    >
                      {String.fromCharCode(65 + idx)}. {option}
                    </button>
                  ))}
                  <div className="pt-4 flex justify-end">
                    <button 
                      onClick={handleNextQuestion}
                      disabled={selectedAnswer === null}
                      className="px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {currentQuestion < quizQuestions.length - 1 ? 'Next' : 'Finish'}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {scanStatus === 'scanning' && (
              <div className="flex flex-col items-center justify-center h-48">
                <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-lg font-medium animate-pulse text-primary">Analyzing your features...</p>
              </div>
            )}

            {scanStatus === 'complete' && (
              <div className="flex flex-col items-center justify-center w-full text-left animate-in fade-in zoom-in-95 duration-500">
                <CheckCircle2 className="w-16 h-16 text-secondary mb-4 mx-auto" />
                <h5 className="text-2xl font-bold text-primary mb-6 text-center">Prakriti analysis complete!</h5>
                
                <div className="bg-background p-6 rounded-2xl border border-border w-full mb-6 shadow-sm">
                   <h6 className="font-bold text-xl mb-3">Your Dominant Dosha: <span className="text-primary">Vata-Pitta</span></h6>
                   
                   <div className="space-y-4">
                     <div>
                       <strong className="text-foreground">Key Characteristics:</strong>
                       <p className="text-muted-foreground mt-1">Creative, energetic, and quick-thinking. You may have a tendency to run warm and can sometimes experience stress or digestive heat when out of balance.</p>
                     </div>
                     
                     <div>
                       <strong className="text-foreground">Dietary Recommendations:</strong>
                       <ul className="list-disc pl-5 text-muted-foreground mt-1 space-y-1">
                         <li>Favor warm, grounding, and nourishing foods.</li>
                         <li>Avoid excessively spicy, sour, or very cold foods.</li>
                         <li>Include healthy fats like ghee or olive oil to soothe Vata.</li>
                         <li>Stay hydrated with room-temperature or warm water.</li>
                       </ul>
                     </div>
                   </div>
                </div>

                <div className="bg-primary/10 p-5 rounded-2xl border border-primary/20 w-full mb-8 text-center">
                  <h6 className="font-semibold text-primary mb-2">Next Steps</h6>
                  <p className="text-sm text-primary/80 mb-4">Schedule a 1-on-1 consultation with Pari to create your personalized 30-day wellness plan based on these results.</p>
                  <button className="px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors text-sm shadow-lg shadow-primary/20">
                    Chat with Pari Now
                  </button>
                </div>

                <button 
                  onClick={() => {
                    setScanStatus('idle');
                    setCurrentQuestion(0);
                    setSelectedAnswer(null);
                  }} 
                  className="px-8 py-3 bg-secondary text-secondary-foreground rounded-full font-medium hover:bg-secondary/90 transition-colors shadow-lg shadow-secondary/20"
                >
                  Analyze Again
                </button>
              </div>
            )}
          </motion.div>
        )}

        {activeDemo === 'AI Health Metric Tracking' && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="bg-accent/20 border border-border rounded-3xl p-8 max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-between mb-8">
              <h4 className="text-2xl font-bold">Health Metric Trends</h4>
              <LineChart className="text-primary w-6 h-6" />
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Sleep Quality (AI Predicted)</span>
                  <span className="text-secondary font-bold">85%</span>
                </div>
                <div className="w-full h-3 bg-background rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: '85%' }} transition={{ duration: 1 }} className="h-full bg-secondary rounded-full" />
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Stress Levels</span>
                  <span className="text-primary font-bold">Low</span>
                </div>
                <div className="w-full h-3 bg-background rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: '30%' }} transition={{ duration: 1 }} className="h-full bg-primary rounded-full" />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Hydration Optimization</span>
                  <span className="text-blue-400 font-bold">Optimal</span>
                </div>
                <div className="w-full h-3 bg-background rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: '92%' }} transition={{ duration: 1 }} className="h-full bg-blue-400 rounded-full" />
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-primary/10 rounded-xl border border-primary/20">
              <p className="text-sm text-primary font-medium">💡 AI Insight: Your sleep quality has improved by 15% since adopting the recommended evening routine.</p>
            </div>
          </motion.div>
        )}

        {activeDemo === 'Enhanced Pari Chatbot' && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="bg-accent/20 border border-border rounded-3xl p-8 max-w-2xl mx-auto text-center"
          >
             <h4 className="text-2xl font-bold mb-4">Meet Pari</h4>
             <p className="text-muted-foreground mb-6">Click the chat icon in the bottom right corner of your screen to start a conversation with our enhanced AI wellness guide.</p>
             <div className="inline-block p-4 bg-primary/10 rounded-full animate-bounce">
               <Brain className="w-8 h-8 text-primary" />
             </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
