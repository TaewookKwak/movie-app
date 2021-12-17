import { useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year23.')
  }, [])
  return (
    <div>
      {loading? <h1>Loading...</h1> : null}
    </div>
  );
}

export default App;
