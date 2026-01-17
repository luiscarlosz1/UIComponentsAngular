export interface EmployeeFormModel {
  names: string;
  lastNames: string;
  curp: string;
  rfc: string;
  nationality: string;
  birthDate: Date | string;

  email: string;
  phone: string;
  country: string;
  city: string;

  contractType: string;
  role: string;
  startDate: Date | string;

  availabilityRange: string;
  shift: string;

  medicalInsurance: boolean;
  remoteWork: boolean;
  bonus: boolean;

  comments: string;
}