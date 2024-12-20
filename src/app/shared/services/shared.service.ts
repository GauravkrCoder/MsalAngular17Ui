import { Injectable } from '@angular/core';
import { RolesDefined } from '../statics/roles-constants';
import AppUtils from '../utils/appUtils';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public _clientRoles: Array<string>;

  constructor() { }

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

}
