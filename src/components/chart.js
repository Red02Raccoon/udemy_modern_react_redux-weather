import React, { Fragment } from "react";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from "react-sparklines";

import _ from "lodash";

function avarage(data) {
  return _.round(_.sum(data) / data.length);
}

const Chart = props => {
  return (
    <Fragment>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        {avarage(props.data)} {props.units}
      </div>
    </Fragment>
  );
};

export default Chart;
