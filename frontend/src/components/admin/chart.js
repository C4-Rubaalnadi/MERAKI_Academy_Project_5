import React, { useState } from "react";
import "../admin/admin.css";
import "../../../node_modules/react-vis/dist/style.css";
import {
  XYPlot,
  XAxis,
  YAxis,
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  ChartLabel,
  VerticalRectSeries,
} from "react-vis";

const info = [
  { x: 0, y: 8 },
  { x: 1, y: 5 },
  { x: 2, y: 4 },
  { x: 3, y: 9 },
  { x: 4, y: 1 },
  { x: 5, y: 7 },
  { x: 6, y: 6 },
  { x: 7, y: 3 },
  { x: 8, y: 2 },
  { x: 9, y: 0 },
];

const Chart = () => {
  const [data, setData] = useState(info);
  const [timestamp, setTimeStamp] = useState(new Date("May 23 2017").getTime());
  const [ONE_DAY, setONE_DAY] = useState(86400000);
  const [data1, setData1] = useState(
    [
      { x0: ONE_DAY * 2, x: ONE_DAY * 3, y: 1 },
      { x0: ONE_DAY * 7, x: ONE_DAY * 8, y: 1 },
      { x0: ONE_DAY * 8, x: ONE_DAY * 9, y: 1 },
      { x0: ONE_DAY * 9, x: ONE_DAY * 10, y: 2 },
      { x0: ONE_DAY * 10, x: ONE_DAY * 11, y: 2.2 },
      { x0: ONE_DAY * 19, x: ONE_DAY * 20, y: 1 },
      { x0: ONE_DAY * 20, x: ONE_DAY * 21, y: 2.5 },
      { x0: ONE_DAY * 21, x: ONE_DAY * 24, y: 1 },
    ].map((el) => ({ x0: el.x0 + timestamp, x: el.x + timestamp, y: el.y }))
  );

  return (
    <div className="chart">
      <div>
        <XYPlot height={300} width={300}>
          <LineSeries data={data} />
          <VerticalGridLines />
          <HorizontalGridLines />
          <spna>products</spna>
          <XAxis />
          <YAxis />
        </XYPlot>
      </div>
      <div>
        <XYPlot
          xDomain={[timestamp - 2 * ONE_DAY, timestamp + 30 * ONE_DAY]}
          yDomain={[0.1, 2.1]}
          xType="time"
          width={300}
          height={300}
        >
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <VerticalRectSeries data={data1} style={{ stroke: "#fff" }} />
        </XYPlot>
      </div>
    </div>
  );
};

export default Chart;
