import HeroSection from '@/components/sections/HeroSection';
import ProblemSolutionSection from '@/components/sections/ProblemSolutionSection';
import TestimonialsPreview from '@/components/sections/TestimonialsPreview';
import MethodologyTeaser from '@/components/sections/MethodologyTeaser';
import AboutTeacher from '@/components/sections/AboutTeacher';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSolutionSection />
      <TestimonialsPreview />
      <MethodologyTeaser />
      <AboutTeacher />
    </>
  );
}
