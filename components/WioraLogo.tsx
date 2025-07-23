import { WioraIcon } from '@/icons/WioraIcon';

const WioraLogo = () => {
  return (
    <div aria-label='logo' className='flex gap-2 items-end justify-center'>
      <WioraIcon className='w-14 h-14' />
      <span className='text-3xl font-bold mb-1.5'>Wiora</span>
    </div>
  );
};

export default WioraLogo;
