interface Info {
  id : number;
  name: string;
  email: string;
}

interface AdminInfo extends Info {
  isAdmin: boolean;
}

export type { Info, AdminInfo };