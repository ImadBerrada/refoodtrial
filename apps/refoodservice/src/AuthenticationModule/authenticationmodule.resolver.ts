import * as graphql from "@nestjs/graphql";
import { AuthenticationModuleService } from "./authenticationmodule.service";

export class AuthenticationModuleResolver {
  constructor(protected readonly service: AuthenticationModuleService) {}
}
