import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allSlugs, findNode } from '@/data/site';
import { ListView } from '@/components/products/ListView';
import { ProductView } from '@/components/products/ProductView';

export const dynamicParams = false;

export function generateStaticParams() {
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<'/products/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const found = findNode(slug);
  if (!found) return {};
  return { title: found.node.title ?? found.node.name, description: found.node.desc?.[0] };
}

export default async function ProductPage({ params }: PageProps<'/products/[slug]'>) {
  const { slug } = await params;
  const found = findNode(slug);
  if (!found) notFound();
  const { node, parents } = found;
  const isList = !!node.children?.length || !!node.parts?.length;
  return isList ? <ListView node={node} parents={parents} /> : <ProductView node={node} parents={parents} />;
}
