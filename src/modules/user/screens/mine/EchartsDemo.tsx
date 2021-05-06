import React, { FC, useEffect, useRef } from 'react';
import Echarts, { EchartsHandler } from '@td-design/react-native-echarts';
import { Box, Button, WhiteSpace } from '@td-design/react-native';

const EchartsDemo: FC = () => {
  const chart = useRef<EchartsHandler>(null);

  useEffect(() => {
    setTimeout(() => {
      chart.current?.setOption({
        tooltip: {
          trigger: 'axis',
          formatter: `function (params) {
            if (Array.isArray(params)) {
              return params[0].name;
            }
            return params.name;
          }`,
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line',
          },
        ],
      });
    }, 2000);
  }, []);

  const modifyOptions = () => {
    chart.current?.setOption({
      tooltip: {
        trigger: 'axis',
        formatter: `function (params) {
          if (Array.isArray(params)) {
            return params[0].name + ": " + params[0].data;
          }
          return params.name + ": " + params.data;
        }`,
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [82, 93, 90, 93, 129, 46, 66],
          type: 'line',
        },
      ],
    });
  };

  const clearChart = () => {
    chart.current?.clear();
  };

  return (
    <Box>
      <Echarts ref={chart} />
      <Button title="修改图表数据" onPress={modifyOptions} />
      <WhiteSpace />
      <Button title="清除图表" onPress={clearChart} />
    </Box>
  );
};

export default EchartsDemo;