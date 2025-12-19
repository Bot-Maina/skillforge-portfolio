import { CheckCircle, Circle, Target, Award, FileCheck } from "lucide-react";

const criteriaCategories = [
  {
    title: "Publicity and Awareness",
    items: [
      { id: "PA1", criteria: "Demonstrate understanding of RPL principles and processes", status: "met" },
      { id: "PA2", criteria: "Effectively communicate RPL benefits to potential candidates", status: "met" },
      { id: "PA3", criteria: "Use appropriate channels for RPL awareness campaigns", status: "met" },
      { id: "PA4", criteria: "Develop informational materials for RPL publicity", status: "met" },
    ]
  },
  {
    title: "Counselling and Facilitation",
    items: [
      { id: "CF1", criteria: "Build rapport with RPL candidates effectively", status: "met" },
      { id: "CF2", criteria: "Explain RPL process and requirements clearly", status: "met" },
      { id: "CF3", criteria: "Guide candidates in evidence collection", status: "met" },
      { id: "CF4", criteria: "Conduct skills gap analysis", status: "met" },
      { id: "CF5", criteria: "Recommend appropriate certification pathways", status: "met" },
    ]
  },
  {
    title: "Assessment Process",
    items: [
      { id: "AP1", criteria: "Verify authenticity of portfolio evidence", status: "met" },
      { id: "AP2", criteria: "Apply standardized assessment criteria", status: "met" },
      { id: "AP3", criteria: "Conduct fair and unbiased evaluations", status: "met" },
      { id: "AP4", criteria: "Document assessment findings accurately", status: "met" },
      { id: "AP5", criteria: "Provide constructive feedback to candidates", status: "met" },
    ]
  },
  {
    title: "Quality Assurance",
    items: [
      { id: "QA1", criteria: "Adhere to institutional RPL policies", status: "met" },
      { id: "QA2", criteria: "Maintain accurate assessment records", status: "met" },
      { id: "QA3", criteria: "Participate in internal verification processes", status: "met" },
      { id: "QA4", criteria: "Support external quality audits", status: "met" },
    ]
  },
  {
    title: "Professional Ethics",
    items: [
      { id: "PE1", criteria: "Maintain confidentiality of candidate information", status: "met" },
      { id: "PE2", criteria: "Demonstrate impartiality in assessments", status: "met" },
      { id: "PE3", criteria: "Handle conflicts of interest appropriately", status: "met" },
      { id: "PE4", criteria: "Respect candidate dignity and rights", status: "met" },
    ]
  }
];

const RPLCriteriaSection = () => {
  const totalCriteria = criteriaCategories.reduce((acc, cat) => acc + cat.items.length, 0);
  const metCriteria = criteriaCategories.reduce(
    (acc, cat) => acc + cat.items.filter(item => item.status === "met").length,
    0
  );
  const percentage = Math.round((metCriteria / totalCriteria) * 100);

  return (
    <section id="rpl-criteria" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">RPL Performance Criteria</h2>
          <p className="section-subtitle">
            Self-assessment against RPL Practitioner Level II competency standards
          </p>
          <div className="divider-gold"></div>
        </div>

        {/* Progress Summary */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="card-elevated">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative w-32 h-32 flex-shrink-0">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    fill="none"
                    stroke="hsl(var(--muted))"
                    strokeWidth="12"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    fill="none"
                    stroke="hsl(var(--secondary))"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeDasharray={`${(percentage / 100) * 352} 352`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-heading text-3xl font-bold text-foreground">{percentage}%</span>
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  Competency Achievement
                </h3>
                <p className="text-muted-foreground mb-3">
                  {metCriteria} of {totalCriteria} performance criteria met
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="text-green-600" size={18} />
                    <span className="text-muted-foreground">Met</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Circle className="text-muted-foreground" size={18} />
                    <span className="text-muted-foreground">Pending</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Criteria Categories */}
        <div className="max-w-4xl mx-auto space-y-6">
          {criteriaCategories.map((category, catIdx) => (
            <div key={catIdx} className="card-elevated animate-fade-in" style={{ animationDelay: `${catIdx * 0.1}s` }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="icon-circle">
                  {catIdx === 0 && <Target size={20} />}
                  {catIdx === 1 && <Award size={20} />}
                  {catIdx === 2 && <FileCheck size={20} />}
                  {catIdx === 3 && <CheckCircle size={20} />}
                  {catIdx === 4 && <Award size={20} />}
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.items.filter(i => i.status === "met").length}/{category.items.length} criteria met
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {category.items.map((item) => (
                  <div
                    key={item.id}
                    className={`flex items-start gap-3 p-3 rounded-lg transition-colors ${
                      item.status === "met" ? "bg-green-50 dark:bg-green-900/10" : "bg-muted/50"
                    }`}
                  >
                    {item.status === "met" ? (
                      <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                    ) : (
                      <Circle className="text-muted-foreground flex-shrink-0 mt-0.5" size={20} />
                    )}
                    <div className="flex-1">
                      <span className="text-xs font-mono text-muted-foreground mr-2">{item.id}</span>
                      <span className={item.status === "met" ? "text-foreground" : "text-muted-foreground"}>
                        {item.criteria}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Evidence Note */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="p-6 bg-secondary/10 rounded-xl border border-secondary/20">
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <FileCheck className="text-secondary" size={20} />
              Evidence Documentation
            </h4>
            <p className="text-muted-foreground text-sm">
              Each performance criterion is supported by evidence documented throughout this portfolio, 
              including case study responses, certificates, photographs, and video demonstrations of 
              RPL assessment activities. Cross-reference the Table of Contents for specific evidence 
              locations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RPLCriteriaSection;
