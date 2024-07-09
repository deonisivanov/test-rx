import { createFileRoute, redirect } from '@tanstack/react-router';

import { ROUTES } from '@/shared/constants';

export const Route = createFileRoute(ROUTES.AUTH)({
  beforeLoad: ({ context }) => {
    if (context.isAuthenticated) {
      throw redirect({
        to: ROUTES.INDEX
      });
    }
  }
});
