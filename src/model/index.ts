export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
}

export interface SearchPanelProps {
  users: User[];
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: SearchPanelProps['param']) => void;
}

export interface Project {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
}

export interface ListProps {
  list: Project[];
  users: User[];
}
