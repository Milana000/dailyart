import { Injectable } from "@angular/core";

import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class PeopleService{

    constructor(private http: HttpClient){}


    // Including filter #1
    // fetchPeople(): Observable<Object> {
    //     return this.http.get('/assets/data/people.json?id=123');
    // }


    // Using options object
    // fetchPeople(): Observable<Object> {
    //     return this.http.get('/assets/data/people.json', {
    //         params: new HttpParams().set('id', '123')
    //     });
    // }

    // Sending several parameters with get request
    // fetchPeople(): Observable<Object> {
    //     const params = new HttpParams()
    //     .set('id', '123')
    //     .set('includeAddress', 'true');
    //     return this.http.get('/assets/data/people.json', {
    //         params: params
    //     });
    // }

    // Sending the data using a post request
    fetchPeople(): Observable<Object> {
        const newPerson = {
            name: 'Pete'
        };

        return this.http.post('/assets/data/people.json', newPerson);
    }

}