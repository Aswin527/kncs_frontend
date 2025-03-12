import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import AchievementsSection from '../components/AchievementsSection';
import FacilitiesSection from '../components/FacilitiesSection';
import LeadershipMessagesSection from '../components/LeadershipMessagesSection';
import TestimonialsExample from '../components/TestimonialsExample';


function Home() {
  return (
    <div className="w-full mx-auto">
        <Hero />
        <AboutSection/>
        <AchievementsSection/>
        <LeadershipMessagesSection/>
        <FacilitiesSection/>
        <TestimonialsExample/>
    </div>
  );
}

export default Home;   
