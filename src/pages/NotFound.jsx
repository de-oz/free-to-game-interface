import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <h1>Page Not Found</h1>

      <p>Return to the main page.</p>

      <Link to="/">Go to Main</Link>
    </>
  );
};

export default NotFound;
