import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorGeneralComponent } from '../../error/error-general/error-general.component';
import { Profession } from '../../model/profession.model';
import { ProfessionService } from '../../service/profession.service';

@Component({
  selector: 'app-registry-profession',
  templateUrl: './registry-profession.component.html',
  styleUrls: ['./registry-profession.component.css']
})
export class RegistryProfessionComponent implements OnInit {

  constructor(
    private professionService: ProfessionService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) { }

  professions: Array<Profession> = [];

  profession: Profession = new Profession();

  id!: string;
  isAddMode: boolean = true;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    if (!this.isAddMode) {
      this.professionService.sendGetProfession(this.id).subscribe(
        data => this.profession = new Profession().deserialize(data),
        error => this.openDialogError()
      );
    }
  }

  register() {
    this.professionService.sendPostProfession(this.profession).subscribe(
      data => this.router.navigate(['']),
      error => this.openDialogError()
    );
  }

  update() {
    this.professionService.sendPutProfession(this.profession).subscribe(
      data => this.router.navigate(['']),
      error => this.openDialogError()
    );
  }

  openDialogError() {
    this.dialog.open(ErrorGeneralComponent);
  }

}
