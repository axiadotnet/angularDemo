import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent implements OnInit {

  public posts: any;

  constructor(private dataPippo: DataService) {
    dataPippo.postsData.subscribe(dati => {
      this.posts = dati;
    });
  }

  ngOnInit() {
  }

}
