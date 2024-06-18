import { Module } from "@nestjs/common";
import { StoreManagementModuleService } from "./storemanagementmodule.service";
import { StoreManagementModuleController } from "./storemanagementmodule.controller";
import { StoreManagementModuleResolver } from "./storemanagementmodule.resolver";

@Module({
  controllers: [StoreManagementModuleController],
  providers: [StoreManagementModuleService, StoreManagementModuleResolver],
  exports: [StoreManagementModuleService],
})
export class StoreManagementModuleModule {}
