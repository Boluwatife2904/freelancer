/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import { Icon } from "@iconify/react";

function AccordionItem({ question, answer, isOpen = false, handleToggle }) {
    const accordionBodyRef = useRef();

    return (
        <div className="w-full py-4 px-5 md:px-10 border-b border-[#DCDCDC] overflow-hidden first:border-t">
            <div className="app-container flex justify-between items-start gap-3 cursor-pointer" onClick={handleToggle}>
                <p className="text-white font-light text-base md:text-xl lg:text-[24px]">{question}</p>
                <button className={`text-white text-lg md:text-[24px] transition-transform duration-300 ${isOpen ? "-rotate-90" : ""}`}>
                    <Icon icon="heroicons:arrow-down-right" />
                </button>
            </div>
            <div
                ref={accordionBodyRef}
                className="transition-[height] duration-300 app-container"
                style={{ height: isOpen ? accordionBodyRef.current.scrollHeight : "0px" }}>
                <p className="py-5 text-white lg:text-xl font-light max-w-[90%]">{answer}</p>
            </div>
        </div>
    );
}

function Accordion({ faqs }) {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <div>
            {faqs.map((faq, index) => {
                return (
                    <AccordionItem
                        key={faq.key}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={activeIndex === index}
                        handleToggle={() => setActiveIndex((prevIndex) => (prevIndex === index ? null : index))}
                    />
                );
            })}
        </div>
    );
}

export default Accordion;
