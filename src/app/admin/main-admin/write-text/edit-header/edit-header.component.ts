import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NodesService } from 'src/app/Services/nodes.service';

@Component({
  selector: 'app-edit-header',
  templateUrl: './edit-header.component.html',
  styleUrls: ['./edit-header.component.scss']
})
export class EditHeaderComponent implements OnInit {
  

  constructor(private nodesService : NodesService, private router : Router){}
  
  
  ngOnInit(): void {
    this.OnSendButtonClicked.subscribe(body =>
      {

        let nameValue = this.NameInput.nativeElement.value
        let urlValue = this.UrlInput.nativeElement.value

        this.nodesService.UpdateNode(this.catId,this.postid, nameValue, urlValue,body).subscribe(x =>
          {
            this.router.navigate(["admin","postedit"])
          });
      });
  }


  @Input()
  catName! : string;

  @Input()
  catId!: number;

  @Input()
  OnSendButtonClicked! : Observable<string> ;
  
  @Input()
  postid! : number;


  @ViewChild("name")
  NameInput! : ElementRef

  @ViewChild("url")
  UrlInput! : ElementRef



  
  
}
