import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class YoutubeService {

  public url : string = "https://www.googleapis.com/youtube/v3/search"

  constructor(private _http: HttpClient) { }

  buscare(valores: string) : Observable<any>{
    let uri = `${this.url}?part=snippet&maxResults=5&q=${valores}&key=AIzaSyCIOMaAReRX9UQqU7H_GxR8LBIcxoX7MLY`;
    return this._http.get<any>(uri);
  }
}
