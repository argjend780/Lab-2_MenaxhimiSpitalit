import React from 'react';

export const DashboardCard = ({ title, value, change, icon, color }) => {
  return (
    <div className={`w-64 p-6 rounded-xl text-white shadow-md ${color}`}>
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-sm mt-2">{change}</p>
    </div>
  );
};

export default DashboardCard;
