import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public users: any[];

  constructor(private dataPippo: DataService) {
    dataPippo.getUser().subscribe(dati => {
      this.users = dati;
    });
  }
  ngOnInit() {
  }

}
