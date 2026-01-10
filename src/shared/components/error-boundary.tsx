import { useNavigate, useRouteError } from 'react-router-dom';

export default function ErrorBoundary() {
   const error = useRouteError();
   const navigate = useNavigate();

   return (
      <div className='flex min-h-screen items-center justify-center p-4'>
         <div className='space-y-2 text-center'>
            <h1 className='text-destructive text-2xl font-bold'>Oops!</h1>
            <p className='text-muted-foreground text-lg font-semibold'>
               Something went wrong :(
            </p>
            <p className='text-muted-foreground text-sm'>
               {error instanceof Error
                  ? error.message
                  : 'Unknown error occurred'}
            </p>

            <div className='flex justify-center gap-4'>
               <button
                  onClick={() => window.location.assign(window.location.origin)}
               >
                  Refresh
               </button>

               <button
                  onClick={() =>
                     void navigate('/', { replace: true, viewTransition: true })
                  }
               >
                  Go Home
               </button>
            </div>
         </div>
      </div>
   );
}
