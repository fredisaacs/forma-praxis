import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Forma Praxis',
  description: 'The complete service catalog: discovery, strategy, design, build, optimize, and maintain.',
};

const services = [
  {
    number: '01',
    title: 'Discovery & Systems Assessment',
    subtitle: 'Start here when you know something needs to improve but aren't yet sure what to change.',
    description: 'Clarify the real problem, understand the current state, and identify the next best move before committing to build.',
    includes: [
      'Review of goals, users, workflows, systems, and constraints',
      'Stakeholder interviews or structured discovery conversations',
      'Review of supplied documentation, architecture, and analytics',
      'Identification of risks, dependencies, and opportunities',
    ],
    deliverables: [
      'Current-state summary',
      'Goals, assumptions, and constraints',
      'Findings organized by impact and urgency',
      'Recommended next steps and roadmap',
    ],
  },
  {
    number: '02',
    title: 'Business Operations & Process Improvement',
    subtitle: 'Make the way work gets done easier to understand, improve, and repeat.',
    description: 'Reduce friction, eliminate duplicate work, and create clearer paths to execution.',
    includes: [
      'Mapping existing processes from input to outcome',
      'Identification of bottlenecks and inefficiencies',
      'Review of how services are packaged and delivered',
      'Exploration of opportunities for improvement',
    ],
    deliverables: [
      'Current-state workflow documentation',
      'Observations and improvement opportunities',
      'Prioritized recommendations with trade-offs',
      'Proposed future-state process',
    ],
  },
  {
    number: '03',
    title: 'Product Strategy & MVP Planning',
    subtitle: 'Turn a broad idea into a product scope that can be discussed, estimated, and built.',
    description: 'Clarify target users, separate essential features from later possibilities, and define implementation sequence.',
    includes: [
      'Clarifying target users and intended outcomes',
      'Separating MVP scope from future possibilities',
      'Defining functional requirements',
      'Identifying integrations and technical dependencies',
    ],
    deliverables: [
      'Product or MVP brief',
      'User roles and principal workflows',
      'Scope inclusions and exclusions',
      'Milestones and next-step recommendations',
    ],
  },
  {
    number: '04',
    title: 'Web Applications, APIs & Integrations',
    subtitle: 'Build useful digital capabilities around real business requirements.',
    description: 'Architecture, implementation, and deployment of web applications, APIs, and connected systems.',
    includes: [
      'Requirements refinement and application architecture',
      'Backend and API implementation',
      'Third-party service integration',
      'Database and data-flow design',
      'Deployment planning and technical documentation',
    ],
    deliverables: [
      'Source code and application features',
      'API documentation',
      'Configuration and deployment notes',
      'Handover documentation',
    ],
    tech: ['Next.js', 'Laravel', 'Node.js', 'GraphQL', 'REST APIs'],
  },
  {
    number: '05',
    title: 'Cloud Infrastructure & Reliability',
    subtitle: 'Make deployment, operations, and technical risks more visible—and plan sensible improvements.',
    description: 'Assessment and improvement of infrastructure, deployment flow, and operational reliability.',
    includes: [
      'Review of infrastructure design and configuration',
      'Assessment of deployment flow and failure points',
      'Review of backup, recovery, and monitoring',
      'Architecture options for cloud services and containers',
    ],
    deliverables: [
      'Current-state architecture documentation',
      'Findings and risk register',
      'Recommended changes with dependencies',
      'Implementation plan and operational notes',
    ],
    tech: ['Docker', 'AWS', 'Linux / Unix', 'Deployment automation'],
  },
  {
    number: '06',
    title: 'Brand, Web & Creative Direction',
    subtitle: 'Create a clearer visual and digital expression of what a business does and why it matters.',
    description: 'Visual direction, design principles, and website strategy aligned to business positioning.',
    includes: [
      'Visual direction and design principles',
      'Color, typography, and layout recommendations',
      'Website information architecture',
      'Creative direction for digital assets',
    ],
    deliverables: [
      'Creative brief and design direction',
      'Color and typography specifications',
      'Page structure and layout',
      'Implementation-ready design specifications',
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <div className="page-header">
          <div className="container">
            <p className="eyebrow">Services</p>
            <h1>How we help.</h1>
            <p className="lede">
              Forma Praxis offers six core service families, each designed to address specific business and technical challenges. All services follow our operating principle: study first, transform second.
            </p>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div className="article-list">
              {services.map((service) => (
                <article key={service.number}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <span className="process-number">{service.number}</span>
                    <div style={{ flex: 1 }}>
                      <h3>{service.title}</h3>
                      <p style={{ fontSize: '1.05rem', marginBottom: '1.25rem' }}>
                        {service.description}
                      </p>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                        <div>
                          <h4 style={{ margin: '0 0 0.75rem', fontSize: '1rem', fontFamily: 'var(--font-mono)' }}>Work included</h4>
                          <ul>
                            {service.includes.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 style={{ margin: '0 0 0.75rem', fontSize: '1rem', fontFamily: 'var(--font-mono)' }}>Deliverables</h4>
                          <ul>
                            {service.deliverables.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {service.tech && (
                        <div style={{ marginTop: '1.5rem' }}>
                          <p style={{ fontSize: '0.9rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(62, 70, 80, 0.7)', marginBottom: '0.75rem' }}>Technology</p>
                          <ul className="tag-list">
                            {service.tech.map((t, i) => (
                              <li key={i}>{t}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-muted">
          <div className="container contact-panel">
            <div>
              <p className="eyebrow">Ready?</p>
              <h2>Let's start with a conversation.</h2>
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
