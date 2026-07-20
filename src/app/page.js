import React from 'react';
import { Truck, DollarSign, MessageCircle, ChevronRight, BarChart3, Map as MapIcon, ShieldCheck } from 'lucide-react';
import Logo from '../components/Logo';
import { DashboardMockup, ActiveLoadMockup, ExpenseMockup, DetailedLoadMockup } from '../components/MockupVisuals';

export default function Home() {
  return (
    <div className="landing-container">
      {/* Navbar */}
      <nav className="landing-nav">
        <div className="landing-logo">
          <Logo size={42} animated={true} />
        </div>
        <div className="landing-nav-actions">
          <a href="https://loadzeta.app" className="nav-btn-outline" style={{ display: 'inline-flex', alignItems: 'center' }}>Sign In</a>
          <a href="https://loadzeta.app" className="nav-btn-solid" style={{ display: 'inline-flex', alignItems: 'center' }}>Get Started</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="badge">✨ The New Standard in Logistics</div>
          <h1 className="hero-title">
            The Ultimate Logistics<br />
            <span className="text-gradient">Operating System</span>
          </h1>
          <p className="hero-subtitle">
            Track loads, automate payouts, and manage your business seamlessly. 
            All your gross revenue, deductions, and driver payouts in one intelligent platform.
          </p>
          <div className="hero-actions">
            <a href="https://loadzeta.app" className="cta-button primary">
              Start for Free <ChevronRight size={20} />
            </a>
            <a href="https://loadzeta.app" className="cta-button secondary">
              Login to Dashboard
            </a>
          </div>
        </div>
        <div className="hero-graphic-container">
          <DashboardMockup />
          <ActiveLoadMockup />
        </div>
      </section>

      {/* Features Bento Box Section */}
      <section className="bento-section">
        <div className="bento-header">
          <h2 className="section-title">Everything you need to scale</h2>
          <p className="section-subtitle">A complete suite of tools designed specifically for owner-operators, company drivers, and dispatchers.</p>
        </div>
        
        <div className="bento-grid">
          <div className="bento-card span-2">
            <div className="bento-content">
              <div className="feature-icon-wrapper"><Truck size={28} /></div>
              <h3>Seamless Load Tracking</h3>
              <p>Say goodbye to lost paperwork and messy spreadsheets. Manage your loads, miles, and brokers from a single, unified dashboard.</p>
            </div>
            <div className="bento-visual map-visual"></div>
          </div>
          
          <div className="bento-card">
            <div className="bento-content">
              <div className="feature-icon-wrapper"><DollarSign size={28} /></div>
              <h3>Automated Payouts</h3>
              <p>Instantly calculate driver deductions, percentages, and net pay.</p>
            </div>
          </div>

          <div className="bento-card">
            <div className="bento-content">
              <div className="feature-icon-wrapper"><BarChart3 size={28} /></div>
              <h3>Advanced Analytics</h3>
              <p>Track your profitability, gross revenue, and deadhead miles.</p>
            </div>
          </div>

          <div className="bento-card span-2">
            <div className="bento-content">
              <div className="feature-icon-wrapper"><MessageCircle size={28} /></div>
              <h3>Telegram Bot Power</h3>
              <p>You don't even need to log in. Use our integrated Telegram bot to add loads and check your earnings on the go with a simple text message.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Showcase Section */}
      <section className="feature-showcase">
        <div className="feature-row">
          <div className="feature-text">
            <h3 className="feature-title">End-to-end Load Tracking</h3>
            <p className="feature-description">
              Stop juggling spreadsheets. Track every dispatch from pickup to delivery. Manage broker details, automatically calculate driver pay cuts, and instantly see your true profit margins on every load.
            </p>
            <ul className="feature-list">
              <li><ChevronRight size={16} /> Automated gross and net rate calculations</li>
              <li><ChevronRight size={16} /> Real-time status updates</li>
              <li><ChevronRight size={16} /> Deadhead tracking & analytics</li>
            </ul>
          </div>
          <div className="feature-visual">
            <DetailedLoadMockup />
          </div>
        </div>

        <div className="feature-row reverse">
          <div className="feature-text">
            <h3 className="feature-title">Effortless Expense Management</h3>
            <p className="feature-description">
              Keep your business's finances spotless. Record fuel stops, tolls, maintenance, and recurring deductions. The system automatically ties expenses to specific drivers or trucks, giving you an accurate picture of your bottom line.
            </p>
            <ul className="feature-list">
              <li><ChevronRight size={16} /> Track fuel, tolls, and maintenance</li>
              <li><ChevronRight size={16} /> Auto-deduct from driver payouts</li>
              <li><ChevronRight size={16} /> Upload receipts & document proofs</li>
            </ul>
          </div>
          <div className="feature-visual">
            <ExpenseMockup />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <h2 className="section-title">Simple, transparent pricing</h2>
        <p className="section-subtitle">Start for free, upgrade when you need more power.</p>
        
        <div className="pricing-grid">
          <div className="pricing-card">
            <div className="pricing-header">
              <h3>Starter</h3>
              <div className="price">$0<span>/month</span></div>
              <p>Perfect for owner-operators just getting started.</p>
            </div>
            <ul className="pricing-features">
              <li><ShieldCheck size={18} /> Up to 50 loads per month</li>
              <li><ShieldCheck size={18} /> Basic Analytics</li>
              <li><ShieldCheck size={18} /> Email Support</li>
            </ul>
            <a href="https://loadzeta.app" className="cta-button secondary full-width" style={{ marginTop: '24px' }}>Get Started</a>
          </div>
          
          <div className="pricing-card premium">
            <div className="pricing-badge">Most Popular</div>
            <div className="pricing-header">
              <h3>Pro Operator</h3>
              <div className="price">$49<span>/month</span></div>
              <p>For growing owner-operators and dispatchers that need automation and scale.</p>
            </div>
            <ul className="pricing-features">
              <li><ShieldCheck size={18} /> Unlimited Loads</li>
              <li><ShieldCheck size={18} /> Advanced Analytics & Maps</li>
              <li><ShieldCheck size={18} /> Telegram Bot Integration</li>
              <li><ShieldCheck size={18} /> Priority 24/7 Support</li>
            </ul>
            <a href="https://loadzeta.app" className="cta-button primary full-width" style={{ marginTop: '24px' }}>Start Free Trial</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <Logo size={32} animated={false} />
          </div>
          <div className="footer-links">
            <div className="link-column">
              <h4>Product</h4>
              <a href="#">Features</a>
              <a href="#">Pricing</a>
              <a href="#">Telegram Bot</a>
            </div>
            <div className="link-column">
              <h4>Company</h4>
              <a href="#">About Us</a>
              <a href="#">Contact</a>
            </div>
            <div className="link-column">
              <h4>Legal</h4>
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Load Zeta. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
