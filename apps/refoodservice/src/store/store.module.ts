import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { StoreModuleBase } from "./base/store.module.base";
import { StoreService } from "./store.service";
import { StoreController } from "./store.controller";
import { StoreResolver } from "./store.resolver";

@Module({
  imports: [StoreModuleBase, forwardRef(() => AuthModule)],
  controllers: [StoreController],
  providers: [StoreService, StoreResolver],
  exports: [StoreService],
})
export class StoreModule {}
