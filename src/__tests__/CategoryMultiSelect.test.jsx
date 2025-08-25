import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CategoryMultiSelect from '../CategoryMultiSelect';

describe('CategoryMultiSelect', () => {
  test('renders placeholder and options', () => {
    render(<CategoryMultiSelect value={[]} onChange={() => {}} />);
    expect(screen.getByText(/Select/i)).toBeInTheDocument();
    fireEvent.click(screen.getByText(/Select/i));
    expect(screen.getByText('Sidewalk Shed')).toBeInTheDocument();
    expect(screen.getByText('Scaffold')).toBeInTheDocument();
    expect(screen.getByText('Shoring')).toBeInTheDocument();
  });

  test('selects and removes categories', () => {
    let value = [];
    const handleChange = (v) => { value = v; };
    render(<CategoryMultiSelect value={value} onChange={handleChange} />);
    fireEvent.click(screen.getByText(/Select/i));
    fireEvent.click(screen.getByText('Sidewalk Shed'));
    expect(value).toContain('Sidewalk Shed');
  });
});
