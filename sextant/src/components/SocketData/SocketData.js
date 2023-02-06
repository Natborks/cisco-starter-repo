import React from "react";
import SocketDataWrapper from "../ExhibitWrapper/ExhibitWrapper";

function SocketData() {
  const [socketData, setSocketData] = React.useState({ latency: null });

  React.useEffect(() => {
    let socket = new WebSocket("ws://localhost:55455");

    socket.onopen = (e) => {
      console.log("websocket opened");
    };

    socket.onmessage = (e) => {
      setSocketData({ latency: new Date().getTime() - e.data });
    };

    socket.onerror = (e) => {
      console.log("error", e);
    };

    function handleSocketClose(event) {
      if (event.wasClean) {
        console.log(
          `[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`
        );
      } else {
        console.log("[close] Connection died");
      }

      alert("Error with pylon connection");
    }

    return () => {
      socket.onclose = handleSocketClose;
    };
  }, []);

  return <p>{socketData.latency} </p>;
}

export default SocketData;
