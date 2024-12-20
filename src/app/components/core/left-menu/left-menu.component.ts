import { Component, OnInit } from '@angular/core';
import { RolesDefined } from '../../../shared/statics/roles-constants';
import { SharedService } from '../../../shared/services/shared.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-left-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './left-menu.component.html',
  styleUrl: './left-menu.component.scss'
})
export class LeftMenuComponent implements OnInit {

  public _rolesDefined: string[] = [];
  public leftNavMenuObj: any = {
    moduleName: 'Wires',
    moduleSubHeaders: [
      {
        display: true,
        moduleSubHead: 'REQUEST',
        requiredRole: [RolesDefined.viewAll, RolesDefined.manageRequest],
        moduleLinks: [
          { display: true, requiredRole: [RolesDefined.viewAll, RolesDefined.manageRequest], linkTitle: 'Add', targetURL: '/request/add' },
          { display: true, requiredRole: [RolesDefined.viewAll, RolesDefined.manageRequest], linkTitle: 'Change Request', targetURL: '/request/change' }
        ]
      },
      {
        display: true,
        moduleSubHead: 'VIEW REQUEST',
        requiredRole: [RolesDefined.manageAdmin],
        moduleLinks: [
          { display: true, requiredRole: [RolesDefined.manageAdmin], linkTitle: 'View', targetURL: '/admin/exam' }
        ]
      },
      {
        display: true,
        moduleSubHead: 'ADMINISTRATION',
        requiredRole: [RolesDefined.viewAll, RolesDefined.viewRequest],
        moduleLinks: [
          { display: true, requiredRole: [RolesDefined.viewAll, RolesDefined.viewRequest], linkTitle: 'Email Messages', targetURL: '/email-messages' },
          { display: true, requiredRole: [RolesDefined.viewAll, RolesDefined.viewRequest], linkTitle: 'Email Distribution', targetURL: '/email-distribution' }
        ]
      },

    ]
  }

  constructor(
    private _sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.getClientRoles();
    console.log(this.leftNavMenuObj)
  }

  getClientRoles() {
    const _clientRoles = this._sharedService.clientRoles;
    if (_clientRoles) {
      this._rolesDefined = this._sharedService.clientRoles;
      this.setMenuForDisplay(this._rolesDefined);
    }
  }

  setMenuForDisplay(_rolesDefined: string[]): void {
    this.leftNavMenuObj.moduleSubHeaders.forEach((menuItem: any) => {
      const shallRenderMenuItem = this.checkIfUserHasRequiredRole(menuItem.requiredRole);
      menuItem.display = (shallRenderMenuItem.length > 0);
      menuItem.moduleLinks.forEach((linkItem: any) => {
        const shallRenderLinkItem = this.checkIfUserHasRequiredRole(linkItem.requiredRole);
        linkItem.display = (shallRenderLinkItem.length > 0);
      });
    });
    this.leftNavMenuObj = Object.assign({}, this.leftNavMenuObj);
  }

  checkIfUserHasRequiredRole(itemArray) {
    return itemArray.filter(element => this._rolesDefined.indexOf(element) !== -1);
  }
}
