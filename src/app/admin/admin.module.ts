import { ChangeDetectorRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainAdminComponent } from './main-admin/main-admin.component';
import { RouterModule, Routes } from '@angular/router';
import { QuillConfigModule, QuillModule } from 'ngx-quill';
import { AdminNavigationComponent } from './main-admin/admin-navigation/admin-navigation.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AdminContentComponent } from './main-admin/admin-content/admin-content.component';
import { MatCardModule } from '@angular/material/card';
import { WriteTextComponent } from './main-admin/write-text/write-text.component';
import { RoutesEditorComponent } from './routes-editor/routes-editor.component';
import { RoutesToolsComponent } from './routes-editor/routes-tools/routes-tools.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatInputModule } from '@angular/material/input';
import { EditHeaderComponent } from './main-admin/write-text/edit-header/edit-header.component';
import { AddingHeaderComponent } from './main-admin/write-text/adding-header/adding-header.component';
import { AddCategoryDialogComponent } from './routes-editor/add-category-dialog/add-category-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
const routes: Routes = 
[
  {
    path : "", component : MainAdminComponent, children : 
    [
      {path : "", redirectTo : "postedit", pathMatch : 'full'},
      {path : "postedit", component : RoutesEditorComponent},
      {path : "postedit/:id/add", component: WriteTextComponent}, 
      {path: "postedit/:id/edit", component : WriteTextComponent}
    ]
  },
    {path: "**", redirectTo:"",}
  
];


@NgModule({
  declarations: [
    MainAdminComponent,
    AdminNavigationComponent,
    AdminContentComponent,
    WriteTextComponent,
    RoutesEditorComponent,
    AddingHeaderComponent,
    RoutesToolsComponent,
    EditHeaderComponent,
    AddCategoryDialogComponent,
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatExpansionModule,
    FormsModule,
    QuillModule,
    MatDialogModule,
    MatTreeModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ],

})
export class AdminModule { }
