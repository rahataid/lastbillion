import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold">#LastBillion</span>
        </Link>
        <nav className="ml-auto flex items-center space-x-4 text-sm font-medium">
          <Link href="/research">Research</Link>
          <Link href="/collaborate">Collaborate</Link>
          <Link href="/tools">Tools</Link>
          <Link href="/about">About</Link>
          <Button>Get Involved</Button>
        </nav>
      </div>
    </header>
  );
}
