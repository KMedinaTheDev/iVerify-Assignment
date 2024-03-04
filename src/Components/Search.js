import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Search = ({ submit, value: searchValue, result: searchResult }) => {
  const [value, setValue] = useState(searchValue);
  const [result, setResult] = useState(searchResult);

  const [filteredUsers, setFilteredUsers] = useState([]);
  const [filterByName, setFilterByName] = useState(false);
  const [filterByDate, setFilterByDate] = useState(false);


  useEffect(() => {
    setValue(searchValue);
  }, [searchValue]);

  const searchChanged = !!value || !!searchValue;

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onKeyDown = (event) => {
    const currentValue = value;

    if (event.key === 'Enter') {
      if (currentValue !== searchValue) {
        // the search string changed, so submit that
        submit(currentValue || null); // make sure we always send the same "blank" thing: null
      }
    } else if (event.key === 'Escape') {
      // user is clearing out the search
      resetSearch();
    }
  };

  const resetSearch = () => {
    if (searchValue !== null) {
      // we're clearing an active search
      submit(null);
    }
    // make sure we clear out our local state too
    setValue('');
  };

  const clearSearchButton = searchChanged && (
    <button type="button" className="clear-search" onClick={resetSearch}>
      X
    </button>
  );

  return (
    <div className='searchContainer'>
      <div>
        <label>
          <input
            type="checkbox"
            checked={filterByName}
            onChange={() => setFilterByName(!filterByName)}
            disabled
          />
          Filter by Name Coming Soon!
          </label>
        <label>
          <input
            type="checkbox"
            checked={filterByDate}
            onChange={() => setFilterByDate(!filterByDate)}
            disabled 
          />
          Filter by Date Coming Soon!
        </label>
      </div>
      <input type='text' maxLength='255' value={value || ''} onChange={onChange} onKeyDown={onKeyDown} />
      {clearSearchButton}
      {searchChanged && <button type='button' className='searchKiller' onClick={resetSearch} />}

      {result && (
        <div className='searchResults'>
          <h1>Search Results</h1>
          {result.totalMatches > 0 ? (
            <p>
              Found: {result.totalMatches} matches for the search {result.searchInput}
            </p>
          ) : (
            <p>No Results matching your search. Please check your search field and filters.</p>
          )}
        </div>
      )}
    </div>
  );
};

Search.propTypes = {
  submit: PropTypes.func.isRequired,
  value: PropTypes.string,
  result: PropTypes.shape({
    totalMatches: PropTypes.number,
    searchInput: PropTypes.string,
  }),
};

Search.defaultProps = {
  value: null,
  result: null,
};

export default Search;
