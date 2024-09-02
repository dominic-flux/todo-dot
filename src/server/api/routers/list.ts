import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { z } from "zod";

export const listRouter = createTRPCRouter({
  fetchLists: protectedProcedure.query(({ ctx }) => {
    return ctx.db.list.findMany({
      where: {
        userId: ctx.session.user.id,
      },
      include: {
        tasks: true,
      },
    });
  }),

  createList: protectedProcedure
    .input(
      z.object({
        listName: z.string().max(25),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.db.list.create({
        data: {
          userId: ctx.session.user.id,
          name: input.listName,
        },
      });
    }),

  updateList: protectedProcedure
    .input(
      z.object({
        listId: z.string(),
        newListName: z.string().max(25),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.db.list.update({
        where: {
          id: input.listId,
        },
        data: {
          name: input.newListName,
        },
      });
    }),

  deleteList: protectedProcedure
    .input(
      z.object({
        listId: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.db.list.delete({
        where: {
          id: input.listId,
        },
      });
    }),
});
