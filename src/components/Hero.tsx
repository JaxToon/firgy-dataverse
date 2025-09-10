import { Button } from "@/components/ui/button";
import { ChevronDown, Database, Brain, BarChart3 } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-glow">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Data Science Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-data-darker/50 via-background/80 to-background"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <Database className="absolute top-1/4 left-1/4 w-8 h-8 text-primary/20 floating-animation" style={{animationDelay: '0s'}} />
        <Brain className="absolute top-1/3 right-1/4 w-6 h-6 text-accent/20 floating-animation" style={{animationDelay: '1s'}} />
        <BarChart3 className="absolute bottom-1/3 left-1/3 w-7 h-7 text-data-purple/20 floating-animation" style={{animationDelay: '2s'}} />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
        <div className="slide-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 glow-text">
            <span className="text-foreground">FIRGY</span>{" "}
            <span className="bg-gradient-to-r from-primary to-data-purple bg-clip-text text-transparent">
              MATANNATIKKA
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Data Science Graduate passionate about transforming data into 
            <span className="text-accent font-semibold"> actionable insights</span> and 
            <span className="text-primary font-semibold"> real-world impact</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8">
              View My Work
            </Button>
            <Button variant="glow" size="lg" className="text-lg px-8">
              Contact Me
            </Button>
          </div>

          <div className="flex justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span>Available for hire</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <span>Fresh Graduate</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <ChevronDown className="w-6 h-6 text-muted-foreground animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;