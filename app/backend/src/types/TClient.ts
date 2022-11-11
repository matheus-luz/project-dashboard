export type TClient = {
  id: number,
  first_name: string,
  last_name: string,
  email: string, 
  gender: string, 
  company_id: number, 
  city_id: number, 
  title_id: number
};

export type TClientUpdate = {
  email: string, 
  gender: string, 
  companyId: number, 
  cityId: number, 
  titleId: number
};