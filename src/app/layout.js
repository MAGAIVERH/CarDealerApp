import './globals.css';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="flex flex-col min-h-screen bg-gray-100">
        <header className="bg-blue-600 text-white shadow-md">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">Car Dealer App</Link>
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:text-blue-200">Home</Link></li>
              <li><Link href="/filter" className="hover:text-blue-200">Filter</Link></li>
            </ul>
          </nav>
        </header>

        <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
          <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
            {children}
          </div>
        </main>

        <footer className="bg-gray-800 text-white py-4">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 Car Dealer App. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
