import { useState } from 'react';

import TopStrip     from '../components/layout/TopStrip';
import Navbar       from '../components/layout/Navbar';
import FooterStrip  from '../components/layout/FooterStrip';
import Breadcrumb   from '../components/category/Breadcrumb';
import CategoryHero from '../components/category/CategoryHero';
import LevelTabs    from '../components/category/LevelTabs';
import Sidebar      from '../components/sidebar/Sidebar';
import ProductGrid  from '../components/product/ProductGrid';

import { products } from '../data/products';
import '../styles/globals.css';
import './Level1Page.css';

const BREADCRUMB = [
  { label: 'หน้าหลัก',   href: '#' },
  { label: 'เสื้อชั้นใน', href: '#' },
  { label: 'Level 1 · ไม่เติมแต่ทรงสวย' },
];

export default function Level1Page() {
  const [activeFilters, setActiveFilters] = useState({});

  function handleRemoveFilter(key) {
    setActiveFilters(prev => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }

  return (
    <>
      <TopStrip />
      <Navbar />

      <Breadcrumb items={BREADCRUMB} />
      <CategoryHero />
      <LevelTabs />

      {/* ── MAIN 2-COL LAYOUT ── */}
      <div className="main-layout">
        <Sidebar onFilterChange={setActiveFilters} />

        <ProductGrid
          products={products}
          activeFilters={activeFilters}
          onRemoveFilter={handleRemoveFilter}
        />
      </div>

      <FooterStrip />
    </>
  );
}
