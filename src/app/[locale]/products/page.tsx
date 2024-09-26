import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Products from '@/components/Products/Products';

export default function Page() {
  const t = useTranslations('Products');
  return (
    <Products />
  );
}