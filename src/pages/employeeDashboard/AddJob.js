import React, { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { FiTrash } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useJobCollectionMutation } from "../../features/api/apiSlice";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from "react-hot-toast";



const AddJob = () => {

  const { handleSubmit, register, control, reset } = useForm();
  const [jobPost, { data, isSuccess, error }] = useJobCollectionMutation();
  const { user: { email } } = useSelector((state) => state.auth);

  const [selectedDate, setSelectedDate] = useState();
  const [selectedInterviewDate, setSelectedInterviewDate] = useState();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleInterviewDateChange = (date) => {
    setSelectedInterviewDate(date);
  }
  const {
    fields: resFields,
    append: resAppend,
    remove: resRemove,
  } = useFieldArray({ control, name: "responsibilities" });

  const {
    fields: skillFields,
    append: skillAppend,
    remove: skillRemove,
  } = useFieldArray({ control, name: "skills" });
  const {
    fields: reqFields,
    append: reqAppend,
    remove: reqRemove,
  } = useFieldArray({ control, name: "requirements" });

  //Date Validation Checkeding process
  const date1 = new Date().getTime();
  const date2 = new Date(selectedDate).getTime();
  //Inerview Validation checked
  const interviewDATE = new Date(selectedInterviewDate).getTime();




  const onSubmit = (data) => {


    if (date1 >= date2 && date1 >= interviewDATE && date2 >= interviewDATE) {

      toast.error(`Previous Date Not Exceptable`);
    }
    else {
      //console.log({ ...data, email, p_date: date1, date: date2, I_date: interviewDATE, applicants: [], queries: [] });
      jobPost({ ...data, email, p_date: date1, date: date2, I_date: interviewDATE, applicants: [], queries: [] });
    }

    reset();
  };

  useEffect(() => {

    if (data?.status && data?.data?.acknowledged && isSuccess) {
      toast.success("Successfully-Posted");
    }
    else {
      error && toast.error(`Server Error 404  ${error?.message}`);
    }

  }, [data, isSuccess, error])



  //interview date working panding 

  return (
    <div className='flex justify-center items-center overflow-auto p-10'>
      <form
        className='bg-secondary/20 shadow-lg p-10 rounded-2xl flex flex-wrap gap-3 max-w-full justify-between'
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className='w-full text-2xl text-primary mb-5'>
          Add a new position
        </h1>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='position'>
            Job Position
          </label>
          <input type='text' id='position' {...register("position")} className="input input-bordered w-full rounded-lg" />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='companyName'>
            Company Name
          </label>
          <input
            type='text'
            id='companyName'
            {...register("companyName")}
            className="input input-bordered w-full rounded-lg"
          />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='experience'>
            Experience
          </label>
          {/* <input type='text' id='experience' {...register("experience")} className="input input-bordered w-full" /> */}

          <select name='experience' {...register("experience")} required className='input input-bordered w-full rounded-lg' id='id'>
            <option >Internship</option>
            <option >Fresher</option>
            <option >Semi-Experiences</option>
            <option >Experiences</option>

          </select>
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='workLevel'>
            Work Level
          </label>
          <input type='text' id='workLevel' {...register("workLevel")} className="input input-bordered w-full rounded-lg" />
        </div>

        {/* employeeType */}
        <div className='flex flex-col w-full  max-w-xs'>
          <label htmlFor='employmentType'>
            Employment Type
          </label>

          <select id='employmentType' {...register("employmentType")} className="rounded-lg select select-secondary w-full max-w-xs" required>
            <option disabled selected>Job-Catagories</option>
            <option>Part Time</option>
            <option>Full Time</option>
          </select>

        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='salaryRange'>
            Salary Range
          </label>
          <input type='text' id='salaryRange' {...register("salaryRange")} className="input input-bordered w-full rounded-lg" required />
        </div>
        {/* work Location */}
        <div className='flex flex-col w-full max-w-xs'>
          <label htmlFor='location'>
            Work  Location
          </label>
          <select id='location' {...register("location")} className="rounded-lg select select-secondary w-full" required>
            <option disabled selected>Job-Catagories</option>
            <option>Office</option>
            <option>Remote</option>
            <option>Negotiable</option>

          </select>
        </div>
        {/* company Location */}
        <div className='flex flex-col w-full max-w-xs'>
          <label htmlFor='c_location'>
            Company Location
          </label>
          <input type='text' id='c_location' {...register("c_location")} required className='rounded-lg  input input-bordered w-full' />
        </div>

        {/* company size */}

        <div className='flex flex-col w-full max-w-xs '>
          <label htmlFor='companysize'>
            Company Size
          </label>
          <input
            type='text'
            id='companysize'
            {...register("companysize")}
            className='rounded-lg input input-bordered w-full '
            required
          />
        </div>

        {/* founded date  */}

        <div className='flex flex-col w-full max-w-xs'>
          <label htmlFor='foundeddate'>
            Company Founded Date
          </label>
          <input
            type='date'
            id='foundeddate'
            {...register("foundeddate")}
            className='rounded-lg input input-bordered w-full'
            required
          />
        </div>
        {/* company email Address */}
        <div className='flex flex-col w-full max-w-xs'>
          <label htmlFor='c_email'>
            Company Email Address
          </label>
          <input
            type='text'
            id='c_email'
            {...register("c_email")}
            className='rounded-lg  input input-bordered w-full'
            required
          />
        </div>

        {/*company web site Url */}
        <div className='flex flex-col w-full max-w-xs'>
          <label htmlFor='w_url'>
            Company Website URL
          </label>
          <input
            type='url'
            id='w_url'
            {...register("w_url")}
            className=' rounded-lg  input input-bordered w-full'
            required
          />
        </div>


        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='location'>
            Last Date for Application
          </label>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="MMMM d, yyyy h:mm aa"
            className="input input-bordered w-full rounded-lg"
            required
          />
        </div>

        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='Interview'>
            Interview Date
          </label>
          <DatePicker
            selected={selectedInterviewDate}
            onChange={handleInterviewDateChange}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="MMMM d, yyyy h:mm aa"
            className="input input-bordered w-full rounded-lg"
            required
          />
        </div>


        <hr className='w-full mt-2 bg-black' />
        <div className='flex flex-col w-full '>
          <label className='mb-2' htmlFor='overview'>
            Overview
          </label>
          <textarea rows={8} {...register("overview")} id='overview' className="text-lg py-2 px-5  border border-gray-300 focus:border-primary focus:ring-primary rounded-lg" />
        </div>
        <div className='flex flex-col w-full'>
          <label className='mb-2'>Skills</label>
          <div>
            <div>
              {skillFields.map((item, index) => {
                return (
                  <div key={item.key} className='flex items-center gap-3 mb-5'>
                    <input
                      type='text'
                      {...register(`skills[${index}]`)}
                      className="input input-bordered w-full rounded-lg"
                    />
                    <button
                      type='button'
                      onClick={() => skillRemove(index)}
                      className='grid place-items-center rounded-full flex-shrink-0 bg-red-500/20 border border-red-500 h-11 w-11 group transition-all hover:bg-red-500'
                    >
                      <FiTrash
                        className='text-red-500 group-hover:text-white transition-all'
                        size='20'
                      />
                    </button>
                  </div>
                );
              })}
            </div>
            <div>
              <button
                type='button'
                onClick={() => skillAppend("")}
                className='btn btn-outline btn-sm'
              >
                Add Skill
              </button>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full'>
          <label className='mb-2'>Responsibilities</label>
          <div>
            <div>
              {resFields.map((item, index) => {
                return (
                  <div key={item.key} className=' mb-5 flex items-center gap-3'>
                    <input
                      className="input input-bordered w-full rounded-lg"
                      type='text'
                      {...register(`responsibilities[${index}]`)}
                    />
                    <button
                      type='button'
                      onClick={() => resRemove(index)}
                      className='grid place-items-center rounded-full flex-shrink-0 bg-red-500/20 border border-red-500 h-11 w-11 group transition-all hover:bg-red-500'
                    >
                      <FiTrash
                        className='text-red-500 group-hover:text-white transition-all'
                        size='20'
                      />
                    </button>
                  </div>
                );
              })}
            </div>
            <div>
              <button
                type='button'
                onClick={() => resAppend("")}
                className='btn btn-outline btn-sm'
              >
                Add Responsibility
              </button>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full'>
          <label className='mb-2'>Requirements</label>
          <div>
            <div>
              {reqFields.map((item, index) => {
                return (
                  <div key={item.key} className=' mb-5 flex items-center gap-3'>
                    <input
                      className="input input-bordered w-full rounded-lg"
                      type='text'
                      {...register(`requirements[${index}]`)}
                    />
                    <button
                      type='button'
                      onClick={() => reqRemove(index)}
                      className='grid place-items-center rounded-full flex-shrink-0 bg-red-500/20 border border-red-500 h-11 w-11 group transition-all hover:bg-red-500'
                    >
                      <FiTrash
                        className='text-red-500 group-hover:text-white transition-all'
                        size='20'
                      />
                    </button>
                  </div>
                );
              })}
            </div>
            <div>
              <button
                type='button'
                onClick={() => reqAppend("")}
                className='btn btn-outline btn-sm'
              >
                Add Requirement
              </button>
            </div>
          </div>
        </div>

        <div className='flex justify-end items-center w-full mt-3'>
          <button className='btn btn-outline btn-sm' type='submit'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;

// Position name
// Company name
// Experience
// Work Level
// Salary Range
// Employment Type
// Location
// Overview
// Responsibilities
// Requirements
// Skills
