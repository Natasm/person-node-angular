import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../../model/person.model';
import { PersonService } from '../../service/person.service';

@Component({
  selector: 'app-home-person',
  templateUrl: './home-person.component.html',
  styleUrls: ['./home-person.component.css']
})
export class HomePersonComponent implements OnInit {

  persons: Array<Person> = [];

  constructor(
    private router: Router,
    private personService: PersonService
  ) { }

  ngOnInit(): void {
    this.personService.sendGetAllPerson().subscribe(
      data => data instanceof Array ? data.forEach(element => this.persons.push(new Person().deserialize(element))) : [],
      error => console.log("Error", error)
    );
  }

  readMore(id: number) {
    this.router.navigateByUrl('/person/readmore/' + id);
  }
}
