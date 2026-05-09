export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-6xl font-bold mb-6">
        TheologyAI
      </h1>

      <p className="text-xl text-center max-w-2xl mb-8">
        AI-powered theology research and Bible study platform designed
        to help users explore scripture, doctrines, and faith-based topics.
      </p>

      <div className="flex gap-4">
        <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold">
          Start Studying
        </button>

        <button className="border border-white px-6 py-3 rounded-xl">
          Learn More
        </button>
      </div>
    </main>
  );
}