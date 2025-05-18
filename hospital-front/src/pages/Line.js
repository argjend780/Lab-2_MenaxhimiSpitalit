import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";
import { useDispatch, useSelector } from "react-redux";
import { getPacinetCount } from "../actions/PacinetActions";

export default function LineChartPacientet7Ditet() {
    const dispatch = useDispatch();

    const pacinetCount = useSelector((state) => state.pacinetReducerContent.count?.count || 0);

    dispatch(getPacinetCount());
  const data = [
    { day: "E Hënë", count: 5 },
    { day: "E Martë", count: 2 },
    { day: "E Mërkurë", count: 3 },
    { day: "E Enjte", count: 6 },
    { day: "E Premte", count: pacinetCount-4 },
    { day: "E Shtunë", count: 5 },
    { day: "E Diel", count: pacinetCount },
  ];

  return (
    <div className="w-full h-[300px] bg-white rounded-2xl shadow-md p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Pacientët - 7 Ditët e Fundit</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="count"
            stroke="#3B82F6"
            strokeWidth={3}
            dot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
