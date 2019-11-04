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
import {getEmployeesNameAndBookings} from "../../../helper/dateHelper"

export default function EmployeeBar(props) {
  var data = getEmployeesNameAndBookings(props.bookings, props.employees)
  console.log(data);
    var imageMap = {
      Kenneth:"https://images.unsplash.com/photo-1541418950054-c12804e149d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
      Sining: "https://scontent-yyz1-1.cdninstagram.com/vp/d1bed3d9307350d7b783b8f649e653cc/5E383979/t51.2885-15/sh0.08/e35/s640x640/69926372_198128774535221_2316886523191485007_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com&_nc_cat=105",
      Anthony: "https://images.unsplash.com/photo-1533142215-a17cdfb95243?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      Jenny: "https://images.unsplash.com/photo-1475823678248-624fc6f85785?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    };
    const scale = {
      bookings: {
        min: 0
      }
    };
    return (
      <div>
        <Chart
          height={200}
          data={data}
          padding={[60, 20, 40, 60]}
          scale={scale}
          forceFit
        >
          <Axis
            name="bookings"
            labels={null}
            title={true}
            line={null}
            tickLine={null}
          />
          <Geom
            type="interval"
            position="name*bookings"
            color={["name", ["#7f8da9", "#fec514", "#db4c3c", "#daf0fd"]]}
          />
          <Tooltip />
          <Geom
            type="point"
            position="name*bookings"
            size={40}
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


