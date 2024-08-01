import { lazy, useEffect } from 'react';
import { fetchContacts } from './redux/operations';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

const MainPage = lazy(() => import('pages/MainPage.jsx'));
const ContactItemPage = lazy(() => import('pages/ContactItemPage.jsx'));
const AppLayout = lazy(() => import('./components/app-layout'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<MainPage />} />
          <Route path="/:id" element={<ContactItemPage />} />
        </Route>
      </Routes>
    </>
  );
}
