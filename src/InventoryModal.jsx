import React, { useState } from 'react';

export default function InventoryModal({ item, onSave, onCancel }) {
  const [form, setForm] = useState({ ...item });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  return (
    <div className="modal">
      <div className="modal-content" style={{minWidth:500,maxWidth:600}}>
        <button className="close-btn" onClick={onCancel} title="Close">×</button>
        <h2 style={{marginTop:0}}>Title</h2>
        <div className="info-row" style={{marginBottom:'1rem'}}>
          <span className="info-icon">i</span>
          <span className="info-text">Informative piece of text that can be used regarding this modal.</span>
        </div>
        <div style={{display:'flex',gap:'1.7rem',marginBottom:'1.2rem',alignItems:'flex-end'}}>
          <div style={{flex:1, minWidth:0}}>
            <label>Item</label>
            <input name="item" value={form.item} onChange={handleChange} placeholder="Search & Select item" style={{fontSize:'0.93rem',padding:'0.28rem 0.5rem',borderRadius:6,width:'100%',minWidth:0}} />
          </div>
          <div style={{flex:'0 0 120px',maxWidth:140}}>
            <label>Quantity</label>
            <input name="quantity" type="number" value={form.quantity} onChange={handleChange} placeholder="Set Quantity" style={{fontSize:'0.93rem',padding:'0.28rem 0.5rem',borderRadius:6,width:'100%'}} />
          </div>
        </div>
  <label>Description</label>
  <textarea name="description" value={form.description || ''} onChange={handleChange} placeholder="Type the description..." style={{width:'100%',minHeight:60,marginBottom:10,borderRadius:8,padding:'0.5rem',border:'1.5px solid #d1c4e9',resize:'vertical'}} />
  <label>Notes</label>
  <textarea name="notes" value={form.notes || ''} onChange={handleChange} placeholder="Type a note..." style={{width:'100%',minHeight:60,marginBottom:10,borderRadius:8,padding:'0.5rem',border:'1.5px solid #d1c4e9',resize:'vertical'}} />
        <div className="modal-actions" style={{justifyContent:'flex-end',gap:'1rem',marginTop:'1.2rem'}}>
          <button style={{background:'#ff5252',color:'#fff',fontWeight:500}} onClick={onCancel}>Cancel Changes ✗</button>
          <button style={{background:'#66bb6a',color:'#fff',fontWeight:500}} onClick={() => onSave(form)}>Save Changes ✓</button>
        </div>
      </div>
    </div>
  );
}
