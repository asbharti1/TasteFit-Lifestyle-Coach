import React, { useState, useEffect } from 'react';
import { getRecommendations, ENTITY_TYPES } from '../services/qlooApi';

const Recommendations = ({ interests, location, entityType = 'place' }) => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        setLoading(true);
        const data = await getRecommendations(entityType, interests, location);
        setRecommendations(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch recommendations. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    if (interests) {
      fetchRecommendations();
    }
  }, [interests, location, entityType]);

  if (loading) {
    return <div className="text-center py-4">Loading recommendations...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center py-4">{error}</div>;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Personalized Recommendations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recommendations.map((recommendation) => (
          <div
            key={recommendation.id}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
          >
            <h3 className="font-semibold text-lg mb-2">{recommendation.name}</h3>
            <p className="text-gray-600 mb-2">{recommendation.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">
                {recommendation.type}
              </span>
              <span className="text-sm text-blue-500">
                {recommendation.score?.toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
