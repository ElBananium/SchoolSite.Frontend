import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './main/content/card/card.component';
import { MainComponent } from './main/main.component';

const routes: Routes = 
[
  {
    path : "admin", loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule)
  },
  {
    path : "", component : MainComponent, children : 
    [
      {path: "**", component: CardComponent}
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
