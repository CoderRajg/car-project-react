import React, { useState } from 'react';
import CarCard from './components/CarCard';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';
import carsData from './data/carsData.json';
import './App.css';

const ITEMS_PER_PAGE = 6;

const App = () => {
  const [cars, setCars] = useState(carsData);
  const [currentPage, setCurrentPage] = useState(1);

  const filterCars = term => {
    const filteredCars = carsData.filter(car => car.name.toLowerCase().includes(term.toLowerCase()));
    setCars(filteredCars);
    setCurrentPage(1);
  };

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastCar = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstCar = indexOfLastCar - ITEMS_PER_PAGE;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

  return (
    <div className="App">
      <SearchBar onSearch={filterCars} />
      <div className="car-list">
        {currentCars.map(car => <CarCard key={car.id} car={car} />)}
      </div>
      <Pagination currentPage={currentPage} totalPages={Math.ceil(cars.length / ITEMS_PER_PAGE)} onPageChange={paginate} />
    </div>
  );
};

export default App;
