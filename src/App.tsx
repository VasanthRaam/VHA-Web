import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from './components/layout/RootLayout';
import { Home } from './pages/Home';

// Lazy loaded pages for performance
const Courses = React.lazy(() => import('./pages/Courses').then(m => ({ default: m.Courses })));
const About = React.lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Contact = React.lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));

// Loading fallback
const PageLoader = () => (
  <div className="flex min-h-screen items-center justify-center bg-background">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary-500 border-t-transparent"></div>
  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { 
        path: 'courses', 
        element: <Suspense fallback={<PageLoader />}><Courses /></Suspense> 
      },
      { 
        path: 'about', 
        element: <Suspense fallback={<PageLoader />}><About /></Suspense> 
      },
      { 
        path: 'contact', 
        element: <Suspense fallback={<PageLoader />}><Contact /></Suspense> 
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
