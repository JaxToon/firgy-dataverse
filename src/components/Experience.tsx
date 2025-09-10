import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin, TrendingUp } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Telkomsel",
      position: "Research Intern",
      location: "Jakarta Selatan, DKI Jakarta",
      period: "Jan 2025 - Jul 2025",
      type: "Current",
      achievements: [
        "Developed AI to compute matching scores and reduced candidate screening time by over 90%",
        "Validated system performance with HR experts, obtaining average feedback score of 4.38/5 for accuracy",
        "Collected, analyzed, and synthesized over 6000+ user research data"
      ],
      skills: ["AI Development", "System Validation", "Data Analysis", "Research"]
    },
    {
      company: "Solve Education! Foundation",
      position: "Product Assistant",
      location: "Bandung, Jawa Barat",
      period: "Oct 2024 - Jan 2025",
      type: "Recent",
      achievements: [
        "Developed semi-automatic WhatsApp message blast using Python to reach 5000+ users",
        "Assisted in producing digital assets",
        "Point of contact for 60+ users"
      ],
      skills: ["Python", "Automation", "Digital Assets", "User Management"]
    },
    {
      company: "Solve Education! Foundation",
      position: "Data Analyst",
      location: "Bandung, Jawa Barat",
      period: "Jul 2024 - Oct 2024",
      type: "Recent",
      achievements: [
        "Conducted research on over 1,000,000 users using MetaBase and LookerStudio",
        "Participated in 'Solve Education x Allianz Fun English' project, reaching 240+ new students in 4 days",
        "Developed data pipeline utilizing Docker and Airflow",
        "Attended strategic meetings, including one with Boeing's Country Director"
      ],
      skills: ["MetaBase", "LookerStudio", "Docker", "Airflow", "Big Data"]
    },
    {
      company: "Telkomsel",
      position: "Data Analytic Intern",
      location: "Jakarta Selatan, DKI Jakarta",
      period: "Feb 2024 - Jul 2024",
      type: "Previous",
      achievements: [
        "Elected as 'Head Office Representative Spokesperson' for MSIB Batch 6",
        "Analyzed learning and promotion data with 15,000+ rows, improving feedback analysis with two new algorithms impacting 5,000+ employees",
        "Conducted feedback analysis on 250+ MSIB mentees and 200+ trainees using NLP techniques",
        "Led and facilitated two in-house training sessions for 40+ employees",
        "Created social media content totaling 200,000+ views"
      ],
      skills: ["NLP", "Algorithm Development", "Training & Mentoring", "Social Media"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Current":
        return "bg-primary text-primary-foreground";
      case "Recent":
        return "bg-accent text-accent-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <section className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building expertise through hands-on experience at leading technology companies
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="data-card p-8 relative overflow-hidden">
              {/* Background Gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full -translate-y-8 translate-x-8" />
              
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold text-foreground">{exp.position}</h3>
                      <Badge className={getTypeColor(exp.type)}>{exp.type}</Badge>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-primary" />
                        <span className="font-medium text-foreground">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-accent" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-data-purple" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;