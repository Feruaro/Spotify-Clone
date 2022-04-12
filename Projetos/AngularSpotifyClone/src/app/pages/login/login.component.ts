import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  urlImgLogo: string = 'assets/images/spotify-logo-inicio.png';

  constructor(private SpotifyService: SpotifyService) { }

  ngOnInit(): void {
  }

  abrirPaginaLogin() {
    console.log(this.SpotifyService.obterUrlLogin());
  }

}

