import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Home } from '@/components/Home';

export default function Page() {
  const t = useTranslations('Page.Home');
  return (
    <div>
      <Home />
    </div>
  );
}