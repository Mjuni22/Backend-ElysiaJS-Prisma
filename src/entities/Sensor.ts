export class Sensor {
  id: string | undefined;
  constructor(
    public pm10: number,
    public pm25: number,
    public so2: number,
    public co: number,
    public o3: number,
    public no2: number,
    public max: number,
    public critical: string,
    public category: string,
    public location: string
  ) {}

  static validate(data: any) {
    // Validation logic
    if (
      !data.pm10 ||
      !data.pm25 ||
      !data.so2 ||
      !data.co ||
      !data.o3 ||
      !data.no2
    ) {
      throw new Error("Invalid sensor data");
    }
  }
}
