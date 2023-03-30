import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  providers : [{provide : ControlContainer, useExisting : NgForm}]
})
export class ChildComponent implements OnInit {
  childName: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
