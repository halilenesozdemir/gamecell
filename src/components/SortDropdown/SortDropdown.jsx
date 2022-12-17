import React, { useState } from 'react';

const SortDropdown = ({ setReversed }) => {
  const [selected, setSelected] = useState('Title A-Z');

  const handleSort = (e) => {
    setSelected(e.target.textContent);
    if (e.target.textContent == 'Title Z-A') {
      setReversed(true);
    } else {
      setReversed(false);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '20px' }}>
      <div class='dropdown'>
        <button class='btn btn-secondary dropdown-toggle' type='button' data-bs-toggle='dropdown' aria-expanded='false'>
          {selected}
        </button>
        <ul class='dropdown-menu'>
          <li>
            <a class='dropdown-item' href='#' onClick={handleSort}>
              Title A-Z
            </a>
          </li>
          <li>
            <a class='dropdown-item' href='#' onClick={handleSort}>
              Title Z-A
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SortDropdown;
