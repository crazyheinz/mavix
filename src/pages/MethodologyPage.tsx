import Navigation from "@/components/Navigation";
import Methodology from "@/components/Methodology";
import Footer from "@/components/Footer";

const MethodologyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <Methodology />
      </main>
      <Footer />
    </div>
  );
};

export default MethodologyPage;
