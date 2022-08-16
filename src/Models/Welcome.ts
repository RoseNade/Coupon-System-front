export class RegisterModel {
  public firstName?: string;
  public lastName?: string;
  public email?: string;
  public password?: string;
  public confirm?: string;

  public constructor(
    email: string,
    password: string,
    confirm: string,
    firstName?: string,
    lastName?: string
  ) {
    this.email = email;
    this.password = password;
    this.confirm = confirm;
    this.firstName = firstName || "";
    this.lastName = lastName || "";
  }
}
export class RegistersModel {
  public firstName?: string;
  public lastName?: string;
  public email?: string;
  public password?: string;
  public confirm?: string;

  public constructor(
    email?: string,
    password?: string,
    confirm?: string,
    firstName?: string,
    lastName?: string
  ) {
    this.email = email;
    this.password = password;
    this.confirm = confirm;
    this.firstName = firstName || "";
    this.lastName = lastName || "";
  }
}
export class LoginModel {
  public email?: string;
  public password?: string;
  public clientType?: ClientType;

  public constructor(email?: string, password?: string, clientType?: ClientType) {
    this.email = email;
    this.password = password;
    this.clientType = clientType;
  }
}
export class CredentialsModel {
  public email?: string;
  public password?: string;
  public clientType?: ClientType;

  public constructor(email?: string, password?: string, clientType?: ClientType) {
    this.email = email;
    this.password = password;
    this.clientType = clientType;
  }
}
export class UserModel {
  public token?: string;
  public email?: string;
  public name?: string;
  public clientType?: ClientType;

  public constructor(token?: string, email?: string, name?: string, clientType?: ClientType) {
    this.token = token;
    this.email = email;
    this.name = name;
    this.clientType = clientType;
  }
}

export class LoginRequestModel {
  public id?: number;
  public name?: string;
  public email?: string;
  public password?: string;
  public clientType?: ClientType;

  public constructor(
    id?: number,
    name?: string,
    email?: string,
    password?: string,
    clientType?: ClientType
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.clientType = clientType;
  }
}

export class CredentialsRegisterModel {
  public email?: string;
  public password?: string;

  public constructor(email?: string, password?: string) {
    this.email = email;
    this.password = password;
  }
}

export class LoginInformationModel {
  public userId?: number;
  public name?: string;
  public clientType?: ClientType;
  public time?: Date;
  public email?: string;
  public token?: string;

  public constructor(userId?: number, name?: string, clientType?: ClientType, time?: Date, email?: string, token?: string){
    this.userId = userId;
    this.name = name;
    this.clientType = clientType;
    this.time = time;
    this.email = email;
    this.token = token;
  }

}

export enum ClientType {
    ADMIN = 'ADMIN',
    COMPANY = 'COMPANY',
    CUSTOMER = 'CUSTOMER',
}