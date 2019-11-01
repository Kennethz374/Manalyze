import React from "react";
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util
} from "bizcharts";

export default function Pie() {
   
    var data = [
      {
        name: "Kenneth",
        vote: 10
      },
      {
        name: "Sining",
        vote: 1
      },
      {
        name: "Patrick",
        vote: 3
      },
      {
        name: "Mark",
        vote: 3
      }
    ];
    var imageMap = {
      Kenneth: "https://ca.slack-edge.com/T2G8TE2E5-U2J4W64JE-g91b09e8013e-512",
      Sining: "https://zos.alipayobjects.com/rmsportal/JBxkqlzhrlkGlLW.png",
      Patrick: "https://zos.alipayobjects.com/rmsportal/zlkGnEMgOawcyeX.png",
      Mark: "https://zos.alipayobjects.com/rmsportal/KzCdIdkwsXdtWkg.png"
    };
    const scale = {
      vote: {
        min: 0
      }
    };
    return (
      <div>
        <Chart
          height={400}
          data={data}
          padding={[60, 20, 40, 60]}
          scale={scale}
          forceFit
        >
          <Axis
            name="vote"
            labels={null}
            title={null}
            line={null}
            tickLine={null}
          />
          <Geom
            type="interval"
            position="name*vote"
            color={["name", ["#7f8da9", "#fec514", "#db4c3c", "#daf0fd"]]}
          />
          <Tooltip />
          <Geom
            type="point"
            position="name*vote"
            size={60}
            shape={[
              "name",
              function(name) {
                return ["image", imageMap[name]];
              }
            ]}
          />
        </Chart>
      </div>
    );
  }


