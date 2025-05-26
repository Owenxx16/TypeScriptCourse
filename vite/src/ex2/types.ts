interface Info {
  id : number;
  name: string;
  email: string;
}

type AdminInfoList = Info & {
  isAdmin: boolean;
};

export type { Info, AdminInfoList  };