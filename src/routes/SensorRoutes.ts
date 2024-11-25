import { Elysia, t } from "elysia";
import { SensorController } from "../controllers/SensorController";
import { Sensor } from "../entities/Sensor";

interface SensorParams {
  id: string;
}

const sensorController = new SensorController();
const Routes = new Elysia({ prefix: "/sensor" })
  .get("/", async () => "Hello Elysia")
  .post("/create", async ({ body }: { body: Sensor }) => {
    return sensorController.createSensor({ body });
  })
  .get("/getAll", async (): Promise<any> => {
    return sensorController.getAllSensors();
  })
  .get("/:id", async ({ params }: { params: SensorParams }) => {
    return sensorController.getSensorById({ params });
  })
  .patch(
    "/:id",
    async ({
      params,
      body,
    }: {
      params: SensorParams;
      body: Partial<Sensor>;
    }) => {
      return sensorController.updateSensor({ params, body });
    }
  )
  .delete("/:id", async ({ params }: { params: SensorParams }) => {
    return sensorController.deleteSensor({ params });
  });

export default Routes;
