import { environment } from '../../environments/environment';
interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'JbxR11ABEvDK8zLue4_ki_DQU5F7nwva',
  domain: 'budgetingmadeeasy.auth0.com',
  
  callbackURL: 'http://budgetingmadeeasy.azurewebsites.net/callback'
};
if (!environment.production) {
  AUTH_CONFIG.callbackURL = 'https://localhost:44369/callback';
}
