import React from 'react';

const Test = () => {
  console.log([...Array(10).keys()]); // Corrected .keys()

  return (
    <div>
      <h1>Test</h1>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <select
        id="select"
        className="border-gray-300 flex justify-center rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        {[...Array(10).keys()].map((n) => (
          <option key={n + 1} value={n + 1}>
            {n + 1}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Test;
