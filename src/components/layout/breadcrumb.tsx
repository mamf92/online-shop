'use client';

import { getProductById } from '@/components/features/products/services/product-service';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const ROUTE_LABELS: Record<string, string> = {
  about: 'About',
  cart: 'Cart',
  categories: 'Category',
  checkout: 'Checkout',
  contact: 'Contact',
  products: 'Products',
  success: 'Success',
};

function formatSegment(segment: string) {
  return decodeURIComponent(segment)
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

type ProductBreadcrumbInfo = {
  id: string;
  title: string;
  category?: string;
};

interface BreadcrumbProps {
  placement?: 'global' | 'banner';
}

function buildCrumbs(segments: string[], productInfo?: ProductBreadcrumbInfo) {
  if (segments[0] === 'categories' && segments.length === 2) {
    return [
      {
        href: '/categories',
        label: ROUTE_LABELS.categories,
      },
      {
        href: `/${segments.join('/')}`,
        label: formatSegment(segments[1]),
      },
    ];
  }

  if (segments[0] === 'products' && segments.length === 2) {
    const productId = segments[1];

    if (productInfo?.category) {
      return [
        {
          href: '/categories',
          label: ROUTE_LABELS.categories,
        },
        {
          href: `/categories/${productInfo.category}`,
          label: formatSegment(productInfo.category),
        },
        {
          href: `/products/${productId}`,
          label: productInfo.title,
        },
      ];
    }

    return [
      {
        href: `/products/${productId}`,
        label: productInfo?.title || 'Product',
      },
    ];
  }

  return segments.map((segment, index) => ({
    href: `/${segments.slice(0, index + 1).join('/')}`,
    label: ROUTE_LABELS[segment] ?? formatSegment(segment),
  }));
}

export default function Breadcrumb({ placement = 'global' }: BreadcrumbProps) {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);
  const [productInfo, setProductInfo] = useState<ProductBreadcrumbInfo>();
  const isProductRoute = segments[0] === 'products' && segments.length === 2;
  const isCategoryRoute = segments[0] === 'categories' && segments.length === 2;
  const productId = isProductRoute ? segments[1] : undefined;

  useEffect(() => {
    if (!productId) {
      return;
    }

    const resolvedProductId = productId;
    let isActive = true;

    async function loadProductTitle() {
      try {
        const response = await getProductById(resolvedProductId);

        if (isActive) {
          setProductInfo({
            id: resolvedProductId,
            title: response.data.title,
            category: response.data.tags[0],
          });
        }
      } catch {
        // Leave the fallback label in place when the lookup fails.
      }
    }

    loadProductTitle();

    return () => {
      isActive = false;
    };
  }, [productId]);

  if (segments.length === 0) {
    return null;
  }

  if (placement === 'global' && isCategoryRoute) {
    return null;
  }

  if (placement === 'banner' && !isCategoryRoute) {
    return null;
  }

  const resolvedProductInfo = productInfo?.id === productId ? productInfo : undefined;
  const crumbs = buildCrumbs(segments, resolvedProductInfo);

  return (
    <nav
      aria-label="Breadcrumb"
      className="border-secondary-brown/20 bg-background border-b px-4 py-3 sm:px-6 md:px-[5%] lg:px-[10%]"
    >
      <ol className="font-body text-muted mx-auto flex w-full max-w-3xl flex-wrap items-center gap-2 text-sm">
        <li>
          <Link href="/" className="text-secondary hover:text-primary transition-colors">
            Home
          </Link>
        </li>
        {crumbs.map((crumb, index) => {
          const isCurrent = index === crumbs.length - 1;

          return (
            <li key={crumb.href} className="flex items-center gap-2">
              <span aria-hidden="true" className="text-muted-brown">
                /
              </span>
              {isCurrent ? (
                <span aria-current="page" className="text-heading-color font-medium">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className="text-secondary hover:text-primary transition-colors"
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
