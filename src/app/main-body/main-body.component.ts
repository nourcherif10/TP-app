import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {

  tab=[{
    image:'https://media.leroymerlin.fr/Capture/33/c1/086332a8473fa5f4339a1a435611/119218890_246792993300214_5801369332820233967_n%20%281%29.png?width=217&crop=1:1,smart', alt: 'lorem'} ,{ image: 'https://media.leroymerlin.fr/Capture/3d/83/c8b92fb54b5c9ccc9b64806e317a/atelier%20des%20couleurs%20header.jpg?width=217&crop=1:1,smart' , alt:'ipsum'} , {image:'https://media.leroymerlin.fr/Capture/16/98/979f892a40b5b3a12bdfce571db4/MEA-MCD.jpg?width=217&crop=1:1,smart' , alt: 'dolor'}]
  list=[
    {
      image:'https://media.leroymerlin.fr/Capture/07/33/cd1e881545d5b2e1573175404eba/vignette-generique-campus-uc-video5f2822ddda6265000979bf61.jpg' ,
      alt :'lorem',
      description: 'lorem ipsum dolorcsddvs'
    },
    {
      image:'https://media.leroymerlin.fr/Capture/07/33/cd1e881545d5b2e1573175404eba/vignette-generique-campus-uc-video5f2822ddda6265000979bf61.jpg' ,
      alt :'lorem',
      description: 'lorem ipsum dolor  ispum'
    },
    {
      image:'https://media.leroymerlin.fr/Capture/07/33/cd1e881545d5b2e1573175404eba/vignette-generique-campus-uc-video5f2822ddda6265000979bf61.jpg' ,
      alt :'lorem',
      description: 'lorem ipsum dddffffffolor'
    }
  ]
  articles = [
    {
      image:'https://media.leroymerlin.fr/Capture/b5/14/1ab09c7d499eb23060204d140a47/mix-sam5e4ea205063b330009a4a060.jpg' ,
      titre:'Couleur du moment : l’ocre jaune, naturel et solaire',
      description : '',
      padding :'2%'
    },
    {
      image:'https://media.leroymerlin.fr/Capture/b5/14/1ab09c7d499eb23060204d140a47/mix-sam5e4ea205063b330009a4a060.jpg' ,
      titre : 'Tendance Palma, 8 idées pour l’adopter',
      description : 'La tendance Palma invite à se ressourcer dans un décor solaire pour mieux profiter des plaisirs de l’été. Les couleurs chaudes, les matières naturelles, les motifs végétaux, les textiles ornés, les nuances',
      padding: '1%'
    },
    {
      image:'https://media.leroymerlin.fr/Capture/b5/14/1ab09c7d499eb23060204d140a47/mix-sam5e4ea205063b330009a4a060.jpg' ,
      titre:'Style tropical dans la salle à manger',
      description : '',
      padding : '2%'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
