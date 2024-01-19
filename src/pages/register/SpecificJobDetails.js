import React, { useEffect, useState } from 'react';
import { BsArrowReturnRight, BsArrowRightShort } from 'react-icons/bs';
import { useNavigate, useParams } from 'react-router-dom';
import { useDeletecatagoriechatMutation, useGetspecificjobDataQuery, useQuestionandreplyMutation, useReplycatagoriesMutation, useSendcataapplyMutation } from '../../features/api/apiCategoriSlice';
import meeting from './../../assets/meeting.jpg';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { RiDeleteBinLine } from 'react-icons/ri';
import { toast } from 'react-hot-toast';
import { logoutRedux, systemLogOut } from '../../features/auth/authSlice';


const SpecificJobDetails = () => {

    const [jobapply, setApply] = useState(false);
    const { register, handleSubmit, reset } = useForm();
    const { id } = useParams();
    const { data } = useGetspecificjobDataQuery(id, { refetchOnMountOrArgChange: true });
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [apply, { data: point, error }] = useSendcataapplyMutation();
    const [questionsend] = useQuestionandreplyMutation();
    const [replyQuestions] = useReplycatagoriesMutation();
    const [deleteChat, { data: server_response, error: delete_error }] = useDeletecatagoriechatMutation();
    const que_id = uuid();
    const [replyinfo, setReplyinfo] = useState({});

    const {
        companyName,
        position,
        location,
        experience,
        workLevel,
        employmentType,
        salaryRange,
        skills,
        requirements,
        responsibilities,
        overview,
        queries,
        companysize,
        foundeddate,
        c_email,
        w_url,
        c_location,
        I_date,
        p_date,
        _id

    } = data?.data || {};




    const handelApplay = () => {

        if (user?.role === "") { navigate('/register'); }
        if (user?.role === process.env.REACT_APP_CANDIDATE_USER) {
            const applydata = {
                userId: user?.userId,
                email: user?.email,
                jobId: _id,
                companyName,
                position,
                c_email,
                experience,
                c_location
            }


            apply(applydata);

            setApply(true);

        }
        else {
            toast.error('Only Candidate Apply the Job');
        }

    }


    // if token expire then automically system logout
    if (data?.status === 401 || data?.status === 403) {

        dispatch(systemLogOut({ dispatch, logoutRedux }));
    }


    //{status: false, message: 'You already

    useEffect(() => {

        if (point?.status) {
            toast.success('successfuly-applied');
        }

        else {
            point && toast.error(point?.data);
            error && toast.error(error?.message);
        }

    }, [point, error]);



    useEffect(() => {

        if (server_response?.data?.acknowledged && server_response?.status) {

            toast.success("Successfully Deleted message");
        }
        else {
            delete_error && toast.error(`"Server-Error 403 ${delete_error?.message}`)
        }

    }, [server_response, delete_error])


    const handelQuestions = (data) => {

        console.log(data);
        questionsend({ ...data, queId: que_id, userId: user?._id, email: user?.email, jobId: _id })
        reset();
    }

    const handelReply = (event) => {

        const element = event.target;
        const reply = element.reply.value;
        const replydata = {
            reply, ...replyinfo
        }
        replyQuestions(replydata);
        element.reset();
        event.preventDefault();


    }

    const handelDelete = (queId, _id) => {

        const data = {
            queId, _id
        }

        deleteChat(data);


    }
    //{ name: 'Quiz', path: 'QuizSection' },

    return (
        <div>

            <div className='p-5'>

                <div className='pt-2 grid grid-cols-12 gap-5'>
                    <div className='col-span-12 lg:col-span-9 md:col-span-9   mb-10'>
                        <div className='h-80 rounded-xl overflow-hidden'>
                            <img className='h-full w-full object-cover' src={meeting} alt='' />
                        </div>
                        <div className='space-y-5'>
                            <div className='grid lg:grid-cols-2 sm:grid-cols-1 mt-5'>
                                <h1 className='text-xl font-semibold text-primary'>{position}</h1>

                                {user?.role === process.env.REACT_APP_CANDIDATE_USER && <>
                                    {/* `/Quiz/${_id}` */}
                                    <div className="inline-flex rounded-md shadow-sm mt-3" role="group">
                                        <button className='btn btn-outline btn-sm' disabled={jobapply} onClick={handelApplay}>Apply</button>
                                        <button className='btn btn-outline btn-sm ml-2' onClick={() => navigate()} >Quiz </button>
                                        <button className='btn btn-outline btn-sm ml-2' onClick={() => navigate()} >Questions </button>
                                        <button className='btn btn-outline btn-sm ml-2' onClick={() => navigate('/')}>Home</button>

                                    </div>

                                </>

                                }



                                {user?.role === process.env.REACT_APP_EMPLOYEER_USER && <button className='mt-3 btn btn-outline btn-sm max-w-xs' onClick={() => navigate('/')}>Home</button>}


                            </div>


                            <div>
                                <h1 className='text-primary text-lg font-medium mb-3'>Overview</h1>
                                <p>{overview}</p>
                            </div>
                            <div>
                                <h1 className='text-primary text-lg font-medium mb-3'>Skills</h1>
                                <ul>
                                    {skills?.map((skill, index) => (
                                        <li key={index} className='flex items-center'>
                                            <BsArrowRightShort /> <span>{skill}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h1 className='text-primary text-lg font-medium mb-3'>
                                    Requirements
                                </h1>
                                <ul>
                                    {requirements?.map((skill, index) => (
                                        <li key={index} className='flex items-center'>
                                            <BsArrowRightShort /> <span>{skill}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h1 className='text-primary text-lg font-medium mb-3'>
                                    Responsibilities
                                </h1>
                                <ul>
                                    {responsibilities?.map((skill, index) => (
                                        <li key={index} className='flex items-center'>
                                            <BsArrowRightShort /> <span>{skill}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <hr className='my-5' />
                        <div>
                            <div>
                                <h1 className='text-xl font-semibold text-primary mb-5'>
                                    General Q&A
                                </h1>
                                <div className='text-primary my-2'>
                                    {queries?.map(({ question, email, reply, queId, id }) => (
                                        <div>
                                            <small>{email}</small>
                                            <div className='flex items-center gap-2 relative left-5'>
                                                <p className='text-lg font-medium'>{question}</p>
                                                {
                                                    user?.role === process.env.REACT_APP_EMPLOYEER_USER && <button onClick={() => handelDelete(queId, _id)} className='btn btn-outline btn-error btn-sm text-xl m-3'><RiDeleteBinLine></RiDeleteBinLine></button>
                                                }

                                            </div>

                                            {
                                                reply?.filter((v) => v.queId === queId)?.map((v) => (
                                                    <p className='flex items-center gap-2 relative left-5'>
                                                        <BsArrowReturnRight /> {v.reply}

                                                        {/* {user?.email === employeerEmail && <button onClick={() => handelDelete(v.queId, _id)} className='btn btn-outline btn-error text-xl m-3'><RiDeleteBinLine></RiDeleteBinLine></button>

                                                        } */}

                                                    </p>

                                                ))
                                            }




                                            {
                                                user?.role === process.env.REACT_APP_EMPLOYEER_USER && <form onSubmit={handelReply} >
                                                    <div className='flex gap-3 my-5'>
                                                        <input placeholder='Reply' name='reply' type='text' className='w-full bg-primary/10 border border-primar rounded-full transition-all  grid place-items-center text-primary' />
                                                        <button onClick={() => setReplyinfo({ queId, id, _id })}
                                                            className='shrink-0 h-14 w-14 bg-primary/10 border border-primary hover:bg-primary rounded-full transition-all  grid place-items-center text-primary hover:text-white'
                                                            type='submit'>

                                                            <BsArrowRightShort size={30} />
                                                        </button>
                                                    </div>


                                                </form>
                                            }


                                        </div>
                                    ))}
                                </div>

                                {user?.role === process.env.REACT_APP_CANDIDATE_USER && <div>

                                    {
                                        queries?.find((v) => v.email === user?.email) ? '' : <form onSubmit={handleSubmit(handelQuestions)} >

                                            {
                                                <div className='flex gap-3 my-5'>
                                                    <input
                                                        placeholder='Ask a question...'
                                                        type='text'
                                                        className='w-full bg-primary/10 border border-primar rounded-full transition-all  grid place-items-center text-primary'
                                                        name='question'
                                                        {...register('question')}
                                                    />
                                                    <button
                                                        className='shrink-0 h-14 w-14 bg-primary/10 border border-primary hover:bg-primary rounded-full transition-all  grid place-items-center text-primary hover:text-white'
                                                        type='submit'
                                                    >
                                                        <BsArrowRightShort size={30} />
                                                    </button>
                                                </div>
                                            }


                                        </form>
                                    }


                                </div>}
                            </div>
                        </div>


                    </div>
                    <div className='col-span-12 lg:col-span-3 md:col-span-3'>
                        <div className='rounded-xl bg-primary/10 p-5 text-primary space-y-5'>
                            <div>
                                <p>Experience</p>
                                <h1 className='font-semibold text-lg'>{experience}</h1>
                            </div>
                            <div>
                                <p>Work Level</p>
                                <h1 className='font-semibold text-lg'>{workLevel}</h1>
                            </div>
                            <div>
                                <p>Employment Type</p>
                                <h1 className='font-semibold text-lg'>{employmentType}</h1>
                            </div>
                            <div>
                                <p>Salary Range</p>
                                <h1 className='font-semibold text-lg'>{salaryRange}</h1>
                            </div>
                            <div>
                                <p>Location</p>
                                <h1 className='font-semibold text-lg'>{location}</h1>
                            </div>
                        </div>
                        <div className='mt-5 rounded-xl bg-primary/10 p-5 text-primary space-y-5'>
                            <div>
                                <h1 className='font-semibold text-lg'>{companyName}</h1>
                            </div>
                            <div>
                                <p>Company Size</p>
                                <h1 className='font-semibold text-lg'>{companysize}</h1>
                            </div>
                            <div>
                                <p>Founded</p>
                                <h1 className='font-semibold text-lg'>{foundeddate
                                }</h1>
                            </div>
                            <div>
                                <p>Company Email</p>
                                <h1 className='font-semibold text-lg'>{c_email}</h1>
                            </div>
                            <div>
                                <p>Company Location</p>
                                <h1 className='font-semibold text-lg'>{c_location}</h1>
                            </div>
                            <div>
                                <p>Website Url</p>
                                <a className="underline font-semibold text-lg" target="_blank" rel="noreferrer" href={w_url}>{`Visite ${companyName} .com`}</a>

                            </div>
                            <div>
                                <p>Interview Date</p>
                                <h1 className='font-semibold text-lg'>{new Date(I_date).toString()}</h1>

                            </div>

                            <div>
                                <p>Application Last Date</p>
                                <h1 className='font-semibold text-lg'>{new Date(p_date).toString()}</h1>

                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default SpecificJobDetails;