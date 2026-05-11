import './Navbar.css';

export default function Navbar() {
  return (
    <div className="nav-wrap">

      {/* ── TOP ROW ── */}
      <div className="nav-top">
        <a className="nav-logo" href="#">SABINA</a>

        <div className="nav-right">
          <button className="nav-icon-btn" title="ค้นหา">🔍</button>
          <a className="nav-icon-btn" href="#" title="สาขา">📍</a>
          <a className="nav-icon-btn" href="#" title="wishlist">♡</a>
          <a className="nav-icon-btn nav-cart" href="#" title="ตะกร้า">
            🛍<span className="cart-badge">0</span>
          </a>
          <button className="nav-login-btn">เข้าสู่ระบบ</button>
          <button className="nav-lang">TH | EN</button>
        </div>
      </div>

      {/* ── BOTTOM MENU ── */}
      <nav className="nav-menu">
        <div className="nav-item">
          <a className="nav-link" href="#">สินค้าใหม่</a>
        </div>

        {/* เสื้อชั้นใน — wide 3-col dropdown */}
        <div className="nav-item">
          <a className="nav-link active" href="#">
            เสื้อชั้นใน
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </a>
          <div className="nav-dropdown nav-dropdown-wide">
            <div className="nd-col">
              <div className="nd-col-title">Level Bras</div>
              <a href="#">ดูทั้งหมด</a>
              <a href="#" style={{ color: 'var(--p700)', fontWeight: 500 }}>Level 1 · ไม่เติมแต่ทรงสวย</a>
              <a href="#">Level 2 · เติมเบาๆ แต่เอาอยู่</a>
              <a href="#">Level 3 · เติมพอดี มีพอดัน</a>
              <a href="#">Level 4 · เติมเน้นๆ เห็นเนิน</a>
            </div>
            <div className="nd-col">
              <div className="nd-col-title">Style</div>
              <a href="#">เสื้อชั้นในดันทรง</a>
              <a href="#">ชุดชั้นในไม่ดันทรง</a>
              <a href="#">เสื้อชั้นในเกาะอก</a>
              <a href="#">บราถอดสายได้</a>
              <a href="#">เสื้อชั้นในหลังศัลยกรรม</a>
              <a href="#">สำหรับผู้ผ่าตัดมะเร็งเต้านม</a>
            </div>
            <div className="nd-col">
              <div className="nd-col-title">Collection</div>
              <a href="#">Pretty Perfect</a>
              <a href="#">Soft Collection</a>
              <a href="#">Twenty Five</a>
              <a href="#">Modern V</a>
              <a href="#">Forever Young</a>
              <a href="#">Maggie Mae</a>
              <a href="#">Mad Moiselle</a>
              <a href="#">Personal Bra</a>
            </div>
          </div>
        </div>

        {/* กางเกงใน */}
        <div className="nav-item">
          <a className="nav-link" href="#">
            กางเกงใน
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </a>
          <div className="nav-dropdown">
            <div className="nav-dropdown-label">Style</div>
            <a href="#">กางเกงในทั้งหมด</a>
            <a href="#">บิกินี</a>
            <a href="#">จีสตริง</a>
            <a href="#">เอวสูง</a>
            <a href="#">บอยเลก</a>
            <a href="#">กางเกงขาสั้น</a>
          </div>
        </div>

        {/* คอลเลกชัน */}
        <div className="nav-item">
          <a className="nav-link" href="#">
            คอลเลกชัน
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </a>
          <div className="nav-dropdown">
            <a href="#">All Collection</a>
            <a href="#">Pretty Perfect</a>
            <a href="#">Soft Collection</a>
            <a href="#">Twenty Five</a>
            <a href="#">Modern V</a>
            <a href="#">Forever Young</a>
            <a href="#">Maggie Mae</a>
            <a href="#">Mad Moiselle</a>
            <div className="nav-dropdown-divider" />
            <a href="#">Sabina Kids</a>
            <a href="#">Shapewear</a>
            <a href="#">Swim</a>
            <a href="#">Lounge Wear</a>
          </div>
        </div>

        <div className="nav-item"><a className="nav-link" href="#">อุปกรณ์เสริม</a></div>
        <div className="nav-item"><a className="nav-link" href="#">ผู้ชาย</a></div>
        <div className="nav-item"><a className="nav-link nav-promo" href="#">โปรโมชัน</a></div>
        <div className="nav-item"><a className="nav-link nav-sale" href="#">ราคาพิเศษ</a></div>
      </nav>

    </div>
  );
}
