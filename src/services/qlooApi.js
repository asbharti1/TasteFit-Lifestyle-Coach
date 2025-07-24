import axios from 'axios';

const API_KEY = 'qzuLeMriOgE8HuaHslZkpSs5fTu-VU4-iukY6dD6J8k';
const BASE_URL = 'https://hackathon.api.qloo.com/v2';

const qlooApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-Api-Key': API_KEY,
  },
});

export const getRecommendations = async (entityType, interests, location = null, limit = 3) => {
  try {
    const params = {
      'filter.type': `urn:entity:${entityType}`,
      'signal.interests.entities': interests,
      take: limit,
    };

    if (location) {
      params['filter.location.query'] = location;
    }

    const response = await qlooApi.get('/insights', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    throw error;
  }
};

// Example entity types: place, movie, brand, person, tv_show, podcast, book, destination, artist
export const ENTITY_TYPES = [
  'place',
  'movie',
  'brand',
  'person',
  'tv_show',
  'podcast',
  'book',
  'destination',
  'artist',
];

export default qlooApi;
