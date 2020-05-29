import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArduinoHaasService {
  lampEnabled;

  constructor(private http: HttpClient) {
    this.lampEnabled = false;
  }

  lampToggle(): void {
    if (this.lampEnabled) {
      this.http.get('http://107.179.196.78/LIGHT').subscribe(() => {})
      this.lampEnabled = false;
    } else {
      this.http.get('http://107.179.196.78/NONE').subscribe(() => {})
      this.lampEnabled = true;
    }
    
    console.log(this.lampEnabled)
  }

}
