import React, { useEffect, useState } from "react";
import loginImage from "../assets/login.svg";
import { useForm, useWatch } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { createUser } from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { usePostDeviceInformationMutation } from "../features/api/apiCategoriSlice";
import { useJwtTokenMutation } from "../features/api/apiDevicesSlice";





const Signup = () => {


  const { handleSubmit, register, reset, control } = useForm();
  const password = useWatch({ control, name: "password" });
  const confirmPassword = useWatch({ control, name: "confirmPassword" });
  const { error } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();
  const imageHostKey = 'ac41dad16cfd8c0e58eddebc45ecdd20';
  const [deviceInfo] = usePostDeviceInformationMutation();
  const [jwtToken, { data: token }] = useJwtTokenMutation();
  const location = useLocation();
  const form = location.state?.path?.pathname || "/";
  //location have a store our token key -----> the token limitation 1 hours
  localStorage.setItem('jobToken', token?.token);



  useEffect(() => {
    if (
      password !== undefined &&
      password !== "" &&
      confirmPassword !== undefined &&
      confirmPassword !== "" &&
      password === confirmPassword
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [password, confirmPassword]);


  const onSubmit = (data) => {

    const image = data.photo[0];
    const formData = new FormData();
    formData.append('image', image);
    jwtToken({ email: data.email });
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`
    fetch(url, {
      method: 'POST',
      body: formData
    }).then((res) => res.json()).then((imgData) => {
      //console.log(imgData);
      if (imgData.success) {
        deviceInfo({ email: data.email, name: data?.name, photoURL: imgData.data.url });
        dispatch(createUser({ email: data.email, password: data.password, displayName: data?.name, photoURL: imgData.data.url }));
        navigate(form, { replace: true });
      }
    }).catch((error) => {
      console.log(error.message);
    })
    reset();
  };

  // console.log(token);

  return (
    <div className='grid lg:grid-cols-2 gap-4 md:grid-cols-2 sm:grid-cols-1 mt-4'>
      <div className=''>
        <img src={loginImage} className='h-full w-full' alt='' />
      </div>

      <div className='bg-[#FFFAF4] rounded-lg grid place-items-center p-10'>
        <h1 className='font-medium text-2xl'>Sign up</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='space-y-3'>

            <div className='flex flex-col items-start'>
              <label htmlFor='username' className='ml-5'>
                User-Name
              </label>
              <input
                type='text'
                name='name'
                id='username'
                {...register("name")}
                className="input input-bordered w-full rounded-xl max-w-xl"
              />
            </div>


            <div className='flex flex-col items-start'>
              <label htmlFor='email' className='ml-5'>
                Email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                {...register("email")}
                className="input input-bordered w-full rounded-xl max-w-xl"
              />
            </div>

            <div className="flex flex-col items-start">
              <label htmlFor='email' className='ml-5'>
                Photo
              </label>

              <input type="file" name='photo' {...register('photo')} className="file-input file-input-bordered file-input-primary w-75 rounded-xl max-w-xs" />
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
            </div>
            <div className='flex flex-col items-start'>
              <label htmlFor='confirm-password' className='ml-5'>
                Confirm Password
              </label>
              <input
                type='password'
                id='confirm-password'
                {...register("confirmPassword")}
                className="input input-bordered w-full max-w-xl rounded-xl"
              />
            </div>
            <div className='!mt-8 '>
              <button
                type='submit'
                className='font-bold text-white py-3 rounded-xl bg-primary w-full disabled:bg-gray-300 disabled:cursor-not-allowed'
                disabled={disabled}
              >
                Sign up
              </button>
            </div>
            <div>
              <p>
                Already have an account?{" "}
                <span
                  className='text-primary hover:underline cursor-pointer'
                  onClick={() => navigate("/login")}
                >
                  Login
                </span>
              </p>
            </div>
          </div>
        </form>
        {error && <p className='text-3xl text-danger text-center'>{error}</p>}
      </div>

    </div>
  );
};

export default Signup;
