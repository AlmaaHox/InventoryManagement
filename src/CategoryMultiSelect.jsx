
import React, { useRef, useState } from 'react';

const CATEGORY_OPTIONS = [
  { label: 'Sidewalk Shed', color: '#66bb6a' },
  { label: 'Scaffold', color: '#ffe082' },
  { label: 'Shoring', color: '#8e24aa' }
];

export default function CategoryMultiSelect({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  // Close dropdown on outside click
  React.useEffect(() => {
    function handle(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    if (open) document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, [open]);

  const toggleOption = (cat) => {
    if (value.includes(cat)) {
      onChange(value.filter(v => v !== cat));
    } else {
      onChange([...value, cat]);
    }
  };

  const allSelected = value.length === CATEGORY_OPTIONS.length;

  return (
    <div className="cat-multiselect" ref={ref}>
      <div className="cat-multiselect-input" onClick={() => setOpen(v => !v)}>
        {value.length === 0 && <span className="cat-placeholder">Select</span>}
        {allSelected && <span className="cat-badge all">All services selected</span>}
        {value.length > 0 && !allSelected && value.map(cat => {
          const opt = CATEGORY_OPTIONS.find(o => o.label === cat);
          return (
            <span className="cat-badge" style={{background: opt.color, color: '#fff', marginRight: 4}} key={cat}>
              {cat} <span className="cat-remove" onClick={e => {e.stopPropagation(); toggleOption(cat);}}>✖</span>
            </span>
          );
        })}
        <span className="cat-arrow">▼</span>
      </div>
      {open && (
        <div className="cat-multiselect-dropdown">
          {CATEGORY_OPTIONS.map(opt => (
            <div
              key={opt.label}
              className={`cat-option${value.includes(opt.label) ? ' selected' : ''}`}
              data-label={opt.label}
              style={{background: value.includes(opt.label) ? opt.color : '#fff', color: value.includes(opt.label) ? (opt.label === 'Scaffold' ? '#333' : '#fff') : '#333'}}
              onClick={() => toggleOption(opt.label)}
            >
              {opt.label}
              {value.includes(opt.label) && <span className="cat-check">✓</span>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
