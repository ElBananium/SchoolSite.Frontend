import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { CategoriesService } from 'src/app/Services/categories.service';
import { NavNode, RoutesService } from 'src/app/Services/routes.service';
import { AddCategoryDialogComponent } from './add-category-dialog/add-category-dialog.component';





export interface ExampleFlatNode {
  id : number;
  expandable: boolean;
  name: string;
  level: number;
  url : string;
}



@Component({
  selector: 'app-routes-editor',
  templateUrl: './routes-editor.component.html',
  styleUrls: ['./routes-editor.component.scss']
})
export class RoutesEditorComponent implements OnInit {

  public isLoaded = false;

  addCategoryPanelOpenState = false;

  public AddToCategory(node : ExampleFlatNode)
  {

    this.router.navigate(["admin", "postedit",node.url,"add"]);
  }


  private _transformer = (node: NavNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      url : node.url ?? "",
      id : node.id
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

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private userRoutesService : RoutesService, private categoriesServuce : CategoriesService, private router : Router, public dialog: MatDialog) {
    
    
  }
  ngOnInit(): void {
    this.userRoutesService.GetUserRoutes().subscribe(x =>
      {
        this.dataSource.data = x;
        this.isLoaded = true;
      });
      
    
      
    
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
  

  public DeleteCategory(node : ExampleFlatNode)
  {
    this.categoriesServuce.DeleteCategory(node.id).subscribe(x =>
      {
        this.router.navigate(["admin", "postedit"]);
      });
    
  }



  public AddCategory()
  {
    const dialogRef = this.dialog.open(AddCategoryDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.categoriesServuce.CreateCategory(result.name, result.url ).subscribe(x =>
        {
          this.router.navigate(["admin", "postedit"]);
        })
    });
  }
  
  
}
