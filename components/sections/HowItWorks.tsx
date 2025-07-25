'use client';
import { motion } from 'framer-motion';
import { Upload, Settings, BookOpen } from 'lucide-react';
import { useTranslations } from 'next-intl';

const HowItWorks = () => {
  const t = useTranslations('HowItWorks');

  const steps = [
    {
      step: '01',
      title: t('steps.first.title'),
      description: t('steps.first.description'),
      icon: Upload,
    },
    {
      step: '02',
      title: t('steps.second.title'),
      description: t('steps.second.description'),
      icon: Settings,
    },
    {
      step: '03',
      title: t('steps.third.title'),
      description: t('steps.third.description'),
      icon: BookOpen,
    },
  ];

  return (
    <section
      id='how-it-works'
      className='py-24 px-4 bg-gradient-to-r from-purple-900/50 to-violet-900/50'
    >
      <div className='max-w-6xl mx-auto'>
        <motion.div
          className='text-center mb-20'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-8'>
            {t('title-part-1')}
            <span className='text-purple-300'>{t('title-part-2')}</span>
          </h2>
          <p className='text-xl text-purple-100 max-w-3xl mx-auto'>
            {t('description')}
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className='text-center'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className='relative mb-12'>
                <motion.div
                  className='w-48 h-48 mx-auto bg-gradient-to-br from-purple-400/20 to-violet-500/20 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-purple-300/30'
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <step.icon className='w-24 h-24 text-purple-300' />
                </motion.div>
                <div className='absolute -top-4 -right-4 md:right-12 lg:right-20 w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg'>
                  {step.step}
                </div>
              </div>
              <h3 className='text-2xl font-bold text-white mb-6'>
                {step.title}
              </h3>
              <p className='text-purple-200 leading-relaxed text-lg'>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className='mt-20 text-center'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-10 border border-purple-300/20 max-w-4xl mx-auto'>
            <h3 className='text-2xl font-bold text-white mb-6'>
              {t('result.title')}
            </h3>
            <p className='text-purple-200 leading-relaxed text-lg'>
              {t('result.description')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
