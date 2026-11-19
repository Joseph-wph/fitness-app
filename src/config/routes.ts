/**
 * ROUTE REGISTRY — single source of truth for internal page paths.
 * Add a new page: create src/app/<name>/page.tsx, then register it here.
 */
export const routes = {
  home: '/',
  about: '/about',
  reserve: '/reserve',
} as const;

export type RouteKey = keyof typeof routes;
