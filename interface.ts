interface BookingItem {
    company: string;
    position: string;
    user:string;
    intvDate: Date;
}
export interface JobpositionJson{
  success:boolean;
  count:number;
  pagination:object;
  data:JobpositionItem;

}

interface BookingJson {
  success: boolean;
  count: number;
  data: BookingItem[]
  }

  interface UserItem{
    _id: string;
    name: string;
    tel: string;
    email: string;
    role: string;
    token: string;
}
 interface JobpositionItem{
  _id: string,
  position: string,
  requirement: string,
  company: string
}
interface JobpositionResponse{
  success: boolean,
  data: JobpositionItem
}

interface CompanyItem{
  map(arg0: (CompanyItems: CompanyItem) => React.JSX.Element): React.ReactNode;
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
  data:CompanyItem;
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

