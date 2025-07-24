import React, { useState } from 'react';
import Feature from '@components/Feature';
import Footer from '@components/Footer';
import Recommendations from '@components/Recommendations';
import logo from '@images/logo.png';

const App = () => {
  const [interests, setInterests] = useState('');
  const [location, setLocation] = useState('');

  const handleInterestChange = (e) => {
    setInterests(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div className='flex min-h-screen flex-col justify-center bg-gray-100 py-6 sm:py-12'>
      <div className='relative py-3 sm:mx-auto sm:max-w-xl'>
        <div className='to-light-blue-500 absolute inset-0 -skew-y-6 transform bg-gradient-to-r from-cyan-400 shadow-lg sm:-rotate-6 sm:skew-y-0 sm:rounded-3xl' />
        <div className='relative bg-white px-4 py-10 shadow-lg sm:rounded-3xl sm:p-20'>
          <div className='mx-auto max-w-md'>
            <div>
              <a href='https://digitalinspiration.com/'>
                <img src={logo} className='h-7 sm:h-8' alt='Logo' />
              </a>
            </div>
            <div className='divide-y divide-gray-200'>
              <div className='space-y-5 py-8 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7'>
                <h1 className='text-lg font-semibold text-cyan-600'>
                  Lifestyle Coach
                </h1>
                <p>Enter your interests and location to get personalized recommendations.</p>
                <div className="space-y-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Interests</label>
                    <input
                      type="text"
                      value={interests}
                      onChange={handleInterestChange}
                      placeholder="e.g., hiking, yoga, meditation"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Location (optional)</label>
                    <input
                      type="text"
                      value={location}
                      onChange={handleLocationChange}
                      placeholder="e.g., New York, London"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <Recommendations interests={interests} location={location} />
              </div>
              <p className='text-sm font-medium text-cyan-500'>
                Built with Tailwind CSS 4 and React 19.
              </p>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
