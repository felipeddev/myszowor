import { FastifyInstance } from "fastify";
import { aretusa } from "../continent/aretusa";
import { z } from "zod";

export async function viewSorcerers(middleAge: FastifyInstance): Promise<void> {
  middleAge.get("/sorcerers", async (request, reply) => {
    try {
      const sorcerersZodQueryParams = z.object({
        sorcererIdentity: z.string().optional(),
      });

      const { sorcererIdentity } = sorcerersZodQueryParams.parse(request.query);

      if (sorcererIdentity) {
        const sorcererExists = await aretusa.sorcerer.findUnique({
          where: {
            identity: sorcererIdentity,
          },
        });

        if (!sorcererExists) {
          return reply.status(404).send({ error: "Sorcerer not found" });
        }

        return reply.status(200).send({ sorcerer: sorcererExists });
      }

      const sorcerers = await aretusa.sorcerer.findMany();
      return reply.status(200).send(sorcerers);
    } catch (err) {
      return reply.status(400).send({ error: err.message });
    }
  });
}
