import './App.css';
import Tours from './components/Tours';
import data from './data';
import React, { useState } from 'react';

function App() {

  const [tours, setTours] = useState(data)

  function removeTourHandler(id) {
        const newTours = tours.filter(tour =>  tour.id !== id)
        setTours(newTours)
  }

  if(tours.length === 0){
    return (
      <div className='refresh h-[100vh] flex items-center flex-col justify-center'>
        <h2 className='font-bold'>No Tours Left</h2>
        <button className='btn-white mt-[18px] py-[10px] px-[80px] border-solid border-[1px] border-white bg-[#c9c2c2] hover:bg-white hover:font-bold hover:transition-all' onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    )
  }

  return (
    <div className='App'>
      <Tours tours={tours} removeTour = {removeTourHandler}></Tours>
    </div>
  );
}

export default App;
