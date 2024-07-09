import { container } from 'tsyringe';

import { AuthService } from '../../services/auth/authService';

import { SessionService } from '@/core/services/session/sessionService';

const useAuth = () => {
  const authService = container.resolve(AuthService);
  const sessionService = container.resolve(SessionService);

  const isAuthenticated = sessionService.isAuthenticated();

  const login = (username: string, password: string) => {
    authService.login(username, password).subscribe((response) => {
      if (response.success) {
        sessionService.setSession('token');
      }
    });
  };

  return {
    authFunctions: { login },
    authState: { isAuthenticated }
  };
};

export default useAuth;
