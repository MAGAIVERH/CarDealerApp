'use client'
import { useState, useEffect } from 'react';

export default function FilterPage() {
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [years, setYears] = useState([]);
  const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchVehicleTypes = async () => {
      try {
        const response = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/honda?format=json');
        const data = await response.json();
        setTypes(data.Results);
      } catch (error) {
        console.error('Erro ao buscar tipos de veículos:', error);
      }
    };

    fetchVehicleTypes();

    const currentYear = new Date().getFullYear();
    const yearOptions = [];
    for (let i = 2015; i <= currentYear; i++) {
      yearOptions.push(i);
    }
    setYears(yearOptions);
  }, []);

  const handleSubmit = () => {
    if (selectedType && selectedYear) {
      window.location.href = `/result/${selectedType}/${selectedYear}`;
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Filter Vehicle</h1>

      <div className="mb-4 relative">
        <label className="block text-sm font-medium mb-2">Vehicle type:</label>
        <div
          className="w-full border p-3 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          onClick={() => setIsTypeDropdownOpen(!isTypeDropdownOpen)}
        >
          {selectedType ? types.find(type => type.VehicleTypeId === selectedType)?.VehicleTypeName : 'Select a Vehicle'}
        </div>
        {isTypeDropdownOpen && (
          <ul className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
            {types.map(type => (
              <li
                key={type.VehicleTypeId}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSelectedType(type.VehicleTypeId);
                  setIsTypeDropdownOpen(false);
                }}
              >
                {type.VehicleTypeName}
              </li>
            ))}
          </ul>
        )}
      </div>

     
      <div className="mb-4 relative">
        <label className="block text-sm font-medium mb-2">Model Year:</label>
        <div
          className="w-full border p-3 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}
        >
          {selectedYear || 'Select Year'}
        </div>
        {isYearDropdownOpen && (
          <ul className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
            {years.map(year => (
              <li
                key={year}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSelectedYear(year);
                  setIsYearDropdownOpen(false);
                }}
              >
                {year}
              </li>
            ))}
          </ul>
        )}
      </div>

   
      <button
        className={`w-full bg-blue-500 text-white p-3 rounded-lg text-base transition-colors ${!selectedType || !selectedYear ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
        onClick={handleSubmit}
        disabled={!selectedType || !selectedYear}
      >
        Next
      </button>
    </div>
  );
}
