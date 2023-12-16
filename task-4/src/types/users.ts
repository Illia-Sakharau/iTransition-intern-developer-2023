export type UserInfo = {
  "_id": string;
  "username": string;
  "email": string;
  "password": string;
  "position"?: string
  "lastLogin": number;
  "isActive": boolean;
  "__v": number;
}

export type AuthRespData = {
    token: string;
    user: UserInfo;
}

export type AuthResp = {
  data: AuthRespData;
}

export type LoginReqBody = {
  email: string;
  password: string;
}

export type RegistrationReqBody = {
  username: string;
  email: string;
  password: string;
  position?: string;
}

export type StatusReqBody = {
  emails: string[];
  isActive: boolean;
}
