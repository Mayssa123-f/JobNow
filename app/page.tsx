import Header from "./components/header";
import Banner from "./components/banner";
import Footer from "./components/footer";
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Banner />
      <main className="flex-grow container mx-auto">
        {/* Your page content here */}
      </main>
      <Footer />
    </div>
  );
}
