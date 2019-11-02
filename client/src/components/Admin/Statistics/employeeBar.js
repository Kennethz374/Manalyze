import React from "react";
import {
  // G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  // Coord,
  // Label,
  // Legend,
  // View,
  // Guide,
  // Shape,
  // Facet,
  // Util
} from "bizcharts";

export default function EmployeeRating(props) {
   
    var data = [];

    for(let element of props.employeesRateing.employees){
      data.push({name:element.name, vote:element.rating})
    }

    var imageMap = {}; 
    for(let element of props.employeesRateing.employees){
      imageMap[element.name]=element.picture
    }




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

