import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const EventGenre = ({ events }) => {
  const [data, setData] = useState([]);

  const getData = () => {
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
    const data = genres.map((genre) => {
      const value = events.filter((ev) => ev.summary.indexOf(genre) >= 0).length;
      return { name: genre, value };
    });
    return data;
  };

  useEffect(() => { setData(() => getData()); }, [events]);


  return (
    <ResponsiveContainer height={}>
      <PieChart width={} height={}>
        <Tooltip />
        <Legend verticalAlign="bottom" />
        <Pie
   
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer >
  );
};

export default EventGenre;