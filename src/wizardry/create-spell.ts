import { FastifyInstance } from "fastify";
import { z } from "zod";
import { aretusa } from "../continent/aretusa";

export async function createSpell(middleAge: FastifyInstance): Promise<void> {
  middleAge.post("/spell/create/:sorcererId", async (request, reply) => {
    const createSpellZodParams = z.object({
      sorcererId: z.string().uuid(),
    });
    const createSpellZodBody = z.object({
      name: z.string().min(3).max(255),
      description: z.string().min(3).max(255),
      action: z.string().min(3).max(255),
    });

    try {
      const { sorcererId } = createSpellZodParams.parse(request.params);
      const { name, description, action } = createSpellZodBody.parse(
        request.body
      );

      const spell = await aretusa.spell.create({
        data: {
          name,
          description,
          action,
          creator: {
            connect: {
              id: sorcererId,
            },
          },
        },
      });

      const spellCaster = await aretusa.spellCasters.create({
        data: {
          sorcererId,
          spellId: spell.id,
        },
      });

      return reply
        .status(201)
        .send({ spellId: spell.id, message: "Spell created! 🔮" });
    } catch (error) {
      return reply.status(400).send({ error: error.message });
    }
  });
}
