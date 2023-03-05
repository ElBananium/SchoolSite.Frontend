import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface AddCategoryDialogData
{
  name : string,
  url : string,
}


@Component({
  selector: 'app-add-category-dialog',
  templateUrl: './add-category-dialog.component.html',
  styleUrls: ['./add-category-dialog.component.scss']
})
export class AddCategoryDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AddCategoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AddCategoryDialogData,
  ) {
    this.data = {name : "", url : ""}
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
