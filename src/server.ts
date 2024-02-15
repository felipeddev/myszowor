import fastify from "fastify";

const server = fastify();
const port: string | number = process.env.PORT || 3000;

server.listen(
  {
    port: Number(port),
  },
  (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Middle age is upon us: ${port} 🧙‍♂️`);
  }
);
