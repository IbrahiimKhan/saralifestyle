export interface Contact {
  contact: string;
}

export interface Outlet {
  outletId: number;
  outletName: string;
  address: string;
  businessHours: string;
  businessHoursNote: string;
  contactNumOne: string;
  contactNumTwo: string;
  contactNumThree: string;
  outletImage: string;
  outletDirection: string;
  isActive: string;
  contacts: Contact[];
}
