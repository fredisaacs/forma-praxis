export default function Footer() {
  return (
    <footer className="section">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
          paddingTop: '2rem',
          borderTop: '1px solid var(--forma-border)'
        }}>
          <div>
            <h4 style={{ margin: '0 0 1rem', fontSize: '1rem' }}>Forma Praxis</h4>
            <p style={{ margin: 0, fontSize: '0.95rem', color: 'rgba(62, 70, 80, 0.7)' }}>
              Independent design-engineering practice.
            </p>
          </div>

          <div>
            <h4 style={{ margin: '0 0 1rem', fontSize: '1rem' }}>Navigation</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li><a href="/" style={{ fontSize: '0.95rem', color: 'rgba(62, 70, 80, 0.8)' }}>Home</a></li>
              <li><a href="/services" style={{ fontSize: '0.95rem', color: 'rgba(62, 70, 80, 0.8)' }}>Services</a></li>
              <li><a href="/how-we-work" style={{ fontSize: '0.95rem', color: 'rgba(62, 70, 80, 0.8)' }}>How we work</a></li>
              <li><a href="/about" style={{ fontSize: '0.95rem', color: 'rgba(62, 70, 80, 0.8)' }}>About</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ margin: '0 0 1rem', fontSize: '1rem' }}>Contact</h4>
            <a href="mailto:hello@formapraxis.co" style={{ fontSize: '0.95rem', color: 'var(--forma-steel)', textDecoration: 'underline' }}>
              hello@formapraxis.co
            </a>
          </div>
        </div>

        <p style={{
          marginTop: '3rem',
          paddingTop: '2rem',
          borderTop: '1px solid var(--forma-border)',
          fontSize: '0.9rem',
          color: 'rgba(62, 70, 80, 0.6)',
          textAlign: 'center'
        }}>
          © {new Date().getFullYear()} Forma Praxis. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
