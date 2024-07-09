import { container } from 'tsyringe';

import { AuthService } from '../services/auth/authService';
import { SessionService } from '../services/session/sessionService';

container.registerSingleton(AuthService);
container.registerSingleton(SessionService);
