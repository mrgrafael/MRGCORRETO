import React from 'react';
import Sidebar from '../components/Sidebar';

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-4 flex-1">
        <h2 className="text-2xl mb-4">Dashboard</h2>
        {/* Conteúdo do dashboard */}
      </div>
    </div>
  );
}
