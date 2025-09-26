import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Target } from "lucide-react";

// Import your custom logos here
// import pythonLogo from "@/assets/logos/python.png";
// import tensorflowLogo from "@/assets/logos/tensorflow.png";
// import pytorchLogo from "@/assets/logos/pytorch.png";
// ... add more logo imports

const About = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate data scientist with hands-on experience in AI development, 
            machine learning, and large-scale data analysis
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              My passion for data extends beyond academic boundaries—it's my lens for understanding 
              and impacting the world. Through my academic explorations and professional experiences 
              at leading companies like <span className="text-primary font-semibold">Telkomsel</span> and 
              <span className="text-accent font-semibold"> Solve Education!</span>, I've developed 
              expertise in AI development, data analysis, and system optimization.
            </p>

            <p className="text-lg leading-relaxed">
              I've successfully reduced candidate screening time by over <span className="text-data-cyan font-bold">90%</span> 
              through AI solutions, analyzed datasets with <span className="text-data-purple font-bold">1,000,000+</span> users, 
              and led teams of <span className="text-primary font-bold">40+</span> members in various organizational roles.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              <div className="data-card p-4 text-center rounded-lg">
                <GraduationCap className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">3.74</div>
                <div className="text-sm text-muted-foreground">GPA / 4.00</div>
              </div>
              <div className="data-card p-4 text-center rounded-lg">
                <Award className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">90%</div>
                <div className="text-sm text-muted-foreground">Time Reduction</div>
              </div>
              <div className="data-card p-4 text-center rounded-lg">
                <Target className="w-8 h-8 text-data-purple mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">1M+</div>
                <div className="text-sm text-muted-foreground">Users Analyzed</div>
              </div>
            </div>
          </div>

          {/* Tools Grid */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6">Tools I Use</h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { name: "Python", logo: null, color: "primary" },
                { name: "TensorFlow", logo: null, color: "accent" },
                { name: "PyTorch", logo: null, color: "data-purple" },
                { name: "SQL", logo: null, color: "data-cyan" },
                { name: "Tableau", logo: null, color: "primary" },
                { name: "Power BI", logo: null, color: "accent" },
                { name: "Git", logo: null, color: "data-purple" },
                { name: "Docker", logo: null, color: "data-cyan" },
                { name: "Jupyter", logo: null, color: "primary" },
                { name: "Pandas", logo: null, color: "accent" },
                { name: "Scikit-learn", logo: null, color: "data-purple" },
                { name: "AWS", logo: null, color: "data-cyan" }
              ].map((tool, index) => (
                <div 
                  key={index} 
                  className={`data-card p-4 text-center rounded-lg border-${tool.color}/20 hover:border-${tool.color}/40 transition-all duration-300`}
                >
                  {tool.logo ? (
                    <img 
                      src={tool.logo} 
                      alt={`${tool.name} logo`}
                      className="w-8 h-8 mx-auto mb-2 object-contain"
                    />
                  ) : (
                    <div className={`w-8 h-8 mx-auto mb-2 bg-${tool.color}/20 rounded flex items-center justify-center`}>
                      <span className={`text-${tool.color} text-xs font-bold`}>
                        {tool.name.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                  )}
                  <span className={`font-medium text-${tool.color} text-sm`}>{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;