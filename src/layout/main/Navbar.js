
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import auth from './../../firebase/firebase.config';
import { logoutRedux, systemLogOut } from "../../features/auth/authSlice";
import { toast } from "react-hot-toast";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import { GrUserAdmin } from "react-icons/gr";




const Navbar = () => {

  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { email, role, photoURL, createdAt, lastLoginAt } = user;

  //const status = email ? navigator.onLine : false;
  //console.log(status);


  const device_Activity = {
    createdAt,
    lastLoginAt,
    uid: auth?.currentUser?.uid,
    status: true
  }

  const handelLogout = () => {

    user_status_report({ lastAt: new Date().getTime(), status: false });
    dispatch(systemLogOut({ dispatch, logoutRedux }));
  }


  //console.log(user);
  const user_status_report = (device_Activity) => {

    if (email) {

      fetch(`https://job-server-box.vercel.app/update-device-infomation/${email}`, {

        method: "PATCH", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(device_Activity),
      }).then((res) => res.json()).then((result) => {

        if (result?.status && result?.data?.acknowledged) {

        }
        else if (result?.status === false) {
          toast.error(result?.message);
        }
        else {
          toast.error("poor codeing issues");
        }

      }).catch((error) => {
        console.log(error?.message);
      })
    }
    else {
      console.log("fatch End");
    }

  }

  if (createdAt && lastLoginAt) {

    user_status_report(device_Activity);
  }
  else {
    console.log("fatch End");
  }

  const handleTabClose = () => {

    user_status_report({ lastAt: new Date().getTime(), status: false });

  }

  const handlBrowserClose = () => {

    user_status_report({ lastAt: new Date().getTime(), status: false });

  }
  window.addEventListener("beforeunload", handleTabClose);

  const removeBeforeUnloadListener = () => {

    window.removeEventListener('beforeunload', handlBrowserClose);
  }
  setTimeout(() => {
    removeBeforeUnloadListener()
  }, 3000)

  const menuItem = <React.Fragment>


    <li className='m-1'>
      <Link className='btn btn-outline btn-sm text-white' to='/'>JobBox</Link>
    </li>

    <li className='m-1'>
      <Link className='btn btn-outline btn-sm text-white' to='/jobs'>
        Non-Org
      </Link>
    </li>

    <li className='m-1'>
      <Link
        className='btn btn-outline btn-sm text-white'
        to="/home"
      >
        Org
      </Link>
    </li>

    <li className='m-1 text-white'>
      <Link
        className='btn btn-outline btn-sm'
        to="/about"
      >
        About
      </Link>
    </li>

    <li className='m-1'>
      <Link
        className='btn btn-outline btn-sm text-white'
        to="/help_detaills"
      >
        Help
      </Link>
    </li>

    <li className='m-1'>
      <Link
        className='btn btn-outline btn-sm text-white'
        to="/services"
      >
        Service
      </Link>
    </li>


    <li className='m-1'>
      <Link
        className='btn btn-outline btn-sm text-white'
        to="/contract"
      >
        Contract
      </Link>
    </li>

    <li className='m-1'>
      <Link
        className='btn btn-outline btn-sm text-white'
        to="/content"
      >
        Content
      </Link>
    </li>
    <li className='m-1'>
      <Link className='btn btn-outline btn-sm text-white' to="/dashboard/setting">Admin</Link>
    </li>





    {email ? <>

      <button onClick={() => handelLogout()} className='btn btn-outline btn-sm m-1 text-white'>Log-Out </button>


      <li className='m-1'>
        <Link
          className='btn btn-outline btn-sm text-white'
          to='/dashboard'
        >
          Dashboard
        </Link>
      </li>
      <li>

      </li>

    </> : <>
      <li className='m-1'>
        <Link
          className='btn btn-outline btn-sm text-white'
          to='/login'
        >
          Login
        </Link>
      </li>


    </>}


    {
      role ? <></> : <>
        <li className='m-1'>
          <Link
            className='btn btn-outline btn-sm text-white'
            to='/signup'
          >
            Register
          </Link>
        </li>
      </>





    }










  </React.Fragment>

  return (

    <>

      <div className={`navbar bg-[#082f49] ${pathname === "/" ? null : "bg-[#082f49]"
        }`}>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> */}

              <button className="border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"> < HiMenuAlt1 className="text-xl"></ HiMenuAlt1></button>

            </label>
            <ul tabindex="0" className="menu menu-lg dropdown-content  mt-3 p-8 shadow bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply rounded-sm  w-64">
              {menuItem}
            </ul>
          </div>
          <a href="..." className="btn btn-ghost normal-case text-xl text-white">JOBBOX</a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-5">
            {menuItem}
          </ul>
        </div>







        <div className="navbar-end">
          <label htmlFor="alluser-dashboard" tabindex={2} className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900 lg:hidden mt-2">
            <AiOutlineMenu className="text-xs" />
          </label>

          <label htmlFor="setting-dashboard" tabindex={3} className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900 lg:hidden mt-2">
            <GrUserAdmin className="text-xs text-white" />
          </label>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img alt="" src={photoURL} />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link className="justify-between" to='/user-profile'>
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li><a href="...">settig</a></li>
              <li><a href="...">Logout</a></li>
            </ul>
          </div>
        </div>




      </div>



    </>



  );
};

export default Navbar;
