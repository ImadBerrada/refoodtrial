import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MealPackageModuleBase } from "./base/mealPackage.module.base";
import { MealPackageService } from "./mealPackage.service";
import { MealPackageController } from "./mealPackage.controller";
import { MealPackageResolver } from "./mealPackage.resolver";

@Module({
  imports: [MealPackageModuleBase, forwardRef(() => AuthModule)],
  controllers: [MealPackageController],
  providers: [MealPackageService, MealPackageResolver],
  exports: [MealPackageService],
})
export class MealPackageModule {}
