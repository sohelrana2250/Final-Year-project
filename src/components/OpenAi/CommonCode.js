
import { Configuration, OpenAIApi } from 'openai';
import { useState } from 'react';
const CommonCode = async (data) => {
    const [interviewQuestion, setQuestion] = useState([]);
    const [errorMessage, setErrormessage] = useState();
    const [isAnimaition, setAnimation] = useState(data.isLoading);
    const configuration = new Configuration({
        apiKey: "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",
    });

    const openai = new OpenAIApi(configuration);

    console.log(data);
    try {

        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: data.search,
            temperature: 0.5,
            max_tokens: 2048,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: [`${data.questions}`]
        });
        const questionAnswer = response.data.choices[0].text.replace('\n', '');
        setAnimation(false);
        setQuestion(JSON.parse(questionAnswer));
        console.log(questionAnswer);
    }


    catch (error) {
        console.log(error?.message);
        setErrormessage(error?.message);
    }
    return [interviewQuestion, isAnimaition, errorMessage];
};

export default CommonCode;