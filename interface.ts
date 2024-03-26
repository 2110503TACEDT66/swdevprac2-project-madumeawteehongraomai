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

  interface UserItem{
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

interface CompanyJson{
  success:boolean;
  count:number;
  pagination:object;
  data:CompanyItem;
}