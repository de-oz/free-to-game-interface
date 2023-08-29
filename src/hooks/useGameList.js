import { useState, useEffect } from 'react';
import axios from 'axios';

export const useGameList = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const options = {
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
      headers: {
        'X-RapidAPI-Key': '452230ef4dmshb501ea1c22a48d5p13aa42jsna34240608d26',
      },
    };

    const getGames = async (params) => {
      try {
        const { data: games } = await axios.request(params);
        setGames(games);
      } catch (error) {
        console.error(error.message);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getGames(options);
  }, []);

  return { games, loading, error };
};
