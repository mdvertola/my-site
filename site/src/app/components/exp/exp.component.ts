import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.scss']
})
export class ExpComponent implements OnInit {
  experience!: { employer: string; title: string; "time_start": string; "time_end": string; location: string; desc: string; }[];

  constructor(private data: DataService) { }
  
  ngOnInit() {
    this.experience =this.data.getExperience()
  }


  
}
