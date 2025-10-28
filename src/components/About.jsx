import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">About TasteFit</h1>
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-4">
            TasteFit is your personal lifestyle coach that helps you discover new experiences based on your interests. 
            Whether you're looking for places to visit, movies to watch, books to read, or artists to explore, 
            TasteFit provides personalized recommendations just for you.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">How It Works</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Enter your interests in the search box</li>
            <li>Optionally, add your location for local recommendations</li>
            <li>Choose the type of recommendations you're looking for</li>
            <li>Discover personalized suggestions just for you</li>
          </ul>
          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Our Mission</h2>
          <p className="text-gray-600">
            Our mission is to help people discover new experiences that match their unique tastes and preferences. 
            We believe that everyone should have access to personalized recommendations that help them explore 
            the world around them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
