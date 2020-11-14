import Nav from '../components/nav';
import useTranslation from 'next-translate/useTranslation';

export default function IndexPage() {
  const { t } = useTranslation();

  return (
    <div>
      <Nav />
      <div className='py-20'>
        <h1 className='text-5xl text-center text-accent-1'>{t('home:header')}</h1>
      </div>
    </div>
  );
}
