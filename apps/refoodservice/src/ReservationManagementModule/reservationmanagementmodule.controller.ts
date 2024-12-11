import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ReservationManagementModuleService } from "./reservationmanagementmodule.service";

@swagger.ApiTags("reservationManagementModules")
@common.Controller("reservationManagementModules")
export class ReservationManagementModuleController {
  constructor(protected readonly service: ReservationManagementModuleService) {}
}
