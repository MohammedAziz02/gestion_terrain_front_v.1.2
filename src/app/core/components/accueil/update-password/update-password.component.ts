import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent {


  errorMessage: string;
  constructor(private route: ActivatedRoute) {}


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.errorMessage = params['error'] || '';
    });
  }
}
