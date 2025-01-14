import { Contact, Lane, Notification, Prisma, Role, Tag, Ticket, User } from "@prisma/client";
import { _getTicketsWithAllRelations, getAuthUserDetails, getUserPermissions } from "./queries";
import { db } from "./db";
import { z } from "zod";

import Stripe from "stripe";

export type NotificationWithUser =
  | ({
      User: {
        id: string;
        name: string;
        avatarUrl: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
        role: Role;
        agencyId: string | null;
      };
    } & Notification)[]
  | undefined;

export type PricesList = Stripe.ApiList<Stripe.Price>;

export type TicketDetails = Prisma.PromiseReturnType<typeof _getTicketsWithAllRelations>;

export type AuthUserWithAgencySidebarOptionsSubAccounts = Prisma.PromiseReturnType<
  typeof getAuthUserDetails
>;

export type UserWithPermissionsAndSubAccounts = Prisma.PromiseReturnType<typeof getUserPermissions>;
