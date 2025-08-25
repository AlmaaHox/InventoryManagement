import React, { useState } from 'react';
import InventoryTable from './InventoryTable';

const DEFAULT_CATEGORIES = [
  {
    name: 'Sidewalk Shed',
    color: '#4CAF50',
    items: [
      { id: 1, item: 'G42295', quantity: 10, description: 'Steel beams for shed', notes: 'Ready for delivery' },
      { id: 2, item: 'M721', quantity: 83, description: 'Wood planks', notes: 'Awaiting approval' },
    ]
  },
  {
    name: 'Scaffold',
    color: '#FFEB3B',
    items: [
      { id: 3, item: 'S25907', quantity: 47, description: 'Scaffold pipes', notes: 'In warehouse' },
    ]
  },
  {
    name: 'Shoring',
    color: '#9C27B0',
    items: [
      { id: 4, item: 'A68446', quantity: 52, description: 'Shoring jacks', notes: 'To be inspected' },
    ]
  }
];

export default function InventoryDashboard({ jobSite, onBack }) {
  const [search, setSearch] = useState('');
  const [categories, setCategories] = useState(DEFAULT_CATEGORIES);
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="inventory-dashboard" style={{background:'#f5f6f8',minHeight:'80vh'}}>
      <div style={{display:'flex',gap:'1.5rem'}}>
        {/* Sidebar */}
        <div style={{width:280,background:'#fff',borderRadius:10,padding:'1.2rem 1rem',boxShadow:'0 1px 4px #0001',display:'flex',flexDirection:'column',alignItems:'stretch',minHeight:500}}>
          <div style={{fontWeight:600,marginBottom:10}}>{jobSite.name}</div>
          {categories.map(cat => (
            <button
              key={cat.name}
              className={selectedCategory && selectedCategory.name === cat.name ? 'cat-btn selected' : 'cat-btn'}
              data-label={cat.name}
              style={{marginBottom:8}}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat.name}
            </button>
          ))}
          <div style={{flex:1}}></div>
          <button className="back-btn" style={{marginTop:20}} onClick={onBack}>Go Back ←</button>
        </div>
     
        <div style={{flex:1,background:'#fff',borderRadius:10,padding:'1.2rem 1rem',boxShadow:'0 1px 4px #0001',minHeight:500,display:'flex',flexDirection:'column'}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:16}}>
            <div style={{fontWeight:600,fontSize:'1.1rem'}}>Data Grid</div>
            <input
              type="text"
              placeholder="Search items..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="search-input"
              style={{maxWidth:260}}
            />
          </div>
          {!selectedCategory ? (
            <div style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',color:'#888'}}>
              <img src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png" alt="empty box" style={{width:90,marginBottom:16,opacity:0.7}}/>
              <div style={{fontWeight:600,fontSize:'1.1rem'}}>No Service Selected</div>
              <div style={{fontSize:'1rem',marginTop:4}}>Please select a service on your left to proceed.</div>
            </div>
          ) : (
            <InventoryTable
              category={selectedCategory}
              search={search}
              setCategories={setCategories}
              categories={categories}
            />
          )}
        </div>
      </div>
    </div>
  );
}
