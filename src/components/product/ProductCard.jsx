import { useState } from 'react';
import './ProductCard.css';

/* SVG bra placeholder icon */
function BraIcon({ color = '#a855f7' }) {
  return (
    <svg className="bra-icon" viewBox="0 0 100 70" fill="none">
      <path d="M10 50 Q25 20 50 35 Q75 20 90 50" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M10 50 Q20 58 30 55 Q40 52 50 35" stroke={color} strokeWidth="2"   strokeLinecap="round" fill="none" opacity=".5" />
      <path d="M90 50 Q80 58 70 55 Q60 52 50 35" stroke={color} strokeWidth="2"   strokeLinecap="round" fill="none" opacity=".5" />
    </svg>
  );
}

/**
 * product shape:
 * { id, brand, name, sku, priceNow, priceWas, discount, stars, reviewCount,
 *   desc, badge (null|'new'|'disc'), images:[{ colorClass, iconColor }] }
 */
export default function ProductCard({ product, isListView = false }) {
  const [wished,   setWished]   = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  const { brand, name, sku, priceNow, priceWas, discount, stars, reviewCount, desc, badge, images = [] } = product;

  function slideImg(dir) {
    if (images.length < 2) return;
    setImgIndex(i => (i + dir + images.length) % images.length);
  }

  const starStr = '★'.repeat(Math.round(stars)) + '☆'.repeat(5 - Math.round(stars));

  return (
    <a className="product-card" href="#">
      <div className="img-wrap">

        {/* Images */}
        {images.map((img, i) => (
          <div
            key={i}
            className={`product-img ${img.colorClass}${i === imgIndex ? ' active' : ''}`}
          >
            <BraIcon color={img.iconColor} />
          </div>
        ))}

        {/* Slider zones */}
        {images.length > 1 && (
          <>
            <div className="img-zone img-zone-left"  onMouseEnter={() => slideImg(-1)} />
            <div className="img-zone img-zone-right" onMouseEnter={() => slideImg(1)}  />
            <div className="img-dots">
              {images.map((_, i) => (
                <span key={i} className={`img-dot${i === imgIndex ? ' active' : ''}`} />
              ))}
            </div>
          </>
        )}

        {/* Badge */}
        {badge === 'disc' && <div className="disc-badge">-{discount}%</div>}
        {badge === 'new'  && <div className="new-badge">NEW</div>}

        {/* Wishlist */}
        <button
          className={`wish-btn${wished ? ' active' : ''}`}
          onClick={e => { e.preventDefault(); setWished(w => !w); }}
        >
          {wished ? '♥' : '♡'}
        </button>

        {/* Add to cart hover */}
        <div className="hover-cart">
          <button className="btn-cart" onClick={e => e.preventDefault()}>
            เพิ่มลงตะกร้า
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-info">
        <div className="p-brand">{brand}</div>
        <div className="p-name">{name}</div>
        <div className="p-sku">{sku}</div>
        <div className="p-price">
          <span className="price-now">฿{priceNow}</span>
          {priceWas  && <span className="price-was">฿{priceWas}</span>}
          {discount  && <span className="price-disc">-{discount}%</span>}
        </div>
        <div className="p-stars">
          <span className="stars">{starStr}</span> ({reviewCount})
        </div>
        <div className="p-desc">{desc}</div>
        <button className="btn-cart-list" onClick={e => e.preventDefault()}>
          เพิ่มลงตะกร้า
        </button>
      </div>
    </a>
  );
}
