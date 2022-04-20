import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

  peoples: Observable<any>;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.peoples =  this.http.get('https://swapi.dev/api/people');
  }

}
