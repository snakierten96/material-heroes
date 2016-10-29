export interface INavItems {
  text: string,
  description?: string,
  icon: string,
  path: string | string[]
};

export const NAVITEMS: INavItems[] = [
  { text: 'Dashboard', description: 'Top heroes', icon: 'home', path: ['/dashboard'] },
  { text: 'Heroes', description: 'List of heroes', icon: 'people', path: ['/heroes'] },
  { text: 'Sample', description: 'A sample item', icon: 'mail', path: ['/path','to','something'] }
];