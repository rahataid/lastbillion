import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
        <div className="text-sm text-gray-600 pl-4">
          © 2025 LastBillion. All rights reserved.
        </div>
        <nav className="flex space-x-4 text-sm">
          <Link href="/about" className="text-gray-600 hover:text-gray-900">
            About
          </Link>
          <Link href="/privacy" className="text-gray-600 hover:text-gray-900">
            Privacy
          </Link>
          <Link href="/terms" className="text-gray-600 hover:text-gray-900">
            Terms
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
