import axios from 'axios';

const FINNHUB_API_KEY = 'ctpreu1r01qqsrsbg9c0ctpreu1r01qqsrsbg9cg';
const BASE_URL = 'https://finnhub.io/api/v1';

export const getMarketNews = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/news?category=general`, {
      params: {
        token: FINNHUB_API_KEY
      }
    });

    // Validate and sanitize the response data
    if (!Array.isArray(response.data)) {
      throw new Error('Invalid response format');
    }

    // Map and sanitize the data to ensure we only have the properties we need
    return response.data.map(article => ({
      id: article.id,
      datetime: article.datetime,
      headline: article.headline || '',
      summary: article.summary || '',
      url: article.url || '',
      image: article.image || null
    }));
  } catch (error) {
    if (error.response?.status === 401) {
      throw new Error('Invalid API key. Please check your Finnhub API key.');
    }
    if (error.response?.status === 429) {
      throw new Error('API rate limit exceeded. Please try again later.');
    }
    throw new Error(error.message || 'Failed to fetch market news');
  }
};