import { useEffect, useState } from 'react';

const useInitialState = API => {
  const [videos, setVideos] = useState({
    mylist: [],
    trends: [],
    originals: [],
  });

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setVideos(data))
      .catch(error => console.error(error.message));
  }, []);

  return videos;
};

export default useInitialState;
