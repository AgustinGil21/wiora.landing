'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  HelpCircle,
  MessageCircle,
  Shield,
  Globe,
  DollarSign,
  Users,
  MailIcon,
} from 'lucide-react';
import { DiscordIcon } from '@/icons/DiscordIcon';
import { useTranslations } from 'next-intl';

const FAQ = () => {
  const t = useTranslations('FAQ');

  const faqItems = [
    {
      id: t('questions.what-is-wiora.question'),
      icon: HelpCircle,
      question: t('questions.what-is-wiora.question'),
      answer: t('questions.what-is-wiora.answer'),
      color: 'from-purple-500 to-violet-600',
    },
    {
      id: t('questions.how-it-works.question'),
      icon: MessageCircle,
      question: t('questions.how-it-works.question'),
      answer: t('questions.how-it-works.answer'),
      color: 'from-violet-500 to-indigo-600',
    },
    {
      id: t('questions.free.question'),
      icon: DollarSign,
      question: t('questions.free.question'),
      answer: t('questions.free.answer'),
      color: 'from-indigo-500 to-purple-600',
    },
    {
      id: t('questions.replacement.question'),
      icon: Users,
      question: t('questions.replacement.question'),
      answer: t('questions.replacement.answer'),
      color: 'from-indigo-500 to-purple-600',
    },
    {
      id: t('questions.unique.question'),
      icon: Globe,
      answer: t('questions.unique.answer'),
      question: t('questions.unique.question'),
      color: 'from-indigo-500 to-purple-600',
    },
    {
      id: t('questions.previous-knowledge.question'),
      icon: Shield,
      question: t('questions.previous-knowledge.question'),
      answer: t('questions.previous-knowledge.answer'),
      color: 'from-indigo-500 to-purple-600',
    },
  ];

  return (
    <section
      id='faq'
      className='py-24 px-4 bg-gradient-to-r from-indigo-900/30 to-purple-900/30'
    >
      <div className='max-w-4xl mx-auto'>
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-8'>
            {t('title')}
          </h2>
          <p className='text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed'>
            {t('description')}
          </p>
        </motion.div>

        <motion.div
          className='bg-white/10 backdrop-blur-md rounded-3xl px-2 py-6 sm:p-8 border border-purple-300/20'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type='single' collapsible className='space-y-4'>
            {faqItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={item.id}
                  className='bg-white/5 backdrop-blur-sm rounded-2xl border border-purple-300/20 px-6 hover:bg-white/10 transition-all duration-300'
                >
                  <AccordionTrigger className='text-white hover:text-purple-200 py-6 text-left'>
                    <div className='flex items-center gap-4'>
                      <div
                        className={`w-10 h-10 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                      >
                        <item.icon className='w-5 h-5 text-white' />
                      </div>
                      <span className='text-lg font-semibold'>
                        {item.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className='text-purple-200 leading-relaxed text-base px-14 pb-6 pointer-events-none'>
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          className='text-center mt-12'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className='bg-gradient-to-r from-purple-600/20 to-violet-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-300/30'>
            <h3 className='text-xl font-bold text-white mb-4'>
              {t('more-questions.title')}
            </h3>
            <p className='text-purple-200 mb-6'>
              {t('more-questions.description')}
            </p>
            <div className='flex gap-4 justify-center'>
              <a
                rel='stylesheet'
                href='https://discord.gg/SdJz3DsQ'
                target='_blank'
              >
                <button className='bg-[#5865F2] hover:bg-[#4752C4] text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300 flex items-center justify-center gap-2'>
                  <DiscordIcon className='size-6 fill-white' />
                  Discord
                </button>
              </a>
              <a
                href='https://mail.google.com/mail/?view=cm&to=wiora.app@gmail.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className='bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300 flex gap-2 items-center'>
                  <MailIcon className='size-6' />
                  {t('more-questions.buttons.contact')}
                </button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
