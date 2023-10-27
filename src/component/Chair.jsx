import React from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { booking } from "../redux/slice/chairSlice";
import cn from "classnames";
const Chair = ({ chair }) => {
  const selectChair = (chair) => {
    if (notAllow < 0) {
      disPatch(booking(chair));
    }
  };
  const disPatch = useDispatch();
  const chairBooking = useSelector((state) => state.chair.chairBooking);
  const chairBooked = useSelector((state) => state.chair.chairBooked);
  const notAllow = chairBooked.findIndex((item) => item.soGhe == chair.soGhe);
  console.log(chairBooked);
  return (
    <div
      className={cn("chair", {
        booked: chairBooking.find((item) => item.soGhe == chair.soGhe),
        haveBooked: chairBooked.find((item) => item.soGhe == chair.soGhe),
      })}
      onClick={() => selectChair(chair)}
    >
      {chair.soGhe}
    </div>
  );
};

export default Chair;
