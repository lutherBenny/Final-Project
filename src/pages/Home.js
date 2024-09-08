import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions'; // Import the addToCart action

// Sample products array
const sampleProducts = [
  {
    _id: '66dc3e4501b99e34f0c4e49b',
    name: 'Elegance Redefined', 
    price: 1999,
    description: 'Elegance Redefined: The Couture Suit Collection showcases the pinnacle of luxury fashion. Each suit is meticulously crafted to ensure a perfect fit and unparalleled quality. The collection blends classic designs with modern aesthetics, appealing to the sophisticated individual. With exquisite fabrics and tailored details, these suits exude confidence and style. Experience a new standard of elegance with every piece in this collection.',
    image: 'images/sample.product1.jpg'
  },
  {
    _id: '66dc3c271b73d2d5cbc4e49c',
    name: 'Classic Romance',
    price: 1500,
    description: 'This is a sample product 2',
    image: 'images/sample.product2.jpg'
  },
  {
    _id: '66dc3f7b01b99e34f0c4e49d',
    name: 'Timeless Sophistication',
    price: 2000,
    description: 'This is a sample product 3',
    image: 'images/sample.product3.jpg'
  },
  {
    _id: '66dc3f7b01b99e34f0c4e49e',
    name: 'Sleek and Stylish',
    price: 1250,
    description: 'This is a sample product 4',
    image: 'images/sample.product4.jpg'
  }
];

const Home = () => {
  const dispatch = useDispatch(); // Get the dispatch function
  const [products, setProducts] = useState([]);
  const [reviews, setReviews] = useState([  // State to hold reviews
    { name: 'Jane Doe', text: 'Best online shopping experience!' },
    { name: 'John Smith', text: 'Great quality products at affordable prices.' },
  ]);
  const [review, setReview] = useState(''); // State for review input
  const [name, setName] = useState(''); // State for name input




  // Replace the API call in the useEffect hook with sample data
  useEffect(() => {
    setProducts(sampleProducts);
  }, []);

  // Function to add a product to the cart
  const handleAddToCart = (product) => {
    console.log('Added to cart:', product);
    dispatch(addToCart(product)); // Dispatch the addToCart action
  };

    // Handle form submission for reviews
    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent page refresh
      if (review && name) {
        setReviews([...reviews, { name, text: review }]); // Add new review
        setReview(''); // Clear review input
        setName(''); // Clear name input
      }
    };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-2">Welcome to Our Store</h1>
      <h1 className="text-6xl font-bold text-center my-2 text-yellow-600 font-pacifico">Style Hub</h1>





  
      {/* Promotional Banner */}
      <div className="bg-yellow-300 text-center py-6 mb-8 rounded-md shadow-md flex items-center justify-between">
        {/* Left Image */}
        <img 
          src="/images/summer1.jpg" 
          alt="Left Banner Image" 
          className="w-1/3 h-80 rounded-md"
        />

        <div className="flex-grow text-center">
          <h2 className="text-2xl font-semibold">Summer Sale! Up to 50% Off</h2>
          <Link 
            to="/sale" 
            className="mt-4 inline-block bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition duration-300">
            Shop Now
          </Link>
        </div>

        {/* Right Image */}
        <img 
          src="/images/summer3.jpg" 
          alt="Right Banner Image" 
          className="w-1/3 h-80 rounded-md my-2"
        />
      </div>

      {/* Featured Products Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Featured Products</h2>
        <div className="product-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard 
              key={product._id} 
              product={product}  
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>

 
   {/* Categories Section */}
<div className="relative mb-12 mt-10">
  <div className="w-full sm:h-[500px] bg-cover  bg-bottom rounded-md " style={{ backgroundImage: 'url("/images/summer5.jpg")' }}>
    <div className="relative z-10 p-8 rounded-md bg-opacity-50">
      <h2 className="text-3xl font-semibold mb-10 mt-10 text-white">Categories</h2>
   
      <ul className="flex flex-col gap-4  w-40 md:w-60  "> {/* Changed to flex-col for vertical alignment */}
        {/* Electronics */}
        <li className="bg-blue-100 p-4 rounded-md shadow-md hover:bg-blue-200">
          <Link to="/category/Electronics" className="text-blue-600 font-semibold hover:text-blue-800">
            Electronics
          </Link>
        </li>

        {/* Clothing */}
        <li className="bg-green-100 p-4 rounded-md shadow-md hover:bg-green-200">
          <Link to="/category/Clothing" className="text-green-600 font-semibold hover:text-green-800">
            Clothing
          </Link>
        </li>

        {/* Home Appliances */}
        <li className="bg-yellow-100 p-4 rounded-md shadow-md hover:bg-yellow-200">
          <Link to="/category/Home Appliances" className="text-yellow-600 font-semibold hover:text-yellow-800">
            Home Appliances
          </Link>
        </li>
      </ul>
    </div>
  </div>
</div>
    

     
      {/* Customer Testimonials */}

      {/* Customer Testimonials */}
      <div className="mb-20">
        <h2 className="text-3xl font-semibold mb-6">What Our Customers Say</h2>
        {reviews.map((item, index) => (
          <p key={index} className="text-lg italic">
            "{item.text}" - {item.name}
          </p>
        ))}
        
        {/* Review Submission Form */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4">Leave a Review</h3>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="p-2 border rounded-md"
              rows="4"
              placeholder="Write your review here..."
              required
            ></textarea>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 border rounded-md"
              placeholder="Your name"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
