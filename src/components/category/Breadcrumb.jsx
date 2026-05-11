import './Breadcrumb.css';

/**
 * items: [{ label, href }]  — last item has no href (current page)
 */
export default function Breadcrumb({ items = [] }) {
  return (
    <div className="page-header">
      <nav className="breadcrumb" aria-label="breadcrumb">
        {items.map((item, i) => (
          <span key={i} style={{ display: 'contents' }}>
            {i > 0 && <span className="breadcrumb-sep">›</span>}
            {item.href
              ? <a href={item.href}>{item.label}</a>
              : <span className="breadcrumb-current">{item.label}</span>
            }
          </span>
        ))}
      </nav>
    </div>
  );
}

/* Default usage for Level 1 page:
<Breadcrumb items={[
  { label: 'หน้าหลัก', href: '#' },
  { label: 'เสื้อชั้นใน', href: '#' },
  { label: 'Level 1 · ไม่เติมแต่ทรงสวย' },
]} />
*/
