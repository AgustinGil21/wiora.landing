import { WioraIcon } from '@/icons/WioraIcon';

interface Props {
  className?: string
  textClassName?: string
  iconClassName?:string
}

const WioraLogo = ({className, textClassName, iconClassName}:Props) => {
  return (
    <div aria-label='logo' className={`flex gap-2 items-center justify-center ${className}`}>
      <WioraIcon className={`w-14 h-14 ${iconClassName}`} />
      <span className={`text-2xl lg:text-3xl font-bold ${textClassName}`}>Wiora</span>
    </div>
  );
};

export default WioraLogo;
