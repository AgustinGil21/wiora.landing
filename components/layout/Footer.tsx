'use client';
import { useTranslations } from 'next-intl';
import { useToast } from '@/hooks/use-toast';
import WioraLogo from '../WioraLogo';
import { SocialMediaBtnsGroup } from '../SocialMediaBtnsGroup';

const Footer = () => {
  const t = useTranslations('Footer');
  const { toast } = useToast();

  const year = new Date().getFullYear();

  const handleFeatureClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toast({
      title: '🚧 Esta función aún no está implementada',
      description:
        '¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀',
      duration: 3000,
    });
  };

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: 'features', href: '#features' },
    { name: 'how-it-works', href: '#how-it-works' },
    { name: 'testimonials', href: '#testimonials' },
    { name: 'faq', href: '#faq' },
  ];

  return (
    <footer className='py-12 px-4 bg-purple-900/50 border-t border-purple-300/20'>
      <div className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div className='col-span-1 md:col-span-2'>
            <div className='flex items-center mb-4'>
              <span className='text-2xl font-bold text-white'>
                <WioraLogo />
              </span>
            </div>
            <p className='text-purple-200 mb-4 max-w-md'>
              {t('quote-block.quote')}
            </p>
            <span className='text-purple-300'>{t('quote-block.author')}</span>
          </div>

          <div>
            <span className='text-white font-semibold mb-4 block'>
              {t('sections.product.title')}
            </span>
            <ul className='flex flex-col  space-y-2'>
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className='text-purple-200 hover:text-white transition-colors duration-300 font-medium'
                  >
                    {t(`sections.product.${item.name}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className='text-white font-semibold mb-4 block'>
              {' '}
              {t('sections.support.title')}
            </span>
            <ul className='flex flex-col space-y-2'>
              <li>
                <a
                  href='https://mail.google.com/mail/?view=cm&fs=1&to=wiora.app@gmail.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-purple-200 hover:text-white transition-colors font-medium'
                >
                  {t('sections.support.contact')}
                </a>
              </li>
              <li>
                <a
                  href='#faq'
                  onClick={(e) => handleLinkClick(e, '#faq')}
                  className='text-purple-200 hover:text-white transition-colors font-medium'
                >
                  {t('sections.support.faq')}
                </a>
              </li>
              <li>
                <a
                  className='text-purple-200 hover:text-white transition-colors font-medium'
                  href='https://docs.google.com/forms/d/e/1FAIpQLSc13Mka5OWnv3SRle2meX1xVmOQc8xCq0FzvEzAxpcui7hbLw/viewform'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {t('sections.support.validate-wiora')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t border-purple-300/20 mt-8 pt-10 text-center flex flex-col justify-between items-center gap-4'>
          <SocialMediaBtnsGroup />
          <p className='text-purple-200'>
            © {year} {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
