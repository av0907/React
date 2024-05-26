import React from 'react';

const ResolutionVersion = ({ resolutionVersionValue,onChange }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center">
      <label className="md:w-1/5">Resolution Version:</label>
      <input
        onChange={onChange}
        defaultValue={resolutionVersionValue || ""}
        type="text"
        className="form-input mt-1 md:mt-0 md:ml-4 flex-grow rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      />
    </div>
  );
};

export default ResolutionVersion;
