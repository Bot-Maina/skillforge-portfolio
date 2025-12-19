import { useState } from "react";
import { BookOpen, ChevronDown, ChevronUp, Target, Lightbulb, CheckCircle2, AlertCircle } from "lucide-react";

const caseStudies = [
  {
    num: 1,
    title: "Mosoti – RPL Assessment Challenges",
    scenario: "Mosoti is a skilled carpenter with over 15 years of experience but lacks formal certification. He applies for RPL assessment at Masosa TVET center.",
    questions: [
      {
        question: "Steps RPL practitioners could take to better prepare Mosoti",
        situation: "Mosoti is an experienced carpenter with over 15 years of industry experience but lacks formal certification and has never participated in a formal assessment process.",
        task: "The RPL practitioners needed to prepare Mosoti adequately for the RPL assessment to ensure he understands the criteria, assessment methods, and expectations.",
        action: [
          "Conducted a pre-assessment orientation session explaining RPL, assessment criteria, and the Level 6 requirements in simple, non-academic language",
          "Assigned an RPL counsellor to guide Mosoti through the process",
          "Explained different assessment methods (portfolio, interview, practical demonstration)",
          "Provided templates and samples for Portfolio of Evidence (PoE)",
          "Conducted a self-assessment and skills audit to identify strengths and possible gaps",
          "Clarified timelines, feedback mechanisms, and possible outcomes"
        ],
        result: "Mosoti would feel confident, informed, and well-prepared for the assessment, reducing anxiety and improving his chances of successful certification."
      },
      {
        question: "Ensuring reliability, validity, authenticity, and sufficiency of PoE",
        situation: "Mosoti's PoE lacked proper documentation, and the assessor had difficulty verifying the authenticity of his prior work.",
        task: "The assessment center needed to ensure the PoE met quality assurance principles.",
        action: [
          "Reliability: Used standardized assessment tools and clear rubrics aligned to Level 6 occupational standards",
          "Validity: Ensured all evidence directly matched unit competencies and learning outcomes",
          "Authenticity: Conducted structured interviews, used third-party testimonies (employers, clients), requested workplace verification and photographs/videos of completed work",
          "Sufficiency: Ensured enough evidence was presented across all competencies",
          "Currency: Accepted evidence from the last 2–5 years and verified current practice"
        ],
        result: "The assessor could confidently make a fair, defensible judgement on Mosoti's competence."
      },
      {
        question: "Structured feedback approach",
        situation: "Mosoti received feedback but did not understand his results or the next steps.",
        task: "The assessor needed to provide clear, constructive, and actionable feedback.",
        action: [
          "Held a post-assessment feedback session",
          "Used a questioning approach to confirm understanding",
          "Applied positive-focused feedback, highlighting strengths before gaps",
          "Clearly explained skill gaps, required evidence, and training options",
          "Provided written feedback and an action plan"
        ],
        result: "Mosoti understood his performance, accepted the outcome, and knew exactly how to proceed toward certification."
      },
      {
        question: "Alternative assessment strategies",
        situation: "Traditional portfolio assessment alone was insufficient to capture Mosoti's skills.",
        task: "Identify alternative assessment methods.",
        action: [
          "Practical workplace demonstrations",
          "Workplace observation by an assessor",
          "Professional interviews",
          "Simulated tasks",
          "Challenge tests",
          "Video/photo evidence",
          "Third-party reports"
        ],
        result: "A holistic assessment captured Mosoti's true competence beyond paperwork."
      }
    ]
  },
  {
    num: 2,
    title: "TVETA Audit at Givudiani TTI",
    scenario: "TVETA conducted an audit of RPL processes at Givudiani TTI to ensure compliance with quality assurance standards, revealing several issues.",
    questions: [
      {
        question: "Key M&E indicators for RPL",
        situation: "TVETA audit revealed weak monitoring and evaluation of RPL processes.",
        task: "Develop a comprehensive M&E framework.",
        action: [
          "Input indicators: trained assessors, funding, tools",
          "Process indicators: adherence to assessment procedures, verification schedules",
          "Output indicators: number of candidates assessed and certified",
          "Outcome indicators: employment progression, further education uptake",
          "Equity indicators: fairness, gender balance, accessibility"
        ],
        result: "A measurable and accountable RPL system aligned with quality standards."
      },
      {
        question: "Standardized verification process",
        situation: "Assessment outcomes were inconsistent and perceived as biased.",
        task: "Standardize verification to ensure fairness.",
        action: [
          "Internal verification: Verification schedules, sampling plans, assessor observations, tool and judgement review",
          "External verification: QAP-led audits, independent sampling, formal feedback reports"
        ],
        result: "Consistency, credibility, and trust in assessment outcomes were restored."
      },
      {
        question: "Strengthening post-RPL support",
        situation: "Candidates completed RPL but lacked career direction.",
        task: "Improve post-RPL support systems.",
        action: [
          "Career counselling services",
          "Job placement and employer linkages",
          "CV and interview support",
          "Bridging courses for skills gaps",
          "Clear progression pathways to higher qualifications"
        ],
        result: "RPL candidates experienced real career and educational advancement."
      },
      {
        question: "Ethical issues and solutions",
        situation: "Inconsistent criteria resulted in perceived assessor bias.",
        task: "Address ethical risks.",
        action: [
          "Standardized assessment criteria",
          "Assessor training on ethics and fairness",
          "Appeals and complaints mechanisms",
          "Transparent documentation"
        ],
        result: "Ethical integrity and confidence in RPL outcomes improved."
      },
      {
        question: "Benefits of improved quality assurance",
        situation: "Stakeholders questioned RPL credibility.",
        task: "Enhance quality assurance.",
        action: [
          "Ensured credible certification",
          "Built employer confidence",
          "Improved institutional reputation",
          "Supported national skills recognition"
        ],
        result: "All stakeholders benefited from a trusted RPL system."
      }
    ]
  },
  {
    num: 3,
    title: "Zawadi – Counselling Failure",
    scenario: "Zawadi visits an RPL assessment center but receives poor counselling support, leading to her not returning.",
    questions: [
      {
        question: "Why Zawadi did not return",
        situation: "Zawadi sought RPL services but received poor counselling support.",
        task: "Identify reasons for withdrawal.",
        action: [
          "No rapport was built",
          "No explanation of evidence or PoE",
          "Dismissive language ('you should have known')",
          "Lack of guidance and empathy",
          "Counsellor lacked subject expertise"
        ],
        result: "Zawadi felt discouraged, confused, and excluded, leading to dropout."
      },
      {
        question: "Proper counselling approach",
        situation: "A candidate unfamiliar with RPL requirements sought assistance.",
        task: "Provide professional and supportive counselling.",
        action: [
          "Built rapport and welcomed the candidate",
          "Explained RPL and PoE clearly",
          "Probed work experience and competencies",
          "Guided on evidence collection",
          "Identified skills gaps",
          "Verified PoE authenticity",
          "Recommended appropriate certification level"
        ],
        result: "The candidate would feel supported, informed, and motivated to continue."
      },
      {
        question: "Publicity and awareness strategies",
        situation: "Many candidates lack RPL awareness.",
        task: "Improve awareness and preparedness.",
        action: [
          "Social media campaigns",
          "Community outreach (chief barazas, churches)",
          "Roadshows and exhibitions",
          "Radio & TV programs",
          "Focus group discussions (chamas)",
          "Clear brochures and digital guides"
        ],
        result: "Candidates arrive informed, confident, and ready for assessment."
      }
    ]
  }
];

const CaseStudiesSection = () => {
  const [openStudy, setOpenStudy] = useState<number | null>(0);
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  return (
    <section id="case-studies" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Case Studies</h2>
          <p className="section-subtitle">
            Detailed analysis and responses demonstrating RPL practitioner competencies
          </p>
          <div className="divider-gold"></div>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {caseStudies.map((study) => (
            <div key={study.num} className="card-elevated animate-fade-in overflow-hidden">
              <button
                onClick={() => setOpenStudy(openStudy === study.num ? null : study.num)}
                className="w-full flex items-center justify-between gap-4 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-heading font-bold text-xl">
                      {study.num}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      Case Study {study.num}
                    </h3>
                    <p className="text-muted-foreground text-sm">{study.title}</p>
                  </div>
                </div>
                {openStudy === study.num ? (
                  <ChevronUp className="text-secondary flex-shrink-0" size={24} />
                ) : (
                  <ChevronDown className="text-muted-foreground flex-shrink-0" size={24} />
                )}
              </button>

              {openStudy === study.num && (
                <div className="mt-6 pt-6 border-t border-border animate-fade-in">
                  <div className="bg-secondary/10 rounded-lg p-4 mb-6">
                    <div className="flex items-start gap-2">
                      <BookOpen className="text-secondary mt-1 flex-shrink-0" size={18} />
                      <p className="text-foreground text-sm">{study.scenario}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {study.questions.map((q, idx) => {
                      const questionKey = `${study.num}-${idx}`;
                      const isOpen = openQuestion === questionKey;

                      return (
                        <div key={idx} className="border border-border rounded-lg overflow-hidden">
                          <button
                            onClick={() => setOpenQuestion(isOpen ? null : questionKey)}
                            className="w-full flex items-center justify-between gap-3 p-4 text-left hover:bg-muted/50 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <span className="w-7 h-7 rounded-full bg-secondary/20 text-secondary text-sm font-semibold flex items-center justify-center flex-shrink-0">
                                {idx + 1}
                              </span>
                              <span className="font-medium text-foreground">
                                {q.question}
                              </span>
                            </div>
                            {isOpen ? (
                              <ChevronUp className="text-secondary flex-shrink-0" size={20} />
                            ) : (
                              <ChevronDown className="text-muted-foreground flex-shrink-0" size={20} />
                            )}
                          </button>

                          {isOpen && (
                            <div className="p-4 pt-0 animate-fade-in">
                              <div className="bg-muted/50 rounded-lg p-5 space-y-5">
                                <div className="flex gap-3">
                                  <AlertCircle className="text-primary mt-0.5 flex-shrink-0" size={18} />
                                  <div>
                                    <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                                      Situation
                                    </p>
                                    <p className="text-muted-foreground text-sm">{q.situation}</p>
                                  </div>
                                </div>

                                <div className="flex gap-3">
                                  <Target className="text-secondary mt-0.5 flex-shrink-0" size={18} />
                                  <div>
                                    <p className="text-xs font-semibold text-secondary uppercase tracking-wide mb-1">
                                      Task
                                    </p>
                                    <p className="text-muted-foreground text-sm">{q.task}</p>
                                  </div>
                                </div>

                                <div className="flex gap-3">
                                  <Lightbulb className="text-primary mt-0.5 flex-shrink-0" size={18} />
                                  <div>
                                    <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                                      Action
                                    </p>
                                    <ul className="space-y-1.5">
                                      {q.action.map((a, i) => (
                                        <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                                          <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></span>
                                          {a}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>

                                <div className="flex gap-3">
                                  <CheckCircle2 className="text-green-600 mt-0.5 flex-shrink-0" size={18} />
                                  <div>
                                    <p className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-1">
                                      Result
                                    </p>
                                    <p className="text-foreground text-sm font-medium">{q.result}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
