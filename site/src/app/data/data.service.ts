import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  public getAboutMe(){
    return {
      "name": "Matthew Dvertola", 
      "bio": "Software engineer & consultant focused on cyber security, AI and the future.",
      "linkedInUrl": "https://www.linkedin.com/in/matthewdvertola/",
      "gitHubUrl": "https://www.github.com/mdvertola",
      "stackOverflowUrl": "https://www.stackoverflow.com/users/13401636/matthew-dvertola",
      "email":"matt.dvertola@gmail.com",
      "favorites":"Angular, Serverless, Keras, Typescript, Python, Terraform, Ansible",
      "certifications":"Security +, AWS Solutions Architect Associate"

    }
  }
  public getExperience(){
    return [
    {
      "employer":"Hunter Strategy",
      "title":"Sr Cloud Security Consultant",
      "time_start":"Sep 2021",
      "time_end":"Present",
      "location":"Washington DC",
      "desc":
        "Conducted AWS security and automation overhaul for DoD client \n"+
        "Created Ansible scripts & Jenkins jobs for automating CI pipeline for DoD client\n"+
        "Served as a scrum master to 5 developers for in house development projects"
    },
    {
      "employer":"Hunter Strategy",
      "title":"Cloud Security Consultant",
      "time_start":"May 2020",
      "time_end":"Sep 2021",
      "location":"Washington DC",
      "desc":
        "Developed & architected 4 full stack serverless web applications from ground up\n"+
        "Serverless backend development for DoD client\n"+
        "Network security scans and configuration for DoD client"
    },
    {
      "employer":"Emagine Solutions Technology",
      "title":"Information Security Consultant",
      "time_start":"May 2020",
      "time_end":"Sep 2019",
      "location":"Tucson, AZ",
      "desc":
        "Assisted in development of ML driven sonographic overlay and measurement technology \n"+
        "Researched FDA regulations, HIPAA data compliance and EMS data security protocols \n"+
        "Coordinated first clinical study on mobile ultrasound use in EMS vehicle"
    },
    {
      "employer":"Bank of America Merrill Lynch",
      "title":"Advisor Summer Intern",
      "time_start":"May 2018",
      "time_end":"Aug 2019",
      "location":"Phoenix, AZ",
      "desc":
        "Completed Bank of America introductory courses in attaining SIE, Series 7 and Series 66 \n"+ 
        "Lead a team building a system to Log, index, and design sensitive outbound correspondence \n"+
        "Developed automated solutions to increase response rates for FINRA mandated correspondence"
    }
  ]
  }

  public getTechnologies(){
    return []
  }
  public getCertifications(){
    return [
      { "institution":"CompTIA",
        "certification":"Security +",
        "time_awarded":"",
        "time_exp":"",
        "grade":"",
        "link":""
      },
      { "institution":"AWS",
        "certification":"Solutions Architect Associate",
        "time_awarded":"",
        "time_exp":"",
        "grade":"",
        "link":""
      },
    ]
  }
  public getEducation(){
    return [
      { "institution":"University of Arizona",
        "location":"Tucson, AZ",
        "major":"Management Information Systems",
        "degree":"M.Sc",
        "time_start":"Aug 2020",
        "time_end":"Dec 2021",
        "gpa":"3.80",
        "awards":"AZSecure Scholarship for Industry"
      },
      { "institution":"University of Arizona",
        "location":"Tucson, AZ",
        "major":"Management Information Systems",
        "degree":"B.Sc",
        "time_start":"Aug 2016",
        "time_end":"May 2020",
        "gpa":"3.65",
        "awards":"Focus: Cyber Security"
      },
      { "institution":"University of Arizona",
        "location":"Tucson, AZ",
        "major":"Business Economics",
        "degree":"B.Sc",
        "time_start":"Aug 2016",
        "time_end":"May 2020",
        "gpa":"3.65",
        "awards":"Focus: Quantative Economics & Econometrics"
      },
    ]
  }
  // I would like to somehow go get the preview for the link instead of requiring image
  public getProjects(){
    return [
      { "title":"",
        "desc":"",
        "link":"",
        "image":""
      }
    ]
  }
  

}
