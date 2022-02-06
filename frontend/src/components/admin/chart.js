import React, { useState } from 'react';
import '../admin/admin.css';
import '../../../node_modules/react-vis/dist/style.css';
import {XYPlot,XAxis,YAxis, LineSeries,VerticalGridLines,HorizontalGridLines, ChartLabel} from 'react-vis';

const info = [
    {x: 0, y: 8},
    {x: 1, y: 5},
    {x: 2, y: 4},
    {x: 3, y: 9},
    {x: 4, y: 1},
    {x: 5, y: 7},
    {x: 6, y: 6},
    {x: 7, y: 3},
    {x: 8, y: 2},
    {x: 9, y: 0}]
const Chart =()=>{
    const[data,setData]= useState(info);
  
    
    
    return (
      <div className="">
        <XYPlot height={300} width={300}>
          <LineSeries data={data} />
          <VerticalGridLines />
  <HorizontalGridLines />
  <spna>products</spna>
  <XAxis />
  <YAxis />
 
        </XYPlot>
      </div>
    );
  }


export default Chart;