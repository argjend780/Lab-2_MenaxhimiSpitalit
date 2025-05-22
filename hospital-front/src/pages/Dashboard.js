import React, { useEffect } from 'react';
import DashboardCard from './DashboardCard';
import Statistikat from './Statistikat';
import LineChartPacientet7Ditet from './Line';
import { useDispatch, useSelector } from 'react-redux';
import { MapPin } from 'lucide-react';

import { getQytetiCount } from '../actions/QyteteAction';
import { getSpitaliCount } from '../actions/SpitaliAction';
import { getPacinetCount } from '../actions/PacinetActions';
//import LogoutButton from '../components/LogoutButton';
//import keycloak from '../authClient';

const Dashboard = () => {
  const dispatch = useDispatch();

  const qytetiCount = useSelector((state) => state.qytetiReducerContent.count?.count);
  const spitaliCount = useSelector((state) => state.spitaliReducerContent.count?.count);
  const pacinetCount = useSelector((state) => state.pacinetReducerContent.count?.count);

  useEffect(() => {
    dispatch(getQytetiCount());
    dispatch(getSpitaliCount());
    dispatch(getPacinetCount());
  }, [dispatch]);

  //const username = keycloak.tokenParsed?.preferred_username || 'Përdorues';

  const data = [
    {
      title: 'Total Qytetet',
      value: qytetiCount,
      change: '',
      icon: <MapPin className="w-8 h-8" />,
      color: 'bg-blue-500',
    },
    {
      title: 'Total Spitalet',
      value: spitaliCount,
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
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        
      </div>

      <div className="flex flex-wrap gap-4">
        {data.map((item, index) => (
          <DashboardCard key={index} {...item} />
        ))}
      </div>

      <div className="w-full flex flex-row gap-4 mt-6">
        <div className="w-1/2">
          <Statistikat />
        </div>
        <div className="w-1/2">
          <LineChartPacientet7Ditet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
/* <span className="text-lg font-semibold">Pershendetje, {username}</span> */
/*<div className="flex gap-4 items-center">
         
          <LogoutButton />
        </div> */