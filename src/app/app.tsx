import { Theme } from '@radix-ui/themes';
import { createRouter, RouterProvider } from '@tanstack/react-router';

import { routeTree } from './routeTree.gen';

const router = createRouter({
  routeTree,
  context: {
    isAuthenticated: false
  }
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export const App = () => {
  return (
    <Theme appearance='dark'>
      <RouterProvider router={router} context={{ isAuthenticated: false }} />
    </Theme>
  );
};
