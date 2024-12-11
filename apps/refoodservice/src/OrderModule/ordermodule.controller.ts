import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { OrderModuleService } from "./ordermodule.service";

@swagger.ApiTags("orderModules")
@common.Controller("orderModules")
export class OrderModuleController {
  constructor(protected readonly service: OrderModuleService) {}
}
