/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { Store } from "./Store";
import { StoreCountArgs } from "./StoreCountArgs";
import { StoreFindManyArgs } from "./StoreFindManyArgs";
import { StoreFindUniqueArgs } from "./StoreFindUniqueArgs";
import { DeleteStoreArgs } from "./DeleteStoreArgs";
import { StoreService } from "../store.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Store)
export class StoreResolverBase {
  constructor(
    protected readonly service: StoreService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Store",
    action: "read",
    possession: "any",
  })
  async _storesMeta(
    @graphql.Args() args: StoreCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Store])
  @nestAccessControl.UseRoles({
    resource: "Store",
    action: "read",
    possession: "any",
  })
  async stores(@graphql.Args() args: StoreFindManyArgs): Promise<Store[]> {
    return this.service.stores(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Store, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Store",
    action: "read",
    possession: "own",
  })
  async store(
    @graphql.Args() args: StoreFindUniqueArgs
  ): Promise<Store | null> {
    const result = await this.service.store(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Store)
  @nestAccessControl.UseRoles({
    resource: "Store",
    action: "delete",
    possession: "any",
  })
  async deleteStore(
    @graphql.Args() args: DeleteStoreArgs
  ): Promise<Store | null> {
    try {
      return await this.service.deleteStore(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
