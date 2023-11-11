import React from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { useSelector } from "react-redux";

const Sidebar = () => {

  const { user: { role } } = useSelector((state) => state.auth);

  const employeeRouter = [
    { name: 'Add-Job', path: 'add-job' },
    { name: 'Applicants', path: 'app-licants' },
    { name: 'Catagories', path: 'cata-gories' },
    { name: 'Post-Catagories', path: 'post-catagorie' },
    { name: 'Cata-Applicant', path: 'catagories-applicants' },
    { name: "Selected Content", path: "selected_content" },
    { name: "Update", path: 'update_employeer' },
    { name: "Reset-Password", path: "reset_password" },
    { name: "Contract", path: "/contract" },
    { name: "Delete Account", path: "delete_account" },
    { name: 'Emp-Application', path: "image-generator" },
    { name: 'ChatBot', path: 'chatbot' },
    { name: "Translation", path: "translation" }



  ]

  const candidateRoute = [
    { name: 'Apply-Job', path: 'apply-job' },
    { name: 'Company-Job', path: 'company-job' },
    { name: 'Update', path: 'update-user-info' },
    { name: 'Content-Job', path: "getContentJob" },
    { name: "Reset-Password", path: "reset_password" },
    { name: "Contract", path: "/contract" },
    { name: "Delete Account", path: "delete_account" },
    //opeanAI Tools 
    { name: 'ChatBot', path: 'chatbot' },
    { name: 'Interview Q&A', path: 'InterviewQuestion' },
    { name: 'Emp-Application', path: "image-generator" },
    { name: "POST HERE", path: "/vedio-content" },
    { name: "Translation", path: "translation" }


  ]

  //bg-[#c994e7]
  return (
    <>
      <ul className="menu p-4 w-72  text-xl text-base-content bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-sky-700 bg-blend-multiply">
        <div className='flex justify-between items-center text-white my-1'>
          <Link to='/' className='flex items-center'>
            <FaChevronLeft />
            <h1>Back</h1>
          </Link>
          <h1 className='text-xl'>Dashboard</h1>
        </div>



        {
          role === 'employer' && employeeRouter.map((v, index) => <li className="m-1" key={index}>
            <Link
              className='btn btn-outline btn-sm text-white'
              to={v.path}
            >
              {v.name}
            </Link>

          </li>)
        }
        {
          role === 'candidate' && candidateRoute.map((v, index) => <li className="m-1" key={index}>
            <Link
              className='btn btn-outline btn-sm text-white'
              to={v.path}
            >
              {v.name}
            </Link>
          </li>)
        }

      </ul>


    </>
  );
};

export default Sidebar;
