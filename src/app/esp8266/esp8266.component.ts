import { Component, OnInit } from '@angular/core';
import { ArduinoService } from '../arduino.service';
import { ArduinoHaasService } from '../arduino-haas.service';

@Component({
  selector: 'app-esp8266',
  templateUrl: './esp8266.component.html',
  styleUrls: ['./esp8266.component.scss']
})
export class Esp8266Component implements OnInit {

  constructor(public arduinoService: ArduinoService, public arduinoHaas: ArduinoHaasService) {}

  ngOnInit() {}

}
