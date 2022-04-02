import { useEffect } from "react";
import CompOne from "../components/CompOne";
import CompTwo from "../components/CompTwo";

export default function Home() {
  const getData = async () => {
    const wait = await fetch("api/users")
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <CompOne />
      <CompTwo />
    </>
  );
}
