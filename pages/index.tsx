
import Head from 'next/head';
import PromptCard from '../components/PromptCard';
import prompts from '../data/prompts.json';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Head>
        <title>PromptCrafter - Daily AI Prompts</title>
        <meta name="description" content="Get your daily AI prompts for ChatGPT, MidJourney, and more." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold">🧠 PromptCrafter</h1>
        <p className="text-gray-600">Fresh AI prompts every day. Boost your creativity.</p>
      </header>

      <main className="max-w-3xl mx-auto">
        {prompts.map(prompt => (
          <PromptCard
            key={prompt.id}
            title={prompt.title}
            description={prompt.description}
            prompt={prompt.prompt}
            category={prompt.category}
          />
        ))}
      </main>

      <footer className="text-center mt-10 text-sm text-gray-500">
        &copy; 2025 PromptCrafter. All rights reserved.
      </footer>
    </div>
  );
}
