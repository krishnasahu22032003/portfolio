import About from "@/components/landing/AboutSection";
import Experience from "@/components/landing/ExperienceSection";
import Hero from "@/components/landing/Hero";
import Stack from "@/components/landing/StackSection";


export default function Home() {
  return (
    <main className="min-h-screen">
<Hero/>
<About/>
<Stack/>
<Experience/>
    </main>
  );
}
