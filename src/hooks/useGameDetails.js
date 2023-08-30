import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveGame, clearGame } from '../app/gameSlice';
import axios from 'axios';

export const useGameDetails = (gameId) => {
  const dispatch = useDispatch();
  const gameEntries = useSelector((state) => state.gameEntries);

  const [game, setGame] = useState(gameEntries.find((game) => game.id == gameId));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const requestData = async (id) => {
      const options = {
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
        params: { id },
        headers: {
          'X-RapidAPI-Key': '452230ef4dmshb501ea1c22a48d5p13aa42jsna34240608d26',
        },
      };

      try {
        const { data: game } = await axios.request(options);
        setGame(game);

        dispatch(saveGame(game));
        setTimeout(() => {
          dispatch(clearGame(gameId));
        }, 5 * 60 * 1000);
      } catch (error) {
        console.error(error.message);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (!game) {
      requestData(gameId);
    } else {
      setLoading(false);
    }
  }, [game, gameId, dispatch]);

  return { game, loading, error };
};
