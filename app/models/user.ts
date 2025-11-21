import prisma from "../lib/prisma";

export const UserModel = {
  findAll() {
    return prisma.user.findMany();
  },

  findById(id: number) {
    return prisma.user.findUnique({ where: { id } });
  },

  create(data: { name: string; email: string; password: string }) {
    return prisma.user.create({ data });
  },

  update(id: number, data: Partial<{ name: string; email: string; password: string }>) {
    return prisma.user.update({ where: { id }, data });
  },

  delete(id: number) {
    return prisma.user.delete({ where: { id } });
  }
};