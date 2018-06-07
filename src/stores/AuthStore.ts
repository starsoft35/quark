import { action, observable } from 'mobx';
// import { storage } from '../utils/helper';

class AuthStore {

  @observable authed: boolean;

  constructor(authed: boolean = true) {
    this.authed = authed;
  }

  @action setAuthed = (authed: boolean) => {
    this.authed = authed;
  }

}

export default AuthStore;
