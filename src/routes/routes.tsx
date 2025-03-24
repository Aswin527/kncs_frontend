

import { lazy, Suspense } from 'react';
import { 
  RouteObject,  
} from 'react-router-dom';
import Leadership from '../pages/Leadership';
import FireAndSafety from '../pages/FireAndSafety';
import StudentShowcase from '../pages/StudentShowcase';
import SchoolHistoryPage from '../pages/History';
import MissionAndVision from '../pages/MissionAndVision';
import CurriculumPage from '../pages/Curriculum';
import AdmissionPage from '../pages/AdmissionPage';
import AdmissionFormPage from '../components/AdmissionForm';
import SchoolGallery from '../pages/Gallery';
import CBSEDisclosurePage from '../pages/DisclosurePage';
import CampusTourPage from '../pages/CampusTourPage';
import UnderMaintenancePage from '../components/UnderMaintenancePage';
import ContactUs from '../pages/ContactUs';
import NurseryPage from '../pages/Nursery';
import TeachersPage from '../pages/Teachers';
import SchoolInfoPage from '../pages/AdditionalInfo';
import AcademicCalendar from '../pages/AcademicCalender';
import CoCurricularActivitiesPage from '../pages/CocurricularActivities';
import HouseActivitiesPage from '../pages/Clubs';
import SportsPage from '../pages/Sports';
import SchoolEventsPage from '../pages/Events';
import StudentAchievementsPage from '../pages/StudentAchievements';
import SchoolRulesPage from '../pages/RulesAndRegulations';
import SchoolAchievementsPage from '../pages/SchoolAchievements';

// Lazy load components to improve performance
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));


// Loader component for suspense
const Loader = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);



// Define route configuration
export const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <Suspense fallback={<Loader />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: '/about',
    element: (
      <Suspense fallback={<Loader />}>
        <About />
      </Suspense>
    ),
  }
  ,
  {
    path: '/about/leadership',
    element: (
      <Suspense fallback={<Loader />}>
        <Leadership/>
      </Suspense>
    ),
  },
  {
    path: '/disclosure/fire',
    element: (
      <Suspense fallback={<Loader />}>
        <FireAndSafety/>
      </Suspense>
    ),
  },
  {
    path: '/student_showcase',
    element: (
      <Suspense fallback={<Loader />}>
        <StudentShowcase/>
      </Suspense>
    ),
  },
  {
    path: '/about/history',
    element: (
      <Suspense fallback={<Loader />}>
        <SchoolHistoryPage/>
      </Suspense>
    ),
  },
  {
    path: '/about/mission_vision',
    element: (
      <Suspense fallback={<Loader />}>
        <MissionAndVision/>
      </Suspense>
    ),
  },
  {
    path: '/curriculum',
    element: (
      <Suspense fallback={<Loader />}>
        <CurriculumPage/>
      </Suspense>
    ),
  },
  {
    path: '/admission',
    element: (
      <Suspense fallback={<Loader />}>
        <AdmissionPage/>
      </Suspense>
    ),
  },
  {
    path: '/admission_form',
    element: (
      <Suspense fallback={<Loader />}>
        <AdmissionFormPage/>
      </Suspense>
    ),
  },
  {
    path: '/gallery',
    element: (
      <Suspense fallback={<Loader />}>
        <SchoolGallery/>
      </Suspense>
    ),
  }
  ,
  {
    path: '/disclosure_page',
    element: (
      <Suspense fallback={<Loader />}>
        <CBSEDisclosurePage/>
      </Suspense>
    ),
  },
  {
    path: '/about/campus-tour',
    element: (
      <Suspense fallback={<Loader />}>
        <CampusTourPage/>
      </Suspense>
    ),
  },
  {
    path: '/under-maintenance',
    element: (
      <Suspense fallback={<Loader />}>
        <UnderMaintenancePage/>
      </Suspense>
    ),
  },
  {
    path: '/contact-us',
    element: (
      <Suspense fallback={<Loader />}>
        <ContactUs/>
      </Suspense>
    ),
  },
  {
    path: '/nursery',
    element: (
      <Suspense fallback={<Loader />}>
        <NurseryPage/>
      </Suspense>
    ),
  },
  {
    path: '/teachers',
    element: (
      <Suspense fallback={<Loader />}>
        <TeachersPage/>
      </Suspense>
    ),
  },
  {
    path: '/additional-info',
    element: (
      <Suspense fallback={<Loader />}>
        <SchoolInfoPage/>
      </Suspense>
    ),
  }
  ,
  {
    path: '/academic-calendar',
    element: (
      <Suspense fallback={<Loader />}>
        <AcademicCalendar/>
      </Suspense>
    ),
  },
  {
    path: '/Cocurricular-activities',
    element: (
      <Suspense fallback={<Loader />}>
        <CoCurricularActivitiesPage/>
      </Suspense>
    ),
  }
  ,
  {
    path: '/clubs-organizations',
    element: (
      <Suspense fallback={<Loader />}>
        <HouseActivitiesPage/>
      </Suspense>
    ),
  },
  {
    path: '/sports',
    element: (
      <Suspense fallback={<Loader />}>
        <SportsPage/>
      </Suspense>
    ),
  },
  {
    path: '/events',
    element: (
      <Suspense fallback={<Loader />}>
        <SchoolEventsPage/>
      </Suspense>
    ),
  },
  {
    path: '/student-achievements',
    element: (
      <Suspense fallback={<Loader />}>
        <StudentAchievementsPage/>
      </Suspense>
    ),
  },
  {
    path: '/rules',
    element: (
      <Suspense fallback={<Loader />}>
        <SchoolRulesPage/>
      </Suspense>
    ),
  },
  {
    path: '/school-achievements',
    element: (
      <Suspense fallback={<Loader />}>
        <SchoolAchievementsPage/>
      </Suspense>
    ),
  }

];
