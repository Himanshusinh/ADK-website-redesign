'use client';

import Link from 'next/link';
import type { ComponentProps } from 'react';

/** Site link. Kept as a thin wrapper so every internal link can be changed in one place. */
export function TLink(props: ComponentProps<typeof Link>) {
  return <Link {...props} />;
}
