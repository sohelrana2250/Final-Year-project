import React, { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import loginImage from "../assets/login.svg";
import { googleSignIn, loginUser } from "../features/auth/authSlice";
import { toast } from 'react-hot-toast'
import { useJwtTokenMutation } from "../features/api/apiDevicesSlice";
import { usePostDeviceInformationMutation } from "../features/api/apiCategoriSlice";
import { FcGoogle } from 'react-icons/fc';
const Login = () => {
  const { register, formState: { errors }, handleSubmit, reset, control } = useForm();
  const password = useWatch({ control, name: "password" });
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const form = location.state?.path?.pathname || "/";
  const { user: { email, photoURL }, isLoading, error } = useSelector((state) => state.auth);
  const [jwtToken, { data: token }] = useJwtTokenMutation();
  const [deviceInfo, { data }] = usePostDeviceInformationMutation();


  useEffect(() => {
    if (
      password !== undefined &&
      password !== ""
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [password]);


  const onSubmit = (data) => {

    dispatch(loginUser({ email: data.email, password: data.password }));
    const currentUser = {
      email: data.email
    }
    jwtToken(currentUser);
    deviceInfo({ email: data.email, name: data?.name, photoURL: photoURL });
    reset();

  };

  const handleGoogleSing = () => {
    jwtToken({ email })

    dispatch(googleSignIn());

  }


  useEffect(() => {

    if (!isLoading && email) {
      navigate(form, { replace: true });
    }
  }, [isLoading, email, navigate, form])

  useEffect(() => {

    if (!error) {
      toast.success('successfully-login');
    }
    else {
      error && toast.error(error);
    }



  }, [isLoading, error]);

  localStorage.setItem('jobToken', token?.token);



  return (
    <div className='grid lg:grid-cols-2 gap-2 md:grid-cols-2 sm:grid-cols-1 '>
      <div className="">
        <img src={loginImage} className='h-full w-full' alt='' />
      </div>

      <div className='bg-[#FFFAF4] rounded-lg grid place-items-center'>


        <form className="w-2/3" onSubmit={handleSubmit(onSubmit)}>
          <h1 className=' font-medium text-2xl  flex justify-center m-3'>Login</h1>
          <div className='space-y-4 '>


            <div className='flex flex-col items-start'>
              <label htmlFor='email' className='ml-5'>
                Email
              </label>
              <input type='email' {...register("email")} id='email' className="input input-bordered rounded-xl w-full  max-w-xl" />
              {errors.email && <p role="alert">{errors.email?.message}</p>}
            </div>
            <div className='flex flex-col items-start'>
              <label htmlFor='password' className='ml-5'>
                Password
              </label>
              <input
                type='password'
                name='password'
                id='password'
                {...register("password")}
                className="input input-bordered w-full rounded-xl max-w-xl"
              />
              {errors.password && <p role="alert">{errors.password?.message}</p>}
            </div>
            <div className='relative !mt-8'>
              <button
                type='submit'
                disabled={disabled}
                className='font-bold text-white py-3 rounded-xl bg-primary btn-outline w-full disabled:bg-gray-300 disabled:cursor-not-allowed'
              >
                Login
              </button>
            </div>
            <div>
              <p>
                Don't have an account?
                <span
                  className='text-primary hover:underline cursor-pointer'

                  onClick={() => navigate("/signup")}
                >
                  Sign up
                </span>
              </p>
            </div>
          </div>
        </form>


        <div className='w-2/3  lg:-mt-56'>
          <button
            type='submit'
            className='font-bold text-white  rounded-xl btn btn-success  btn-outline w-full'
            disabled={true}
            onClick={() => handleGoogleSing()}
          >

            <FcGoogle className="text-xl mr-3" />  Google-SingIn

          </button>
        </div>
        {data && <p className='text-3xl text-success text-center'>{data?.message}</p>}

        {error && <p className='text-3xl text-danger text-center'>{error}</p>}
      </div>

    </div>
  );
};

export default Login;
