export default class Todo {

  constructor(
    public id?: number
    public name: {
      firstName: string,
      lastName: string,
      middleName: []
    }
  ) {
    if ( id == undefined ) {
      this.id = Date.now();
    }
  }
}
