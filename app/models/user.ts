// app/models/user.ts

import prisma  from "@/app/lib/prisma"; // Make sure path matches your actual prisma export
import { Prisma } from "@prisma/client";

export const UserModel = {
  findAll() {
    // FIX: Changed 'userClass' to 'section' to match schema
    return prisma.user.findMany({
      include: { section: true },
    });
  },

  findById(id: number) {
    return prisma.user.findUnique({
      where: { id },
      include: { section: true },
    });
  },

  // FIX: specific type for 'data' is safer than 'any'
  // using Prisma.UserCreateInput ensures we don't miss required fields
  create(data: Prisma.UserCreateInput) {
    return prisma.user.create({ 
      data: data 
    });
  },

  update(id: number, data: Prisma.UserUpdateInput) {
    return prisma.user.update({
      where: { id },
      data: data,
    });
  },

  delete(id: number) {
    return prisma.user.delete({ where: { id } });
  },
};