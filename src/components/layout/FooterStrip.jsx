import './FooterStrip.css';

const ITEMS = [
  { icon: '🚚', title: 'จัดส่งฟรี',        desc: 'ช้อปครบ ฿990 ขึ้นไป'      },
  { icon: '🔄', title: 'คืนสินค้าได้ 30 วัน', desc: 'ไม่พอใจ คืนเงินทันที'    },
  { icon: '🔒', title: 'ชำระเงินปลอดภัย',   desc: 'รองรับทุกช่องทาง'          },
  { icon: '💬', title: 'บริการลูกค้า 24/7',  desc: 'พร้อมช่วยเหลือเสมอ'       },
];

export default function FooterStrip() {
  return (
    <div className="footer-strip">
      {ITEMS.map(({ icon, title, desc }) => (
        <div className="fs-item" key={title}>
          <div className="fs-icon">{icon}</div>
          <div className="fs-text">
            <h4>{title}</h4>
            <p>{desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
