import { useState } from "react";
import { Camera, Video, X, Image as ImageIcon } from "lucide-react";

const photos = [
  { id: 1, title: "Ministry Work", description: "Pastoral activities and church services" },
  { id: 2, title: "Training Sessions", description: "Leadership and teaching workshops" },
  { id: 3, title: "Community Outreach", description: "Charitable programs and community engagement" },
  { id: 4, title: "Counselling Ministry", description: "Pastoral care and guidance sessions" },
  { id: 5, title: "Worship Leadership", description: "Leading congregation in worship" },
  { id: 6, title: "Mentorship", description: "Training emerging church leaders" },
];

const videos = [
  { id: 1, title: "RPL Simulation Video 1", driveId: "1E-OJGA5HV7eAaVtS-vzxHVwH-Gk2qY8C" },
  { id: 2, title: "RPL Simulation Video 2", driveId: "1gPOYrooxDrRuM2vV7hPdus-4pBOSP2cU" },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<{ type: string; id: number } | null>(null);

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Photo & Video Gallery</h2>
          <p className="section-subtitle">
            Visual evidence of ministry work, training, and RPL assessment simulations
          </p>
          <div className="divider-gold"></div>
        </div>

        {/* Photos Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="icon-circle">
              <Camera size={22} />
            </div>
            <h3 className="font-heading text-2xl font-semibold text-foreground">
              Photos
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((photo) => (
              <button
                key={photo.id}
                onClick={() => setLightbox({ type: "photo", id: photo.id })}
                className="gallery-item group relative aspect-[4/3] bg-muted"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <ImageIcon className="text-muted-foreground mb-2" size={40} />
                  <p className="text-sm text-muted-foreground">
                    {photo.title}
                  </p>
                  <p className="text-xs text-muted-foreground/70 mt-1">
                    (Upload photo {photo.id})
                  </p>
                </div>
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-primary-foreground text-center p-4">
                    <p className="font-semibold">{photo.title}</p>
                    <p className="text-sm opacity-80">{photo.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Videos Section */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="icon-circle">
              <Video size={22} />
            </div>
            <h3 className="font-heading text-2xl font-semibold text-foreground">
              Videos
            </h3>
            <span className="badge-gold text-xs">Task 2 - RPL Simulations</span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {videos.map((video) => (
              <div key={video.id} className="card-elevated">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src={`https://drive.google.com/file/d/${video.driveId}/preview`}
                    width="100%"
                    height="100%"
                    allow="autoplay"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <h4 className="font-semibold text-foreground mt-4">{video.title}</h4>
              </div>
            ))}
          </div>

        </div>

        {/* Lightbox */}
        {lightbox && (
          <div
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 text-primary-foreground hover:text-secondary transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X size={32} />
            </button>
            <div className="max-w-4xl w-full bg-card rounded-xl p-4" onClick={(e) => e.stopPropagation()}>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                {lightbox.type === "photo" ? (
                  <div className="text-center">
                    <ImageIcon className="mx-auto mb-3 text-muted-foreground" size={64} />
                    <p className="text-muted-foreground">Photo placeholder</p>
                    <p className="text-sm text-muted-foreground/70">Upload your photo to view</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <Video className="mx-auto mb-3 text-muted-foreground" size={64} />
                    <p className="text-muted-foreground">Video placeholder</p>
                    <p className="text-sm text-muted-foreground/70">Upload your video to view</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
