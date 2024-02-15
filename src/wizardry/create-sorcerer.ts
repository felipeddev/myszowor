import { FastifyInstance } from "fastify";
import { z } from "zod";
import { aretusa } from "../continent/aretusa";

export async function createSorcerer(
  middleAge: FastifyInstance
): Promise<void> {
  middleAge.post("/sorcerer/create", async (request, reply) => {
    const createSorcererZodBody = z.object({
      identity: z.string().min(3).max(255),
      name: z.string().min(3).max(255),
      age: z.number().int().positive(),
      email: z.string().email(),
    });

    try {
      const { identity, name, age, email } = createSorcererZodBody.parse(
        request.body
      );

      const sorcerer = await aretusa.sorcerer.create({
        data: {
          identity,
          name,
          age,
          email,
        },
      });

      return reply.status(201).send({ sorcererId: sorcerer.id });
    } catch (error) {
      return reply.status(400).send({ error: error.message });
    }
  });
}
