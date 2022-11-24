export type UUID = string;

export enum CPRFType {
  bullet = "bullet",
  cupom = "cupom",
  ipca = "ipca",
}

export type Date = string;

export type CPRFStatus = "ativa" | "liquidada";

export interface CPRF {
  id: UUID;
  initialAmount: number;
  type: CPRFType;
  status: CPRFStatus;
  rate: number;
  signedDate: Date;
  autoClosingDate: Date;
  closingDate?: Date;
  closingAmount?: number;
}

export const CPRF_TYPE_OPTIONS = ["IPCA", "Cupom", "Bullet"];

export interface IPCABullet {
  currentInstallment: number;
  endDate: Date;
  installmentAmount?: number;
  installmentAmountCdi: number;
  installmentCpdVSCdi?: number;
  installmentProfit?: number;
  rate: number;
  startDate: Date;
  totalBusinessDays: number;
  totalInstallment: number;
}

export interface Bullet {
  currentInstallment: number;
  endDate: Date;
  installmentAmount?: number;
  installmentAmountCdi: number;
  installmentCpdVSCdi?: number;
  installmentProfit?: number;
  rate: number;
  startDate: Date;
  totalBusinessDays: number;
  totalInstallment: number;
  totalDaysNextWed: number;
}

export interface Simulation {
  ipca_bullet: IPCABullet;
  bullet: Bullet;
  ipca_cupom: IPCABullet;
}
