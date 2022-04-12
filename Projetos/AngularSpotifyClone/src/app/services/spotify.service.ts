import { SpotifyConfiguration } from './../../environments/environment';
import { Injectable } from '@angular/core';

/* Injeção de dependencia => no angular todos os componentes compartilham da mesma instância */
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {     /* para utilizar => declarar no construtor do componente */

  constructor() { }

  obterUrlLogin() {
    const authEndpoint = `${SpotifyConfiguration.authEndpoint}?`;  /* ? => pois é uma url */
    const clientId = `client_id=${SpotifyConfiguration.clientId}&`;  /* não esquecer do '&' */
    const redirectUrl = `redirect_uri=${SpotifyConfiguration.redirectUrl}&`;
    const scopes = `scopes=${SpotifyConfiguration.scopes.join('%20')}&`;
    const responseType = `response_type=token&show_dialog=true`;

    return authEndpoint + clientId + redirectUrl + scopes + responseType;
  }
}
