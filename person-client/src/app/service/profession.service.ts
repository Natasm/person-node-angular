import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Profession } from '../model/profession.model';

@Injectable({
  providedIn: 'root'
})
export class ProfessionService {

  private URL_API = environment.apiUrl + '/profession';

  constructor(private httpClient: HttpClient) { }

  public sendGetAllProfessions() {
    return this.httpClient.get(this.URL_API);
  }

  public sendGetProfession(id: any) {
    const url = `${this.URL_API}/${id}`;
    return this.httpClient.get(url);
  }

  public sendPostProfession(profession: Profession) {
    return this.httpClient.post<Profession>(this.URL_API, profession);
  }

  public sendPutProfession(profession: Profession) {
    const url = `${this.URL_API}/${profession.id}`;
    return this.httpClient.put<Profession>(url, profession);
  }

  public sendDeleteProfession(profession: Profession) {
    const url = `${this.URL_API}/${profession.id}`;
    return this.httpClient.delete(url);
  }
}
