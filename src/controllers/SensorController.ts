import { SensorUseCase } from "../usecase/SensorUseCase";

const sensorUseCase = new SensorUseCase();

export class SensorController {
  async createSensor({ body }: any) {
    try {
      const newSensor = await sensorUseCase.createSensor(body);
      return newSensor;
    } catch (error) {
      console.error("Error creating sensor:", error);
      return { status: 500, message: "Failed to create new sensor" };
    }
  }

  async getAllSensors() {
    try {
      const sensors = await sensorUseCase.getAllSensors();
      return sensors;
    } catch (error) {
      console.error("Error fetching sensors:", error);
      return { status: 500, message: "Failed to fetch sensors" };
    }
  }

  async updateSensor({ params, body }: any) {
    try {
      const updatedSensor = await sensorUseCase.updateSensor(params.id, body);
      return { success: true, message: "Sensor updated", data: updatedSensor };
    } catch (error) {
      console.error("Error updating sensor:", error);
      return { status: 500, message: "Failed to update sensor" };
    }
  }
  async getSensorById({ params }: any) {
    try {
      const sensor = await sensorUseCase.getSensorById(params.id);
      return sensor;
    } catch (error) {
      console.error("Error fetching sensor:", error);
      return { status: 500, message: "Failed to fetch sensor" };
    }
  }

  async deleteSensor({ params }: any) {
    try {
      const deletedSensor = await sensorUseCase.deleteSensor(params.id);
      return { success: true, message: "Sensor deleted", data: deletedSensor };
    } catch (error) {
      console.error("Error deleting sensor:", error);
      return { status: 500, message: "Failed to delete sensor" };
    }
  }
}
