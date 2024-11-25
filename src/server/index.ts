import cors from "@elysiajs/cors";
import { logger } from "@tqman/nice-logger";
import { Elysia } from "elysia";
import { helmet } from "elysia-helmet";
import { rateLimit } from "elysia-rate-limit";
import SensorRoutes from "../routes/SensorRoutes";

const app = new Elysia();

app
  .use(
    rateLimit({
      max: 5,
      errorResponse: new Response("Too many requests", { status: 429 }),
    })
  )
  .use(cors())
  .use(helmet())
  .use(logger())
  .use(SensorRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running on http://localhost:3000");
});
