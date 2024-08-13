import { Suspense } from 'react';
import Link from 'next/link';

export async function generateStaticParams() {
  const types = ['car', 'truck', 'motorcycle'];
  const currentYear = new Date().getFullYear();
  const years = Array.from({length: currentYear - 2014}, (_, i) => (2015 + i).toString());

  const paths = types.flatMap(type => 
    years.map(year => ({
      makeId: type,
      year: year,
    }))
  );

  return paths;
}

async function fetchVehicles(makeId, year) {
  const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`);
  if (!response.ok) {
    throw new Error('Failed to fetch');
  }
  const data = await response.json();
  return data.Results || [];
}

async function VehicleList({ makeId, year }) {
  const vehicles = await fetchVehicles(makeId, year);

  return (
    <ul className="space-y-2">
      {vehicles.map(vehicle => (
        <li key={vehicle.Model_ID} className="bg-white shadow rounded p-2">{vehicle.Model_Name}</li>
      ))}
    </ul>
  );
}

export default function ResultPage({ params }) {
  const { makeId, year } = params;

  return (
    <div className="flex flex-col justify-center items-center  text-center p-4">
    <h1 className="text-2xl font-bold mb-4">Vehicles for Make ID {makeId} and Year {year}</h1>
    <Suspense fallback={<div>Loading...</div>}>
      <VehicleList makeId={makeId} year={year} />
    </Suspense>
    <Link href="/" className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
      Back to the Home
    </Link>
  </div>
  
  );
}