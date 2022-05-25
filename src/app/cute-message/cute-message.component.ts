import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cute-message',
  templateUrl: './cute-message.component.html',
  styleUrls: ['./cute-message.component.scss']
})
export class CuteMessageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onGoBackClick(){
    this.router.navigate(['/'])
  }

}
