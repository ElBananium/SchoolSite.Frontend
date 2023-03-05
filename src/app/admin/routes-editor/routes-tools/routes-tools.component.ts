import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NodesService } from 'src/app/Services/nodes.service';
import { ExampleFlatNode } from '../routes-editor.component';

@Component({
  selector: 'app-routes-tools',
  templateUrl: './routes-tools.component.html',
  styleUrls: ['./routes-tools.component.scss']
})
export class RoutesToolsComponent {

  @Input()
  node! : ExampleFlatNode;


  constructor(private router : Router, private NodesService : NodesService)
  {

  }

  EditClicked()
  {
    console.log(this.node);
    this.router.navigate(["admin","postedit",this.node.url.split("/")[1],"edit"] );
  }
  DeleteClicked()
  {
    this.NodesService.DeleteNode(this.node.id,this.node.id).subscribe(x =>
      {
        this.router.navigate(["admin","postedit"] );
      });
  }
}
