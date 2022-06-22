import React from 'react';

interface QuestionProps{
    text: string;
};

const Question = ({text}: QuestionProps) => <h4>{text}</h4>;
export default Question;