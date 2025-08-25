import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import JobSiteList from '../JobSiteList';

describe('JobSiteList', () => {
  const jobSites = [
    { id: 1, name: 'Site 1', status: 'Completed' },
    { id: 2, name: 'Site 2', status: 'On Hold' },
  ];

  test('renders job sites and status', () => {
    render(
      <JobSiteList
        jobSites={jobSites}
        onSelect={() => {}}
        onCreate={() => {}}
        search=""
        setSearch={() => {}}
      />
    );
    expect(screen.getByText('Site 1')).toBeInTheDocument();
    expect(screen.getByText('Site 2')).toBeInTheDocument();
    expect(screen.getByText('Completed')).toBeInTheDocument();
    expect(screen.getByText('On Hold')).toBeInTheDocument();
  });

  test('calls onCreate when create button is clicked', () => {
    const handleCreate = vi.fn();
    render(
      <JobSiteList
        jobSites={jobSites}
        onSelect={() => {}}
        onCreate={handleCreate}
        search=""
        setSearch={() => {}}
      />
    );
    fireEvent.click(screen.getByRole('button', { name: /Create/i }));
    expect(handleCreate).toHaveBeenCalled();
  });
});
