import React from "react";

type FaqQuestionProps = {
  question: string;
  answer: string;
};

function FAQCards({ question, answer }: FaqQuestionProps) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
      <div className="h-full max-w-sm lg:max-w-none mx-auto py-10 px-8 bg-white rounded-2xl">
        <h4 className="text-3xl font-heading leading-8 mb-2">{question}</h4>
        <p className="mb-10">{answer}</p>
      </div>
    </div>
  );
}

export default FAQCards;
