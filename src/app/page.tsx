import AboutCourse from "@/components/sections/NewsCarousel";
import NewsSection from "@/components/sections/NewsSection";
import EventsSection from "@/components/sections/EventsSection";
import QuickLinks from "@/components/sections/QuickLinks";

export default function Home() {
  return (
    <div className="page-container">
      <AboutCourse />

      <section className="sections-grid">
        <NewsSection />
        <EventsSection />
        <QuickLinks />
      </section>
    </div>
  );
}
