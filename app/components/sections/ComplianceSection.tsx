'use client';

export default function ComplianceSection() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-8 max-w-7xl mx-auto" id="compliance">
      <div className="bg-surface-container-lowest p-8 md:p-12 rounded-3xl ambient-shadow border-l-8 border-tertiary-container flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 space-y-4">
          {/* Badge */}
          <div className="inline-block px-3 py-1 bg-tertiary-container/10 text-tertiary-container text-xs font-bold uppercase tracking-widest rounded">
            Regional Focus
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-on-surface">
            Fully Compliant in Vietnam
          </h2>

          {/* Description */}
          <p className="text-on-surface-variant leading-relaxed text-base md:text-lg">
            MobiClear is built with local regulations at its core. Our operations align strictly with Vietnamese privacy laws and digital commerce mandates, ensuring peace of mind for local business owners.
          </p>
        </div>

        {/* Right Content - Image Placeholder */}
        <div className="flex-shrink-0 w-full md:w-auto">
          <div className="bg-surface-container-low p-8 rounded-2xl flex items-center justify-center min-w-48 h-48 md:h-auto">
            <span className="material-symbols-outlined text-6xl text-on-surface/20">description</span>
          </div>
        </div>
      </div>
    </section>
  );
}
