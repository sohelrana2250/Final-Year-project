import React, { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { useRegisterMutation } from "../../features/api/apiSlice";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";


const EmployerRegistration = () => {


  const { handleSubmit, register, control, reset } = useForm();
  const term = useWatch({ control, name: "term" });
  const navigate = useNavigate();
  const [employerPost, { data, isSuccess, error }] = useRegisterMutation();
  const { user: { email } } = useSelector((state) => state.auth);
  const businessCategory = [
    "Automotive",
    "Business Support & Supplies",
    "Computers & Electronics",
    "Construction & Contractors",
    "Design Agency",
    "Education",
    "Entertainment",
    "Food & Dining",
    "Health & Medicine",
    "Home & Garden",
    "IT Farm",
    "Legal & Financial",
    "Manufacturing, Wholesale, Distribution",
    "Merchants (Retail)",
    "Miscellaneous",
    "Personal Care & Services",
    "Real Estate",
    "Travel & Transportation",
  ];

  const employeeRange = ["1 - 10", "11 - 50", "51 - 100", "Above 100"];
  //data?.acknowledged


  useEffect(() => {
    if (data?.status && data?.data?.acknowledged && isSuccess) {
      Swal.fire('Successfully ', 'Employee Account Created');
      navigate("/");
    }
    else {
      error && Swal.fire('System Error ', error?.message);
    }

  }, [data, isSuccess, error, navigate]);

  const onSubmit = (data) => {

    employerPost({
      ...data, role: 'employer', isAdmin: false
    });
    reset();

  };



  return (
    <div className='pt-14'>
      <div
        onClick={() => navigate("/register")}
        className='cursor-pointer w-fit mt-5 flex items-center'
      >
        <FaChevronLeft />
        <p>back</p>
      </div>
      <div className='flex justify-center items-center overflow-auto p-10'>
        <form
          className='bg-secondary/20 shadow-lg p-10 rounded-2xl flex flex-wrap gap-3 max-w-3xl justify-between'
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className='w-full text-2xl text-primary mb-5'>Employer</h1>
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='firstName'>
              First Name
            </label>
            <input type='text' id='firstName' {...register("firstName")} className="rounded-xl input input-bordered w-full" />
          </div>
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='lastName'>
              Last Name
            </label>
            <input type='text' id='lastName' {...register("lastName")} className="rounded-xl input input-bordered w-full max-w-xl" />
          </div>
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='email'>
              Email
            </label>
            <input type='email' id='email' defaultValue={email}   {...register("email")} className="rounded-xl input input-bordered w-full max-w-xl" />
          </div>
          <div className='flex flex-col w-full max-w-xs'>
            <h1 className='mb-3'>Gender</h1>
            <div className='flex gap-3'>
              <div>
                <input
                  type='radio'
                  id='male'
                  {...register("gender")}
                  value='male'
                />
                <label className='ml-2 text-lg' for='male'>
                  Male
                </label>
              </div>
              <div>
                <input
                  type='radio'
                  id='female'
                  {...register("gender")}
                  value='female'
                />
                <label className='ml-2 text-lg' for='female'>
                  Female
                </label>
              </div>
              <div>
                <input
                  type='radio'
                  id='other'
                  {...register("gender")}
                  value='other'
                />
                <label className='ml-2 text-lg' for='other'>
                  Other
                </label>
              </div>
            </div>
          </div>
          <hr className='w-full mt-2 bg-black' />
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='companyName'>
              Company's name
            </label>
            <input type='text' {...register("companyName")} id='companyName' className="rounded-xl input input-bordered w-full max-w-xl" />
          </div>
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-3' for='employeeRange'>
              Number of employee
            </label>
            <select {...register("employeeRange")} id='employeeRange' className="rounded-xl input input-bordered w-full max-w-xl">
              {employeeRange
                .sort((a, b) => a.localeCompare(b))
                .map((category) => (
                  <option value={category}>{category}</option>
                ))}
            </select>
          </div>

          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-3' for='companyCategory'>
              Company's Category
            </label>
            <select {...register("companyCategory")} id='companyCategory' className="rounded-xl input input-bordered w-full max-w-xl">
              {businessCategory
                .sort((a, b) => a.localeCompare(b))
                .map((category) => (
                  <option value={category}>{category}</option>
                ))}
            </select>
          </div>
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='roleInCompany'>
              Your role in company
            </label>
            <input
              type='text'
              {...register("roleInCompany")}
              id='roleInCompany'
              className="input input-bordered w-full max-w-xl rounded-xl"
            />
          </div>

          <div className='flex justify-between items-center w-full mt-3'>
            <div className='flex  w-full max-w-xs'>
              <input
                className='mr-3 '
                type='checkbox'
                {...register("term")}
                id='terms'
              />
              <label for='terms'>I agree to terms and conditions</label>
            </div>
            <button disabled={!term} className='btn btn-outline btn-sm' type='submit'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployerRegistration;
