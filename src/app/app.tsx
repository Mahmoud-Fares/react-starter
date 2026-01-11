import { RouterProvider } from 'react-router-dom';

import { Toaster } from '@/shared/components/ui/sonner';

import { router } from '@/app/routers';

export default function App() {
   return (
      <>
         <RouterProvider router={router} />

         <Toaster richColors />
      </>
   );
}
