import { Component, ElementRef, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavNode, RoutesService } from 'src/app/Services/routes.service';
import {ExampleFlatNode} from "src/app/admin/routes-editor/routes-editor.component"

@Component({
  selector: 'app-write-text',
  templateUrl: './write-text.component.html',
  styleUrls: ['./write-text.component.scss']
})
export class WriteTextComponent implements OnInit {

  isEdit = false;

  onEndClickedEvent = new EventEmitter<string>();

  addNodeUrl! : string;

  content = "";


  editCategory = "";

  editId = 0;

  constructor(private userRoutesService : RoutesService, private router : Router){}
  
  userRoutes! : NavNode[]

  @ViewChild("editor")
  editor! : any
  

  ngOnInit(): void 
  {
    let url = this.router.url.split("/");



    if(url[4] == "edit")
    {
      this.OnEdit(url[3]);
    }
    else if(url[4] == "add")
    {
      this.OnAdd(url[3]);
    }
    else
    {
      this.router.navigate(["admin"]);
    }
  }

  SetValue()
  {

  }

  cateditId! : number;
  OnEdit(nodeUrl : string)
  {
    this.isEdit = true;
    this.userRoutesService.GetUserRoutes().subscribe(x =>
      {
        
        
        let category = x.filter(z => z?.children?.filter(d => d.url?.split("/")[1] == nodeUrl).length != 0)[0];
        let post = category.children?.filter(z => z.url?.split("/")[1] ==  nodeUrl)[0];

        let id = post?.id;
        this.cateditId = category.id;
        if(id)
        {
          this.editId = id;
          this.userRoutesService.GetNoteBody(id).subscribe(z =>
            {
              this.editor.editorElem.children[0].innerHTML = z;
            });
        }else
        {
          this.router.navigate(["admin","postedit"]);
        }
        
        
      });
  }

  OnAdd(nodeUrl : string)
  {
    this.addNodeUrl = nodeUrl;

    this.userRoutesService.GetUserRoutes().subscribe(x =>
      {
        console.log(x);
        let id = x.filter(z => z?.url == nodeUrl)[0].id;
        if(id)
        {
          this.editId = id;
        }else
        {
          this.router.navigate(["admin","postedit"]);
        }

      });
        
  }

  

  OnEditorContentChanged(e : any)
  {
    this.content = e.html;  
  }

  OnEndClicked()
  {
    this.onEndClickedEvent.emit(this.content);
  }
}
