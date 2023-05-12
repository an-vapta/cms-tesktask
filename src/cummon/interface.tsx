export interface Column {
  id: any
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

export interface Data {
  name: string;
  code: string;
  population: number;
  size: number;
  density: number;
}

// export interface Column {
//   id: 'name' | 'code' | 'population' | 'size' | 'density' | any;
//   label: any;
//   minWidth: any
// }

// export interface Data {
//   id: any;
//   type: any
// }