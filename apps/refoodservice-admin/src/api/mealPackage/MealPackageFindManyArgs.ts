import { MealPackageWhereInput } from "./MealPackageWhereInput";
import { MealPackageOrderByInput } from "./MealPackageOrderByInput";

export type MealPackageFindManyArgs = {
  where?: MealPackageWhereInput;
  orderBy?: Array<MealPackageOrderByInput>;
  skip?: number;
  take?: number;
};
