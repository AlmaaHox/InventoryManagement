import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import InventoryTable from '../InventoryTable';

describe('InventoryTable', () => {
  const category = { name: 'Test', items: [
    { id: 1, item: 'Hammer', quantity: 10, notes: 'Steel', description: 'Heavy duty' },
    { id: 2, item: 'Screwdriver', quantity: 5, notes: 'Flathead', description: 'Small' },
  ] };

  test('renders inventory items', () => {
    render(
      <InventoryTable
        category={category}
        search=""
        onEdit={() => {}}
      />
    );
    expect(screen.getByText('Hammer')).toBeInTheDocument();
    expect(screen.getByText('Screwdriver')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  test('calls onEdit when row is double-clicked', () => {
    render(
      <InventoryTable
        category={category}
        search=""
        onEdit={() => {}}
      />
    );
    const cell = screen.getByText('Hammer');
    const row = cell.closest('tr');
    if (row) {
      fireEvent.doubleClick(row);
    } else {
      throw new Error('Row for Hammer not found');
    }
  
  expect(screen.getByPlaceholderText(/Search & Select item/i)).toBeInTheDocument();
  });
});
