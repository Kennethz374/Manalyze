import React from "react";
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  Guide
} from "bizcharts";
import {dataForServicePie} from "../../../helper/dateHelper"
import DataSet from "@antv/data-set";
  const { DataView } = DataSet;
  const { Html } = Guide;

  
export default function ServicePie (props) {
  const data = dataForServicePie(props.bookings,props.services)
  console.log(props.services, data)
  const dv = new DataView();
  dv.source(data).transform({
    type: "percent",
    field: "count",
    dimension: "item",
    as: "percent"
  });
  const cols = {
    percent: {
      formatter: val => {
        val = val * 100 + "%";
        return val;
      }
    }
  };
  return (
    <div>
      <Chart
        height={400}
        data={dv}
        scale={cols}
        padding={[20, 30, 30, 20]}
        forceFit
      >
        <Coord type={"theta"} radius={0.75} innerRadius={0.6} />
        <Axis name="percent" />
        <Legend
          position="right"
          offsetY={-window.innerHeight / 2 + 220}
          offsetX={-100}
        />
        <Tooltip
          showTitle={false}
          itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
        />
        <Guide>
          <Html
            position={["50%", "50%"]}
            html="<div style=&quot;color:#8c8c8c;font-size:1.16em;text-align: center;width: 10em;&quot;>Number Of<br><span style=&quot;color:#262626;font-size:1.5em&quot;>Services</span></div>"
            alignX="middle"
            alignY="middle"
          />
        </Guide>
        <Geom
          type="intervalStack"
          position="percent"
          color="item"
          tooltip={[
            "item*percent",
            (item, percent) => {
              percent = percent * 100 + "%";
              return {
                name: item,
                value: percent
              };
            }
          ]}
          style={{
            lineWidth: 1,
            stroke: "#fff"
          }}
        >
          <Label
            content="percent"
            formatter={(val, item) => {
              return item.point.item ;
            }}
          />
        </Geom>
      </Chart>
    </div>
  )
  }

