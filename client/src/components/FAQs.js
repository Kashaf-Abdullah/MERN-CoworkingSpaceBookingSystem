import React, { useEffect, useState } from "react";
import FAQ from "./FaqsComp";
import Aos from "aos";
import "aos/dist/aos.css";
export default function FAQs() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [faqs, setFaqs] = useState([
    {
      question: "What types of workspaces are available for booking?",
      answer:
        "We offer a variety of workspaces including hot desks, private offices, meeting rooms, and event spaces.",
      open: true,
    },
    {
      question: "How can I book a workspace?",
      answer:
        "You can book a workspace through our website or mobile app. Simply select the type of workspace, choose your desired date and time, and complete the booking process.",
      open: false,
    },
    {
      question: "Can I cancel or reschedule my booking?",
      answer:
        "Yes, you can cancel or reschedule your booking through your account on our platform. Please refer to our cancellation policy for more details.",
      open: false,
    },
    {
      question: "Are there any membership plans available?",
      answer:
        "Yes, we offer various membership plans that provide access to our spaces and additional perks. Please visit our Membership Plans page for more information.",
      open: false,
    },
    {
      question: "What amenities are included in the workspaces?",
      answer:
        "Our workspaces come equipped with high-speed internet, comfortable seating, power outlets, and access to common areas. Additional amenities vary by location.",
      open: false,
    },
    {
      question: "How do I access the coworking space once I have made a booking?",
      answer:
        "After your booking is confirmed, you will receive an email with access instructions, including any necessary entry codes or key pickup details.",
      open: false,
    },
    {
      question: "Is there parking available at the coworking spaces?",
      answer:
        "Parking availability varies by location. Please check the specific workspace details for parking information.",
      open: false,
    },
    {
      question: "Can I bring guests to the coworking space?",
      answer:
        "Yes, guests are welcome. Please make sure to include guest information during the booking process or inform our staff upon arrival.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <section
    data-aos="fade-up"
      className="App"
      id="faqs"
      style={{ backgroundColor: "var(--ghostwhite)", padding: "3rem 1rem" }}
    >
      <h4 className="sec-title">FAQs</h4>

      <div className="faqs">
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </section>
  );
}