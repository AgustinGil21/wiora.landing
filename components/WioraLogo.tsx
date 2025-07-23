import { WioraIcon } from '@/icons/WioraIcon';

const WioraLogo = () => {
  return (
    <div aria-label='logo' className='flex gap-2 items-center justify-center'>
      <WioraIcon className='w-14 h-14' />
      <span className='text-2xl lg:text-3xl font-bold'>Wiora</span>
    </div>
  );
};

export default WioraLogo;
