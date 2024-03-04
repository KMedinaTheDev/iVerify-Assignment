import React, { useState, useEffect } from 'react';
import Search from '../Components/Search';
import UserList from '../Components/Lists/UserList';
import DeviceList from '../Components/Lists/DeviceList';
import ScanList from '../Components/Lists/ScanList';

function Dashboard() {
  // for the sake of exmaple
  const [searchValue, setSearchValue] = useState('');

  const handleSearchSubmit = (value) => {
    // Update the search value when the user hits Enter in the Search component
    setSearchValue(value);
  };
  return (
    <div>
      <>
        <h1 className="welcome">Welcome to Hello World LLC</h1>
        <h3>This dashboard is for the administrative team to search and find employee device scans. Proceed with caution!</h3>
      </>
      {/* Search Section */}
      <div className="search-section">
        <h1>Search</h1>
        <h3>You have the power to search over 10,000 scans by entering the employee's first or last name or their device number.</h3>
       {/* Basic Instructions on how to use search and filter */}
        <p> To clear your search and/or being a new search click the 'X' on the far right of the search field to delete the current search and type a new search.</p>
        <Search submit={handleSearchSubmit} value={searchValue}/>
      </div>
    {/* All Lists can be viewed here - RTK is full of useful hooks for this!*/}
    {/* These would all have loadingStates and loading wrappers to handle any slow connections or errors. */}
  
    <div className="dashboard-container">
      <div className="dashboard-column">
        <UserList value={searchValue}/>
      </div>
      <div className="dashboard-column">
        <DeviceList value={searchValue}/>
      </div>
      <div className="dashboard-column">
        <ScanList value={searchValue}/>
      </div>
    </div>

    <h2 className="coming-soon">New Features Coming Soon!</h2>
        <ol>
          <li>Sort by date or alphabetical order.</li>
          <li>By default this list is set to sorting by date with the most recent scans up top. Reverse the order by hitting the arrow next to the date filter, symbolized by the calendar icon under filters.</li>
          <li>Switch to an alphabetical ordered list by selecting the Abc filter. By default this list is set to sorting from A - Z. Reverse the order by hitting the arrow next to the alphabetical filter, symbolized by the Abc icon under filters.</li>
        </ol>
    </div>

   
  );

}

export default Dashboard;

// TS: 
// import React from 'react';
// import StandardPage from './standard-page';
// import Search from '../Components/Search';

// interface HomePageProps {}

// const HomePage: React.FC<HomePageProps> = () => {
//   return (
//     <div>
//       <>
//         <h1>Welcome to Hello World LLC</h1>
//         <h3>This dashboard is for the administrative team to search and find employee device scans. Proceed with caution!</h3>
//       </>
//       {/* Search Section */}
//       <>
//         <h1>Search</h1>
//         <Search />
//         <p>You can search over 10,000 scans by entering the employee's first or last name or their device number.</p>
//         <label>You can sort by date or alphabetical order.</label>
//         {/* Basic Instructions on how to use search and filter */}
//         <ul>
//           <li>By default this list is set to sorting by date with the most recent scans up top. Reverse the order by hitting the arrow next to the date filter, symbolized by the calendar icon under filters.</li>
//           <li>Switch to an alphabetical ordered list by selecting the Abc filter. By default this list is set to sorting from A - Z. Reverse the order by hitting the arrow next to the alphabetical filter, symbolized by the Abc icon under filters.</li>
//         </ul>
//       </>
//       {/* Scan List */}
//       <>
//         {/*add your scan list components or logic here */}
//       </>
//     </div>
//   );
// };

// export default HomePage;
