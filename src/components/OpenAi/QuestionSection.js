import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import OpenAI from 'openai';



const QuestionSection = () => {

    const [interviewQuestion, setQuestion] = useState([]);
    const [isAnimaition, setAnimation] = useState(false);

    //new Api Ley=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
    //expire api key=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

    const navigate = useNavigate();
    const openai = new OpenAI({
        apiKey: process.env.REACT_APP_OPENAI,
        dangerouslyAllowBrowser: true // defaults to process.env["OPENAI_API_KEY"]
    });

    const InterViewQuestion = async (questions, topic) => {

        //Create a list of ${questions} questions for an interview with a ${topic} and descriptive answer retuen array of Object with JSON stringified format author:
        try {

            const response = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: `Create a list of 8 questions for an interview with a science fiction author.` }],
                temperature: 0.8,
                max_tokens: 2048,
                stop: [`${questions}`]
            });

            const questionAnswer = response.choices[0].message.content.replace('\n', '');
            console.log(questionAnswer);
            setAnimation(false);
            setQuestion(JSON.parse(questionAnswer));

        }

        catch (error) {


            console.log(error?.message);

            toast.error(`Server Error 201 please Try-Again-${error?.message}`);
            navigate("/");
        }


    }


    const handelInterviewQuestion = (event) => {

        const element = event.target;
        const questions = parseInt(element.questions.value);
        const topic = element.topic.value;
        InterViewQuestion(questions, topic);
        setAnimation(true);
        event.preventDefault();

    }





    return (
        <>

            <div className='flex justify-center items-center overflow-auto p-10'>

                <div className='bg-secondary/20 shadow-lg p-10 rounded-2xl flex flex-wrap gap-3 max-w-4xl justify-between'>

                    <div className="flex justify-between">
                        <div className="avatar">
                            <div className="w-[3rem] h-[3rem]  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src='https://i.ibb.co/dGptNd1/cloud.jpg' alt='' />
                            </div>
                        </div>
                        <div className='m-3 ml-6'> <h1 className='w-full text-2xl text-primary mb-5'>
                            Interview Question and Answer {null}
                        </h1></div>

                        <div className='m-3 ml-6'>
                            <p className="btn btn-error btn-outline text-white btn-sm">Candidate Account</p>
                        </div>
                    </div>


                    {/* new Card  */}

                    <form onSubmit={handelInterviewQuestion} className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4' >


                        <div>Choose How Many Question you Want

                            <label for="underline_select" className="sr-only">Underline select</label>
                            <select id="underline_select" name='questions' className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                <option disabled selected>Number of Quiz</option>
                                <option>5</option>
                                <option>10</option>
                                <option>15</option>
                            </select>
                        </div>

                        <div>
                            Write a Topic Name,Which Topic You Want
                            <label for="underline_select" className="sr-only">Underline select</label>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="topic" id="topic" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />

                            </div>

                        </div>

                        <div className='flex justify-end items-center w-full mt-3'>


                            {
                                interviewQuestion.length === 0 && <button className='btn btn-outline btn-sm' type='submit'>
                                    Submit
                                </button>

                            }


                        </div>

                    </form>


                    {/* is Animation */}
                    {isAnimaition &&
                        <div className='flex justify-center items-center overflow-auto p-10'>
                            <progress className="progress w-56"></progress>

                        </div>
                    }


                    {
                        interviewQuestion?.length !== 0 && <div>



                            <div className="form-control grid  lg: grid-cols-1 sm:grid-cols-1 gap-3">
                                <label className="label">
                                    <span className="label-text text-xl">Interview Q&A</span>
                                </label>
                                <div name="message" className="textarea textarea-success" >
                                    {
                                        interviewQuestion?.map((v, index) => <div key={index} className="card w-full bg-secondary/20 shadow-lg p-10 rounded-2xl">
                                            <div className="card-body">
                                                <h2 className="card-title">Question  {index + 1}  : {v?.question || v?.Question} </h2>
                                                <p className='text-xl'> <b>Answer :</b> {v.answer || v?.Answer}</p>

                                            </div>
                                        </div>)
                                    }
                                </div>

                            </div>


                        </div>
                    }


                </div>
            </div>








        </>
    );
};

export default QuestionSection;