import { User, CreditCard, Shield } from "lucide-react";

const IdentitySection = () => {
  return (
    <section id="identity" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Identity Documents</h2>
          <p className="section-subtitle">
            Official identification documents for verification purposes
          </p>
          <div className="divider-gold"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Identity Photo */}
          <div className="card-elevated animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="icon-circle">
                <User size={22} />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  Identity Photo
                </h3>
                <p className="text-sm text-muted-foreground">Professional photograph</p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] max-w-xs mx-auto rounded-xl overflow-hidden shadow-elevated bg-muted flex items-center justify-center">
                <div className="text-center p-8">
                  <User className="mx-auto mb-4 text-muted-foreground" size={64} />
                  <p className="text-muted-foreground text-sm">
                    Identity Photo<br />
                    <span className="text-xs">(Upload your photo to public/me.jpeg)</span>
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-full bg-secondary flex items-center justify-center shadow-gold">
                <Shield className="text-secondary-foreground" size={28} />
              </div>
            </div>
          </div>

          {/* National ID Card */}
          <div className="card-elevated animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="icon-circle">
                <CreditCard size={22} />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  National ID Card
                </h3>
                <p className="text-sm text-muted-foreground">Government-issued identification</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <div className="aspect-video w-full rounded-xl overflow-hidden shadow-card bg-muted flex items-center justify-center">
                  <div className="text-center p-6">
                    <CreditCard className="mx-auto mb-3 text-muted-foreground" size={48} />
                    <p className="text-muted-foreground text-sm">
                      ID Card - Front<br />
                      <span className="text-xs">(Upload to public/id1.jpeg)</span>
                    </p>
                  </div>
                </div>
                <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                  Front
                </span>
              </div>
              
              <div className="relative">
                <div className="aspect-video w-full rounded-xl overflow-hidden shadow-card bg-muted flex items-center justify-center">
                  <div className="text-center p-6">
                    <CreditCard className="mx-auto mb-3 text-muted-foreground" size={48} />
                    <p className="text-muted-foreground text-sm">
                      ID Card - Back<br />
                      <span className="text-xs">(Upload to public/id2.jpeg)</span>
                    </p>
                  </div>
                </div>
                <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                  Back
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdentitySection;
