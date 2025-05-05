import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [user, setUser] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (user) navigate('/dashboard');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl mb-4">MRG IA PLUS Login</h1>
      <input
        type="text"
        placeholder="Usuário"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        className="border p-2 mb-4"
      />
      <button
        onClick={handleLogin}
        className="bg-teal-600 text-white px-4 py-2 rounded"
      >
        Entrar
      </button>
    </div>
  );
}
