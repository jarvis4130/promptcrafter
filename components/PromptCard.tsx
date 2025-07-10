
import React from 'react';

interface PromptCardProps {
  title: string;
  description: string;
  prompt: string;
  category: string;
}

const PromptCard: React.FC<PromptCardProps> = ({ title, description, prompt, category }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(prompt);
    alert('Prompt copied!');
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-xl mb-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-sm text-gray-500">{category}</p>
      <p className="mt-2">{description}</p>
      <pre className="mt-2 p-2 bg-gray-100 rounded text-sm">{prompt}</pre>
      <button onClick={copyToClipboard} className="mt-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
        Copy Prompt
      </button>
    </div>
  );
};

export default PromptCard;
