export interface ITrabajo {
  precio: number;
  nombre: string;
  isChecked: boolean;

}

export interface IBudget{
  [x: string]: any;
  id: number;
  pressupuesto: string;
  cliente: string;
  web: boolean | string;
  seo?: boolean | string;
  ads?: boolean | string;
  paginas?: number;
  idiomas?: number;
  fecha: number;
  total: number;
}
