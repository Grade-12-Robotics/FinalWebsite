import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArduinoService {

  pinMap = {}

  constructor(private http: HttpClient) {
    let pins = [4];

    pins.forEach(pin => {
      this.pinMap[pin] = false;
    });
  }

  pinOn(pin): void {
    console.log("bruh")
    this.http.get("http://70.24.95.14:4342/4/on").subscribe(() => {});
  }

  pinToggle(pin): void {
    if (this.pinMap[pin]) {
      this.pinMap[pin] = false;
      this.http.get("http://70.24.95.14:4342/4/off").subscribe(() => {});
    } else {
      this.pinMap[pin] = true;
      this.http.get("http://70.24.95.14:4342/4/on").subscribe(() => {});
    }
  }
}
