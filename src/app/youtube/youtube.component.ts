import { Component, OnInit } from '@angular/core';

import {YoutubeService} from './../services/youtube.service';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css'],
  providers: [YoutubeService]
})
export class YoutubeComponent implements OnInit {

  public valores: string = "";
  public videos: any = [];

  constructor(private _ys_: YoutubeService) {
  }

  ngOnInit() {
  }

  buscar(){

    // if(this.valores.length > 4){
      this._ys_.buscare(this.valores).subscribe(
        result=>{
          this.videos = result.items;
        }
      );
    // }
  }

}
