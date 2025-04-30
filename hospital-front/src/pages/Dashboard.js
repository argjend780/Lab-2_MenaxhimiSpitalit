/*import React from 'react';
import DashboardCards from '../pages/DashboardCard';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold p-6">Dashboard</h1>
      <DashboardCards />
    </div>
  );
};

export default Dashboard;
*/

import React from 'react';
import DashboardCard from './DashboardCard';

const Dashboard = () => {
  const data = [
    {
      title: 'Total Profit',
      value: '$1,783',
      change: '+11% From Previous Month',
      icon: '🎥',
      color: 'bg-red-500',
    },
    {
      title: 'Total Orders',
      value: '15,830',
      change: '+12% From Previous Month',
      icon: '📦',
      color: 'bg-blue-500',
    },
    {
      title: 'Average Price',
      value: '$6,780',
      change: '+25% From Previous Month',
      icon: '💵',
      color: 'bg-green-500',
    },
    {
      title: 'Product Sold',
      value: '6,784',
      change: '+52% From Previous Month',
      icon: '🏷️',
      color: 'bg-orange-400',
    },
  ];

  return (
    <div className="flex flex-wrap gap-4 p-6">
      {data.map((item, index) => (
        <DashboardCard key={index} {...item} />
      ))}
    </div>
  );
};

export default Dashboard;
