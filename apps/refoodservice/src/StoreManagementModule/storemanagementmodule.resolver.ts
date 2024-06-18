import * as graphql from "@nestjs/graphql";
import { StoreManagementModuleService } from "./storemanagementmodule.service";

export class StoreManagementModuleResolver {
  constructor(protected readonly service: StoreManagementModuleService) {}
}
