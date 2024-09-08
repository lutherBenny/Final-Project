import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'; // Import useDispatch
import { addToCart } from '../redux/actions/cartActions'; // Import the addToCart action

const CategoryPage = () => {
  const dispatch = useDispatch();
  const { categoryName, subCategoryName } = useParams();

  const categories = {
    Electronics: ['Computer', 'Mobile', 'TV'],
    Clothing: ['Shirt', 'Pant', 'Short'],
    'Home Appliances': ['Refrigerator', 'WashingMachine', 'Microwave'],
  };

  const products = {
    Computer: [
      {
        _id: '66dc405401b99e34f0c4e49f',
        name: 'Dell Laptop',
        image: '/images/product1.jpg',
        price: 30000,
        description: 'High-performance Dell Laptop',
      },
      {
        _id: '66dc407901b99e34f0c4e4a0',
        name: 'Apple Laptop',
        image: '/images/product2.jpg',
        price: 45000,
        description: 'Apple laptops are sleek and powerful, ideal for creative tasks',
      },
      {
        _id: '66dc409801b99e34f0c4e4a1',
        name: 'Lenovo Laptop',
        image: '/images/product3.jpg',
        price: 25000,
        description: 'Lenovo laptops are reliable and versatile, popular for business use',
      },
    ],
    Mobile: [
      {
        _id: '66dc411d01b99e34f0c4e4a2',
        name: 'iPhone 12',
        image: '/images/product4.jpg',
        price: 40000,
        description: 'Latest Apple iPhone 12 with A14 Bionic chip',
      },
      {
        _id: '66dc413901b99e34f0c4e4a3',
        name: 'Samsung',
        image: '/images/product5.jpg',
        price: 30000,
        description: 'Samsung phones are feature-rich and innovative',
      },
      {
        _id: '66dc415501b99e34f0c4e4a4',
        name: 'Oppo',
        image: '/images/product6.jpg',
        price: 25000,
        description: 'Oppo phones offer stylish designs and great value for money.',
      },
    ],
    TV: [
      {
        _id: '66dc41e501b99e34f0c4e4a5',
        name: 'Sony',
        image: '/images/product7.jpg',
        price: 50000,
        description: 'Sony TVs offer top-tier picture quality and advanced features.',
      },
      {
        _id: '66dc420801b99e34f0c4e4a6',
        name: 'LG',
        image: '/images/product8.jpg',
        price: 45000,
        description: 'LG TVs are known for their cutting-edge OLED displays',
      },
      {
        _id: '66dc422301b99e34f0c4e4a7',
        name: 'Samsung',
        image: '/images/product9.jpg',
        price: 40000,
        description: 'Samsung TVs excel in vibrant colors and smart technology.',
      },
    ],
    Shirt: [
      {
        _id: '66dc427001b99e34f0c4e4a8',
        name: 'Ralph Lauren',
        image: '/images/product10.jpg',
        price: 2500,
        description: 'Known for its classic, preppy style with high-quality fabrics and timeless designs.',
      },
      {
        _id: '66dc428d01b99e34f0c4e4a9',
        name: 'Hugo Boss',
        image: '/images/product11.jpg',
        price: 2000,
        description: 'Offers modern, sophisticated shirts with a focus on tailored fits and premium materials.',
      },
      {
        _id: '66dc42b301b99e34f0c4e4aa',
        name: 'Brooks Brothers',
        image: '/images/product12.jpg',
        price: 3500,
        description: 'Renowned for its traditional American dress shirts, combining comfort with polished style.',
      },
    ],
    Pant: [
      {
        _id: '66dc431501b99e34f0c4e4ab',
        name: 'Livis',
        image: '/images/product13.jpg',
        price: 2500,
        description: 'Iconic straight-fit jeans that blend durability with timeless style.',
      },
      {
        _id: '66dc433101b99e34f0c4e4ac',
        name: 'Dockers Alpha Khaki',
        image: '/images/product14.jpg',
        price: 3000,
        description: 'Versatile chinos that offer a modern slim fit with casual comfort.',
      },
      {
        _id: '66dc434f01b99e34f0c4e4ad',
        name: 'Bonobos Stretch Washed Chinos',
        image: '/images/product15.jpg',
        price: 2000,
        description: 'Tailored pants known for their perfect fit and stretchy fabric for all-day wear.',
      },
    ],
    Short: [
      {
        _id: '66dc43de01b99e34f0c4e4ae',
        name: 'Nike',
        image: '/images/product16.jpg',
        price: 2000,
        description: 'Nike offers athletic shorts that combine performance-focused design with comfort for active wear.',
      },
      {
        _id: '66dc440001b99e34f0c4e4af',
        name: 'Patagonia',
        image: '/images/product17.jpg',
        price: 1500,
        description: 'Patagonia is known for durable, eco-friendly shorts ideal for outdoor adventures and casual wear.',
      },
      {
        _id: '66dc442b01b99e34f0c4e4b0',
        name: 'Lululemon',
        image: '/images/product18.jpg',
        price: 1000,
        description: 'Lululemon provides high-quality, stylish shorts that are perfect for both workouts and everyday activities.',
      },
    ],
    Refrigerator: [
      {
        _id: '66dc448701b99e34f0c4e4b1',
        name: 'Whirlpool',
        image: '/images/product19.jpg',
        price: 30000,
        description: 'Whirlpool offers reliable and energy-efficient refrigerators with a focus on user-friendly features.',
      },
      {
        _id: '66dc44a101b99e34f0c4e4b2',
        name: 'Samsung',
        image: '/images/product20.jpg',
        price: 25000,
        description: 'Samsung is known for innovative designs with advanced cooling technology and smart features.',
      },
      {
        _id: '66dc44c201b99e34f0c4e4b3',
        name: 'LG',
        image: '/images/product21.jpg',
        price: 22000,
        description: 'LG provides sleek refrigerators with superior storage solutions and cutting-edge cooling systems.',
      },
    ],
    WashingMachine: [
      {
        _id: '66dc452701b99e34f0c4e4b4',
        name: 'Bosch',
        image: '/images/product22.jpg',
        price: 20000,
        description: 'Bosch is known for efficient, quiet washing machines with advanced features and high build quality.',
      },
      {
        _id: '66dc454601b99e34f0c4e4b5',
        name: 'LG',
        image: '/images/product23.jpg',
        price: 18000,
        description: 'LG offers innovative washing machines with smart technology and powerful performance.',
      },
      {
        _id: '66dc456c01b99e34f0c4e4b6',
        name: 'Whirlpool',
        image: '/images/product24.jpg',
        price: 30000,
        description: 'Whirlpool provides reliable and user-friendly washing machines with a focus on energy efficiency and durability.',
      },
    ],
    Microwave: [
      {
        _id: '66dc45ca01b99e34f0c4e4b7',
        name: 'Panasonic',
        image: '/images/product25.jpg',
        price: 22000,
        description: 'Panasonic offers powerful microwaves with advanced inverter technology for even cooking.',
      },
      {
        _id: '66dc45ea01b99e34f0c4e4b8',
        name: 'Samsung',
        image: '/images/product26.jpg',
        price: 25000,
        description: 'Samsung is known for stylish designs and multifunctional microwaves with smart features.',
      },
      {
        _id: '66dc460701b99e34f0c4e4b9',
        name: 'Sharp',
        image: '/images/product27.jpg',
        price: 20000,
        description: 'Sharp provides reliable microwaves with precise cooking controls and user-friendly designs.',
      },
    ],
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const formatPrice = (price) => {
    return `Rs. ${price.toLocaleString()}`; // Format price with commas
  };
  


  if (subCategoryName && products[subCategoryName]) {
    return (
      <div className="container mx-auto px-4 py-6 text-center">
        <h1 className="text-4xl font-bold mb-4">{subCategoryName}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        {products[subCategoryName].map((product) => (
  <div key={product._id} className="border p-4 rounded-md">
    <Link to={`/category/${categoryName}/product/${product._id}`} >
      <img src={product.image} alt={product.name} className="w-full h-80 object-cover rounded-md" />
      <h2 className="text-xl font-semibold mt-2 text-green-600 hover:text-green-800 ">{product.name}</h2>
      <p className="text-gray-600">{formatPrice(product.price)}</p>
    </Link>

    <button
                onClick={() => handleAddToCart(product)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md "
              >
                Add to Cart
              </button>
  </div>

))}
</div>
</div>
);
}




          
           
        

  return (
    <div className="container mx-auto px-4 py-6 text-center">
      <h1 className="text-4xl font-bold mb-4">{categoryName}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        {categories[categoryName].map((subCat) => (

<Link to={`/category/${categoryName}/${subCat}`} key={subCat}>

          
            <div className="border p-4 rounded-md">
              <h2 className="bg-gray-200 p-4   text-xl font-semibold text-blue-600 hover:text-blue-800">{subCat}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;