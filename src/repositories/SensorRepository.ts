// src/repositories/SensorRepository.ts
import prisma from "../../prisma/client/index";

export class SensorRepository {
  async createSensor(data: any) {
    return await prisma.sensor.create({
      data,
    });
  }

  async getAllSensors() {
    return await prisma.sensor.findMany();
  }

  async getSensorById(id: string) {
    return await prisma.sensor.findUnique({
      where: { id },
    });
  }

  async updateSensor(id: string, data: any) {
    return await prisma.sensor.update({
      where: { id },
      data,
    });
  }

  async deleteSensor(id: string) {
    return await prisma.sensor.delete({
      where: { id },
    });
  }
}
