import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AuthenticationModuleService } from "./authenticationmodule.service";

@swagger.ApiTags("authenticationModules")
@common.Controller("authenticationModules")
export class AuthenticationModuleController {
  constructor(protected readonly service: AuthenticationModuleService) {}
}
