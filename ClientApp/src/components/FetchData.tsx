import * as React from "react";
import { RouteComponentProps } from "react-router";
import { resolve } from "inversify-react";
import { WeatherForecastsState } from "../store/WeatherForecasts";
import Forecast from "./Forecast";
import { TYPES } from "../inversify.config";
import { IWeatherService } from "../services/IWeatherService";

export default class FetchData extends React.Component<
  RouteComponentProps<any>,
  WeatherForecastsState
> {
  // @resolve(CachedWeatherService)
  // private weatherService!: CachedWeatherService;

  // Using types
  @resolve(TYPES.IWeatherService)
  private weatherService!: IWeatherService;

  constructor(props: any) {
    super(props);
    this.state = { startDateIndex: 0, forecasts: [], isLoading: false };
  }

  public componentDidMount() {
    this.ensureDataFetched();
  }

  public componentDidUpdate(prevProps: any, prevState: WeatherForecastsState) {
    const startDateIndex = this.props.match.params.startDateIndex || 0;
    if (startDateIndex && this.state.startDateIndex != startDateIndex) {
      this.ensureDataFetched();
    }
  }

  private ensureDataFetched() {
    this.weatherService
      .getWeather()
      .then((data) => data.json())
      .then((json) =>
        this.setState({
          forecasts: json,
          startDateIndex: parseInt(this.props.match.params.startDateIndex),
        })
      );
  }

  public render() {
    return <Forecast {...this.state} />;
  }
}
