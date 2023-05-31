import FAQ from "@/components/Landing/FAQ";
import Footer from "@/components/Landing/Footer";
import Hero from "@/components/Landing/Hero";
import Roles from "@/components/Landing/Roles";
import { getRoleData } from "@/lib/dataConnector";

export default function Home() {
  return (
    <>
      <Hero />
      <Roles data={getRoleData()} />
      <FAQ />

      <Footer />
    </>
  );
}
