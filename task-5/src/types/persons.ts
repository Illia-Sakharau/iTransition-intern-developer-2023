export type Region = 'en' | 'ru' | 'ge';

export type QueryParams = {
  seed: number;
  page: number;
  size: number;
  ln: Region;
  errNum: number;
}

export type Person = {
  address: string;
  index: number;
  name: string;
  phone: string;
  uuid: string;
}
