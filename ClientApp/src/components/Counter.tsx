import React, { useState } from "react";
import { CounterService } from "../services/CounterService";
import { container } from "../inversify.config";
import { CounterContext } from "../providers/CounterProvider";

const Counter: React.FunctionComponent = () => {
  // using counter service via IOC
  let _counterService = container.get(CounterService);
  const [count, setCount] = useState(_counterService.count);

  // Alternate Using counter context
  //   const { service } = React.useContext(CounterContext);
  //   const [count, setCount] = useState(service ? service.count : 0);

  return (
    <React.Fragment>
      <h1>Counter</h1>

      <p>This is a simple example of a Functional React component using IOC.</p>

      <p aria-live="polite">
        Current count: <strong>{count}</strong>
      </p>

      <button
        type="button"
        className="btn btn-primary btn-lg"
        onClick={() => {
          if (_counterService) {
            _counterService.increment();
            setCount(_counterService.count);
          }
        }}

        // onClick={() => {
        //   if (service) {
        //     service.increment();
        //     setCount(service.count);
        //   }
        // }}
      >
        Increment
      </button>
    </React.Fragment>
  );
};

export default Counter;
