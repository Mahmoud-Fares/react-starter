import { Button } from '@/shared/components/ui/button';

export default function Home() {
   return (
      <div className='flex h-screen w-full flex-col items-center justify-center gap-4'>
         <h1 className='text-3xl font-bold underline'>Home Page</h1>
         <Button>Click Me</Button>
      </div>
   );
}
