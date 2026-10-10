import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Forma Praxis',
  description: 'Get in touch. Start a conversation about your project or challenge.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <div className="page-header">
          <div className="container">
            <p className="eyebrow">Contact</p>
            <h1>Start with the problem, not the guess.</h1>
            <p className="lede">
              Reach out to discuss your situation. We'll explore whether Forma Praxis is the right fit and what a discovery engagement might look like.
            </p>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div style={{ maxWidth: '780px', margin: '0 auto' }}>
              <div className="card-grid" style={{ gridTemplateColumns: '1fr' }}>
                <div className="service-card">
                  <h3>Email</h3>
                  <p style={{ marginBottom: '1rem' }}>
                    The best way to get in touch is email. Share a bit about your situation, and I'll respond within 2 business days.
                  </p>
                  <a href="mailto:hello@formapraxis.co" className="button button-primary" style={{ display: 'inline-flex' }}>
                    hello@formapraxis.co
                  </a>
                </div>
              </div>

              <div style={{ marginTop: '3rem', padding: '2rem', borderRadius: '1.25rem', background: 'rgba(167, 192, 217, 0.1)', border: '1px solid var(--forma-border)' }}>
                <h3 style={{ marginTop: 0 }}>What to mention in your message</h3>
                <ul style={{ color: 'rgba(62, 70, 80, 0.82)', lineHeight: 1.8 }}>
                  <li><strong>The current situation:</strong> What is the business or project facing right now?</li>
                  <li><strong>The uncertainty:</strong> What decision or direction is unclear?</li>
                  <li><strong>Your ideal outcome:</strong> What would "solved" look like?</li>
                  <li><strong>Timeline:</strong> When would you like to move forward?</li>
                </ul>
              </div>

              <div style={{ marginTop: '2rem', padding: '2rem', borderRadius: '1.25rem', background: 'rgba(183, 201, 182, 0.15)', border: '1px solid var(--forma-border)' }}>
                <h3 style={{ marginTop: 0 }}>What happens next</h3>
                <p style={{ color: 'rgba(62, 70, 80, 0.82)', lineHeight: 1.8 }}>
                  After your initial message, we'll have a brief conversation to understand whether a discovery engagement makes sense. There's no obligation, and I'll be honest if it doesn't seem like a good fit.
                </p>
                <p style={{ color: 'rgba(62, 70, 80, 0.82)', lineHeight: 1.8, margin: 0 }}>
                  If we decide to proceed, we'll agree on scope, timeline, and fees in writing before any work begins.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
