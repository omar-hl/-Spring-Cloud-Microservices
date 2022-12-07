import { Injectable } from '@angular/core';
import {KeycloakInstance} from "keycloak-js";
declare var Keycloak: any;

@Injectable({
  providedIn: 'root'
})
export class KeycloakSecurityService {

  public kc: KeycloakInstance | undefined ;
  constructor() { }
  async init(){
    console.log("security Initialisation..");
    this.kc=new Keycloak({
      url: "http://localhost:8180/",
      realm:"wallet-realm",
      clientId: "wallet-client",
    });
    await this.kc?.init({
      onLoad:'login-required'
    });
    console.log(this.kc?.token);
  }
}
