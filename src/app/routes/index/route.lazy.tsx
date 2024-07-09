import { createLazyFileRoute } from '@tanstack/react-router';

import { IndexPage } from '@/pages/index/page';
import { ROUTES } from '@/shared/constants';

export const Route = createLazyFileRoute(ROUTES.INDEX)({
  component: IndexPage
});
