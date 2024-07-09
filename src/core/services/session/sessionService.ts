import { BehaviorSubject } from 'rxjs';
import { singleton } from 'tsyringe';

@singleton()
export class SessionService {
  private session$ = new BehaviorSubject<string | null>(this.getSessionFromStorage());

  private getSessionFromStorage(): string | null {
    return sessionStorage.getItem('sessionToken');
  }

  setSession(token: string | null) {
    if (token) {
      sessionStorage.setItem('sessionToken', token);
    }

    this.session$.next(token);
  }

  isAuthenticated(): boolean {
    return this.getSessionFromStorage() !== null;
  }
}
