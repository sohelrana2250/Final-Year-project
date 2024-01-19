import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { BsEyeSlashFill } from 'react-icons/bs'
import { useGetspecificjobDataQuery } from '../../features/api/apiCategoriSlice';
import OpenAI from 'openai';


const Quiz = () => {

    const openai = new OpenAI({
        apiKey: process.env.REACT_APP_OPENAI,
        dangerouslyAllowBrowser: true // defaults to process.env["OPENAI_API_KEY"]
    });


    const navigate = useNavigate();
    const [generatequiz, setQuiz] = useState([]);
    const [isAnimaition, setAnimation] = useState(false);
    const [count, setCount] = useState(0);
    const [Incorrect, setIncorrect] = useState(0);
    const [corrCondition, setCorrCondition] = useState(false);
    const [correctAnswer, setCorrectAnswer] = useState('');
    const { id } = useParams();
    const { data } = useGetspecificjobDataQuery(id, { refetchOnMountOrArgChange: true })
    const { position, skills } = data?.data || {};


    const descriptionMessage = [
        {
            condition: 1,
            description: 'The Quiz-Bot is One -Time Clickable '
        },
        { condition: 2, description: 'Each Question Option at a One Time Click' },
        { condition: 3, description: 'For Example You Have 5 Question. You can click 5 time ' },
        { condition: 4, description: 'If You Have to Click each Question more the 1 time. You don,t completed all question, this quiz is 1 time Clickable ' },
        { condition: 5, description: 'Be-Careful ----> Best of Luck' }
    ]

    //Generate a quiz with ${number} questions about ${topic} and their syntax, with four options and correct Answer for each question return array of object without stroring it in a variable in JSON stringified format



    const generteQuiz = async (number, topic) => {




        try {

            const response = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: `generate  a ${number} quiz about ${topic}  with 4 options and correct answers, JSON stringified format,  without  variable` }],
                temperature: 0.8,
                max_tokens: 2048,
            });


            const quizArray = response.choices[0].message.content.replace('\n', '');


            // console.log(quizArray);
            setQuiz(JSON.parse(quizArray));
            setAnimation(false);
        }
        catch (error) {
            console.log(error?.message);
            toast.error(error?.message);
            navigate('/');

        }


    }




    const handelSubmit = (event) => {

        const element = event.target;
        const number = element.number.value;
        const topic = element.topic.value;

        generteQuiz(number, topic);
        setAnimation(true);
        event.preventDefault();


    }

    const clickableAnswer = (click, Answer) => {

        if (count <= generatequiz.length) {
            if (click.toLowerCase() === Answer.toLowerCase()) {

                toast.success("Wow Your Answer is Correct!");
            }
            else {
                toast.error("So Sad ! Answer is InCorrect !!!");
                setIncorrect(Incorrect + 1);
                setCorrCondition(true);
                setCorrectAnswer(Answer);
            }
        }
        else {
            toast('The Quiz System is One Time-Clickable ----> So be Carefull');

        }
    }

    const totalQuiz = generatequiz.length;
    const WrongAnswer = Incorrect


    //console.log(generatequiz);







    return (
        <>

            <br /><br /><br />

            <div className='flex justify-center items-center'>

                <div className='fixed'>
                    <div className="stack">
                        <div className="grid w-32 h-20 rounded bg-indigo-300 text-primary-content place-content-center"> Question:{totalQuiz}</div>

                    </div>

                    <div className="stack">
                        <div className="grid w-32 h-20 rounded bg-green-200 text-primary-content place-content-center"> Correct : {totalQuiz - WrongAnswer
                        } </div>

                    </div>

                    <div className="stack">
                        <div className="grid w-32 h-20 rounded bg-rose-400 text-primary-content place-content-center">Incorrect : {WrongAnswer} </div>

                    </div>
                </div>

            </div>
            {/*  justify-center items-center */}
            <div className='flex  justify-center items-center  overflow-auto p-10'>

                <div className='bg-secondary/20 shadow-lg p-10 rounded-2xl flex flex-wrap gap-3 max-w-3xl justify-between'>

                    <div className="flex justify-between">
                        <div className="avatar">
                            <div className="w-[3rem] h-[3rem]  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src='https://i.ibb.co/dGptNd1/cloud.jpg' alt='' />
                            </div>
                        </div>
                        <div className='m-3 ml-6'> <h1 className='w-full text-2xl text-primary mb-5'>
                            Add position with {position}
                        </h1></div>

                        <div className='m-3 ml-6'>
                            <p className="btn btn-error text-white btn-sm">Candidate</p>
                        </div>
                    </div>


                    {/* new Card  */}

                    <form onSubmit={handelSubmit} className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4' >


                        <div>Choose How Many Question you Want

                            <label for="underline_select" className="sr-only">Underline select</label>
                            <select id="underline_select" name='number' className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                <option disabled selected>Number of Quiz</option>
                                <option>5</option>
                                <option>10</option>
                                <option>15</option>
                            </select>
                        </div>

                        <div>
                            Select,Which Skilled You Want To Be Test
                            <label for="underline_select" className="sr-only">Underline select</label>
                            <select id="underline_select" name='topic' required className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                <option disabled selected>Select the Topic</option>
                                {skills?.map((category, index) => (
                                    <option key={index} value={category}>{category}</option>
                                ))}
                            </select>

                        </div>

                        <div className='flex justify-end items-center w-full mt-3'>


                            {
                                generatequiz.length === 0 && <button className='btn btn-outline btn-sm' type='submit'>
                                    Submit
                                </button>

                            }


                        </div>

                    </form>

                    {/* <div className='grid lg: grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>


                    </div> */}

                </div>


            </div>

            {/* Question And Answwer Section */}


            {isAnimaition &&
                <div className='flex justify-center items-center overflow-auto p-10'>
                    <progress className="progress w-56"></progress>

                </div>
            }




            {
                generatequiz.length !== 0 && <div className='flex justify-center items-center overflow-auto p-10'>


                    <div className='bg-secondary/20 shadow-lg p-10 rounded-2xl flex flex-wrap gap-3 max-w-3xl justify-between'>
                        <h2 className="card-title">Trams && Conditions</h2>
                        <div style={{ height: '300px', width: '750px' }} className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">

                                {
                                    descriptionMessage?.map((v, index) => <h2 key={index} className="card-title">No :{v.condition}. {v.description}</h2>)
                                }

                            </div>
                        </div>

                    </div>


                </div>
            }

            {/* Quiz--Card */}

            {
                generatequiz?.map((v, index) => <div key={index} className='flex justify-center items-center overflow-auto p-10'>

                    <div className='bg-secondary/20 shadow-lg p-10 rounded-2xl flex flex-wrap gap-3 max-w-3xl justify-between'>

                        <div className='flex justify-between'>
                            <h2 className="card-title">{index + 1}.   {v.Question || v.question}</h2>
                            {
                                corrCondition && <button onClick={() => toast.success(correctAnswer)} className="btn btn-outline btn-success btn-sm ml-3"> <BsEyeSlashFill></BsEyeSlashFill></button>
                            }
                        </div>


                        <div style={{ width: '750px' }} className="card  bg-base-100 shadow-xl">
                            <div className="card-body">


                                {
                                    (v?.options || v?.Options).map((option, index) => <div key={index} className='flex'>


                                        <div className="form-control">
                                            <label className="cursor-pointer label">

                                                <input type="checkbox" onClick={() => clickableAnswer(option, v?.Answer || v?.answer, setCount((count) => count + 1))} className=" checkbox-accent" />
                                            </label>
                                        </div>

                                        <div className='m-3'><h2 className="card-title">{option}</h2>
                                        </div>
                                    </div>)

                                }


                            </div>
                        </div>
                    </div>
                </div>)
            }

        </>



    );
};

export default Quiz;