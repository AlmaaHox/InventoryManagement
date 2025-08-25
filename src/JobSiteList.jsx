import React from 'react';

export default function JobSiteList({ jobSites, onSelect, onCreate, search, setSearch }) {
  return (
    <div className="jobsite-list">
      <div className="header-row">
        <input
          type="text"
          placeholder="Search job sites..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="search-input"
        />
        <button className="create-btn" onClick={onCreate}>Create</button>
      </div>
      <ul className="jobsite-ul">
        {jobSites.map(site => (
          <li key={site.id} className="jobsite-li" onClick={() => onSelect(site)}>
            <span className="jobsite-name">{site.name}</span>
            <span className={`status status-${site.status.replace(/\s/g, '').toLowerCase()}`}>{site.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
