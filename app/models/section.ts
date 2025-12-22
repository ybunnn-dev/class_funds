// app/models/section.ts

export interface Section {
  id: number;
  name: string; // Corresponds to the 'block' in your form/DB
  createdAt?: Date | string;
  updatedAt?: Date | string;
}