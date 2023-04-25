import React from 'react';
import './App.css'
import Search from './components/search/Search';
import Current from './components/current/Current';


function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }

  return (
    <>
      <div className="container">
        <Search onSearchChange={handleOnSearchChange} />
        <Current/>
      </div>
    </>
  );
}

export default App;
