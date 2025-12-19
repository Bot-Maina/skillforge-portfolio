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
              <div className="aspect-[3/4] max-w-xs mx-auto rounded-xl overflow-hidden shadow-elevated">
                <img
                  src="/me.jpeg"
                  alt="Ombere Thomas Opado - Profile Photo"
                  className="w-full h-full object-cover"
                />
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
                <div className="aspect-video w-full rounded-xl overflow-hidden shadow-card">
                  <img
                    src="/id2.jpeg"
                    alt="National ID Card - Front"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                  Front
                </span>
              </div>
              
              <div className="relative">
                <div className="aspect-video w-full rounded-xl overflow-hidden shadow-card">
                  <img
                    src="/id1.jpeg"
                    alt="National ID Card - Back"
                    className="w-full h-full object-cover"
                  />
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
