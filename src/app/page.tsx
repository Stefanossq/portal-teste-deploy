
import AboutCourse from "@/components/sections/NewsCarousel";
import NewsSection from "@/components/sections/NewsSection";
import EventsSection from "@/components/sections/EventsSection";
import QuickLinks from "@/components/sections/QuickLinks";

export default function Home() {
  return (
    <div className="space-y-8">
      <AboutCourse />
      
      <section className="grid md:grid-cols-3 gap-6">
        <NewsSection />
        <EventsSection />
        <QuickLinks />
      </section>
    </div>
  );
}