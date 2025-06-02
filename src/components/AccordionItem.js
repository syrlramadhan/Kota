'use client';

export default function AccordionItem({ question, answer, index, openAccordion, toggleAccordion }) {
  const isOpen = openAccordion === index;

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="accordion-header w-full text-left p-5 flex justify-between items-center hover:bg-gray-50 transition-colors duration-300 focus:outline-none"
        onClick={() => toggleAccordion(index)}
      >
        <span className="text-lg md:text-xl font-semibold text-gray-900 flex items-center gap-2">
          <svg className="w-5 h-5 text-[#0D89CA]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" />
          </svg>
          {question}
        </span>
        <svg
          className={`w-6 h-6 text-[#0D89CA] transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`accordion-content p-5 text-gray-600 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'active' : ''
        }`}
      >
        {answer}
      </div>
    </div>
  );
}