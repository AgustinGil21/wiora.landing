'use client';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { BookOpen, Brain, Target, Users, Clock, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';

const Features = () => {
  const t = useTranslations('Features');
  const { toast } = useToast();

  const featuresData = [
    {
      icon: BookOpen,
      title: t('content.title'),
      description: t('content.description'),
      color: 'from-purple-500 to-violet-600',
    },
    {
      icon: Brain,
      title: t('adaptability.title'),
      description: t('adaptability.description'),
      color: 'from-violet-500 to-indigo-600',
    },
    {
      icon: Target,
      title: t('goals.title'),
      description: t('goals.description'),
      color: 'from-indigo-500 to-purple-600',
    },
    {
      icon: Zap,
      title: t('interactivity.title'),
      description: t('interactivity.description'),
      color: 'from-purple-600 to-violet-500',
    },
    {
      icon: Clock,
      title: t('progression.title'),
      description: t('progression.description'),
      color: 'from-violet-600 to-indigo-500',
    },
    {
      icon: Users,
      title: t('autonomy.title'),
      description: t('autonomy.description'),
      color: 'from-indigo-600 to-purple-500',
    },
  ];

  return (
    <section id='features' className='py-24 px-4 relative'>
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

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              className='group cursor-pointer'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className='bg-white/10 backdrop-blur-md rounded-2xl p-10 border border-purple-300/20 h-full hover:bg-white/15 transition-all duration-300 hover:shadow-2xl'>
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className='w-8 h-8 text-white' />
                </div>
                <h3 className='text-xl font-bold text-white mb-6'>
                  {feature.title}
                </h3>
                <p className='text-purple-200 leading-relaxed'>
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
