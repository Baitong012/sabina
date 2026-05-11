import { useState } from 'react';
import './LevelTabs.css';

const TABS = [
  { num: '01', label: 'ไม่เติมแต่ทรงสวย'  },
  { num: '02', label: 'เติมเบาๆ แต่เอาอยู่' },
  { num: '03', label: 'เติมพอดี มีพอดัน'   },
  { num: '04', label: 'เติมเน้นๆ เห็นเนิน'  },
];

export default function LevelTabs({ activeLevel = 0, onChange }) {
  const [active, setActive] = useState(activeLevel);

  function handleClick(e, i) {
    e.preventDefault();
    setActive(i);
    onChange?.(i);
  }

  return (
    <div className="level-tabs">
      {TABS.map((tab, i) => (
        <a
          key={tab.num}
          href="#"
          className={`level-tab${active === i ? ' active' : ''}`}
          onClick={(e) => handleClick(e, i)}
        >
          <span className="tab-num">{tab.num}</span>
          {tab.label}
        </a>
      ))}
    </div>
  );
}
