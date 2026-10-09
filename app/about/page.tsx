import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Forma Praxis',
  description: 'Independent, direct, and built to make real work easier.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <div className="page-header">
          <div className="container">
            <p className="eyebrow">About</p>
            <h1>Independent, direct, and built to make real work easier.</h1>
          </div>
        </div>

        <div className="text-page">
          <div className="container">
            <h2>The Practice</h2>
            <p>
              Forma Praxis is an independent designer and engineer working across operations, systems, and digital experience. The goal is not just aesthetics or code. It is to understand what is happening, reduce friction, and create clearer, more useful paths forward.
            </p>
            <p>
              The practice blends technical depth with strategic clarity, so clients can make sound decisions before they commit to large scope, complex systems, or expensive change.
            </p>

            <h2>Philosophy</h2>
            <p>
              <strong>Where engineering gives form to imagination, and creativity gives purpose to technology.</strong>
            </p>
            <p>
              The best systems are not the most impressive—they are the ones people can understand, trust, and improve. Design without engineering becomes vague and expensive. Engineering without design becomes inflexible and joyless. The most useful work happens when both are present and equal.
            </p>

            <h2>Core Principles</h2>
            <ul>
              <li>Study the system before proposing change.</li>
              <li>Connect analysis to practical action.</li>
              <li>Treat engineering and creativity as complementary.</li>
              <li>Make deliverables and decisions inspectable.</li>
              <li>Be explicit about scope and expectations.</li>
              <li>Do not manufacture the appearance of scale.</li>
            </ul>

            <h2>Working Background</h2>
            <p>
              Over the years, I've worked on: internal tools and web applications; business operations and process improvement; infrastructure and reliability; brand direction and web design; analytics and conversion optimization; marketing and positioning; and technical strategy for small businesses and independent teams.
            </p>
            <p>
              Technologies include WordPress, Laravel, Next.js, Node.js, REST and GraphQL APIs, Docker, AWS, Linux/Unix administration, analytics platforms, and conversion measurement systems. Every technology is chosen for its usefulness to the actual problem—not because it's fashionable.
            </p>

            <h2>A Note on Scale and Independence</h2>
            <p>
              Forma Praxis is independent. I work directly with clients, not through a large organization. This means:
            </p>
            <ul>
              <li><strong>Direct accountability:</strong> You work with the same person from start to finish.</li>
              <li><strong>Honest scope:</strong> I won't pretend a one-person practice is a twenty-person agency.</li>
              <li><strong>Careful selection:</strong> I work on projects and with clients where I can be genuinely useful.</li>
              <li><strong>Useful handover:</strong> Documentation and knowledge transfer are part of the work, not an afterthought.</li>
            </ul>
            <p>
              If a project needs a larger team or specialized expertise I don't have, I'll say so and help you find the right fit.
            </p>

            <h2>Beyond the Work</h2>
            <p>
              I'm interested in systems thinking, operational design, how organizations actually work, and why some tools feel good to use while others create friction. I read widely in design history, engineering culture, and organizational theory.
            </p>
            <p>
              When not working on client projects, I maintain open documentation on design systems, technical architecture, and process improvement.
            </p>
          </div>
        </div>

        <section className="section contact-section">
          <div className="container contact-panel">
            <div>
              <p className="eyebrow">Questions?</p>
              <h2>Let's talk.</h2>
            </div>
            <div className="contact-actions">
              <a href="mailto:hello@formapraxis.co" className="button button-primary">
                hello@formapraxis.co
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
