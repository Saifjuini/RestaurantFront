import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  goToMenu() {
    this.router.navigateByUrl('/menu');
  }
  gotToHome(){
    this.router.navigateByUrl('/home');
  }
  goToBooking(){
    this.router.navigateByUrl('/book');
  }
  goToListTabel(){
    this.router.navigate(['listTables'])
  }

}
