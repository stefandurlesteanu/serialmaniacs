import React, { useContext, useEffect, useState } from "react";
import { SerialContext } from "./SerialContext";
import RandomSerials from "./components/RandomSerials";

export default function Home() {
  const { loadedSerial, loadingData } = useContext(SerialContext);
  const [serial] = loadedSerial;
  const [, setLoading] = loadingData;
  const [load, setLoad] = useState(false);
  console.log(serial);

  useEffect(() => {
    function waitForElement() {
      if (
        typeof serial !== "undefined" &&
        serial != null &&
        serial.length != null &&
        serial.length > 0
      ) {
        setLoad(false);
      } else {
        setTimeout(waitForElement, 250);
      }
    }

    waitForElement();
  }, [load, serial, setLoading]);

  return (
    <div>
      <RandomSerials />
      {load ? (
        <h1>'Loading ...'</h1>
      ) : (
        <>
          {serial.map((ser) => (
            <div key={ser.id}>
              <p>{ser.name}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
