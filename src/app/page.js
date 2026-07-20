import './globals.css';

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav style={{ padding: '24px 0', borderBottom: '1px solid var(--glass-border)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <img src="/logo.svg" alt="Load Zeta Logo" style={{ height: '48px' }} />
          <div>
            <a href="https://loadzeta.app" className="btn-secondary" style={{ padding: '10px 24px', fontSize: '1rem' }}>
              Login to App
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ padding: '120px 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ display: 'inline-block', padding: '8px 16px', borderRadius: '100px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', color: 'var(--accent-color)', fontWeight: 600, marginBottom: '24px' }} className="animate-fade-up">
            🚀 The Future of Dispatch Management
          </div>
          
          <h1 style={{ fontSize: '4.5rem', lineHeight: 1.1, marginBottom: '32px', letterSpacing: '-0.03em' }} className="animate-fade-up delay-100">
            Control your fleet with <br />
            <span className="text-gradient-accent">Load Zeta.</span>
          </h1>
          
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '48px', maxWidth: '700px', margin: '0 auto 48px' }} className="animate-fade-up delay-200">
            Stop losing track of loads, driver pay, and broker metrics. 
            Experience the most powerful, premium, and seamless load management platform designed specifically for modern trucking companies.
          </p>
          
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }} className="animate-fade-up delay-300">
            <a href="https://loadzeta.app" className="btn-primary">
              Access Dashboard
            </a>
            <a href="#features" className="btn-secondary">
              Discover Features
            </a>
          </div>
        </div>
      </section>

      {/* App Preview / Glassmorphism Showcase */}
      <section style={{ padding: '40px 0 120px' }} className="animate-fade-up delay-300">
        <div className="container">
          <div className="glass-panel" style={{ padding: '8px', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-20px', left: '10%', right: '10%', height: '40px', background: 'var(--accent-color)', filter: 'blur(100px)', opacity: 0.5, zIndex: -1 }}></div>
            <div style={{ background: '#050505', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--glass-border)' }}>
              {/* Fake Dashboard UI for showcase */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', padding: '32px' }}>
                {[
                  { title: "Weekly Gross", val: "$11,600.00", color: "var(--accent-color)" },
                  { title: "Total Miles", val: "3,734", color: "#fff" },
                  { title: "Avg RPM", val: "$3.10", color: "var(--accent-color)" },
                  { title: "Driver Net Pay", val: "$3,230.00", color: "#30d158" }
                ].map((kpi, i) => (
                  <div key={i} className="glass-panel" style={{ padding: '24px', background: 'rgba(255,255,255,0.02)' }}>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>{kpi.title}</div>
                    <div style={{ fontSize: '2rem', fontWeight: 700, color: kpi.color }}>{kpi.val}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={{ padding: '120px 0', background: 'rgba(0,0,0,0.3)', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '16px' }}>Engineered for <span className="text-gradient-accent">Performance</span></h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>Everything you need to run your trucking business smoothly.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {[
              { title: "Real-time Load Tracking", desc: "Monitor all your loads, brokers, and routes from a centralized, beautiful command center." },
              { title: "Automated Pay Calculations", desc: "Automatically calculate driver pay, deductions, bonuses, and net profits in seconds." },
              { title: "Advanced Analytics", desc: "Visualize your best routes, highest paying brokers, and origin states via heatmaps." }
            ].map((feature, i) => (
              <div key={i} className="glass-panel feature-card" style={{ padding: '40px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(56, 189, 248, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', color: 'var(--accent-color)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>{feature.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer style={{ padding: '40px 0', borderTop: '1px solid var(--glass-border)', textAlign: 'center', color: 'var(--text-secondary)' }}>
        <div className="container">
          <p>© {new Date().getFullYear()} Load Zeta. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
