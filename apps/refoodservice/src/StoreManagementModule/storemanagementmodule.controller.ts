import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { StoreManagementModuleService } from "./storemanagementmodule.service";

@swagger.ApiTags("storeManagementModules")
@common.Controller("storeManagementModules")
export class StoreManagementModuleController {
  constructor(protected readonly service: StoreManagementModuleService) {}
}
