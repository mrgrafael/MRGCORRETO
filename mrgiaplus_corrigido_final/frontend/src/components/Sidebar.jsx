import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <nav className="w-64 h-screen bg-teal-700 text-white p-4">
      <h3 className="text-xl font-bold mb-4">MRG IA PLUS</h3>
      <ul>
        <li className="mb-2"><Link to="/">Login</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </nav>
  );
}
