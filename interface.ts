interface BookingItem {
    company: string;
    position: string;
    user:string;
    intvDate: Date;
}

interface BookingJson {
  success: boolean;
  count: number;
  data: BookingItem[]
  }

 export interface UserItem{
    _id: string;
    name: string;
    tel: string;
    email: string;
    role: string;
    token: string;
}

interface CompanyItem{
  map(arg0: (CompanyItems: CompanyItem) => React.JSX.Element): React.ReactNode;
  _id:string;
  name: string;
  address: string;
  website: string;
  description: string;
  tel: string;
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
