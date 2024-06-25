import { createContext, useContext, useEffect, useState } from 'react';
import { fetchPositions } from '../services/api';

const PositionsContext = createContext();

export const usePositions = () => useContext(PositionsContext);

export const PositionsProvider = ({ children }) => {
  const [positions, setPositions] = useState([]);
  const [pageState, setPageState] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);


  const loadPositions = async ({ page = 1, limit = 10 }) => {
    setLoading(true);
    const data = await fetchPositions({ page, limit });

    setPositions(data.positions);
    setTotalPages(data.totalPages)
    setLoading(false);
  };


  useEffect(() => {
    loadPositions({page: pageState});
  }, [pageState]);

  return (
    <PositionsContext.Provider value={{ positions, loading, refreshPositions: loadPositions, page: pageState, totalPages, setPage: setPageState }}>
      {children}
    </PositionsContext.Provider>
  );
};
