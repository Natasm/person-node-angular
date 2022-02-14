import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Person } from '../model/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private URL_API = environment.apiUrl + '/person';

  constructor(private httpClient: HttpClient) { }

  public sendGetAllPerson() {
    return this.httpClient.get(this.URL_API);
  }

  public sendGetPerson(id: any) {
    const url = `${this.URL_API}/${id}`;
    return this.httpClient.get(url);
  }

  public sendPostPerson(person: Person) {
    return this.httpClient.post<Person>(this.URL_API, person);
  }

  public sendPutPerson(person: Person) {
    const url = `${this.URL_API}/${person.id}`;
    return this.httpClient.put<Person>(url, person);
  }

  public sendDeletePerson(person: Person) {
    const url = `${this.URL_API}/${person.id}`;
    return this.httpClient.delete(url);
  }
}
