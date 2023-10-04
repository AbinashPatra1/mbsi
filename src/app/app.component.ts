import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from './pop-up/pop-up.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mbsi.github.io';

  constructor(private dialogRef : MatDialog){}

  ngOnInit(): void{
    setTimeout(() => this.openDialog(), 1000);
  }

  openDialog(){
    this.dialogRef.open(PopUpComponent);
  }
}
