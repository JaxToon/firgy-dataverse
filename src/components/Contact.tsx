import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Github, MapPin, Languages, Briefcase } from "lucide-react";

const Contact = () => {
  const softSkills = [
    "Data Driven",
    "Grit & Growth Mindset", 
    "Adaptive",
    "Execution Focus",
    "Collaboration",
    "Integrity",
    "Transparency",
    "Drive Innovation",
    "Partnership Building"
  ];

  const volunteerExperiences = [
    "Community Service Member - Personal Data and Media Breach Prevention (2022)",
    "Facilitator - English Speaking Workshop and International Student Forum (2023)",
    "Facilitator - Program Anak Muda Melek Finansial with Yayasan Allianz Peduli (2023)",
    "Speaker - 'Carita Barudak' by Marketing Crew Telkom University (2024)",
    "Speaker - 'Rise Up: Learn From Every One' by Telkom Indonesia (2025)",
    "Speaker - 'Rise Career Coaching 2025' by HIMADS"
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform data into actionable insights. Let's discuss how I can contribute to your team's success.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="data-card p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="text-sm">Indonesia</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                  <Briefcase className="w-4 h-4 text-primary" />
                  <span className="text-sm">Available for Hire</span>
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse ml-auto"></div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                  <Languages className="w-4 h-4 text-data-purple" />
                  <div className="text-sm">
                    <div>Indonesian (Native)</div>
                    <div>English (EPrT: 537/677)</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <Button variant="hero" className="w-full" size="lg">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
                
                <div className="flex gap-2">
                  <Button variant="glow" className="flex-1">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button variant="data" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Skills and Experience */}
          <div className="lg:col-span-2 space-y-6">
            {/* Soft Skills */}
            <Card className="data-card p-6">
              <h3 className="text-xl font-bold mb-4">Soft Skills & Mindset</h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Volunteer & Speaking */}
            <Card className="data-card p-6">
              <h3 className="text-xl font-bold mb-4">Volunteer & Speaking Experience</h3>
              <div className="space-y-3">
                {volunteerExperiences.map((experience, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{experience}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Call to Action */}
            <Card className="data-card p-6 text-center bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <h3 className="text-2xl font-bold mb-3">Ready to Make an Impact</h3>
              <p className="text-muted-foreground mb-6">
                As a fresh graduate with hands-on experience in AI development, data analysis, and team leadership, 
                I'm excited to bring my passion for data science to your organization.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="hero" size="lg">
                  Download CV
                </Button>
                <Button variant="glow" size="lg">
                  Schedule Meeting
                </Button>
              </div>

              <div className="mt-6 flex justify-center items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  <span>Fresh Graduate</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span>Data Science Expert</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-data-purple"></div>
                  <span>Team Leader</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;