import Link from "next/link";

export default function HomePage() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Car App</h1>
      <p className="mb-6">Use the filter page to find vehicles based on type and model year.</p>
      <Link href="/filter" className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors">
      Go to filter page
      </Link>
    </div>
  );
}