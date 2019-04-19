import {Component, HostBinding} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learn-angular7';
  @HostBinding('@.disabled')
  public animationsDisabled = false;
  constructor(private router: Router) {
  }

  goRoutingNavigation() {
    this.router.navigate(['/routing-navigation']);

  }
}
