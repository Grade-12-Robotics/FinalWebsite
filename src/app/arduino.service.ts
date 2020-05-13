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
    this.http.get("http://70.24.95.14:4342/"+pin+"/on").subscribe(() => {});
  }

  pinOff(pin): void {
    this.http.get("http://70.24.95.14:4342/"+pin+"/off").subscribe(() => {});
  }

  pinToggle(pin): void {
    if (this.pinMap[pin]) {
      this.pinMap[pin] = false;
      this.pinOff(pin);
    } else {
      this.pinMap[pin] = true;
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
