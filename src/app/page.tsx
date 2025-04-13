import NewsCarousel from "@/components/sections/NewsCarousel";
import NewsSection from "@/components/sections/NewsSection";
import QuickLinks from "@/components/sections/QuickLinks";
import PublicationsSection from "@/components/sections/PublicationsSection";
import EventsSection from "@/components/sections/EventsSection";
import "./globals.css";

export default function Home() {
  return (
    <main className="home-wrapper container mx-auto px-4 py-6">
      {/* Seção Hero - Carrossel + Links Rápidos */}
      <section className="home-grid hero grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="home-main md:col-span-2">
          <NewsCarousel />
        </div>
        <aside className="home-sidebar">
          <QuickLinks />
        </aside>
      </section>

      {/* Conteúdo Principal - Notícias + Eventos lado a lado */}
      <section className="home-grid content grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="home-news md:col-span-2">
          <NewsSection />
        </div>
        <div className="home-events">
          <EventsSection />
        </div>
      </section>

      {/* Seção de Publicações */}
      <section className="home-grid content">
        <div className="home-main">
          <PublicationsSection />
        </div>
      </section>
    </main>
  );
}
