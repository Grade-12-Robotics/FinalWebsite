import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArduinoService {

  pinMap = {};

  pins = [4, 5];

  constructor(private http: HttpClient) {

    this.pins.forEach(pin => {
      this.pinMap[pin] = false;
    });
  }

  pinOn(pin): void {
    this.pinMap[pin] = true;
    this.http.get("http://esp8266project.ddns.net:4342/"+pin+"/on").subscribe(() => {});
  }

  pinOff(pin): void {
    this.pinMap[pin] = false;
    this.http.get("http://esp8266project.ddns.net:4342/"+pin+"/off").subscribe(() => {});
  }

  pinToggle(pin): void {
    if (this.pinMap[pin]) {
      this.pinOff(pin);
    } else {
      this.pinOn(pin);
    }
  }

  getState(pin): boolean {
    return this.pinMap[pin];
  }

  getPins(): any {
    return this.pins;
  }
}
