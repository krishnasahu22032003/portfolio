import About from "@/components/landing/AboutSection";
import Experience from "@/components/landing/ExperienceSection";
import Hero from "@/components/landing/Hero";
import Stack from "@/components/landing/StackSection";
import ProjectsGrid from "@/components/landing/ProjectSection";


export default function Home() {
  return (
    <main className="min-h-screen">
<Hero/>
<About/>
<Stack/>
<Experience/>
<ProjectsGrid/>
    </main>
  );
}
