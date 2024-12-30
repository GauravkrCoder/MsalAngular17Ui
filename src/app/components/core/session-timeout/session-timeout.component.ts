import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../../shared/services/shared.service';

@Component({
  selector: 'app-session-timeout',
  standalone: true,
  imports: [],
  templateUrl: './session-timeout.component.html',
  styleUrl: './session-timeout.component.scss'
})
export class SessionTimeoutComponent implements OnInit {

  constructor(
    private _router: Router,
    private _sharedService: SharedService,
    private _activatedRoute: ActivatedRoute
  ) {
    const _token = sessionStorage.getItem('_isLoggedIn');
    // if (_token) {
    //   this._sharedService.saveJWTTokenForValidation({ applctn_token_id: _token });
    // }
    sessionStorage.clear();
  }

  ngOnInit(): void {
  }

  relogin() {
    // this._router.navigate(['../msal'], { relativeTo: this._activatedRoute });
    this._router.navigate(['./msal']);
  }

}