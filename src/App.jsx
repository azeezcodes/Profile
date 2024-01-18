import { Suspense, lazy } from "react";
import pMinDelay from "p-min-delay";

const HomePage = lazy(() => pMinDelay(import("./components/Home"), 3000));

function App() {
  
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
