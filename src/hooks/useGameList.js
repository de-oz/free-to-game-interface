import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

export const useGameList = (platform, tag, sortBy) => {
  const dispatch = useDispatch();

  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const options = {
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
      params: {
        ...(platform !== 'all' && { platform }),
        ...(tag !== 'all' && { category: tag }),
        'sort-by': sortBy,
      },
      headers: {
        'X-RapidAPI-Key': '452230ef4dmshb501ea1c22a48d5p13aa42jsna34240608d26',
      },
    };

    const getGames = async () => {
      try {
        const { data: response } = await axios.request(options);
        setGames(response);
      } catch (error) {
        console.error(error.message);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getGames();
  }, [platform, tag, sortBy, dispatch]);

  return { games, loading, error };
};
