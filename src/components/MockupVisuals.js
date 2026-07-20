import React from 'react';
import { DollarSign, Wallet, TrendingDown, Truck, CheckCircle2, Navigation, Receipt, Fuel, Settings, FileText, Map } from 'lucide-react';

export function DashboardMockup() {
  return (
    <div className="mockup-panel floating-mockup main-mockup glass-panel" style={{ padding: '24px', background: 'var(--card-bg)', backdropFilter: 'blur(20px)', borderRadius: '24px', border: '1px solid var(--card-border)', boxShadow: 'var(--shadow-modal)' }}>
      <div className="mockup-header" style={{ display: 'flex', alignItems: 'center', marginBottom: '24px', gap: '12px' }}>
        <div className="dots" style={{ display: 'flex', gap: '6px' }}>
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></span>
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></span>
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></span>
        </div>
      </div>
      
      <div className="mockup-kpi-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
        <div className="kpi-card" style={{ background: 'var(--hover-bg)', padding: '16px', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
          <div className="kpi-header" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '8px' }}>
            <DollarSign size={16} style={{ color: 'var(--success-color)' }} /> Total Gross
          </div>
          <div className="kpi-value" style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-primary)' }}>$24,850.00</div>
        </div>
        <div className="kpi-card" style={{ background: 'var(--hover-bg)', padding: '16px', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
          <div className="kpi-header" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '8px' }}>
            <Wallet size={16} style={{ color: 'var(--success-color)' }} /> Driver Pay
          </div>
          <div className="kpi-value" style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-primary)' }}>$18,637.50</div>
        </div>
        <div className="kpi-card" style={{ background: 'var(--hover-bg)', padding: '16px', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
          <div className="kpi-header" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '8px' }}>
            <TrendingDown size={16} style={{ color: '#ff4444' }} /> Deadhead
          </div>
          <div className="kpi-value" style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-primary)' }}>12%</div>
        </div>
      </div>

      <div className="mockup-table-container" style={{ background: 'var(--hover-bg)', borderRadius: '16px', border: '1px solid var(--border-light)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
          <thead>
            <tr style={{ background: 'rgba(0,0,0,0.2)' }}>
              <th style={{ textAlign: 'left', padding: '12px 16px', color: 'var(--text-secondary)' }}>ID</th>
              <th style={{ textAlign: 'left', padding: '12px 16px', color: 'var(--text-secondary)' }}>Route</th>
              <th style={{ textAlign: 'right', padding: '12px 16px', color: 'var(--text-secondary)' }}>Rate</th>
              <th style={{ textAlign: 'center', padding: '12px 16px', color: 'var(--text-secondary)' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderTop: '1px solid var(--border-light)' }}>
              <td style={{ padding: '12px 16px', color: 'var(--text-secondary)' }}>#1042</td>
              <td style={{ padding: '12px 16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontWeight: '700' }}>TX</span> <Navigation size={12} color="var(--text-secondary)" /> <span style={{ fontWeight: '700' }}>CA</span>
                </div>
              </td>
              <td style={{ padding: '12px 16px', textAlign: 'right', fontWeight: 'bold', color: 'var(--success-color)' }}>$3,200</td>
              <td style={{ padding: '12px 16px', textAlign: 'center' }}><span style={{ background: 'rgba(10, 132, 255, 0.15)', color: '#0a84ff', padding: '4px 10px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: '600' }}>Active</span></td>
            </tr>
            <tr style={{ borderTop: '1px solid var(--border-light)' }}>
              <td style={{ padding: '12px 16px', color: 'var(--text-secondary)' }}>#1041</td>
              <td style={{ padding: '12px 16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontWeight: '700' }}>IL</span> <Navigation size={12} color="var(--text-secondary)" /> <span style={{ fontWeight: '700' }}>TX</span>
                </div>
              </td>
              <td style={{ padding: '12px 16px', textAlign: 'right', fontWeight: 'bold', color: 'var(--success-color)' }}>$2,850</td>
              <td style={{ padding: '12px 16px', textAlign: 'center' }}><span style={{ background: 'rgba(40, 167, 69, 0.15)', color: '#28a745', padding: '4px 10px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: '600' }}>Delivered</span></td>
            </tr>
            <tr style={{ borderTop: '1px solid var(--border-light)' }}>
              <td style={{ padding: '12px 16px', color: 'var(--text-secondary)' }}>#1040</td>
              <td style={{ padding: '12px 16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontWeight: '700' }}>FL</span> <Navigation size={12} color="var(--text-secondary)" /> <span style={{ fontWeight: '700' }}>NY</span>
                </div>
              </td>
              <td style={{ padding: '12px 16px', textAlign: 'right', fontWeight: 'bold', color: 'var(--success-color)' }}>$4,100</td>
              <td style={{ padding: '12px 16px', textAlign: 'center' }}><span style={{ background: 'rgba(40, 167, 69, 0.15)', color: '#28a745', padding: '4px 10px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: '600' }}>Delivered</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function ActiveLoadMockup() {
  return (
    <div className="mockup-panel floating-mockup side-mockup glass-panel" style={{ background: 'var(--card-bg)', backdropFilter: 'blur(20px)', borderRadius: '24px', border: '1px solid var(--card-border)', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', overflow: 'hidden' }}>
      <div className="widget-header" style={{ background: 'linear-gradient(135deg, rgba(10, 132, 255, 0.15), rgba(10, 132, 255, 0.05))', padding: '20px', borderBottom: '1px solid var(--border-light)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ background: '#0a84ff', width: '10px', height: '10px', borderRadius: '50%', boxShadow: '0 0 12px #0a84ff' }}></div>
          <h3 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: '700' }}>Active Load</h3>
        </div>
      </div>
      <div className="widget-content" style={{ padding: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
          <div style={{ textAlign: 'center', flex: 1 }}>
            <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-primary)' }}>TX</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Dallas</div>
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 10px' }}>
            <Truck size={24} color="#0a84ff" style={{ marginBottom: '8px' }} />
            <div style={{ width: '100%', height: '3px', background: 'linear-gradient(90deg, #0a84ff, var(--border-light))', borderRadius: '2px' }}></div>
          </div>
          <div style={{ textAlign: 'center', flex: 1 }}>
            <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-primary)' }}>CA</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Los Angeles</div>
          </div>
        </div>
        <div style={{ background: 'var(--hover-bg)', padding: '16px', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '0.95rem' }}>
            <span style={{ color: 'var(--text-secondary)' }}>Broker:</span>
            <span style={{ fontWeight: '700', color: 'var(--text-primary)' }}>Echo Transit Solutions</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '0.95rem' }}>
            <span style={{ color: 'var(--text-secondary)' }}>Gross Rate:</span>
            <span style={{ fontWeight: 'bold', color: '#10b981' }}>$3,450.00</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '0.95rem' }}>
            <span style={{ color: 'var(--text-secondary)' }}>Driver Pay:</span>
            <span style={{ fontWeight: 'bold', color: '#38bdf8' }}>$2,760.00</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
            <span style={{ color: 'var(--text-secondary)' }}>Avg Driver RPM:</span>
            <span style={{ fontWeight: 'bold', color: '#8b5cf6' }}>$1.85</span>
          </div>
        </div>
        <button style={{ width: '100%', marginTop: '24px', background: 'rgba(40, 167, 69, 0.1)', color: '#28a745', border: '1px solid rgba(40, 167, 69, 0.3)', padding: '12px', borderRadius: '16px', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'default' }}>
          <CheckCircle2 size={18} /> Mark Delivered
        </button>
      </div>
    </div>
  );
}

export function ExpenseMockup() {
  return (
    <div className="mockup-panel glass-panel" style={{ background: 'var(--card-bg)', backdropFilter: 'blur(20px)', borderRadius: '24px', border: '1px solid var(--card-border)', boxShadow: '0 20px 50px rgba(0,0,0,0.2)', overflow: 'hidden', width: '100%' }}>
      <div className="widget-header" style={{ background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.05))', padding: '20px', borderBottom: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Receipt size={20} color="#ef4444" />
          <h3 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: '700' }}>Recent Expenses</h3>
        </div>
        <div style={{ background: '#ef4444', color: 'white', padding: '4px 12px', borderRadius: '12px', fontSize: '0.85rem', fontWeight: 'bold' }}>-$1,240.50</div>
      </div>
      <div style={{ padding: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', background: 'var(--hover-bg)', borderRadius: '16px', border: '1px solid var(--border-light)', marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ background: 'rgba(239, 68, 68, 0.15)', padding: '10px', borderRadius: '12px' }}><Fuel size={18} color="#ef4444" /></div>
            <div>
              <div style={{ fontWeight: '700', color: 'var(--text-primary)', fontSize: '0.95rem' }}>Pilot Flying J</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Diesel Fuel • Truck 104</div>
            </div>
          </div>
          <div style={{ fontWeight: 'bold', color: 'var(--text-primary)' }}>$840.00</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', background: 'var(--hover-bg)', borderRadius: '16px', border: '1px solid var(--border-light)', marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ background: 'rgba(245, 158, 11, 0.15)', padding: '10px', borderRadius: '12px' }}><Map size={18} color="#f59e0b" /></div>
            <div>
              <div style={{ fontWeight: '700', color: 'var(--text-primary)', fontSize: '0.95rem' }}>E-ZPass Tolls</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Tolls & Routing</div>
            </div>
          </div>
          <div style={{ fontWeight: 'bold', color: 'var(--text-primary)' }}>$125.50</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', background: 'var(--hover-bg)', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ background: 'rgba(99, 102, 241, 0.15)', padding: '10px', borderRadius: '12px' }}><Settings size={18} color="#6366f1" /></div>
            <div>
              <div style={{ fontWeight: '700', color: 'var(--text-primary)', fontSize: '0.95rem' }}>Freightliner Service</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Maintenance • Oil Change</div>
            </div>
          </div>
          <div style={{ fontWeight: 'bold', color: 'var(--text-primary)' }}>$275.00</div>
        </div>
      </div>
    </div>
  );
}

export function DetailedLoadMockup() {
  return (
    <div className="mockup-panel glass-panel" style={{ background: 'var(--card-bg)', backdropFilter: 'blur(20px)', borderRadius: '24px', border: '1px solid var(--card-border)', boxShadow: '0 20px 50px rgba(0,0,0,0.2)', overflow: 'hidden', width: '100%' }}>
      <div className="widget-header" style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.05))', padding: '20px', borderBottom: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FileText size={20} color="#10b981" />
          <h3 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: '700' }}>Load #4092</h3>
        </div>
        <div style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', padding: '4px 12px', borderRadius: '12px', fontSize: '0.85rem', fontWeight: 'bold' }}>Completed</div>
      </div>
      <div style={{ padding: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Pickup</div>
            <div style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--text-primary)' }}>Chicago, IL</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Oct 12, 08:00 AM</div>
          </div>
          <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'var(--text-secondary)' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: '600', marginBottom: '4px' }}>945 mi</span>
            <div style={{ width: '80px', height: '2px', background: 'var(--border-light)', position: 'relative' }}>
              <div style={{ position: 'absolute', right: '-4px', top: '-4px', borderStyle: 'solid', borderWidth: '5px 0 5px 6px', borderColor: 'transparent transparent transparent var(--border-light)' }}></div>
            </div>
          </div>
          <div style={{ flex: 1, textAlign: 'right' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Delivery</div>
            <div style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--text-primary)' }}>Dallas, TX</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Oct 14, 02:00 PM</div>
          </div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <div style={{ background: 'var(--hover-bg)', padding: '16px', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>Broker Rate</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#10b981' }}>$2,850.00</div>
          </div>
          <div style={{ background: 'var(--hover-bg)', padding: '16px', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>Driver Pay (80%)</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#38bdf8' }}>$2,280.00</div>
          </div>
        </div>
      </div>
    </div>
  );
}
