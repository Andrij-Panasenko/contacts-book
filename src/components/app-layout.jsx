import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

export default function AppLayout() {
  return (
    <div className="container mx-auto p-9">
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster />
    </div>
  );
}
