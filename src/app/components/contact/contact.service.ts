import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactPayload {
  name: string;
  phone: string;
  email: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly url = 'http://localhost:3001/contact';

  constructor(private http: HttpClient) {}

  send(payload: ContactPayload): Observable<void> {
    return this.http.post<void>(this.url, payload);
  }
}
