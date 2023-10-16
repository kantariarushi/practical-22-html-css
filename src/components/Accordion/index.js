import React, { useState } from 'react';
import './Accordion.css'

function AccordionItem({ title, content, isOpen, onClick }) {
  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`} onClick={onClick}>
      <div className={`accordion-title ${isOpen ? 'open' : ''}`}>{title}</div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
}

function Accordion({ items }) {
  const [openItemIndex, setOpenItemIndex] = useState(null);

  const toggleItem = (index) => {
    if (openItemIndex === index) {
      setOpenItemIndex(null);
    } else {
      setOpenItemIndex(index);
    }
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openItemIndex === index}
          onClick={() => toggleItem(index)}
        />
      ))}
    </div>
  );
}

export default Accordion;
