import React, { useState } from 'react';
import Button from '../Button/Button';

import './SortBar.css';

const SortBar = ({ searchTask, sortTasks }) => {
  const [sortBarIsopen, setSortBarIsopen] = useState(false);
  const [sortValue, setSortValue] = useState(false);
  const [searchName, setSearchName] = useState('');

  const openStyle = sortBarIsopen ? 'open' : '';

  const handleSearchInputChanage = (e) => {
    const text = e.target.value || '';
    setSearchName(text);
    searchTask(text);
  };

  const handleSortByAddDate = () => {
    setSortValue((prevState) => !prevState);
    sortTasks('index', sortValue);
  };

  const handleSortByDeadlineDate = () => {
    setSortValue((prevState) => !prevState);
    sortTasks('deadline', sortValue);
  };

  const handleSortByEndDate = () => {
    setSortValue((prevState) => !prevState);
    sortTasks('end', sortValue);
  };

  const handleToggleSortBarOpen = () => {
    setSortBarIsopen((prevState) => !prevState);
  };

  return (
    <div className={`sortbar-tooltip ${openStyle}`}>
      <div className='sortbar-pin-wrapper' onClick={handleToggleSortBarOpen}>
        <div className='sortbar-pin'></div>
        <div className='sortbar-pin'></div>
        <div className='sortbar-pin'></div>
      </div>
      <div className={`sortbar-content-wrapper ${openStyle}`}>
        <input
          className='sortbar-input'
          type='text'
          placeholder='Search...'
          value={searchName}
          onChange={handleSearchInputChanage}
        />
        <Button
          title='sort by add date'
          buttonStyle='sortbar'
          onClickHandler={handleSortByAddDate}
        />
        <Button
          title='sort by deadline date'
          buttonStyle='sortbar'
          onClickHandler={handleSortByDeadlineDate}
        />
        <Button
          title='sort by end date'
          buttonStyle='sortbar'
          onClickHandler={handleSortByEndDate}
        />
      </div>
    </div>
  );
};

export default SortBar;
