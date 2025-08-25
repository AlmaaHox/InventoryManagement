import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import InventoryModal from '../InventoryModal';

describe('InventoryModal', () => {
  const item = {
    item: 'A68446',
    quantity: 52,
    description: 'Shoring jacks',
    notes: 'To be inspected',
  };

  test('renders modal with item data', () => {
    render(<InventoryModal item={item} onSave={() => {}} onCancel={() => {}} />);
    expect(screen.getByDisplayValue('A68446')).toBeInTheDocument();
    expect(screen.getByDisplayValue('52')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Shoring jacks')).toBeInTheDocument();
    expect(screen.getByDisplayValue('To be inspected')).toBeInTheDocument();
  });

  test('can edit and save item', () => {
    const handleSave = vi.fn();
    render(<InventoryModal item={item} onSave={handleSave} onCancel={() => {}} />);
    fireEvent.change(screen.getByPlaceholderText('Set Quantity'), { target: { value: '99' } });
    fireEvent.click(screen.getByRole('button', { name: /Save Changes/i }));
    expect(handleSave).toHaveBeenCalled();
  });
});
