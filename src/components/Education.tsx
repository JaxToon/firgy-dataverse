import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, BookOpen, Users } from "lucide-react";

const Education = () => {
  const organizationalExp = [
    {
      org: "Himpunan Mahasiswa Data Science",
      position: "Vice President",
      period: "May 2023 - Mar 2024",
      achievements: [
        "Event Supervisor of Study Group, coordinating 8 courses and marketing to 300+ students",
        "Mentored juniors in Algorithm Complexity Analysis and AI, impacting 100+ students",
        "Head of public relations for GALAKSI, managing communication with 120+ juniors",
        "Head of logistics for PKKMB S1 Data Science 2023, supporting 120+ juniors and 40+ team members"
      ]
    },
    {
      org: "Telkom University - Market Day 2022",
      position: "Logistics Team Member",
      period: "Nov 2022",
      achievements: [
        "Supported logistical needs for event with 200+ tenants and 2,100+ participants from 14 majors",
        "Coordinated with logistics team to ensure seamless operations"
      ]
    },
    {
      org: "Telkom University - PPKMB S1 Data Science 2022",
      position: "Chief Executive",
      period: "Aug 2022 - Sep 2022",
      achievements: [
        "Led and organized event with 40+ team members and 120+ participants",
        "Chaired event meetings and coordinated all committee members"
      ]
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Education & <span className="text-primary">Leadership</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic excellence combined with extensive leadership experience in student organizations
          </p>
        </div>

        {/* Main Education Card */}
        <Card className="data-card p-8 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-y-10 translate-x-10" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-8 h-8 text-primary" />
                <Badge className="bg-primary text-primary-foreground">Graduate with Honors</Badge>
              </div>
              
              <h3 className="text-3xl font-bold mb-2">Bachelor of Data Science</h3>
              <p className="text-xl text-muted-foreground mb-4">Universitas Telkom • Jawa Barat, Indonesia</p>
              <p className="text-lg text-muted-foreground mb-6">Sep 2021 - Aug 2025</p>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent" />
                  <span className="text-2xl font-bold text-accent">3.74</span>
                  <span className="text-muted-foreground">/ 4.00 GPA</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Related Studies
              </h4>
              
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Machine Learning",
                  "Artificial Intelligence", 
                  "Project Management",
                  "Big Data Infrastructure",
                  "Data Visualization",
                  "Data Analysis",
                  "Time Series Analysis",
                  "Technology"
                ].map((subject, index) => (
                  <Badge key={index} variant="secondary" className="justify-start">
                    {subject}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Organizational Experience */}
        <div>
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Users className="w-8 h-8 text-accent" />
            Organizational Experience
          </h3>
          
          <div className="space-y-6">
            {organizationalExp.map((exp, index) => (
              <Card key={index} className="data-card p-6">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-foreground mb-1">{exp.position}</h4>
                    <p className="text-primary font-semibold mb-2">{exp.org}</p>
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;