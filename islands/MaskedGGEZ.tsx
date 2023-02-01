import { useEffect, useState } from "preact/hooks";

export default function MaskedGGEZ({lang}:{lang: string}) {
    const [ggez, setMask] = useState("ggez");
    let localUrl = "/api";
  // Set up an interval to update the `now` date every second with the current
  // date as long as the component is mounted.
  useEffect(() => {
    fetch(localUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error");
      }
      return response.text();
    })
    .then((data) => {
      const maskedMessage = JSON.parse(data)[lang]
      setMask(maskedMessage);
    })
  }, []);
  return <span>{ggez}</span>;
}