import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  about!: { name: string; bio: string; linkedInUrl: string; gitHubUrl: string; stackOverflowUrl: string; email:string; favorites: string; certifications: string; };

  constructor(private data:DataService) { }

  ngOnInit() {
    this.about= this.data.getAboutMe()
  }
  nav(link: string){
    window.location.assign(link)
  }
  
}
