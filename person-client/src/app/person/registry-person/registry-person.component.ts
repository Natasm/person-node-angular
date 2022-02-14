import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { Profession } from '../../model/profession.model';
import { Person } from '../../model/person.model';
import { ProfessionService } from '../../service/profession.service';
import { PersonService } from '../../service/person.service';
import { ErrorGeneralComponent } from '../../error/error-general/error-general.component';

@Component({
  selector: 'app-registry-person',
  templateUrl: './registry-person.component.html',
  styleUrls: ['./registry-person.component.css']
})
export class RegistryPersonComponent implements OnInit {

  constructor(
    private professionService: ProfessionService,
    private personService: PersonService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) { }

  professions: Array<Profession> = [];

  person: Person = new Person();

  id!: string;
  isAddMode: boolean = true;

  email = new FormControl('', [Validators.required, Validators.email]);

  ngOnInit(): void {
    this.professionService.sendGetAllProfessions().subscribe(
      data => data instanceof Array ? data.forEach(element => this.professions.push(new Profession().deserialize(element))) : [],
      error => console.log("Error", error)
    );

    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    if (!this.isAddMode) {
      this.personService.sendGetPerson(this.id).subscribe(
        data => this.person = new Person().deserialize(data),
        error => this.openDialogError()
      );
    }
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  register() {
    this.personService.sendPostPerson(this.person).subscribe(
      data => this.router.navigate(['']),
      error => this.openDialogError()
    );
  }

  update() {
    this.personService.sendPutPerson(this.person).subscribe(
      data => this.router.navigate(['']),
      error => this.openDialogError()
    );
  }

  openDialogError() {
    this.dialog.open(ErrorGeneralComponent);
  }
}
