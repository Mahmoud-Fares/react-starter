import { RouterProvider } from 'react-router-dom';

import { router } from '@/app/routers';

export default function App() {
   return (
      <>
         <RouterProvider router={router} />
      </>
   );
}
