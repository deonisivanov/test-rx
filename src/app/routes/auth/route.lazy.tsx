import { createLazyFileRoute } from '@tanstack/react-router';

import { AuthPage } from '@/pages/auth/page';
import { ROUTES } from '@/shared/constants';

export const Route = createLazyFileRoute(ROUTES.AUTH)({
  component: AuthPage
});
