import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Expertise from "@/components/Expertise";
import Recognition from "@/components/Recognition";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { profile } from "@/lib/content";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mark Zais",
  honorificSuffix: "PhD, CAP-X",
  jobTitle: "Enterprise Analytics Executive",
  email: `mailto:${profile.email}`,
  url: "https://markzais.com",
  sameAs: [profile.linkedin, profile.github, profile.consulting],
  knowsAbout: [
    "Artificial Intelligence",
    "Data Science",
    "Operations Research",
    "Decision Science",
    "Enterprise Analytics Strategy",
  ],
  alumniOf: [
    "University of Colorado Boulder",
    "Georgia Institute of Technology",
    "United States Military Academy at West Point",
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: "FL",
    addressLocality: "Greater Tampa Bay Area",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Journey />
        <Expertise />
        <Recognition />
        <Work />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
