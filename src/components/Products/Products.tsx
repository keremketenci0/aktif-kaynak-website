import { ProductsCard } from '@/components/Products/ProductsCard';
import { ProductsFilter } from '@/components/Products/ProductsFilter';
import { ProductsCategory } from '@/components/Products/ProductsCategory';
import { NavBreadcrumb } from '../NavBreadcrumb';

export default function Products() {
  const products = Array.from({ length: 20 }, (_, index) => ({
    title: `Product ${index + 1}`,
    description: `Description for product ${index + 1}`,
    contentImage: `/images/1.jpeg`
  }));

  return (
    <div className="flex flex-col">
      <div className="flex flex-row space-x-12">
        <div className="py-4 w-1/4">
          <ProductsCategory />
        </div>

        <div className="flex flex-col w-full">
          <div className="py-4">
            <ProductsFilter />
          </div>
          <div className="flex flex-wrap gap-4">
            {products.map((product, index) => (
              <div>
                <ProductsCard
                  key={index}
                  title={product.title}
                  description={product.description}
                  contentImage={product.contentImage}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
