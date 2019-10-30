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

class Pie extends React.Component {
  render() {
    var data = [
      {
        name: "Kenneth",
        vote: 40
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
      Kenneth: "https://zos.alipayobjects.com/rmsportal/mYhpaYHyHhjYcQf.png",
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
}

export default Pie;