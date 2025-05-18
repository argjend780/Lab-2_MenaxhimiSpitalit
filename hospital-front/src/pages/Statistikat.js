import React, { useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useDispatch, useSelector } from "react-redux";

import { getQytetiCount } from '../actions/QyteteAction';
import { getSpitaliCount } from '../actions/SpitaliAction';
import { getPacinetCount } from '../actions/PacinetActions';

const COLORS = ["#F59E0B", "#38BDF8"];

export default function Statistikat() {
  const dispatch = useDispatch();

  // Merr të dhënat nga Redux
  const qytetiCount = useSelector((state) => state.qytetiReducerContent.count?.count || 0);
  const spitaliCount = useSelector((state) => state.spitaliReducerContent.count?.count || 0);


  // Thirr API-të sapo të ngarkohet komponenti
  useEffect(() => {
    dispatch(getQytetiCount());
    dispatch(getSpitaliCount());
  }, [dispatch]);

  // Përgatit të dhënat për grafikun
  const data = [
    { name: "qyteti", value: qytetiCount },
    { name: "spitalet", value: spitaliCount }
  ];

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-1">
        Spitali vs Qyteti
      </h2>
      <div className="h-1 w-24 bg-amber-500 mb-4 rounded-full"></div>

      <PieChart width={400} height={200}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="top" align="center" />
      </PieChart>
    </div>
  );
}
