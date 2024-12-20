import { EventEmitter, Injectable } from '@angular/core';
import { RolesDefined } from '../statics/roles-constants';
import AppUtils from '../utils/appUtils';
import { Subject, Subscription } from 'rxjs';
import { SharedApiService } from './shared-api.service';
import { DialogService } from 'primeng/dynamicdialog';
import { GenericApiMessagesComponent } from '../components/generic-api-messages/generic-api-messages.component';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public _clientRoles: Array<string>;
  public invokeMSALLogin = new EventEmitter();
  public subsVar: Subscription;

  public _publishRedirectionFromEdit: Subject<boolean> = new Subject<boolean>();

  constructor(
    private _sharedApiService: SharedApiService,
    private _dialogService: DialogService,
  ) { }

  set publishRedirectionFromEdit(flag: boolean) {
    this._publishRedirectionFromEdit.next(flag);
  }

  get clientRoles(): Array<any> {
    if (this._clientRoles) {
      return this._clientRoles;
    }
    else {
      this._clientRoles = this.setClientRolesFromToken();
      return this._clientRoles;
    }
  }

  setClientRolesFromToken(): Array<any> {
    const _env: string = AppUtils.getAppEnv();
    let _clientRoles;
    const _localClientRoles = [
      RolesDefined.viewAll,
      RolesDefined.readWriteAll,
      RolesDefined.viewAdmin,
      RolesDefined.manageAdmin,
      RolesDefined.viewRequest,
      RolesDefined.manageRequest,
    ];
    const _token = sessionStorage.getItem('_isLoggedIn');
    if (_token === null || _token === undefined) {
      return null;
    }
    if (_env === 'LCL') {
      _clientRoles = _localClientRoles;
    }
    else if (_token) {
      // const _decodeToken: any = jwt_deocde(_token);
      // _clientRoles = (_decodeToken?.roles && _decodeToken?.roles.length > 0) ? _decodeToken?.roles : [];
    }
    return _clientRoles;
  }

  public showDialog(options: any, isGenericMsg: boolean = false, isEditScreen: boolean = false): void {
    const _component = !isGenericMsg ? options.component : GenericApiMessagesComponent;
    const ref = this._dialogService.open(_component, options.config);

    ref.onClose.subscribe((response) => {
      if (response) {
        console.log('Closing Dialog');
      }
      else if (isEditScreen) {
        this.publishRedirectionFromEdit = true;
      }
    })

  }

}
