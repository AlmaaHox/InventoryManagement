import React, { useState } from 'react';
import InventoryModal from './InventoryModal';

export default function InventoryTable({ category, search, setCategories, categories }) {
  const [modalItem, setModalItem] = useState(null);

  const filteredItems = category.items.filter(
    item =>
      item.item.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase()) ||
      item.notes.toLowerCase().includes(search.toLowerCase())
  );

  const handleSave = (updatedItem) => {
    setCategories(
      categories.map(cat =>
        cat.name === category.name
          ? { ...cat, items: cat.items.map(i => (i.id === updatedItem.id ? updatedItem : i)) }
          : cat
      )
    );
    setModalItem(null);
  };

  return (
    <div className="inventory-table-wrapper">
      <h3 style={{ color: category.color }}>{category.name}</h3>
      <table className="inventory-table">
        <thead>
          <tr>
            <th>Nr.</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Description</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item, idx) => (
            <tr key={item.id} onDoubleClick={() => setModalItem(item)}>
              <td>{idx + 1}</td>
              <td>{item.item}</td>
              <td>{item.quantity}</td>
              <td>{item.description}</td>
              <td>{item.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {modalItem && (
        <InventoryModal
          item={modalItem}
          onSave={handleSave}
          onCancel={() => setModalItem(null)}
        />
      )}
    </div>
  );
}
