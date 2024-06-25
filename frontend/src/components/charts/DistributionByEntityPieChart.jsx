import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';
import { useEntityDistribution } from '../../hooks/useEntityDistribution';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

const DistributionByEntityPieChart = () => {
   const { entityDistribution: data, loading, error } = useEntityDistribution()
   
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading data</p>;
  return (
    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
     <h3>Distribution by financial entity</h3>
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

export default DistributionByEntityPieChart;
