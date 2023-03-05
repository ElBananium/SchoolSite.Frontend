import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { domain } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http : HttpClient) { }


  public CreateCategory(name : string, url : string) : Observable<void>
  {
    return new Observable<void>(x => 
      {
        this.http.post(domain+"admin/category", {name : name, identificator : url,position : 0 }).subscribe(z => x.next())
      })
  }

  public DeleteCategory(id : number) : Observable<void>
  {

    return new Observable<void>(x => 
      {
        this.http.delete(domain+"admin/category/"+id).subscribe(z => x.next())
      })
  }
}
