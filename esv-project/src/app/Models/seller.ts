export interface ISeller {
  name: {
    first:string
    last:string
  };
  email: string;
  password: string;
  phone?: string;
  gender?:'male'|'female';
  role?:'user'|'seller'|'admin';
}
