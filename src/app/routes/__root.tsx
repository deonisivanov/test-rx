import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';

import { NotFoundPage } from '@/pages/not-found/page';

export interface RouterContext {
  isAuthenticated: boolean;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <>
      <header className='absolute z-[30] flex w-full items-center justify-between p-4'>
        <div className='flex items-center gap-2'>Test task</div>
      </header>
      <div className='flex h-screen items-center justify-center'>
        <Outlet />
      </div>
    </>
  ),
  notFoundComponent: () => <NotFoundPage />
});
