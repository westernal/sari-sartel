import { useEffect } from "react";
import Home from "../components/Home.jsx"
import Start from "../components/Start.jsx"

export default function Index() {

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  useEffect(() => {
    async function startLoaderPreview() {
      await sleep(1500)
      document.getElementsByClassName("start-page")[0].style.display = "none";
      document.getElementsByClassName("home-page")[0].style.display = "block";
    }

    startLoaderPreview();
  },[])

  return (
    <>

    <Start />

    <Home />

    </>
  )
}
