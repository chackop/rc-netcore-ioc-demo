import "reflect-metadata";
import { Container } from "inversify";
import { CounterService } from "./services/CounterService";
import { LocalhostWeatherService } from "./services/LocalhostWeatherService";

const TYPES = {
  IWeatherService: Symbol.for("IWeatherService"),
};

let container = new Container();

container.bind(CounterService).toSelf().inSingletonScope();
// Original Fetch that can be transient with dedicated instances
container.bind(TYPES.IWeatherService).to(LocalhostWeatherService);
// Using Cache
// container.bind(TYPES.IWeatherService).toSelf(CachedWeatherService).inSingletonScope();

export { container, TYPES };
