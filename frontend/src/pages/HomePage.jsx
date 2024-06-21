import FileUpload from '../components/FileUpload';
import DistributionByCurrencyPieChart from '../components/charts/DistributionByCurrencyPieChart';
import DistributionByEntityPieChart from '../components/charts/DistributionByEntityPieChart';
import DistributionByInvestmentTypePieChart from '../components/charts/DistributionByInvestmentTypePieChart';
import PositionTable from '../components/charts/PositionTable';
import { PositionsProvider } from '../context/PositionsContext';

const HomePage = () => {
  return (
    <PositionsProvider>
    <div>
      <h1>Customer Portfolio</h1>
      <FileUpload />
     <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: '20px' }}>
          <DistributionByCurrencyPieChart />
          <DistributionByInvestmentTypePieChart />
          <DistributionByEntityPieChart />
      </div>
      <PositionTable />
    </div>
    </PositionsProvider>
  );
};

export default HomePage;

