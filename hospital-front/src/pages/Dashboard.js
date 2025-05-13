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

import React, { useEffect } from 'react';
import DashboardCard from './DashboardCard';
import { useActionData } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MapPin } from 'lucide-react';


import { getQytetiCount } from '../actions/QyteteAction';
import { getSpitaliCount } from '../actions/SpitaliAction';
import { getPacinetCount } from '../actions/PacinetActions';

const Dashboard = () => {
  const dispatch=useDispatch();

  const qytetiCount = useSelector((state) => state.qytetiReducerContent.count?.count);
  const spitaliCount = useSelector((state) => state.spitaliReducerContent.count?.count);
  const pacinetCount = useSelector((state) => state.pacinetReducerContent.count?.count);

  useEffect(() => {
    dispatch(getQytetiCount());
    dispatch(getSpitaliCount());
    dispatch(getPacinetCount());
  }, [dispatch]);
  console.log("Pacient Count:", pacinetCount);


  const data = [
    {
     title: 'Total Qytetet',
      value: qytetiCount,  
      change: '',  
      icon:  <MapPin className="w-8 h-8" />,  
      color: 'bg-blue-500',  
    },
    {
      title: 'Total Spitalet',
      value:  spitaliCount,
      change: '',
      icon: '🏥',
      color: 'bg-red-500',
    },
    {
      title: 'Total Pacientët',
      value: pacinetCount,
      change: '',
      icon: '🧑',
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
