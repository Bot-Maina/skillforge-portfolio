import { Award, BookOpen, Clock, Target, FileText, CheckCircle } from "lucide-react";

const learningExperiences = [
  {
    title: "School of Ministries Training",
    year: "2013",
    description: "Comprehensive theological education covering biblical studies, homiletics, pastoral care, and church administration.",
    competencies: [
      "Biblical interpretation and exegesis",
      "Sermon preparation and delivery",
      "Pastoral counselling foundations",
      "Church governance and administration"
    ]
  },
  {
    title: "Teacher Certification Program",
    institution: "Light of Africa Ministries",
    description: "Specialized training in Christian education methodologies, curriculum development, and effective teaching strategies.",
    competencies: [
      "Curriculum design for faith-based education",
      "Adult learning facilitation",
      "Assessment and evaluation methods",
      "Classroom management techniques"
    ]
  },
  {
    title: "Leadership in Church and Society Workshop",
    description: "Advanced leadership training focusing on ethical leadership, organizational development, and community impact.",
    competencies: [
      "Transformational leadership principles",
      "Ethical decision-making",
      "Strategic planning for religious organizations",
      "Community mobilization"
    ]
  }
];

const experientialLearning = [
  {
    area: "Preaching & Teaching",
    years: "10+ years",
    evidence: "Regular sermon delivery, Bible study facilitation, and theological instruction"
  },
  {
    area: "Pastoral Counselling",
    years: "10+ years",
    evidence: "Individual and family counselling, crisis intervention, and spiritual guidance"
  },
  {
    area: "Leadership & Administration",
    years: "8+ years",
    evidence: "Church management, team coordination, and organizational development"
  },
  {
    area: "Community Outreach",
    years: "10+ years",
    evidence: "Charitable programs, community engagement, and social ministry initiatives"
  }
];

const PriorLearningSection = () => {
  return (
    <section id="prior-learning" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Prior Learning Narrative</h2>
          <p className="section-subtitle">
            Documentation of formal training, certifications, and experiential learning
          </p>
          <div className="divider-gold"></div>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Formal Training */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="icon-circle">
                <BookOpen size={22} />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-foreground">
                Formal Training & Certifications
              </h3>
            </div>

            <div className="space-y-6">
              {learningExperiences.map((exp, idx) => (
                <div key={idx} className="card-elevated">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h4 className="font-heading text-lg font-semibold text-foreground">
                        {exp.title}
                      </h4>
                      {exp.institution && (
                        <p className="text-secondary font-medium">{exp.institution}</p>
                      )}
                    </div>
                    {exp.year && (
                      <span className="badge-gold flex items-center gap-1">
                        <Clock size={14} />
                        {exp.year}
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Target size={16} className="text-secondary" />
                      Key Competencies Acquired:
                    </p>
                    <div className="grid md:grid-cols-2 gap-2">
                      {exp.competencies.map((comp, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle size={14} className="text-green-600 flex-shrink-0" />
                          {comp}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experiential Learning */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="icon-circle">
                <Award size={22} />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-foreground">
                Experiential Learning & Practice
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {experientialLearning.map((exp, idx) => (
                <div key={idx} className="card-elevated">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h4 className="font-semibold text-foreground">{exp.area}</h4>
                    <span className="text-secondary font-semibold text-sm whitespace-nowrap">
                      {exp.years}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">{exp.evidence}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Narrative */}
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="icon-circle">
                <FileText size={22} />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-foreground">
                Personal Learning Narrative
              </h3>
            </div>

            <div className="card-elevated">
              <div className="prose max-w-none text-foreground">
                <p className="leading-relaxed mb-4">
                  My journey in ministry began with a deep sense of calling and has been enriched through 
                  both formal education and practical experience. The School of Ministries provided me with 
                  a solid theological foundation, while my work in various church settings has allowed me 
                  to develop and refine my pastoral skills.
                </p>
                <p className="leading-relaxed mb-4">
                  Over the years, I have learned that effective ministry requires a combination of 
                  theological knowledge, practical wisdom, and genuine compassion for people. My teaching 
                  certification has enhanced my ability to communicate complex spiritual truths in 
                  accessible ways, while leadership workshops have equipped me to guide organizations 
                  through change and growth.
                </p>
                <p className="leading-relaxed">
                  This portfolio represents not just my credentials, but the transformation that has 
                  occurred through years of dedicated service, continuous learning, and faithful ministry. 
                  Each experience has contributed to my development as a pastoral leader, and I am 
                  committed to continuing this journey of growth and service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriorLearningSection;
