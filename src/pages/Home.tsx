import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import TopHeader from '../components/TopHeader';
import AboutSection from '../components/AboutSection';
import AchievementsSection from '../components/AchievementsSection';
import FacilitiesSection from '../components/FacilitiesSection';
import LeadershipMessagesSection from '../components/LeadershipMessagesSection';
import SubscribeAndFooter from '../components/SubscribeAndFooter';
import TestimonialsExample from '../components/TestimonialsExample';


function Home() {
  return (
    <div className="container">
        <TopHeader/>
        <NavBar/>
        <Hero />
        <AboutSection/>
        <AchievementsSection/>
        <LeadershipMessagesSection/>
        <FacilitiesSection/>
        <TestimonialsExample/>
        <SubscribeAndFooter/>
    </div>
  );
}

export default Home;   