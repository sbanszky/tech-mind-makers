import { Brain, Zap, FlaskConical } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="research-section">
      <div className="container mx-auto text-center">
        <div className="mb-8 flex justify-center space-x-8">
          <Brain className="h-12 w-12 text-neural animate-pulse" />
          <Zap className="h-12 w-12 text-primary animate-pulse delay-100" />
          <FlaskConical className="h-12 w-12 text-biotech animate-pulse delay-200" />
        </div>
        
        <h1 className="mb-6">
          Tech Leaders & Consciousness Research
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          A comprehensive analysis of how influential technology entrepreneurs have explored 
          psychedelics, biotech enhancements, and consciousness-altering substances in their 
          pursuit of innovation and optimization.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="research-card p-6 neural-glow">
            <Brain className="h-8 w-8 text-neural mx-auto mb-4" />
            <h3 className="mb-2">Neural Enhancement</h3>
            <p className="text-muted-foreground">
              Exploring cognitive enhancement and neuroplasticity through various substances and protocols.
            </p>
          </div>
          
          <div className="research-card p-6">
            <Zap className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="mb-2 psychedelic-text">Consciousness Expansion</h3>
            <p className="text-muted-foreground">
              How psychedelic experiences influence creativity, problem-solving, and innovation.
            </p>
          </div>
          
          <div className="research-card p-6">
            <FlaskConical className="h-8 w-8 text-biotech mx-auto mb-4" />
            <h3 className="mb-2">Longevity Biohacking</h3>
            <p className="text-muted-foreground">
              Anti-aging compounds and biohacking protocols for optimal performance and longevity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};