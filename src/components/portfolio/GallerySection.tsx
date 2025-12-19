import { useState } from "react";
import { Camera, Video, X } from "lucide-react";

const photos = [
  { id: 1, src: "/cert1.jpeg" },
  { id: 2, src: "/cert2.jpeg" },
  { id: 3, src: "/cert3.jpeg" },
  { id: 4, src: "/cert4.jpeg" },
  { id: 5, src: "/cert5.jpeg" },
  { id: 6, src: "/cert6.jpeg" },
  { id: 7, src: "/cert7.jpeg" },
  { id: 8, src: "/cert8.jpeg" },
  { id: 9, src: "/cert9.jpeg" },
  { id: 10, src: "/cert10.jpeg" },
];

const videos = [
  { id: 1, title: "RPL Simulation Video 1", driveId: "1E-OJGA5HV7eAaVtS-vzxHVwH-Gk2qY8C" },
  { id: 2, title: "RPL Simulation Video 2", driveId: "1gPOYrooxDrRuM2vV7hPdus-4pBOSP2cU" },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<{ src: string } | null>(null);

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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {photos.map((photo) => (
              <button
                key={photo.id}
                onClick={() => setLightbox({ src: photo.src })}
                className="gallery-item group relative aspect-[4/3] overflow-hidden rounded-lg"
              >
                <img
                  src={photo.src}
                  alt={`Certificate ${photo.id}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
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
            <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={lightbox.src}
                alt="Certificate"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
