'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Logo } from './logo';

export function Header() {
  const { links, cta } = siteConfig.nav;
  const pathname = usePathname();

  return (
    <header className='flex items-center justify-between border-b border-border bg-secondary px-5 py-4 md:px-6 md:py-5'>
      <Logo />

      {/* Tablet + desktop navigation */}
      <nav
        aria-label='Main'
        className='hidden items-center gap-10 md:flex lg:gap-12'
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={pathname === link.href ? 'page' : undefined}
            className={cn(
              'text-label underline-offset-4',
              pathname === link.href && 'underline'
            )}
          >
            {link.label}
          </Link>
        ))}
        <Button asChild>
          <Link href={cta.href}>{cta.label}</Link>
        </Button>
      </nav>

      {/* Mobile menu */}
      <Sheet>
        <SheetTrigger className='md:hidden' aria-label='Open menu'>
          <Plus className='h-7 w-7' strokeWidth={1.5} />
        </SheetTrigger>
        <SheetContent>
          <SheetTitle className='sr-only'>Menu</SheetTitle>
          <nav aria-label='Mobile' className='flex flex-col gap-6 pt-8'>
            {links.map((link) => (
              <SheetClose asChild key={link.href}>
                <Link href={link.href} className='text-card-title'>
                  {link.label}
                </Link>
              </SheetClose>
            ))}
            <SheetClose asChild>
              <Button asChild className='self-start'>
                <Link href={cta.href}>{cta.label}</Link>
              </Button>
            </SheetClose>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
