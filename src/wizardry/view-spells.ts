import { FastifyInstance } from "fastify";
import { aretusa } from "../continent/aretusa";
import { z } from "zod";

export async function viewSpells(middleAge: FastifyInstance): Promise<void> {
  middleAge.get("/spells", async (request, reply) => {
    try {
      const spellsZodQueryParams = z.object({
        sorcererIdentity: z.string().optional(),
      });

      const { sorcererIdentity } = spellsZodQueryParams.parse(request.query);

      if (sorcererIdentity) {
        const sorcererExists = await aretusa.sorcerer.findUnique({
          where: {
            identity: sorcererIdentity,
          },
        });

        if (!sorcererExists) {
          return reply.status(404).send({ error: "Sorcerer not found" });
        }

        const spells = await aretusa.spell.findMany({
          where: {
            creatorIdentity: sorcererIdentity,
          },
        });

        return reply.status(200).send(spells);
      }

      const spells = await aretusa.spell.findMany();

      return reply.status(200).send(spells);
    } catch (error) {
      return reply.status(400).send({ error: error.message });
    }
  });
}
