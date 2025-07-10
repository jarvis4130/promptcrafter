import { useState } from "react";
import prompts from "./../data/prompts.json";
import Head from "next/head";

type Prompt = {
  id: number;
  title: string;
  description: string;
  prompt: string;
  category: string;
};

const uniqueCategories = [
  "All",
  ...Array.from(new Set(prompts.map((p) => p.category))),
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPrompts =
    selectedCategory === "All"
      ? prompts
      : prompts.filter((p) => p.category === selectedCategory);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("✅ Prompt copied to clipboard!");
  };

  return (
    <>
      <Head>
        <title>PromptCrafter - Daily AI Prompts</title>
        <meta name="description" content="Fresh AI prompts daily for ChatGPT, MidJourney, Claude & more." />
      </Head>
      <main className="min-h-screen px-4 py-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">🧠 PromptCrafter</h1>
        <p className="text-center mb-6 text-gray-600">
          Daily AI prompts to boost your creativity across all platforms.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {uniqueCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1 rounded-full border ${
                selectedCategory === cat
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-700"
              } hover:bg-black hover:text-white transition`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Prompt Cards */}
        <div className="grid gap-4">
          {filteredPrompts.map((p: Prompt) => (
            <div
              key={p.id}
              className="bg-white p-4 rounded-xl shadow border border-gray-200"
            >
              <h2 className="text-xl font-semibold">{p.title}</h2>
              <p className="text-gray-600 mb-2">{p.description}</p>
              <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto whitespace-pre-wrap">
                {p.prompt}
              </pre>
              <div className="mt-2 flex justify-between items-center">
                <span className="text-xs bg-gray-200 px-2 py-0.5 rounded-full">
                  {p.category}
                </span>
                <button
                  onClick={() => copyToClipboard(p.prompt)}
                  className="text-sm text-blue-600 hover:underline"
                >
                  Copy Prompt
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
