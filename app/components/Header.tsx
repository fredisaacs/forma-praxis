import Link from 'next/link';

export default function Header() {
  return (
    <header className="topbar">
      <div className="container nav-wrap">
        <Link href="/" className="brand" aria-label="Forma Praxis home">
          <span className="brand-mark">FP</span>
          <span className="brand-text">Forma Praxis</span>
        </Link>

        <nav className="main-nav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/how-we-work">How we work</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <Link href="/contact" className="button button-primary">
          Start a conversation
        </Link>
      </div>
    </header>
  );
}
