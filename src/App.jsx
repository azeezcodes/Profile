import { Suspense, lazy } from "react";
import pMinDelay from "p-min-delay";
import { useEffect } from "react";

const HomePage = lazy(() => pMinDelay(import("./components/Home"), 3000));

function App() {
     useEffect(() => {
        const threeScript = document.createElement("script");
        threeScript.setAttribute("id", "threeScript");
        threeScript.setAttribute(
           "src",
           "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
        );
        console.log(  document.getElementsByTagName("head")[0].appendChild(threeScript))
        document.getElementsByTagName("head")[0].appendChild(threeScript);
        return () => {
           if (threeScript) {
              threeScript.remove();
           }
        };
     }, []);
   return (
      <Suspense
         fallback={
            <div
               style={{
                  backgroundColor: " #495670",

                  height: "100vh",
                  display: "grid",
                  placeContent: "center",
               }}
            >
               {" "}
               <img
                  src="/assets/images/guys.png"
                  alt="fff"
                  style={{ backgroundColor: " #495670", objectFit: "contain" }}
               />{" "}
            </div>
         }
      >
         <HomePage />
      </Suspense>
   );
}

export default App;
