import { useState } from "react";

export function Container({ children, title }) {
  const [shown, setShown] = useState(false);

  return (
    <>
      <div className="container">
        <h1 onClick={() => {setShown(!shown);}}> {title} </h1>
        <div>{shown && children}</div>
      </div>
    </>
  );
}
