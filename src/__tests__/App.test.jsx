import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import { waitFor } from '@testing-library/react';

describe('Job Site Management App', () => {
  test('renders job site list and create button', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /Job Sites/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Create/i })).toBeInTheDocument();
  });

  test('can open and close create job site modal', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /Create/i }));
    expect(screen.getByText(/Create Job Site/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /Cancel Changes/i }));
    expect(screen.queryByText(/Create Job Site/i)).not.toBeInTheDocument();
  });

  test('can search job sites', () => {
    render(<App />);
    const search = screen.getByPlaceholderText(/search job sites/i);
    fireEvent.change(search, { target: { value: '1658' } });
    expect(screen.getByText(/1658 E 23rd St/i)).toBeInTheDocument();
  });

  test('can add a new job site', async () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /Create/i }));
    fireEvent.change(screen.getByPlaceholderText(/Type the jobsite's name/i), { target: { value: 'Test Site' } });
    fireEvent.click(screen.getByText('Category Included'));
    fireEvent.click(screen.getByText('Select'));
    fireEvent.click(screen.getByText('Sidewalk Shed'));
    fireEvent.click(screen.getByRole('combobox'));
    const completedOptions = screen.getAllByText('Completed');
    fireEvent.click(completedOptions[completedOptions.length - 1]);
   
    const allButtons = screen.getAllByRole('button');
    const saveBtn = allButtons.find(btn => btn.textContent && btn.textContent.match(/Save Changes\s*✓/i));
    if (saveBtn) {
      expect(saveBtn).not.toBeDisabled();
      fireEvent.click(saveBtn);
    }
    expect(screen.queryByText(/Create Job Site/i)).not.toBeInTheDocument();

    await waitFor(() => {
      const allTestSiteNodes = screen.queryAllByText('Test Site');
      const testSiteSpan = allTestSiteNodes.find(node => node.classList && node.classList.contains('jobsite-name'));
      expect(testSiteSpan).toBeInTheDocument();
    });
  });
});
