'use client';

export default function AccordionItem({ question, answer, index, openAccordion, toggleAccordion }) {
  return (
    <div className="card rounded-lg">
      <div
        className="accordion-header p-4 text-gray-900 font-semibold cursor-pointer"
        onClick={() => toggleAccordion(index)}
      >
        {question}
      </div>
      <div className={`accordion-content p-4 text-gray-600 ${openAccordion === index ? 'active' : ''}`}>
        {answer}
      </div>
    </div>
  );
}