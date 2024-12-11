import * as graphql from "@nestjs/graphql";
import { ReservationManagementModuleService } from "./reservationmanagementmodule.service";

export class ReservationManagementModuleResolver {
  constructor(protected readonly service: ReservationManagementModuleService) {}
}
