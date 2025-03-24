import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Leadership from './pages/Leadership';
import FireAndSafety from './pages/FireAndSafety';
import StudentShowcase from './pages/StudentShowcase';
import SchoolHistoryPage from './pages/History';
import MissionAndVision from './pages/MissionAndVision';
import CurriculumPage from './pages/Curriculum';
import AdmissionPage from './pages/AdmissionPage';
import AdmissionFormPage from './components/AdmissionForm';
import SchoolGallery from './pages/Gallery';
import CBSEDisclosurePage from './pages/DisclosurePage';
import CampusTourPage from './pages/CampusTourPage';
import UnderMaintenancePage from './components/UnderMaintenancePage';
import ContactUs from './pages/ContactUs';
import NurseryPage from './pages/Nursery';
import TeachersPage from './pages/Teachers';
import SchoolInfoPage from './pages/AdditionalInfo';
import AcademicCalendar from './pages/AcademicCalender';
import CoCurricularActivitiesPage from './pages/CocurricularActivities';
import HouseActivitiesPage from './pages/Clubs';
import SportsPage from './pages/Sports';
import SchoolEventsPage from './pages/Events';
import StudentAchievementsPage from './pages/StudentAchievements';
import SchoolRulesPage from './pages/RulesAndRegulations';
import SchoolAchievementsPage from './pages/SchoolAchievements';

const App: React.FC = () => {
  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <Layout>
            <Home />
          </Layout>
        } 
      />
      <Route 
        path="/about" 
        element={
          <Layout pageTitle="About Us">
            <About />
          </Layout>
        } 
      />
      <Route 
        path="/about/leadership" 
        element={
          <Layout pageTitle="About Us">
            <Leadership />
          </Layout>
        } 
      />
      <Route 
        path="/disclosure/fire" 
        element={
          <Layout pageTitle="FireAndSafety">
            <FireAndSafety/>
          </Layout>
        } 
      />
      <Route 
        path="/student_showcase" 
        element={
          <Layout pageTitle="StudentShowcase">
            <StudentShowcase/>
          </Layout>
        } 
      />
      <Route 
        path="/about/history" 
        element={
          <Layout pageTitle="History">
            <SchoolHistoryPage/>
          </Layout>
        } 
      />
      <Route 
        path="/about/mission_vision" 
        element={
          <Layout pageTitle="Mission and Vision">
            <MissionAndVision/>
          </Layout>
        } 
      />
      <Route 
        path="/curriculum" 
        element={
          <Layout pageTitle="Curriculum">
            <CurriculumPage/>
          </Layout>
        } 
      />
      <Route 
        path="/admission" 
        element={
          <Layout pageTitle="Admission Page">
            <AdmissionPage/>
          </Layout>
        } 
      />
      <Route 
        path="/admission_form" 
        element={
          <Layout pageTitle="Admission Form">
            <AdmissionFormPage/>
          </Layout>
        } 
      />
      <Route 
        path="/gallery" 
        element={
          <Layout pageTitle="Gallery">
            <SchoolGallery/>
          </Layout>
        } 
      />
      <Route 
        path="/disclosure_page" 
        element={
          <Layout pageTitle="CBSEDisclosurePage">
            <CBSEDisclosurePage/>
          </Layout>
        } 
      />
      <Route 
        path="/about/campus-tour" 
        element={
          <Layout pageTitle="Campus Tour Page">
            <CampusTourPage/>
          </Layout>
        } 
      />
      <Route 
        path="/under-maintenance" 
        element={
          <Layout pageTitle="Under Maintenance">
            <UnderMaintenancePage/>
          </Layout>
        } 
      />
      <Route 
        path="/contact-us" 
        element={
          <Layout pageTitle="Contact Us">
            <ContactUs/>
          </Layout>
        } 
      />
      <Route 
        path="/nursery" 
        element={
          <Layout pageTitle="Contact Us">
            <NurseryPage/>
          </Layout>
        } 
      />
      <Route 
        path="/teachers" 
        element={
          <Layout pageTitle="Teachers Page">
            <TeachersPage/>
          </Layout>
        } 
      />
      <Route 
        path="/additional-info" 
        element={
          <Layout pageTitle="Additional Info">
            <SchoolInfoPage/>
          </Layout>
        } 
      />
      <Route 
        path="/academic-calendar" 
        element={
          <Layout pageTitle="Academic Calender">
            <AcademicCalendar/>
          </Layout>
        } 
      />
      <Route 
        path="/cocurricular-activities" 
        element={
          <Layout pageTitle="Co-curricular Activities">
            <CoCurricularActivitiesPage/>
          </Layout>
        } 
      /><Route 
      path="/clubs-organizations" 
      element={
        <Layout pageTitle="Clubs & Organizations">
          <HouseActivitiesPage/>
        </Layout>
      } 
    />
    <Route 
      path="/sports" 
      element={
        <Layout pageTitle="Sports & Fitness">
          <SportsPage/>
        </Layout>
      } 
    />
    <Route 
      path="/events" 
      element={
        <Layout pageTitle="School Events">
          <SchoolEventsPage/>
        </Layout>
      } 
    />
    <Route 
      path="/student-achievements"
      element={
        <Layout pageTitle="School Events">
          <StudentAchievementsPage/>
        </Layout>
      } 
    />
    <Route 
      path="/rules" 
      element={
        <Layout pageTitle="Rules and Regulations">
          <SchoolRulesPage/>
        </Layout>
      } 
    />
    <Route 
      path="/school-achievements" 
      element={
        <Layout pageTitle="School Achievements">
          <SchoolAchievementsPage/>
        </Layout>
      } 
    />
    </Routes>
  );
};

export default App;