import { Mail, MapPin, Calendar } from "lucide-react";

const IntroLetterSection = () => {
  return (
    <section id="intro-letter" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Introductory Letter</h2>
          <p className="section-subtitle">
            A formal introduction presenting my background and purpose for RPL certification
          </p>
          <div className="divider-gold"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="card-elevated animate-fade-in">
            <div className="flex items-center gap-3 mb-8">
              <div className="icon-circle">
                <Mail size={22} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground">
                Letter of Introduction
              </h3>
            </div>

            <div className="prose max-w-none">
              {/* Letter Header */}
              <div className="flex flex-wrap justify-between items-start gap-4 mb-8 pb-6 border-b border-border">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin size={16} />
                  <span>Kenya</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar size={16} />
                  <span>December 2024</span>
                </div>
              </div>

              <p className="text-foreground mb-6 font-medium">To Whom It May Concern,</p>

              <p className="text-foreground leading-relaxed mb-5">
                I am <strong className="text-primary">OMBERE THOMAS OPADO</strong>, a dedicated 
                Senior Pastor serving within Christ Coworkers Fellowship Churches. With a deep 
                calling to ministry and years of hands-on experience in pastoral leadership, I am 
                seeking Recognition of Prior Learning (RPL) certification to formally validate my 
                extensive knowledge, skills, and competencies acquired through practical ministry 
                and professional development.
              </p>

              <p className="text-foreground leading-relaxed mb-5">
                My journey in ministry has been marked by continuous learning and service. I 
                completed the School of Ministries program in 2013, which provided me with a 
                strong theological foundation and practical skills for effective church leadership. 
                Additionally, I hold a Teacher Certification from Light of Africa Ministries, 
                equipping me with pedagogical skills to educate and mentor others in the faith.
              </p>

              <p className="text-foreground leading-relaxed mb-5">
                Throughout my ministry, I have actively participated in various theology workshops 
                that have enhanced my understanding of leadership principles and their application 
                in both church and society. Notable among these is the "Leadership in Church and 
                Society" workshop, which deepened my capacity to lead with integrity, vision, and 
                servant-hearted commitment.
              </p>

              <div className="my-8 p-5 bg-muted/50 rounded-lg border-l-4 border-secondary">
                <p className="text-foreground font-medium mb-3">
                  As a Senior Pastor, my responsibilities encompass:
                </p>
                <ul className="grid gap-2 text-muted-foreground text-sm">
                  {[
                    "Providing spiritual guidance, counselling, and pastoral care to congregants",
                    "Preaching, teaching, and facilitating Bible study sessions",
                    "Leading worship services and administering sacraments",
                    "Training and mentoring emerging church leaders and ministers",
                    "Coordinating community outreach programs and charitable initiatives",
                    "Managing church administration and organizational development",
                    "Facilitating conflict resolution and promoting unity within the congregation"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-foreground leading-relaxed mb-5">
                I am committed to lifelong learning and excellence in ministry. Obtaining RPL 
                certification will not only validate my experience but also open doors for further 
                professional development and recognition within the broader religious and educational 
                community.
              </p>

              <p className="text-foreground leading-relaxed mb-8">
                I am confident that my experience, training, and dedication to ministry align with 
                the competencies required for RPL certification. I look forward to the opportunity 
                to demonstrate my skills and knowledge through this assessment process.
              </p>

              {/* Signature */}
              <div className="mt-10 pt-8 border-t border-border">
                <p className="text-foreground mb-6">Yours sincerely,</p>
                <div className="space-y-1">
                  <p className="font-heading text-2xl italic text-primary">
                    Ombere Thomas Opado
                  </p>
                  <p className="font-semibold text-foreground">OMBERE THOMAS OPADO</p>
                  <p className="text-muted-foreground">Senior Pastor</p>
                  <p className="text-muted-foreground">Christ Coworkers Fellowship Churches</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroLetterSection;
