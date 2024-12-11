import * as graphql from "@nestjs/graphql";
import { OrderModuleService } from "./ordermodule.service";

export class OrderModuleResolver {
  constructor(protected readonly service: OrderModuleService) {}
}
