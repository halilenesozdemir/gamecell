/* import React from 'react';
import './FilterList.scss';


const FilterList = () => {
  return (
    <div class='accordion' id='accordionExample'>
      <div class='accordion-item'>
        <h2 class='accordion-header' id='headingOne'>
          <button
            class='accordion-button'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#collapseOne'
            aria-expanded='true'
            aria-controls='collapseOne'>
            Accordion Item #1
          </button>
        </h2>
        <div
          id='collapseOne'
          class='accordion-collapse collapse show'
          aria-labelledby='headingOne'
          data-bs-parent='#accordionExample'>
          <div class='accordion-body'>
            <FilterListItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterList;
 */

import React from 'react';
import './FilterList.scss';
import FilterListItem from '../FilterListItem/FilterListItem';

const FilterList = () => {
  return (
    <div className='check-box'>
      <h3>Filter by genre</h3>
      <FilterListItem />
    </div>
  );
};

export default FilterList;
