import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/dashboard/Dashboard";
import Main from "../layout/main/Main";
import AccountCreator from "../pages/register/AccountCreator";
import Home from "../pages/home/Home";
import Jobs from "../pages/Jobs";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PrivateRoute from "../utils/PrivateRoute";
import AddJob from "../pages/employeeDashboard/AddJob";
import EmployerDashboard from "../pages/employeeDashboard/EmployerDashboard";
import JobDetailsInfo from "../pages/register/JobDetailsInfo";
import AppliedJobs from "../pages/candidateDashboard/AppliedJobs";
import ApplicantsUser from "../pages/employeeDashboard/ApplicantsUser";
import ExpJob from "../components/Home/ExpJob";
import CategorieAdd from "../components/Categories-Dashboard/CategorieAdd";
import CategoriesData from "../pages/employeeDashboard/CategoriesData";
import UpdateCataInfo from "../pages/employeeDashboard/UpdateCataInfo";
import SpecificJobList from "../components/Home/SpecificJobList";
import AddJobCatagorie from "../pages/employeeDashboard/AddJobCatagorie";
import SpecificJobDetails from "../pages/register/SpecificJobDetails";
import CatagoriesApplicantUser from "../pages/employeeDashboard/CatagoriesApplicantUser";
import UpdateCompanyCatagorie from "../pages/employeeDashboard/UpdateCompanyCatagorie";
import CatagoriesApplicantInfo from "../pages/employeeDashboard/CatagoriesApplicantInfo";
import CompanyAppliedjob from "../pages/candidateDashboard/CompanyAppliedjob";
import UserProfile from "../components/UserProfile/UserProfile";
import UpdateCandidateInfo from "../pages/candidateDashboard/UpdateCandidateInfo";
import InterviewerList from "../pages/employeeDashboard/InterviewerList";

import Quiz from "../components/OpenAi/Quiz";
import ChatBot from "../components/OpenAi/ChatBot";
import QuestionSection from "../components/OpenAi/QuestionSection";
import VedioContent from "../components/UserProfile/VedioContent";
import ContentDisplay from "../components/UserProfile/ContentDisplay";
import Setting from "../components/Setting/Setting";
import SettingDashboard from "../layout/dashboard/SettingDashboard";
import ImageGenerator from "../components/OpenAi/ImageGenerator";
import Getcontent from "../pages/candidateDashboard/Getcontent";
import ContentUpdate from "../pages/candidateDashboard/ContentUpdate";
import NonOrgApplicantUserInfo from "../pages/employeeDashboard/NonOrgApplicantUserInfo";
import NonOrgInterviewList from "../pages/employeeDashboard/NonOrgInterviewList";
import UpdateNonOrgJob from "../pages/employeeDashboard/UpdateNonOrgJob";
import Allemployeer from "../components/Admin_Dashboard/Allemployeer";
import AdminRoute from "../utils/AdminRoute";
import UserdeviceInfo from "../components/Admin_Dashboard/UserdeviceInfo";
import AllcandidateUser from "../components/Admin_Dashboard/AllcandidateUser";
import NonorgAlldata from "../components/Admin_Dashboard/NonorgAlldata";
import OrgAlldata from "../components/Admin_Dashboard/OrgAlldata";
import AllJOBDetails from "../components/Categories-Dashboard/AllJOBDetails";
import AllContentbaseJob from "../components/Admin_Dashboard/AllContentbaseJob";
import Resetpassword from "../pages/candidateDashboard/Resetpassword";
import DeleteAccount from "../components/reusable/DeleteAccount";
import About from "../layout/main/About";
import Translation from "../layout/main/Translation";
import Services from "../layout/main/Services";
import Contract from "../components/reusable/Contract";
import Helpingdetails from "../components/reusable/Helpingdetails";
import SelectedContent from "../pages/employeeDashboard/SelectedContent";
import ComplainBox from "../components/Admin_Dashboard/ComplainBox";
import UpdateEmployeer from "../pages/employeeDashboard/UpdateEmployeer";
import AdminGraph from "../components/Admin_Dashboard/AdminGraph";



/* {
        path: 'QuizSection/:id',
        element: <Quiz />
      }, */



const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/home",
        element: <ExpJob></ExpJob>,
      },
      {
        path: "/about",
        element: <About></About>

      },
      {
        path: "/services",
        element: <Services></Services>

      },
      {
        path: "/contract",
        element: <Contract />

      },
      { path: "/help_detaills", element: <Helpingdetails></Helpingdetails> },
      {
        path: "/signup",
        element: <Signup />,
      },
      {

        path: '/vedio-content',
        element: <PrivateRoute><VedioContent /></PrivateRoute>

      },
      {
        path: "/contentUpdate/:id",
        element: <PrivateRoute>
          <ContentUpdate />
        </PrivateRoute>
      },
      {
        path: "/register",
        element: (
          <PrivateRoute>
            <AccountCreator />
          </PrivateRoute>
        ),
      },
      {
        path: "/register/:type",
        element: (
          <PrivateRoute>
            <AccountCreator />
          </PrivateRoute>
        ),
      },
      {

        path: '/details-job-info/:id',
        element: (
          <PrivateRoute>
            <SpecificJobDetails />
          </PrivateRoute>)

      },
      {
        path: '/user-profile',
        element: <PrivateRoute>
          <UserProfile />
        </PrivateRoute>
      },
      {

        path: "/job-details/:id",
        element: <PrivateRoute>
          <JobDetailsInfo></JobDetailsInfo>
        </PrivateRoute>,
      },
      {
        path: "/addJob-catagories/:id",
        element: <AddJobCatagorie></AddJobCatagorie>

      },
      {
        path: '/update-Cata-Info/:id',
        element: <UpdateCataInfo></UpdateCataInfo>
      },
      {
        path: '/content',
        element: <PrivateRoute><ContentDisplay /></PrivateRoute>
      },
      {
        path: "/SpecificJobList/:id",
        element: <PrivateRoute><SpecificJobList></SpecificJobList></PrivateRoute>

      },
      {
        path: "/Quiz/:id",
        element: <PrivateRoute><Quiz /></PrivateRoute>
      }



    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "add-job",
        element: <AddJob />,
      },
      {
        path: "cata-gories",
        element: <CategorieAdd />

      },
      {
        path: "post-catagorie",
        element: <CategoriesData></CategoriesData>

      },
      {
        path: "app-licants",
        element: <ApplicantsUser></ApplicantsUser>

      },
      {
        path: "employer",
        element: <EmployerDashboard />,
      },
      {
        path: "apply-job",
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: 'company-job',
        element: <CompanyAppliedjob></CompanyAppliedjob>

      },
      {
        path: 'update_employeer',
        element: <UpdateEmployeer />
      },
      {
        path: "getContentJob", element: <Getcontent />
      },
      { path: "reset_password", element: <Resetpassword /> },
      { path: "delete_account", element: <DeleteAccount /> },
      {
        path: "translation", element: <Translation />
      },
      //opean AI Tools

      {
        path: 'chatbot',
        element: <ChatBot />
      },
      {
        path: "selected_content",
        element: <SelectedContent />

      },
      {
        path: 'InterviewQuestion',
        element: <QuestionSection />
      },
      {
        path: "image-generator",
        element: <ImageGenerator />
      },

      {
        path: 'catagories-applicants',
        element: <CatagoriesApplicantUser />
      },
      {
        path: 'update-company-catagorie/:id',
        element: <UpdateCompanyCatagorie />
      },
      {
        path: "update-NonOrg-catagorie/:id",
        element: < UpdateNonOrgJob></UpdateNonOrgJob>

      },

      {
        path: 'update-user-info',
        element: <UpdateCandidateInfo />
      },
      {
        path: 'candidate-list-interview/:id',
        element: <InterviewerList />
      },
      {
        path: "Non_Org_InterviewList/:id",
        element: <NonOrgInterviewList></NonOrgInterviewList>

      },
      {
        path: 'catagories-applicants-user/:id',
        //catagories-applicants-user
        element: <CatagoriesApplicantInfo />
      },
      {
        path: 'Non_Org_applicants-user/:id',
        element: <NonOrgApplicantUserInfo />
      },



    ],
  },
  //setting dashboard
  {
    path: "/dashboard/setting",
    element: <PrivateRoute><SettingDashboard /></PrivateRoute>,
    children: [


      { path: '/dashboard/setting', element: <Setting></Setting> },
      { path: "dash_board", element: <AdminGraph /> },
      { path: 'all_employeer_user', element: <AdminRoute><Allemployeer></Allemployeer></AdminRoute> },
      { path: "all_device_info", element: <AdminRoute> <UserdeviceInfo></UserdeviceInfo></AdminRoute> },
      { path: "All_Candidate", element: <AdminRoute><AllcandidateUser></AllcandidateUser></AdminRoute> },
      { path: "all_Non_Org_data", element: <AdminRoute><NonorgAlldata></NonorgAlldata></AdminRoute> },
      { path: "all_Org_data", element: <AdminRoute><OrgAlldata></OrgAlldata></AdminRoute> },
      { path: "Company_job_details/:id", element: <AdminRoute><AllJOBDetails></AllJOBDetails></AdminRoute> },
      { path: "all_content_jobdata", element: <AdminRoute><AllContentbaseJob></AllContentbaseJob></AdminRoute> },
      { path: "complain_list", element: <AdminRoute><ComplainBox /></AdminRoute> }



    ]

  },












]);

export default routes;
