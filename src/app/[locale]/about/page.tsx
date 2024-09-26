import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
 
export default function About() {
  const t = useTranslations('About');
  return (
    <div>
      <h1>About</h1>
    </div>
  );
}