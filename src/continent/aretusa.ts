import { PrismaClient } from "@prisma/client";

export const aretusa = new PrismaClient({
  log: ["query", "info", "warn"],
  errorFormat: "pretty",
});
