import { useState } from 'react';
import { usePositions } from '../../context/PositionsContext';

const PositionTable = () => {
  const { positions, page, totalPages, setPage } = usePositions();
  const [expandedRows, setExpandedRows] = useState([]);

  const handleRowClick = (positionId) => {
    const isRowCurrentlyExpanded = expandedRows.includes(positionId);
    const newExpandedRows = isRowCurrentlyExpanded 
      ? expandedRows.filter(id => id !== positionId) 
      : [...expandedRows, positionId];

    setExpandedRows(newExpandedRows);
  };


  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };


  const renderItem = (position) => {
    const isExpanded = expandedRows.includes(position.id);

    return (
    
      <div key={position.id}>
        <div 
          onClick={() => handleRowClick(position.id)}
          style={{ cursor: 'pointer', padding: '10px', border: '1px solid #ccc', marginTop: '5px' }}
        >
          <strong>{position.name}</strong>
        </div>
        {isExpanded && (
          <div style={{ padding: '10px', border: '1px solid #ccc', marginBottom: '5px' }}>
            <table>
              <tbody>
                <tr>
                  <td>Accrued Interest</td>
                  <td>{position.accrued_interest}</td>
                </tr>
                <tr>
                  <td>Number of Shares</td>
                  <td>{position.number_of_shares}</td>
                </tr>
                <tr>
                  <td>Balance</td>
                  <td>{position.balance}</td>
                </tr>
                <tr>
                  <td>Capital Gain</td>
                  <td>{position.capital_gain}</td>
                </tr>
                <tr>
                  <td>Cost</td>
                  <td>{position.cost}</td>
                </tr>
                <tr>
                  <td>Currency</td>
                  <td>{position.currency}</td>
                </tr>
                <tr>
                  <td>Entity</td>
                  <td>{position.Portfolio?.Entity?.name}</td>
                </tr>
                <tr>
                  <td>Expiration Date</td>
                  <td>{position.expiration_date}</td>
                </tr>
                <tr>
                  <td>Initial Date</td>
                  <td>{position.initial_date}</td>
                </tr>
                <tr>
                  <td>Interest Rate</td>
                  <td>{position.interest_rate}</td>
                </tr>
                <tr>
                  <td>Is Nominal</td>
                  <td>{position.is_nominal.toString()}</td>
                </tr>
                <tr>
                  <td>ISIN</td>
                  <td>{position.isin}</td>
                </tr>
                <tr>
                  <td>Market</td>
                  <td>{position.market}</td>
                </tr>
                <tr>
                  <td>Portfolio</td>
                  <td>{position.Portfolio?.name}</td>
                </tr>
                <tr>
                  <td>Type</td>
                  <td>{position.type}</td>
                </tr>
                <tr>
                  <td>Valuation Date</td>
                  <td>{position.valuation_date}</td>
                </tr>
                <tr>
                  <td>Rate to Euro</td>
                  <td>{position.rate_to_euro}</td>
                </tr>
              </tbody>
            </table>

        <div>
       
      </div>
      
          </div>

   
        )}
      </div>

       
        
    );
  };

  return (
    <div>
      {positions.map(position => renderItem(position))}
             <button onClick={handlePreviousPage} disabled={page === 1}>
          Previous
        </button>
        <span>{`Page ${page} of ${totalPages}`}</span>
        <button onClick={handleNextPage} disabled={page === totalPages}>
          Next
        </button>
    </div>
  );
};

export default PositionTable;
