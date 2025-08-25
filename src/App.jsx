
import React, { useState } from 'react';
import JobSiteList from './JobSiteList';
import JobSiteForm from './JobSiteForm';
import InventoryDashboard from './InventoryDashboard';
import './App.css';


function App() {
  const [jobSites, setJobSites] = useState([
    { id: 1, name: '1658 E 23rd St, Brooklyn, NY 11229, USA', status: 'Completed' },
    { id: 2, name: '1705 E 22nd St, Brooklyn, NY 11229, USA', status: 'On Hold' },
    { id: 3, name: '47 Lake St, Brooklyn, NY 11223, USA', status: 'Completed' },
    { id: 4, name: '256 Bay 19th St, Brooklyn, NY 11214, USA', status: 'On Hold' },
    { id: 5, name: '6908 13th Ave, Brooklyn, NY 11228, USA', status: 'On Hold' },
    { id: 6, name: '1329 56th St, Brooklyn, NY 11219, USA', status: 'On Hold' },
    { id: 7, name: '588 Lenox Rd, Brooklyn, NY 11203, USA', status: 'On Hold' },
    { id: 8, name: '200 Newport St, Brooklyn, NY 11212, USA', status: 'On Hold' },
    { id: 9, name: '158-39 99th St, Queens, NY 11414, USA', status: 'On Hold' },
    { id: 10, name: '86-04 Shore Pkwy, Jamaica, NY 11414, USA', status: 'In Progress' },
    { id: 11, name: '95-01 Linden Blvd, Jamaica, NY 11417, USA', status: 'On Hold' },
    { id: 12, name: '1705 E 22nd St, Brooklyn, NY 11229, USA', status: 'On Hold' },
    { id: 13, name: '47 Lake St, Brooklyn, NY 11223, USA', status: 'Completed' },
    { id: 14, name: '256 Bay 19th St, Brooklyn, NY 11214, USA', status: 'On Hold' },
    { id: 15, name: '6908 13th Ave, Brooklyn, NY 11228, USA', status: 'On Hold' },
    { id: 16, name: '1329 56th St, Brooklyn, NY 11219, USA', status: 'On Hold' },
    { id: 17, name: '588 Lenox Rd, Brooklyn, NY 11203, USA', status: 'On Hold' },
    { id: 18, name: '158-39 99th St, Queens, NY 11414, USA', status: 'On Hold' },
    { id: 19, name: '86-04 Shore Pkwy, Jamaica, NY 11414, USA', status: 'In Progress' },
    { id: 20, name: '95-01 Linden Blvd, Jamaica, NY 11417, USA', status: 'On Hold' },
  ]);
  const [selectedJobSite, setSelectedJobSite] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState('');

  // Status summary counts
  const statusCounts = jobSites.reduce((acc, site) => {
    acc[site.status] = (acc[site.status] || 0) + 1;
    return acc;
  }, {});

  const handleCreate = () => setShowForm(true);
  const handleSave = ({ name, status, categories }) => {
    setJobSites([
      ...jobSites,
      { id: Date.now(), name, status, categories },
    ]);
    setShowForm(false);
  };
  const handleCancel = () => setShowForm(false);

  const filteredSites = jobSites.filter(site =>
    site.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app-container">
      {!selectedJobSite ? (
        <>
          <div className="status-summary-row">
            <div className="status-summary-card on-road">
              <span className="summary-count">{statusCounts['In Progress'] || 0}</span>
              <span className="summary-label">On Road</span>
            </div>
            <div className="status-summary-card completed">
              <span className="summary-count">{statusCounts['Completed'] || 0}</span>
              <span className="summary-label">Completed</span>
            </div>
            <div className="status-summary-card on-hold">
              <span className="summary-count">{statusCounts['On Hold'] || 0}</span>
              <span className="summary-label">On Hold</span>
            </div>
          </div>
          <div className="info-row">
            <span className="info-icon">i</span>
            <span className="info-text">
              This page shows all job sites and their current status. Use the search or create a new job site as needed. Statuses:
              <b style={{color:'#bfa000',marginLeft:4}}>On Road</b> = in progress,
              <b style={{color:'#388e3c',marginLeft:4}}>Completed</b> = finished,
              <b style={{color:'#d32f2f',marginLeft:4}}>On Hold</b> = not started or paused.
            </span>
          </div>
          <h1>Job Sites</h1>
          <JobSiteList
            jobSites={filteredSites}
            onSelect={setSelectedJobSite}
            onCreate={handleCreate}
            search={search}
            setSearch={setSearch}
          />
          {showForm && (
            <JobSiteForm onSave={handleSave} onCancel={handleCancel} />
          )}
        </>
      ) : (
        <InventoryDashboard
          jobSite={selectedJobSite}
          onBack={() => setSelectedJobSite(null)}
        />
      )}
    </div>
  );
}

export default App;
