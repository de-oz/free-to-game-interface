const GameError = ({ error }) => {
  return (
    <>
      <h1>{error.message}</h1>
      <p>Unexpected error occurred. Try again later.</p>
    </>
  );
};

export default GameError;
