import { useState } from "react";
import { Minus, Plus } from "lucide-react";
const faqs = [
    {
        question: "Can I change plans at any time?",
        answer:
            "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any differences.",
    },
    {
        question: "What payment methods do you accept?",
        answer:
            "Contact our team to learn about the payment methods available.",
    },
    {
        question: "Is there a free trial?",
        answer:
            "Yes, the Spark plan includes a 14-day free trial.",
    },
    {
        question: "What happens to my data if I cancel?",
        answer:
            "Contact our team for details about data retention and export options.",
    },
    {
        question: "Do you offer discounts for non-profits or education?",
        answer:
            "Contact our team to discuss available pricing options.",
    },
    {
        question: "What kind of support do you provide?",
        answer:
            "Support options vary by plan, from email to dedicated enterprise support.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className="space-y-6 mx-auto max-w-4xl md:px-10 px-5 py-16">
            {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                    <div key={faq.question} className={`md:px-5 py-1  rounded-2xl transition-colors duration-300 ${isOpen ? "bg-[#625FF0]" : "bg-[#242424]"}`}>

                        <button
                            type="button" className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm text-white"
                            onClick={() =>
                                setOpenIndex(isOpen ? -1 : index)
                            }
                        >
                            <span className="font-normal md:text-xl">{faq.question}</span>
                            {isOpen ? <Minus size={2} /> : <Plus />}
                        </button>

                        {isOpen && (
                            <div className="mx-5 border-t border-white/30 py-4 leading-relaxed text-white/80 font-normal md:text-lg">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

