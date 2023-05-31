import CTA from "@/components/Landing/CTA";
import Footer from "@/components/Landing/Footer";
import Hero from "@/components/Landing/Hero";
import HowItWorks from "@/components/Landing/HowItWorks";
import Roles from "@/components/Landing/Roles";
import { getRoleData } from "@/lib/dataConnector";

export default function Home() {
  return (
    <>
      <Hero />
      <Roles data={getRoleData()} />

      <Footer />
    </>
  );
}
