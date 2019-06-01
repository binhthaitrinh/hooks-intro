import { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = resource => {
  const [resources, setResources] = useState([]);

  //with async
  useEffect(() => {
    (async resource => {
      const response = await axios.get(
        `https://jsonPlaceholder.typicode.com/${resource}`
      );
      setResources(response.data);
    })(resource);
  }, [resource]);
  return resources;
};

export default useResources;
