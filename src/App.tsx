import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.scss';
import ConfigurationManager from './config';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthPage from './pages/AuthPage';

function App() {
  const [isInitialized, setIsInitialazed] = useState(false);
  const [error, setError] = useState('');


  useEffect(() => {
    if (!isInitialized) {
      ConfigurationManager.GetInstance()
        .fetch()
        .then(() => setIsInitialazed(true))
        .catch(() => setError("Ошибка загрузки конфигурации"))
    }
  }, [isInitialized])

  return !isInitialized || error ? (
    <div>
      Спиннер загрузки
    </div>
  ) : (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage/>} />
        <Route path="auth" element={<AuthPage/>} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
