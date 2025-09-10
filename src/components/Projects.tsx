import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Award, Lightbulb, Code, BarChart } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI Talent Matching System",
      description: "Developed an AI system that computes matching scores between candidates and job requirements, reducing screening time by 90%+",
      icon: <Award className="w-6 h-6" />,
      category: "AI & Machine Learning",
      achievements: ["90% time reduction", "4.38/5 accuracy score", "6000+ data points analyzed"],
      tech: ["Python", "TensorFlow", "NLP", "Machine Learning"],
      color: "primary"
    },
    {
      title: "WhatsApp Automation Bot",
      description: "Semi-automatic message blast system using Python to efficiently reach and manage communications with 5000+ users",
      icon: <Code className="w-6 h-6" />,
      category: "Automation & Integration",
      achievements: ["5000+ users reached", "Automated messaging", "User management system"],
      tech: ["Python", "API Integration", "Automation", "Bot Development"],
      color: "accent"
    },
    {
      title: "Million-User Data Analysis",
      description: "Conducted comprehensive research and analysis on 1,000,000+ user dataset using MetaBase and LookerStudio",
      icon: <BarChart className="w-6 h-6" />,
      category: "Big Data Analytics",
      achievements: ["1M+ users analyzed", "Data pipeline with Docker & Airflow", "Strategic insights delivered"],
      tech: ["MetaBase", "LookerStudio", "Docker", "Airflow", "Big Data"],
      color: "data-purple"
    },
    {
      title: "NLP Feedback Analysis System",
      description: "Advanced feedback analysis using NLP techniques including extractive text summarization, word cloud generation, and tokenization",
      icon: <Lightbulb className="w-6 h-6" />,
      category: "Natural Language Processing",
      achievements: ["450+ participants analyzed", "Multiple NLP techniques", "Automated summarization"],
      tech: ["NLP", "Text Summarization", "Tokenization", "Python", "TensorFlow"],
      color: "data-cyan"
    }
  ];

  const certifications = [
    { name: "Deep Learning with Python and Keras", year: "2024", type: "Machine Learning" },
    { name: "Natural Language Processing for Text Summarization", year: "2024", type: "NLP" },
    { name: "Power BI Beginner to Pro Workshop", year: "2024", type: "Data Visualization" },
    { name: "Learn to Code by Mimo", year: "2020", type: "Programming" }
  ];

  const getIconColor = (color: string) => {
    return `text-${color}`;
  };

  const getBorderColor = (color: string) => {
    return `border-l-${color}`;
  };

  return (
    <section className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Projects & <span className="text-primary">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative solutions and technical expertise across various data science domains
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className={`data-card p-6 border-l-4 ${getBorderColor(project.color)} relative overflow-hidden group`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full -translate-y-8 translate-x-8 group-hover:from-primary/10 transition-all duration-300" />
              
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-2 rounded-lg bg-${project.color}/10 ${getIconColor(project.color)}`}>
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <Badge variant="secondary" className="mb-2">{project.category}</Badge>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Achievements</h4>
                    <ul className="space-y-1">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <div className={`w-1 h-1 rounded-full bg-${project.color}`} />
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Intellectual Property & Certifications */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* IP Rights */}
          <Card className="data-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold">Intellectual Property</h3>
            </div>
            
            <div className="space-y-3">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <h4 className="font-semibold text-primary mb-1">
                  Semantic Technologies for High-Precision Talent Matching
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Patent No: EC002025068378 (2025)
                </p>
                <p className="text-sm">
                  Innovation in modern recruitment using semantic technologies for precise talent matching
                </p>
              </div>
            </div>
          </Card>

          {/* Certifications */}
          <Card className="data-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="w-6 h-6 text-accent" />
              <h3 className="text-xl font-bold">Certifications</h3>
            </div>
            
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-sm">{cert.name}</h4>
                    <p className="text-xs text-muted-foreground">{cert.type}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">{cert.year}</Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Additional Projects */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-6">Additional Projects</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Tableau eNPS Analysis",
              "Tableau Likert Scale Analysis", 
              "Sentiment Analysis (Keras/TensorFlow)",
              "Text Summarization (TensorFlow)",
              "Data Science Dashboard (Streamlit)"
            ].map((project, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2">
                {project}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;