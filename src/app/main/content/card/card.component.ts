import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterEvent, Event } from '@angular/router';
import { filter } from 'rxjs';
import { NavNode, RoutesService } from 'src/app/Services/routes.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit
{
  body! : string;
  

  

  /**
   *
   */
  constructor(private router : Router, private routesService : RoutesService ) {
  }
  
  ngOnInit(): void 
  {
    this.UpdateCard();

    this.router.events.pipe(
      filter((e: Event): e is RouterEvent => e instanceof NavigationEnd)
   ).subscribe((e: RouterEvent) => 
   {
     this.UpdateCard();
   });
}

UpdateCard() : void
{


  this.routesService.GetUserRoutes().subscribe(x => 
    {
      let result ;
      x.forEach(z => 
        {
          z.children?.forEach(y =>
            {
              if(y.url == this.router.url.substring(1))
              {
                result = y;
              } 
            })
        });
        if(result)
        {
          this.routesService.GetNoteBody((result as NavNode).id).subscribe(y => 
            {
              this.body = y;
            });
        }
        else
        {
          let nav = x[0].children;
          if(nav)
          {
            this.router.navigate([nav[0].url]);
          }
          
          
          
        }

      

     
    });
}


  

}
