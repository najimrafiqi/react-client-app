import React from "react";

import { ICar } from "./demo.ts";
import { car } from "/demo";

interface IProps {
  car: ICar;
}

const CarItem: React.FC<IProps> = (car) => {
  return (
    <div>
      <h1>{carr.color}</h1>
    </div>
  );
};

export default CarItem;
