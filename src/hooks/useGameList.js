import { useState, useEffect } from 'react';
import axios from 'axios';

export const useGameList = (platform, tag, sortBy) => {
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
        const { data: games } = await axios.request(options);
        setGames(games);
      } catch (error) {
        console.error(error.message);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getGames();
  }, [platform, tag, sortBy]);

  return { games, loading, error };
};
