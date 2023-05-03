import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wensday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "Juney",
    "Jule",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = days[props.date.getDay()];
  let month = months[props.date.getMonth()];
  let date = props.date.getDate();

  return (
    <div>
      {day}, {date} {month}
    </div>
  );
}
