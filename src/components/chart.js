import React, { Fragment } from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";

const Chart = props => {
  return (
    <Fragment>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
      </Sparklines>
    </Fragment>
  );
};

export default Chart;
