import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
 
export default function Contact() {
  const t = useTranslations('Contact');
  return (
    <div>
      <h1>Contact</h1>
    </div>
  );
}