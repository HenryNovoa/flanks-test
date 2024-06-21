import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';
import { usePositions } from '../../context/PositionsContext';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

const DistributionByCurrencyPieChart = () => {
  const { positions } = usePositions();

  const currencyDistribution = positions.reduce((acc, position) => {
    acc[position.currency] = (acc[position.currency] || 0) + position.balance;
    return acc;
  }, {});

  console.log(currencyDistribution)
  const data = Object.keys(currencyDistribution).map(currency => ({
    name: currency,
    value: currencyDistribution[currency],
  }));

  return (
    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
     <h3>Distribution by currency</h3>
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

export default DistributionByCurrencyPieChart;
