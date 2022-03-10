import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  innerWidth: any;

  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any; }; }) {
    this.innerWidth = event.target.innerWidth;
  }

  get mobile(){
    if (window.innerWidth <= 850){
      return true
    } return false
  }

  ngOnInit() {
    this.innerWidth =  window.innerWidth
  }

}
