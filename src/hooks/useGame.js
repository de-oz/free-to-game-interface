import { useState, useEffect } from 'react';
import axios from 'axios';

export const useGame = (id) => {
  const [game, setGame] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const options = {
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
      params: { id },
      headers: {
        'X-RapidAPI-Key': '452230ef4dmshb501ea1c22a48d5p13aa42jsna34240608d26',
      },
    };

    const getGame = async (params) => {
      try {
        const { data: game } = await axios.request(params);
        setGame(game);
      } catch (error) {
        console.error(error.message);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getGame(options);
  }, [id]);

  return { game, loading, error };
};
