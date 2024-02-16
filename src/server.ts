import fastify from "fastify";
import { createSorcerer } from "./wizardry/create-sorcerer";
import { createSpell } from "./wizardry/create-spell";
import { viewSpells } from "./wizardry/view-spells";
import { viewSorcerers } from "./wizardry/view-sorcerers";

const middleAge = fastify();
const port: string | number = process.env.PORT || 3000;

middleAge.register(createSorcerer);
middleAge.register(viewSorcerers);
middleAge.register(createSpell);
middleAge.register(viewSpells);

middleAge.listen(
  {
    port: Number(port),
  },
  (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Middle age is upon us: ${port} 🏰🧙‍♂️🔮`);
  },
);
