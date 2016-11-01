export interface INavItems {
  text: string,
  description?: string,
  icon: string,
  path: string | string[]
};

export const NAVITEMS: INavItems[] = [
  { 
    text: 'Dashboard',
    description: 'Top heroes',
    icon: 'home',
    path: ['/dashboard']
  },
  { 
    text: 'Heroes',
    description: 'List of heroes',
    icon: 'people',
    path: ['/heroes']
  },
  { 
    text: 'Crisis Center',
    description: 'Deail with trouble!',
    icon: 'warning',
    path: ['/crisis-center']
  },
  {
    text: 'Admin',
    description: 'Administration functions',
    icon: 'security',
    path: ['/admin']
  }
];