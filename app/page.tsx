import Header from "./components/header";
import Banner from "./components/banner";
import Footer from "./components/footer";
import HowItWorks from "./components/howItWorks";
import Categories from "./components/categories";
import RecentlyAddedJobs from "./components/addedJobs";
import Feedback from "./components/feedback";
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Banner />

      <main className="flex-grow">
        <HowItWorks />
        <Categories />
        <RecentlyAddedJobs />
        <Feedback />
      </main>

      <Footer />
    </div>
  );
}
