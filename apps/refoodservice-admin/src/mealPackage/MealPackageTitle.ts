import { MealPackage as TMealPackage } from "../api/mealPackage/MealPackage";

export const MEALPACKAGE_TITLE_FIELD = "id";

export const MealPackageTitle = (record: TMealPackage): string => {
  return record.id?.toString() || String(record.id);
};
