import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { listRouter } from "./routers/list";
import { taskRouter } from "./routers/task";

export const appRouter = createTRPCRouter({
  list: listRouter,
  task: taskRouter,
});

export type AppRouter = typeof appRouter;
export const createCaller = createCallerFactory(appRouter);
