import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { domain } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class NodesService {

  
  constructor(private http : HttpClient) 
  {

  }


  public CreateNode(categoryId : number, name : string, url : string, body : string ) : Observable<void>
  {
    
    return new Observable<void>(x => 
      {
        this.http.post(domain+"admin/category/"+categoryId+"/note", {name : name, identificator : url,body : body }).subscribe(z => x.next())
      })
  }

  public UpdateNode(categoryId : number, nodeId : number, name : string, url : string, body : string) : Observable<void>
  {
    return new Observable<void>(x => 
      {
        this.http.patch(domain+"admin/category/"+categoryId+"/"+nodeId, {name : name, identificator : url,body : body }).subscribe(z => x.next());
      });
  }

  public DeleteNode(categoryId : number, nodeId : number) : Observable<void>
  {
    return new Observable<void>(x => 
      {
        this.http.delete(domain+"admin/category/"+categoryId+"/"+nodeId).subscribe(z => x.next());
      });
  }


}
