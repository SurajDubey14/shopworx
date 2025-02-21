import React from "react";

const AddRecord = () => {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold bg-black text-white py-1 pl-2 mb-4">Add Record</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Machines</label>
          <select className="w-full border rounded-md p-2">
            <option>01-200T</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Tool Name</label>
          <select className="w-full border rounded-md p-2">
            <option>Back Plate DC 1 OF 3</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Plan Qty</label>
          <input
            type="number"
            className="w-full border rounded-md p-2"
            defaultValue="12000"
          />
        </div>

        <div className="mb-4 flex items-center">
          <input type="checkbox" className="mr-2" id="trial" />
          <label htmlFor="trial" className="text-gray-700">
            Trial
          </label>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Site Name</label>
          <select className="w-full border rounded-md p-2">
            <option>Noida</option>
          </select>
        </div>

        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            SUBMIT
          </button>
          <button
            type="button"
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
          >
            CANCEL
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecord;
