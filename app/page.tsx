import Header from "./components/header";
import Banner from "./components/banner";
import Footer from "./components/footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header and Banner full-width with their own internal containers */}
      <Header />
      <Banner />

      {/* Main content wrapped in container (if needed) */}
      <main className="flex-grow container mx-auto">
        {/* Your main page content here (e.g., job listings, cards, etc.) */}
      </main>

      <Footer />
    </div>
  );
}
