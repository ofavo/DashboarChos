import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.scss'],
  styles: [`
  :host nb-layout-header button:last-child {
    margin-left: auto;
  }
`],
})
export class InitComponent implements OnInit {
  items = [
    {
      title: 'Profile',
      icon: 'person-outline',
      link: ['profile'],
    },
    {
      title: 'Demo',
      icon: 'lock-outline',
      link: ['demo'],
    },
    {
      title: 'Privacy Policy',
      icon: { icon: 'checkmark-outline', pack: 'eva' },
      link: [],
    },
    {
      title: 'Login',
      icon: 'unlock-outline',
      link: ['login'],
    },
  ];
  constructor(private sidebarService: NbSidebarService) { }

  ngOnInit() {
  }
  toggle() {
    this.sidebarService.toggle(false, 'left');
  }

  toggleCompact() {
    this.sidebarService.toggle(true, 'right');
  }
}
