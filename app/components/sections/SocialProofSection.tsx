'use client';

export default function SocialProofSection() {
  return (
    <section
      className="bg-surface pt-6 sm:pt-8 md:pt-12 pb-16 md:pb-24 lg:pb-32 px-4 sm:px-6 md:px-8 overflow-hidden"
      id="social-proof"
    >
      <div className="max-w-7xl mx-auto">
        {/* Video Demo Section */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-on-surface font-headline">
              See MobiClear in Action
            </h2>
            <p className="text-on-surface-variant text-base md:text-lg max-w-2xl mx-auto">
              Watch how our AI Manager handles real bookings in seconds.
            </p>
          </div>

          {/* YouTube Embed */}
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden ambient-shadow" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/PGwdlXLnugY"
                title="MobiClear Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
