import Hero from "@/components/sections/Hero/Hero";
import Services from "@/components/sections/Services/Services";
import Counselor from "@/components/sections/Counselor/Counselor";
import Blog from "@/components/sections/Blog/Blog";
import FAQ from "@/components/sections/FAQ/FAQ";
import Location from "@/components/sections/Location/Location";
import Footer from "@/components/layout/Footer/Footer";
// import Center from "@/components/sections/Center/Center";
import SelfDiagnosis from "@/components/sections/SelfDiagnosis/SelfDiagnosis";

export default function Home() {
  return (
    <main>
      <Hero />
      <SelfDiagnosis />
      <Services />
      <Counselor />
      {/* <Center /> */}
      <Blog />
      <Location />
      <FAQ />
      <Footer />
    </main>
  );
}
