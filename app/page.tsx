import About from "@/components/landing/AboutSection";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Stack from "@/components/landing/StackSection";


export default function Home() {
  return (
    <main className="min-h-screen">
<Hero/>
<About/>
<Stack/>
    </main>
  );
}
