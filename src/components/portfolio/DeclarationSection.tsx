import { FileCheck, PenTool, Calendar } from "lucide-react";

const DeclarationSection = () => {
  return (
    <section id="declaration" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Declaration of Authenticity</h2>
          <p className="section-subtitle">
            A formal statement confirming the genuineness of all portfolio contents
          </p>
          <div className="divider-gold"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="card-elevated animate-fade-in">
            <div className="flex items-center gap-3 mb-8">
              <div className="icon-circle">
                <FileCheck size={22} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground">
                Statement of Authenticity
              </h3>
            </div>

            <div className="prose max-w-none">
              <p className="text-foreground leading-relaxed mb-6 text-lg">
                I, <strong className="text-primary">OMBERE THOMAS OPADO</strong>, hereby declare that 
                the contents of this e-portfolio are a true and accurate representation of my skills, 
                knowledge, and experience. All documents, certificates, and evidence presented herein 
                are authentic and have been obtained through legitimate means.
              </p>

              <p className="text-foreground leading-relaxed mb-6">
                I understand that providing false or misleading information may result in 
                the rejection of my application for Recognition of Prior Learning (RPL) and 
                may have further consequences as per institutional policies.
              </p>

              <p className="text-foreground leading-relaxed mb-10">
                I affirm that all work samples and evidence of competency included in this 
                portfolio are my own work or clearly attributed to the appropriate sources 
                where applicable.
              </p>

              <div className="border-t-2 border-border pt-10 mt-10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <PenTool size={16} />
                      <span className="text-sm font-medium">Signature</span>
                    </div>
                    <div className="h-20 border-b-2 border-secondary/50 flex items-end pb-2">
                      <span className="font-heading text-2xl italic text-primary">
                        Ombere Thomas Opado
                      </span>
                    </div>
                    <p className="font-semibold text-foreground">OMBERE THOMAS OPADO</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">Date</span>
                    </div>
                    <div className="h-20 border-b-2 border-secondary/50 flex items-end pb-2">
                      <span className="font-heading text-xl text-primary">
                        19th December 2024
                      </span>
                    </div>
                    <p className="text-muted-foreground">Date of Declaration</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                <p className="text-sm text-muted-foreground text-center">
                  This declaration is made in good faith for the purpose of RPL assessment 
                  at an accredited TVET institution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeclarationSection;
