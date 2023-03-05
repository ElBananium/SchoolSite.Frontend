import { Component } from '@angular/core';





interface NavItem
{
  name : string,
  url : string
}


@Component({
  selector: 'app-admin-navigation',
  templateUrl: './admin-navigation.component.html',
  styleUrls: ['./admin-navigation.component.scss']
})
export class AdminNavigationComponent {

  navList : NavItem[] = [{name :"Записи", url:"postedit"}]
}
