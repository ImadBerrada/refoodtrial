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
import { Reservation } from "./Reservation";
import { ReservationCountArgs } from "./ReservationCountArgs";
import { ReservationFindManyArgs } from "./ReservationFindManyArgs";
import { ReservationFindUniqueArgs } from "./ReservationFindUniqueArgs";
import { DeleteReservationArgs } from "./DeleteReservationArgs";
import { ReservationService } from "../reservation.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Reservation)
export class ReservationResolverBase {
  constructor(
    protected readonly service: ReservationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Reservation",
    action: "read",
    possession: "any",
  })
  async _reservationsMeta(
    @graphql.Args() args: ReservationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Reservation])
  @nestAccessControl.UseRoles({
    resource: "Reservation",
    action: "read",
    possession: "any",
  })
  async reservations(
    @graphql.Args() args: ReservationFindManyArgs
  ): Promise<Reservation[]> {
    return this.service.reservations(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Reservation, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Reservation",
    action: "read",
    possession: "own",
  })
  async reservation(
    @graphql.Args() args: ReservationFindUniqueArgs
  ): Promise<Reservation | null> {
    const result = await this.service.reservation(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Reservation)
  @nestAccessControl.UseRoles({
    resource: "Reservation",
    action: "delete",
    possession: "any",
  })
  async deleteReservation(
    @graphql.Args() args: DeleteReservationArgs
  ): Promise<Reservation | null> {
    try {
      return await this.service.deleteReservation(args);
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