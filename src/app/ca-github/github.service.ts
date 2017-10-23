import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GithubService {

    constructor(private httpClient: HttpClient){}

   public getUsers() : Observable<any>{
        const urlBase = 'https://api.github.com';
        return this.httpClient.get<Array<any>>(`${urlBase}/users`);
    }
}