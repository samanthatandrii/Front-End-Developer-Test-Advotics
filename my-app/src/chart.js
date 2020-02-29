import React, { PureComponent } from 'react';
import {ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line} from 'recharts';

const data = [
    {name: 'Jan 12', Gross: 21000, Nett: 19000, APV: 17000, UPT: 7.98},
    {name: 'Tue', Gross: 29000, Nett: 22000, APV: 16000, UPT: 9.00},
    {name: 'Wed', Gross: 22000, Nett: 19800, APV: 15500, UPT: 8.66},
    {name: 'Thu', Gross: 19000, Nett: 17800, APV: 14000, UPT: 7.08},
    {name: 'Fri', Gross: 14900, Nett: 15000, APV: 12181, UPT: 6.71},
    {name: 'Sat', Gross: 19800, Nett: 17000, APV: 14500, UPT: 7.11},
    {name: 'Sun', Gross: 15000, Nett: 14200, APV: 11100, UPT: 5.94},
];

export default class Chart extends PureComponent {
//   static jsfiddleUrl = 'https://jsfiddle.net/alidingling/90v76x08/';

    render() {
        return (
            <ComposedChart width={500} height={300} data={data} margin={{top: 20, right: 20, left: 20, bottom: 20}}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <Legend />
                <Bar dataKey="Gross" stackId="a" barSize={15} fill="#289E45" />
                <Bar dataKey="Nett" stackId="a" barSize={15} fill="#37B04C" />
                <Bar dataKey="APV" stackId="a" barSize={15} fill="#7AE28C" />
                <Bar dataKey="UPT" stackId="a" barSize={15} fill="#707070" />
                <Line type="monotone" dataKey="Gross" stroke="#FFE854" />
            </ComposedChart>
        );
    }
}
