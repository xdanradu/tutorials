import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/shared/services';

declare var H: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  hereMapsApiKey = '';

  public constructor( private authService: AuthService) {
  }

  public ngOnInit() {
    this.authService.getHereMapsApiKey().subscribe(response => {
      this.hereMapsApiKey = response.key;
    });
  }

}
