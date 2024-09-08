import React from 'react';
import { Link } from 'react-router-dom';

const SalePage = () => {
  return (
    <div className="container mx-auto px-4">
   

      {/* Categories Section */}
<div className="mb-12">
  <h2 className="text-3xl font-semibold mb-6">Categories</h2>
  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {/* Electronics */}
    <li className="bg-blue-100 p-4 rounded-md text-center shadow-md hover:bg-blue-200">
      <Link to="/category/Electronics" className="text-blue-600 font-semibold hover:text-blue-800">
        Electronics
      </Link>
    </li>

    {/* Clothing */}
    <li className="bg-green-100 p-4 rounded-md text-center shadow-md hover:bg-green-200">
      <Link to="/category/Clothing" className="text-green-600 font-semibold hover:text-green-800">
        Clothing
      </Link>
    </li>

    {/* Home Appliances */}
    <li className="bg-yellow-100 p-4 rounded-md text-center shadow-md hover:bg-yellow-200">
      <Link to="/category/Home Appliances" className="text-yellow-600 font-semibold hover:text-yellow-800">
        Home Appliances
      </Link>
    </li>
  </ul>
</div>

</div>


    


  );
};

export default SalePage;
