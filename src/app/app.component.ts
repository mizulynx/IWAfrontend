import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './token-storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  info: any;
  title = 'iwa-http-contacts';
  private roles: string[];
  public authority: string;

  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
      this.info = {
        token: this.tokenStorage.getToken(),
        username: this.tokenStorage.getUsername(),
        authorities: this.tokenStorage.getAuthorities()
      };
  }
    logout() {
      this.tokenStorage.signOut();
      window.location.reload();
    }
  }

