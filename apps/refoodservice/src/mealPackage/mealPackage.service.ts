import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MealPackageServiceBase } from "./base/mealPackage.service.base";

@Injectable()
export class MealPackageService extends MealPackageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
