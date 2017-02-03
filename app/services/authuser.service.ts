export class AuthUserService {
  private loginned:boolean = true;

  isLoginned(): boolean{
    return this.loginned;
}
}
