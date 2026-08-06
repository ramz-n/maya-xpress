import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import { Navbar } from "@/components/sections/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}
