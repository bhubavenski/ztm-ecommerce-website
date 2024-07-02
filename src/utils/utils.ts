import { TCategoryMap } from '@/types';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isCategoryMap = (obj: object): obj is TCategoryMap => {
  return obj !== null && obj !== undefined && Object.keys(obj).length > 0;
};
