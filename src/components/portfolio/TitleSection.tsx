import { FileText, User, Award, BookOpen, Mail, Briefcase, Camera, Video, CheckCircle, CreditCard, FileCheck, ChevronDown } from "lucide-react";

const tocItems = [
  { num: 1, label: "Title Page & Table of Contents", icon: FileText },
  { num: 2, label: "Identity Photo", icon: User },
  { num: 3, label: "National ID Card", icon: CreditCard },
  { num: 4, label: "Declaration of Authenticity", icon: FileCheck },
  { num: 5, label: "Case Studies (1, 2 & 3)", icon: BookOpen },
  { num: 6, label: "Introductory Letter", icon: Mail },
  { num: 7, label: "Resume", icon: Briefcase },
  { num: 8, label: "Prior Learning Narrative & Documentation", icon: Award },
  { num: 9, label: "Photos", icon: Camera },
  { num: 10, label: "Videos", icon: Video },
  { num: 11, label: "RPL Performance Criteria", icon: CheckCircle },
];

const TitleSection = () => {
  const scrollToContent = () => {
    const element = document.getElementById("identity");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="title" className="min-h-screen pt-20 pb-16 bg-pattern">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center pt-12 md:pt-20 mb-16 animate-fade-in">
          <div className="badge-gold mb-6">
            Recognition of Prior Learning
          </div>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
            OMBERE THOMAS
          </h1>
          <h2 className="font-heading text-2xl md:text-3xl text-primary/80 mb-2">
            OPADO
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-6">
            Senior Pastor • Christ Coworkers Fellowship Churches
          </p>
          <div className="divider-gold mt-8"></div>
          
          <button
            onClick={scrollToContent}
            className="mt-12 inline-flex flex-col items-center text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-sm mb-2">Explore Portfolio</span>
            <ChevronDown className="animate-bounce" size={24} />
          </button>
        </div>

        {/* Table of Contents */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="section-title">Table of Contents</h2>
            <p className="section-subtitle">Navigate through my RPL Portfolio</p>
          </div>
          
          <div className="card-elevated">
            <div className="divide-y divide-border">
              {tocItems.map((item, index) => (
                <div
                  key={item.num}
                  className="toc-item animate-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="icon-circle">
                    <item.icon size={20} />
                  </div>
                  <span className="font-heading font-semibold text-secondary mr-2">
                    {item.num}.
                  </span>
                  <span className="text-foreground font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TitleSection;
