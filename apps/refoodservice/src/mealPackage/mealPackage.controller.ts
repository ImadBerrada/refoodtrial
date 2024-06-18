import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MealPackageService } from "./mealPackage.service";
import { MealPackageControllerBase } from "./base/mealPackage.controller.base";

@swagger.ApiTags("mealPackages")
@common.Controller("mealPackages")
export class MealPackageController extends MealPackageControllerBase {
  constructor(
    protected readonly service: MealPackageService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
