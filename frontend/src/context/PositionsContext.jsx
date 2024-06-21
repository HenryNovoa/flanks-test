import { createContext, useContext, useEffect, useState } from 'react';
import { fetchPositions } from '../services/api';

const PositionsContext = createContext();

export const usePositions = () => useContext(PositionsContext);

export const PositionsProvider = ({ children }) => {
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);


  const loadPositions = async () => {
    setLoading(true);
    const data = await fetchPositions();
    setPositions(data);
    setLoading(false);
  };


  useEffect(() => {
    loadPositions();
  }, []);

  return (
    <PositionsContext.Provider value={{ positions, loading, refreshPositions: loadPositions }}>
      {children}
    </PositionsContext.Provider>
  );
};
