import React, { useState } from 'react';
import CategoryMultiSelect from './CategoryMultiSelect';

export default function JobSiteForm({ onSave, onCancel }) {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [categories, setCategories] = useState([]);

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-btn" onClick={onCancel} title="Close">×</button>
        <h2 style={{marginTop:0}}>Create Job Site</h2>
        <div className="info-row" style={{marginBottom:'1rem'}}>
          <span className="info-icon">i</span>
          <span className="info-text">Informative piece of text that can be used regarding this modal.</span>
        </div>
        <label>Name</label>
        <input
          type="text"
          placeholder="Type the jobsite's name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <div style={{display:'flex', gap:'1rem'}}>
          <div style={{flex:1}}>
            <label>Category Included</label>
            <CategoryMultiSelect value={categories} onChange={setCategories} />
          </div>
          <div style={{flex:1}}>
            <label>Status</label>
            <select
              value={status}
              onChange={e => setStatus(e.target.value)}
              className="status-select"
            >
              <option value="">Select one</option>
              <option value="Completed" className="status-option-completed">
                &#9679; Completed
              </option>
              <option value="In Progress" className="status-option-inprogress">
                &#9679; In Progress
              </option>
              <option value="On Hold" className="status-option-onhold">
                &#9679; On Hold
              </option>
            </select>
          </div>
        </div>
        <div className="modal-actions">
          <button style={{background:'#ff7043',color:'#fff'}} onClick={onCancel}>Cancel Changes ✗</button>
          <button style={{background:'#66bb6a',color:'#fff'}} onClick={() => onSave({ name, status, categories })} disabled={!name.trim() || categories.length === 0 || !status}>Save Changes ✓</button>
        </div>
      </div>
    </div>
  );
}
