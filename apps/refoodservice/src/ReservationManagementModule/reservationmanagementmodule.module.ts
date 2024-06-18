import { Module } from "@nestjs/common";
import { ReservationManagementModuleService } from "./reservationmanagementmodule.service";
import { ReservationManagementModuleController } from "./reservationmanagementmodule.controller";
import { ReservationManagementModuleResolver } from "./reservationmanagementmodule.resolver";

@Module({
  controllers: [ReservationManagementModuleController],
  providers: [ReservationManagementModuleService, ReservationManagementModuleResolver],
  exports: [ReservationManagementModuleService],
})
export class ReservationManagementModuleModule {}
