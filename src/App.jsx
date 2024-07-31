import { Toaster } from 'react-hot-toast';
import { lazy, useEffect } from 'react';
import { fetchContacts } from './redux/operations';
import { useDispatch } from 'react-redux';
import { Route, Router, Routes } from 'react-router-dom';

const MainPage = lazy(() => import('pages/MainPage.jsx'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <Toaster />
    </>
  );
}
