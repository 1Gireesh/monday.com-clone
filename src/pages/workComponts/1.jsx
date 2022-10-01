import { Button } from "@chakra-ui/react";
import React from "react";
import "../../css/work.css";
export default function One() {
  return (
    <div className="pg1w">
      <div className="h1">
        <div>
          <h3>Good evening, Ubuntu!</h3>
          <h2>Be proud of what you've done today!</h2>
        </div>
        <img
          src="https://cdn.monday.com/images/homepage-desktop/header-background-v2.svg"
          alt=""
        />
        <div className="spc"></div>
        <h3>Give feedback</h3>
        <Button colorScheme="blue">quick search</Button>
      </div>
      <div>
        <h1 id="h2">Recently visited</h1>
      </div>
    </div>
  );
}
