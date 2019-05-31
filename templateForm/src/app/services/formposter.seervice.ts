import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class FormPosterService {

    private url = 'http://localhost:3100/postEmployee';

    constructor(private http: HttpClient) {}

    employeeForm(customer): Observable<any[]> {
        return this.http.post<any[]>(this.url, customer);
    }
}
