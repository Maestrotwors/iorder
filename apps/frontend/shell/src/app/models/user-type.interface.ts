export enum UserTypeEnum {
  Unauthorized = 'unauthorized',
  Customer     = 'customer',
  Supplier     = 'supplier',
  Admin        = 'admin',
}

export type UserType =`${UserTypeEnum}`;
