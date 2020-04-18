import { Injectable } from '@angular/core';
import {Todo} from './Todo';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
@Injectable()
export class TodoService{
    private baseUrl = 'http://localhost:8080/api/all/'; 
    constructor(private _http : Http){}

    getAllTodos() : Observable<Todo[]>{
        return this._http.get(this.baseUrl).map((response : Response) => response.json());
    }

    private handleError (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.status);
        }

    createTodo(article: Todo):Observable<number> {
            // let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
            // let options = new RequestOptions({ headers: cpHeaders });
            return this._http.post(this.baseUrl, article)
                .map(success => success.status);
        }     

    deleteTodoById(id: number): Observable<number> {
           return this._http.delete(this.baseUrl+id)
                   .map(success => success.status);
        }	

    updateTodo(todo: Todo):Observable<number> {
        console.log('update todo service : ')
            // let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
            // let options = new RequestOptions({ headers: cpHeaders });
            return this._http.put(this.baseUrl, todo)
                  .map(success => success.status);
        } 
}