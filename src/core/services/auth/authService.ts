import { delay, of, throwError } from 'rxjs';
import { singleton } from 'tsyringe';

@singleton()
export class AuthService {
  login(username: string, password: string) {
    if (username === 'user' && password === '1234') {
      return of({ success: true, token: 'token' });
    }

    return throwError(() => new Error('Error login')).pipe(delay(1000));
  }
}
