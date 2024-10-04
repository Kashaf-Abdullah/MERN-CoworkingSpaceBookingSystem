import React from "react";

const FaqsComp = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      id="faqs"
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question text" >{faq.question}</div>
      <div className="faq-answer text">{faq.answer}</div>
    </div>
  );
};
export default FaqsComp;
