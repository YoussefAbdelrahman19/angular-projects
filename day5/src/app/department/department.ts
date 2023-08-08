interface IDepartment {
  id: number,
  name: string,
  numberOfEmployes: number

}
export class Department implements IDepartment {
  constructor(public id: number, public name: string, public numberOfEmployes: number, public rate: number) { }
}
