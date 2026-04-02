import React, { useEffect } from 'react';
import { useBoardStore } from '../store/useBoardStore';
import { UtilityCard } from '../components/features/UtilityCard';
import { Navigation } from '../components/layout/Navigation';
import api from '../services/api';

const Dashboard = () => {
  const { utilities, setUtilities } = useBoardStore();

  useEffect(() => {
    const getData = async () => {
      const res = await api.get('/utilities');
      setUtilities(res.data);
    };
    getData();
  }, []);

  return (
    <div className="pb-20 p-4 bg-gray-50 min-h-screen">
      <h1 className="text-xl font-bold mb-6">Campus Status</h1>
      {utilities.map((u) => (
        <UtilityCard key={u.id} {...u} />
      ))}
      <Navigation />
    </div>
  );
};

export default Dashboard;