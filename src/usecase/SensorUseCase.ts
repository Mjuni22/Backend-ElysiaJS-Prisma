import { SensorRepository } from "../repositories/SensorRepository";

export class SensorUseCase {
  private sensorRepository: SensorRepository;

  constructor() {
    this.sensorRepository = new SensorRepository();
  }

  async createSensor(data: any) {
    return await this.sensorRepository.createSensor(data);
  }

  async getAllSensors() {
    return await this.sensorRepository.getAllSensors();
  }

  async getSensorById(id: string) {
    return await this.sensorRepository.getSensorById(id);
  }

  async updateSensor(id: string, data: any) {
    return await this.sensorRepository.updateSensor(id, data);
  }

  async deleteSensor(id: string) {
    return await this.sensorRepository.deleteSensor(id);
  }
}
