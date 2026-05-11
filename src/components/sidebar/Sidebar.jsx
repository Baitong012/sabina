import { useState } from 'react';
import './Sidebar.css';

/* ── data ── */
const STYLES = ['บราไร้โครง', 'บราสปอร์ต', 'บราลูกไม้', 'บราซีมเลส', 'บราเกาะอก'];

const COLORS = [
  { label: 'สีเนื้ออ่อน', hex: '#f5d5b8' },
  { label: 'สีเนื้อเข้ม', hex: '#c49a7a' },
  { label: 'สีขาว',       hex: '#f8f8f8', border: true },
  { label: 'สีดำ',         hex: '#222' },
  { label: 'สีม่วง',       hex: '#a78bfa' },
  { label: 'สีชมพู',       hex: '#f9a8d4' },
];

const SIZES = ['32A','34A','34B','36B','36C','38C','36D','38D','38DD','40DD'];

/* ── component ── */
export default function Sidebar({ onFilterChange }) {
  const [open, setOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({});
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000);

  function toggleCheckbox(group, label, checked) {
    const key = `${group}:${label}`;
    const next = { ...activeFilters };
    if (checked) next[key] = { group, label };
    else delete next[key];
    setActiveFilters(next);
    onFilterChange?.(next);
  }

  function toggleSize(sz) {
    setSelectedSizes(prev =>
      prev.includes(sz) ? prev.filter(s => s !== sz) : [...prev, sz]
    );
  }

  function applyPrice() {
    const key = `ราคา:฿${minPrice}–฿${maxPrice}`;
    const next = Object.fromEntries(
      Object.entries(activeFilters).filter(([k]) => !k.startsWith('ราคา:'))
    );
    next[key] = { group: 'ราคา', label: `฿${minPrice}–฿${maxPrice}` };
    setActiveFilters(next);
    onFilterChange?.(next);
  }

  function clearAll() {
    setActiveFilters({});
    setSelectedSizes([]);
    setMinPrice(0);
    setMaxPrice(2000);
    onFilterChange?.({});
  }

  return (
    <>
      {/* Mobile toggle */}
      <button
        className={`filter-toggle${open ? ' open' : ''}`}
        onClick={() => setOpen(p => !p)}
      >
        <span>{open ? '🔼 ซ่อนตัวกรอง' : '🔽 ตัวกรองสินค้า'}</span>
        <span className="filter-toggle-arrow">▾</span>
      </button>

      <aside className={`sidebar${open ? ' open' : ''}`}>
        {/* Header */}
        <div className="sidebar-header">
          <span>ตัวกรอง</span>
          <button className="clear-btn" onClick={clearAll}>ล้างทั้งหมด</button>
        </div>

        {/* Style */}
        <div className="sidebar-section">
          <div className="sidebar-title">สไตล์</div>
          <div className="filter-group">
            {STYLES.map(s => (
              <label className="filter-chip" key={s}>
                <input
                  type="checkbox"
                  checked={!!activeFilters[`สไตล์:${s}`]}
                  onChange={e => toggleCheckbox('สไตล์', s, e.target.checked)}
                />
                {s}
              </label>
            ))}
          </div>
        </div>
        <div className="sidebar-divider" />

        {/* Color */}
        <div className="sidebar-section">
          <div className="sidebar-title">สี</div>
          <div className="filter-group">
            {COLORS.map(({ label, hex, border }) => (
              <label className="filter-chip" key={label}>
                <input
                  type="checkbox"
                  checked={!!activeFilters[`สี:${label}`]}
                  onChange={e => toggleCheckbox('สี', label, e.target.checked)}
                />
                <span
                  className="color-dot"
                  style={{
                    background: hex,
                    ...(border ? { border: '1.5px solid #ddd' } : {}),
                  }}
                />
                {label}
              </label>
            ))}
          </div>
        </div>
        <div className="sidebar-divider" />

        {/* Size */}
        <div className="sidebar-section">
          <div className="sidebar-title">ไซซ์</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {SIZES.map(sz => (
              <span
                key={sz}
                className={`sz-pill${selectedSizes.includes(sz) ? ' selected' : ''}`}
                onClick={() => toggleSize(sz)}
              >
                {sz}
              </span>
            ))}
          </div>
        </div>
        <div className="sidebar-divider" />

        {/* Price */}
        <div className="sidebar-section">
          <div className="sidebar-title">ราคา (฿)</div>
          <div className="price-range">
            <input
              type="number"
              className="price-input"
              value={minPrice}
              onChange={e => setMinPrice(e.target.value)}
              placeholder="0"
            />
            <span className="price-sep">–</span>
            <input
              type="number"
              className="price-input"
              value={maxPrice}
              onChange={e => setMaxPrice(e.target.value)}
              placeholder="2000"
            />
          </div>
          <button className="btn-apply" onClick={applyPrice}>ใช้ราคานี้</button>
        </div>
      </aside>
    </>
  );
}
