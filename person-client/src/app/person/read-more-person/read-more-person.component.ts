import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorGeneralComponent } from '../../error/error-general/error-general.component';
import { Person } from '../../model/person.model';
import { PersonService } from '../../service/person.service';

@Component({
  selector: 'app-read-more-person',
  templateUrl: './read-more-person.component.html',
  styleUrls: ['./read-more-person.component.css']
})
export class ReadMorePersonComponent implements OnInit {

  constructor(
    private personService: PersonService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) { }

  person: Person = new Person();

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.personService.sendGetPerson(id).subscribe(
      data => this.person = new Person().deserialize(data),
      error => console.log("Error", error)
    );
  }

  update(id: number) {
    this.router.navigateByUrl('/person/registry/' + id);
  }

  openDialogConfirmDelete() {
    this.dialog.open(DialogConfirmDeleteComponent, { data: { person: this.person } });
  }
}

@Component({
  selector: 'app-dialog-confirm-delete',
  templateUrl: './read-more-person-dialog-confirm-delete.component.html',
})
export class DialogConfirmDeleteComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private personService: PersonService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  closeDialog() {
    this.dialog.closeAll();
  }

  openDialogError() {
    this.dialog.open(ErrorGeneralComponent);
  }

  delete() {
    this.personService.sendDeletePerson(this.data.person).subscribe(
      data => { this.closeDialog(); this.router.navigateByUrl('') },
      error => this.openDialogError()
    );
  }
}
