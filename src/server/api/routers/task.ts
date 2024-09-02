import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { z } from "zod";

export const taskRouter = createTRPCRouter({
  fetchTasks: protectedProcedure.query(({ ctx }) => {
    return ctx.db.task.findMany({
      where: {
        userId: ctx.session.user.id,
      },
    });
  }),

  createTask: protectedProcedure
    .input(
      z.object({
        listId: z.string(),
        description: z.string().max(75),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.db.task.create({
        data: {
          userId: ctx.session.user.id,
          listId: input.listId,
          description: input.description,
        },
      });
    }),

  updateTask: protectedProcedure
    .input(
      z.object({
        taskId: z.string(),
        newDescription: z.string().max(75),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.db.task.update({
        where: {
          id: input.taskId,
        },
        data: {
          description: input.newDescription,
        },
      });
    }),

  deleteTask: protectedProcedure
    .input(
      z.object({
        taskId: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.db.task.delete({
        where: {
          id: input.taskId,
        },
      });
    }),

  updateTaskStatus: protectedProcedure
    .input(
      z.object({
        taskId: z.string(),
        newStatus: z.boolean(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.db.task.update({
        where: {
          id: input.taskId,
        },
        data: {
          isCompleted: input.newStatus,
        },
      });
    }),
});
