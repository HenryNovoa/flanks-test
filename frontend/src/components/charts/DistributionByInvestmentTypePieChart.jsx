import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';
import { usePositions } from '../../context/PositionsContext';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

const DistributionByInvestmentTypePieChart = () => {
  const { positions } = usePositions();

  const typeDistribution = positions.reduce((acc, position) => {
    acc[position.type] = (acc[position.type] || 0) + position.balance;
    return acc;
  }, {});

  const data = Object.keys(typeDistribution).map(type => ({
    name: type,
    value: typeDistribution[type],
  }));

  return (
    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
    <h3>Distribution by type of investment</h3>
    <PieChart width={250} height={250}>
      <Pie
        data={data}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
    </div>
  );
  
};

export default DistributionByInvestmentTypePieChart;
