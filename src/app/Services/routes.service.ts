import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { domain } from '../app.component';

export interface NavNode {
  id : number;
  name: string;
  url? : string;
  children?: NavNode[];
}

const TREE_DATA: NavNode[] = [
  {
    id : 4,
    name: 'Fruit',
    url : "12",
    children: [{id : 1,name: 'Apple', url: "2"}, {id : 2, name: 'Banana', url: "3"}, {id : 3, name: 'Fruit loops', url : "4"}],
  },
  {
    id : 5,
    name : "Biba",
    url : "35",
    children : [{id: 6, name : "BIbA", url : "6"}]
  }
  
];




@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  
  constructor(private http : HttpClient) {
    
    
  }

  public GetUserRoutes() : Observable<NavNode[]>
  {
    return this.http.get<NavNode[]>(domain+"user/routes")
  }

  public GetNoteBody(nodeId : number) : Observable<any>
  {



  let httpOptions = {
    headers: new HttpHeaders(),
    responseType: 'text'
  }

  return this.http.get(domain+"user/note/"+nodeId, {headers : new HttpHeaders({
    'Accept': 'text/html, application/xhtml+xml, */*',
    'Content-Type': 'application/x-www-form-urlencoded'
  }), responseType : "text"})


    
  }


}
