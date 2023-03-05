import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NodesService } from 'src/app/Services/nodes.service';

@Component({
  selector: 'app-adding-header',
  templateUrl: './adding-header.component.html',
  styleUrls: ['./adding-header.component.scss']
})
export class AddingHeaderComponent implements OnInit {
  
  constructor(private nodesService : NodesService, private router : Router)
  {}
  ngOnInit(): void 
  {
    this.OnSendButtonClicked.subscribe(body =>
      {

        let nameValue = this.NameInput.nativeElement.value
        let urlValue = this.UrlInput.nativeElement.value

        this.nodesService.CreateNode(this.catId,nameValue,urlValue,body).subscribe(x =>
          {
            this.router.navigate(["admin","postedit"])
          });
      });
  }

  @Input()
  catId! : number;

  @Input()
  catUrl! : string;

  @Input()
  OnSendButtonClicked! : Observable<string> ;

  @ViewChild("name")
  NameInput! : ElementRef

  @ViewChild("url")
  UrlInput! : ElementRef


}
