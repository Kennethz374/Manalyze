import React from 'react';
import { Chart, Geom, Axis, Tooltip, Coord, Legend } from 'bizcharts';

export default class Pie extends React.Component {
  render() {
    const data = [
      { item: 'Revenue', count: 40, percent: 0.4 },
      { item: 'Expenses', count: 21, percent: 0.21 },
      { item: '3', count: 17, percent: 0.17 },
      { item: '4', count: 13, percent: 0.13 },
      { item: '5', count: 9, percent: 0.09 },
    ];

    const cols = {
      percent: {
        formatter: val => (val = `${val * 100}%`),
      },
    };

    return (
      // <div>
      //   <Chart
      //     width={600}
      //     height={window.innerHeight}
      //     data={data}
      //     scale={cols}
      //     padding="auto"
      //     forceFit
      //     onGetG2Instance={(chart) => {
      //       // 饼图绘制多次会导致setSelected处理不生效，延时hack一下fixed
      //       setTimeout(() => {
      //         // 设置默认选中
      //         const geom = chart.get('geoms')[0]; // 获取所有的图形
      //         console.log(geom);
      //         const items = geom.get('data'); // 获取图形对应的数据
      //         console.log(JSON.stringify(items));
      //         geom.setSelected(items[1]);
      //       }, 2000);
      //     }} // 设置选中
      //     onPlotClick={(ev) => {
      //       console.log(ev);
      //     }}
      //   >
      //     <Coord type="theta" radius={0.65} />
      //     <Axis name="percent" />
      //     <Legend position="right" offsetY={-window.innerHeight / 2 + 120} offsetX={-100} />
      //     <Tooltip
      //       showTitle={false}
      //       itemTpl='<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
      //     />
      //     <Geom
      //       type="intervalStack"
      //       position="percent"
      //       color="item"
      //       tooltip={[
      //         'item*percent',
      //         (item, percent) => {
      //           percent = `${percent * 100}%`;
      //           return {
      //             name: item,
      //             value: percent,
      //           };
      //         },
      //       ]}
      //       style={{
      //         lineWidth: 1,
      //         stroke: '#fff',
      //       }}
      //     />
      //   </Chart>
      // </div>
      <h1>123123</h1>
    );
  }
}
