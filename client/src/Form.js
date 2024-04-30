import React from "react";
import Cards from "./Cards";
import { places } from "./dest";

export default function Form() {
    const [data, setData] = React.useState(null);

    const [destination, setDestination] = React.useState("");
    const [groupSize, setGroupSize] = React.useState("");
    const [startDate, setStartDate] = React.useState("");
    const [endDate, setEndDate] = React.useState("");
    
    
    const handleSubmit = (event) => {
      event.preventDefault();
      fetch(`/api?destination=${destination}&groupSize=${groupSize}&startDate=${startDate}&endDate=${endDate}`)
      .then((res) => res.json())
      .then((dt) => setData(dt.message));
    }//setData(data.message)
    return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-10 flex-wrap item-center justify-center">
      <select 
                  className="rounded-lg border border-gray-300 text-gray-900 px-9"
      value={destination} onChange={(e) => setDestination(e.target.value)}>
        {places.map((dest) => (
          <option key={dest.id} value={dest.id}>
            {dest.name}
          </option>
        ))}
      </select>
            <input
            className="rounded-lg border border-gray-300 text-gray-900 px-8"
            type="number"
            min = "1"
            max = "10"
            value={groupSize}
            onChange={(e) => setGroupSize(e.target.value)}
          />
            <input
            className="rounded-lg border border-gray-300 text-gray-900 px-6"
            type="date" 
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
            <input 
            className="rounded-lg border border-gray-300 text-gray-900 px-6"
            type="date" 
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />

        <input type="submit" className="rounded-lg border border-gray-300 text-gray-900 px-3"/>
      </form>
      <div className="bg-white flex flex-wrap items-center justify-center mt-6 gap-5">
             {!data ? "" : data.map(hotel => <Cards info={hotel}/>)}
        </div>
      </div>
    )
  }
  