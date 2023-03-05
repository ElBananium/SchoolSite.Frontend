import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { NavNode, RoutesService } from 'src/app/Services/routes.service';






interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  url : string;
}



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  
  constructor(private routesService : RoutesService)
  {

  }
  
  
  ngOnInit(): void 
  {
    this.routesService.GetUserRoutes().subscribe(x =>
      {
        this.dataSource.data = x;
      });
  }



  private _transformer = (node: NavNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      url : node.url ?? ""
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );
  
  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;



  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);


  
}
