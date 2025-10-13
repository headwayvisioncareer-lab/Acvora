import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PasswordReset from "./Pages/PasswordReset";
import Home from "./Pages/Home";
import ExploreCollegesPage from "./Pages/ExploreCollegesPage";

import Companion from "./FooterPages/Companion";

import LoginModal from "./Modals/LoginModal";
import SignupModal from "./Modals/SignupModal";
import UniversityDetails from "./Pages/UniversityDetails";
import StudentLoanPage from "./Pages/StudentLoanPage";
import EducationLoanPage from "./Pages/EducationLoanPage";
import NewsFeed from "./components/NewsFeed";
import ExploreCoursesPage from "./Pages/ExploreCoursesPage";
import MyProfile from "./components/NavDropdown/MyProfile"
import CourseRegister from "./Pages/CourseRegister";

//Admin components
import ScholarForm from "./adminComponents/ScholarForm";

//Agent 
import AgentDashboard from "./AgentDashboard/Agent";

//Dashboard
import UniversityDashboard from "./dashboard/UniversityDashboard";
// footer page imports 

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Scholar from "./components/Scholar";
import Counselling from "./components/Counselling";
import MTech from "./FooterPages/M.Tech";
import BTech from "./FooterPages/B.Tech";
import Examin from "./components/Exams";
import BBACoursePage from "./FooterPages/BBABoursePage";
import { AuthProvider } from "./adminComponents/hooks/useAuth"
import { useAuth } from "./adminComponents/hooks/useAuth";
import Scholarship from "./Pages/Scholarship";
import Scholarshiploans from "./components/NavDropdown/Scholarshiploans"
import ContactUs from "./FooterPages/ContactUs";
import Privacy from "./FooterPages/Privacy";
import Abtnv from "./FooterPages/Abtnv";



function App() {
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
      <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />}></Route>
         
          <Route path="/passwordreset" element={<PasswordReset />}></Route>
          <Route path="/explorecollegespage" element={<ExploreCollegesPage />}></Route>
          <Route path="/universityDetails"element={<UniversityDetails />}></Route>
          <Route path="/companion" element={<Companion />}></Route>
        
          <Route path="/scholar" element={<Scholar />} />
          <Route path="/counselling" element={<Counselling />} />
          <Route path="/studentloan" element={<StudentLoanPage />} />
          <Route path="/education-loan" element={<EducationLoanPage />} />
          <Route path="/login" element={<LoginModalWrapper />}></Route>
          <Route path="/signup" element={<SignupModal />}></Route>
          <Route path="/scholarshiploan" element={<Scholarshiploans />}></Route>
          <Route path="/exams" element={<Examin />}></Route>
          <Route path="/newsfeed" element={<NewsFeed />}></Route>
          <Route path="/myprofile" element={<MyProfile />}></Route>

          <Route path="/explorecourses" element={<ExploreCoursesPage />}></Route>
          <Route path="/courseregister" element={<CourseRegister />}></Route>
          <Route path="/scholarship" element={<Scholarship />}></Route>
          <Route path="/scholarform" element={<ScholarForm />}></Route>


         {/* Agent */}
          <Route path="/agent-dashboard" element={<AgentDashboard/>} />

         {/* Dashboard */}
          <Route path="/university-dashboard/:id" element={<UniversityDashboard />} />
          <Route path="/university-dashboard" element={<UniversityDashboard />} />


        {/* footer page routes  */}
          <Route path="/mtech" element={<MTech />}></Route>
          <Route path="/btech" element={<BTech />}></Route>
          <Route path="/bba" element={<BBACoursePage />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="/privacy" element={<Privacy />}></Route>
          <Route path="/about" element={<Abtnv />}></Route>
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </>
  );
}
// ✅ Wrapper so LoginModal can call setUser

function LoginModalWrapper() {
  const { setUser } = useAuth();
  return <LoginModal onLogin={setUser} />;
}

export default App;
