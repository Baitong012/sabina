import './CategoryHero.css';

export default function CategoryHero() {
  return (
    <div className="cat-hero">
      <div className="ch-left">
        <div className="ch-tag">LEVEL 01 · INVISIBLE WIRE</div>
        <div className="ch-title">
          ไม่เติม<br /><em>แต่ทรงสวย</em>
        </div>
        <p className="ch-desc">
          เสื้อชั้นในไม่มีฟองน้ำ ทรงธรรมชาติ ใส่สบายทั้งวัน
          เหมาะสำหรับทุกช่วงวัย ตั้งแต่วัยรุ่นถึงวัยสาว
        </p>
      </div>

      <div className="ch-right">
        <div className="ch-stat">
          <strong>120+</strong><span>รุ่นสินค้า</span>
        </div>
        <div className="ch-stat">
          <strong>4.8★</strong><span>เฉลี่ยรีวิว</span>
        </div>
        <div className="ch-stat">
          <strong>50%</strong><span>ลดสูงสุด</span>
        </div>
      </div>
    </div>
  );
}
