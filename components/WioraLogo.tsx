import { WioraIcon } from '@/icons/WioraIcon';
import { handleNavigationClick } from '@/lib/handlenavigationClick';
import { motion } from "framer-motion"

interface Props {
  className?: string
  textClassName?: string
  iconClassName?:string
}

const WioraLogo = ({className, textClassName, iconClassName}:Props) => {
  return (
    <motion.button onClick={() => handleNavigationClick('#hero')}>
    <div aria-label='logo' className={`flex gap-2 items-center justify-center ${className}`}>
      <WioraIcon className={`w-14 h-14 ${iconClassName}`} />
      <span className={`text-2xl lg:text-3xl font-bold ${textClassName}`}>Wiora</span>
    </div>
    </motion.button>

  );
};

export default WioraLogo;
