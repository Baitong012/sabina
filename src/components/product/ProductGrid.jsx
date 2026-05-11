import { useState } from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.css';

export default function ProductGrid({ products = [], activeFilters = {}, onRemoveFilter }) {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [sort, setSort]         = useState('popular');
  const [page, setPage]         = useState(1);

  const filterTags = Object.entries(activeFilters);

  return (
    <div className="product-area">

      {/* ── TOOLBAR ── */}
      <div className="toolbar">
        <div className="result-count">
          แสดง <strong>{products.length}</strong> รายการ
        </div>
        <div className="toolbar-right">
          <select
            className="sort-select"
            value={sort}
            onChange={e => setSort(e.target.value)}
          >
            <option value="popular">ยอดนิยม</option>
            <option value="newest">ใหม่ล่าสุด</option>
            <option value="price-asc">ราคา: ต่ำ → สูง</option>
            <option value="price-desc">ราคา: สูง → ต่ำ</option>
            <option value="rating">คะแนนสูงสุด</option>
          </select>
          <div className="view-btns">
            <button
              className={`view-btn${viewMode === 'grid' ? ' active' : ''}`}
              onClick={() => setViewMode('grid')}
              title="Grid view"
            >⊞</button>
            <button
              className={`view-btn${viewMode === 'list' ? ' active' : ''}`}
              onClick={() => setViewMode('list')}
              title="List view"
            >☰</button>
          </div>
        </div>
      </div>

      {/* ── ACTIVE FILTER TAGS ── */}
      {filterTags.length > 0 && (
        <div className="active-filters">
          {filterTags.map(([key, { label }]) => (
            <div className="active-tag" key={key}>
              {label}
              <button onClick={() => onRemoveFilter?.(key)}>×</button>
            </div>
          ))}
        </div>
      )}

      {/* ── PRODUCT GRID ── */}
      <div className={`product-grid${viewMode === 'list' ? ' list-view' : ''}`}>
        {products.map(p => (
          <ProductCard key={p.id} product={p} isListView={viewMode === 'list'} />
        ))}
      </div>

      {/* ── PAGINATION ── */}
      <div className="pagination">
        {[1, 2, 3].map(n => (
          <button
            key={n}
            className={`page-btn${page === n ? ' active' : ''}`}
            onClick={() => setPage(n)}
          >{n}</button>
        ))}
        <span className="page-dots">…</span>
        <button className="page-btn" onClick={() => setPage(10)}>10</button>
        <button
          className="page-btn"
          style={{ padding: '0 14px', minWidth: 'auto' }}
          onClick={() => setPage(p => Math.min(p + 1, 10))}
        >ถัดไป →</button>
      </div>

    </div>
  );
}
