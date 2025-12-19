import { FileText, Briefcase, Award, Users, Heart, BookOpen, GraduationCap, Star } from "lucide-react";

const skills = [
  "Pastoral Leadership",
  "Preaching & Teaching",
  "Biblical Counselling",
  "Worship Leadership",
  "Mentorship & Discipleship",
  "Community Outreach",
  "Conflict Resolution",
  "Church Administration",
  "Team Building",
  "Public Speaking",
  "Spiritual Care",
  "Program Coordination"
];

const ResumeSection = () => {
  return (
    <section id="resume" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Curriculum Vitae</h2>
          <p className="section-subtitle">
            A comprehensive overview of my professional journey, qualifications, and competencies
          </p>
          <div className="divider-gold"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-elevated animate-fade-in">
            {/* Header */}
            <div className="text-center pb-8 border-b border-border mb-8">
              <div className="w-20 h-20 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary-foreground font-heading text-2xl font-bold">OT</span>
              </div>
              <h3 className="font-heading text-3xl font-bold text-foreground mb-2">
                OMBERE THOMAS OPADO
              </h3>
              <p className="text-secondary font-semibold text-lg">Senior Pastor</p>
              <p className="text-muted-foreground">Christ Coworkers Fellowship Churches</p>
            </div>

            {/* Professional Summary */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-circle">
                  <FileText size={20} />
                </div>
                <h4 className="font-heading text-xl font-semibold text-foreground">
                  Professional Summary
                </h4>
              </div>
              <p className="text-muted-foreground leading-relaxed pl-15">
                Dedicated and compassionate Senior Pastor with extensive experience in spiritual 
                leadership, pastoral care, and community development. Skilled in preaching, teaching, 
                counselling, and mentoring within diverse congregational settings. Proven ability to 
                lead worship services, manage church administration, and coordinate community outreach 
                programs. Committed to fostering spiritual growth, unity, and positive transformation 
                in individuals and communities.
              </p>
            </div>

            {/* Ministry Experience */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-circle">
                  <Briefcase size={20} />
                </div>
                <h4 className="font-heading text-xl font-semibold text-foreground">
                  Ministry Experience
                </h4>
              </div>
              
              <div className="ml-15 border-l-2 border-secondary pl-6">
                <div className="relative">
                  <div className="absolute -left-8 top-0 w-4 h-4 rounded-full bg-secondary"></div>
                  <h5 className="font-semibold text-foreground text-lg">Senior Pastor</h5>
                  <p className="text-secondary font-medium">Christ Coworkers Fellowship Churches</p>
                  <ul className="mt-3 space-y-2">
                    {[
                      "Lead and oversee all spiritual activities and church operations",
                      "Preach and teach the Word of God during worship services and Bible studies",
                      "Provide pastoral counselling and spiritual guidance to congregants",
                      "Train, mentor, and develop emerging church leaders and ministers",
                      "Administer sacraments including baptism and communion",
                      "Coordinate and lead community outreach and charitable programs",
                      "Manage church administration, budgets, and organizational planning",
                      "Facilitate conflict resolution and promote congregational unity",
                      "Represent the church in inter-denominational and community forums"
                    ].map((item, idx) => (
                      <li key={idx} className="text-muted-foreground text-sm flex items-start gap-2">
                        <Star className="text-secondary mt-0.5 flex-shrink-0" size={14} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Training & Certifications */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-circle">
                  <GraduationCap size={20} />
                </div>
                <h4 className="font-heading text-xl font-semibold text-foreground">
                  Training & Certifications
                </h4>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 ml-15">
                <div className="bg-muted/50 rounded-lg p-5 border border-border">
                  <div className="flex items-start gap-3">
                    <Award className="text-secondary flex-shrink-0" size={24} />
                    <div>
                      <h5 className="font-semibold text-foreground">School of Ministries</h5>
                      <p className="text-sm text-muted-foreground">Completed 2013</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Comprehensive training in theology, pastoral ministry, and church leadership
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-muted/50 rounded-lg p-5 border border-border">
                  <div className="flex items-start gap-3">
                    <Award className="text-secondary flex-shrink-0" size={24} />
                    <div>
                      <h5 className="font-semibold text-foreground">Teacher Certification</h5>
                      <p className="text-sm text-muted-foreground">Light of Africa Ministries</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Certification in Christian education and teaching methodologies
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Development */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-circle">
                  <BookOpen size={20} />
                </div>
                <h4 className="font-heading text-xl font-semibold text-foreground">
                  Professional Development
                </h4>
              </div>
              
              <div className="ml-15 space-y-4">
                {[
                  {
                    title: "Leadership in Church and Society Workshop",
                    desc: "Advanced training in leadership principles and their application in ecclesiastical and societal contexts"
                  },
                  {
                    title: "Theology Workshops",
                    desc: "Ongoing participation in theological seminars and ministry development programs"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium text-foreground">{item.title}</p>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Competencies */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-circle">
                  <Users size={20} />
                </div>
                <h4 className="font-heading text-xl font-semibold text-foreground">
                  Core Competencies
                </h4>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 ml-15">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-secondary/10 text-foreground text-sm px-4 py-2.5 rounded-lg text-center font-medium border border-secondary/20 hover:bg-secondary/20 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Ministry Focus Areas */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-circle">
                  <Heart size={20} />
                </div>
                <h4 className="font-heading text-xl font-semibold text-foreground">
                  Ministry Focus Areas
                </h4>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 ml-15">
                {[
                  {
                    title: "Spiritual Formation",
                    desc: "Guiding individuals in their spiritual journey through teaching, mentoring, and personal discipleship"
                  },
                  {
                    title: "Leadership Development",
                    desc: "Training and equipping emerging leaders for effective ministry and service"
                  },
                  {
                    title: "Community Engagement",
                    desc: "Coordinating outreach programs that address spiritual and social needs"
                  },
                  {
                    title: "Pastoral Care",
                    desc: "Providing compassionate support, counselling, and guidance to congregants"
                  }
                ].map((area, idx) => (
                  <div key={idx} className="bg-muted/50 rounded-lg p-5 border border-border">
                    <h5 className="font-semibold text-foreground mb-2">{area.title}</h5>
                    <p className="text-muted-foreground text-sm">{area.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
