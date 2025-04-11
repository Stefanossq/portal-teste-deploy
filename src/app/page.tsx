import AboutCourse from "@/components/sections/NewsCarousel";
import NewsSection from "@/components/sections/NewsSection";
import QuickLinks from "@/components/sections/QuickLinks";
import PublicationsSection from "@/components/sections/PublicationsSection"; // novo import

export default function Home() {
  return (
    <main className="home-wrapper">
      {/* Hero section: carrossel grande + links rápidos ao lado */}
      <section className="home-grid hero">
        <div className="home-main">
          <AboutCourse />
        </div>
        <aside className="home-sidebar">
          <QuickLinks />
        </aside>
      </section>

      {/* Conteúdo principal: notícias em destaque */}
      <section className="home-grid content">
        <div className="home-main">
          <NewsSection />
        </div>
      </section>

      {/* Nova seção: publicações */}
      <section className="home-grid content">
        <div className="home-main">
          <PublicationsSection />
        </div>
      </section>
    </main>
  );
}

