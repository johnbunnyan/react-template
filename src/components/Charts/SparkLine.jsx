import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';


// class SparkLine extends React.Component {
//   render() {
//     const {id, height, width, color, data, type, currentColor } = this.props;
//   return (
//     <SparklineComponent
//     id={id}
//      height={height}
//      width={width}
//      lineWidth={1}
//      valueType="Numeric"
//      fill={color}
//      border={{color: currentColor, width:2 }}
//     dataSource={data}
//      xName="x"
//      yName="yval"
//      type={type}
//      tooltipSettings={{visible:true, format:'${x}: data${yval}',
//      trackLineSettings:{
//        visible:true
//      }}}
//     >
//       <Inject services={[SparklineTooltip]} />
//     </SparklineComponent>
//   )
//   }
// }
// 싱크퓨전 문서 참고 -> 여기는 함수형 말고 클래스형으로 해야 에러 안남

const SparkLine = ({id, height, width, color, data, type, currentColor }) => {
  return (
    <SparklineComponent
    id={id}
     height={height}
     width={width}
     lineWidth={1}
     valueType="Numeric"
     fill={color}
     border={{color: currentColor, width:2 }}
    dataSource={data}
     xName="x"
     yName="yval"
     type={type}
     tooltipSettings={{visible:true, format:'${x}: data${yval}',
     trackLineSettings:{
       visible:true
     }}}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  )
}

export default SparkLine