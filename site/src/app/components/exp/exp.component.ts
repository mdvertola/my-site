import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.scss']
})
export class ExpComponent implements OnInit {
  experience!: { employer: string; title: string; "time_start": string; "time_end": string; location: string; desc: string; }[];
  education!: { institution: string; location: string; major: string; degree: string; time_start: string; time_end: string; gpa: string; awards: string; }[];
  certifications!: { institution: string; certification: string; time_awarded: string; time_exp: string; grade: string; link: string; }[];
  

  constructor(private data: DataService) { }
  
  ngOnInit() {
    this.experience =this.data.getExperience()
    this.education =this.data.getEducation()
    this.certifications = this.data.getCertifications()
  }


  
}
