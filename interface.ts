export interface BookingItem {
    _id:string
    company: CompanyItem;
    job_position: JobpositionItem;
    user:string;
    intvDate: string;
}
export interface JobpositionJson{
  success:boolean;
  count:number;
  pagination:object;
  data:JobpositionItem;

}

export interface BookingJson {
  success: boolean;
  count: number;
  data: BookingItem[]
  }

export  interface UserItem{
    _id: string;
    name: string;
    tel: string;
    email: string;
    role: string;
    token: string;
}
export interface JobpositionItem{
  _id: string,
  position: string,
  requirement: string,
  company: string
}
export interface JobpositionResponse{
  success: boolean,
  data: JobpositionItem
}

export interface CompanyItem{
  _id:string;
  name: string;
  address: string;
  website: string;
  description: string;
  tel: string;
  jobpositions: JobpositionItem[]
}

export interface CompanyJson{
  success:boolean;
  count:number;
  pagination:object;
  data:CompanyItem[];
}

export interface CompanyResponse {
  success: boolean,
  data: CompanyItem
}

interface user {
  _id: string,
  name: string,
  tel: string,
  email: string,
  role: string,
  token: string
}

