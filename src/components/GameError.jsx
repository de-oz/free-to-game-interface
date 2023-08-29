const GameError = ({ error }) => {
  return (
    <>
      <h1>{error.message}</h1>
      <p>{error.response.statusText}</p>
    </>
  );
};

export default GameError;
