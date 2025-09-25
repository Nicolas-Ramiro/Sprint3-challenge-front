import { useState } from "react";

interface FaqItemProps {
  question: string;
  answer: string;
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-md shadow-md overflow-hidden transition w-full">
      <button
        className="w-full flex justify-between !bg-white items-center p-6 text-lg font-semibold text-orange-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <span className="text-2xl text-orange-500">{isOpen ? "-" : "+"}</span>
      </button>

      {isOpen && (
        <div className="bg-neutral-300 px-6 py-4 text-base whitespace-pre-line text-gray-800">
          {answer}
        </div>
      )}
    </div>
  );
}