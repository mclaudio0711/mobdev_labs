import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.page.html',
  styleUrls: ['./people-details.page.scss'],
})
export class PeopleDetailsPage implements OnInit {
  
  people: any;

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    let name = this.activatedRoute.snapshot.paramMap.get('name');
    this.http.get(`https://swapi.dev/api/people/${name}`).subscribe(res => {
      this.people = res;
    });
  }

}
