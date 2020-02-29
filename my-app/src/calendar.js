import React from "react";
import { FormControl, Grid, Row, Col } from "react-bootstrap";
import moment from "moment";
import DateTimeRangeContainer from "react-advanced-datetimerange-picker";
import './calendar.css';

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        let start = moment(new Date());
        let end = moment(start)
        .add(5, "days")
        .subtract(1, "second");
    this.state = {
        start: start,
        end: end
    };

    this.applyCallback = this.applyCallback.bind(this);
    }

    applyCallback(startDate, endDate) {
        console.log("Apply Callback");
        console.log(startDate.format("DD MMMM YYYY"));
        console.log(endDate.format("DD MMMM YYYY"));
        this.setState({
        start: startDate,
        end: endDate
        });
    }

    rangeCallback(index, value) {
        console.log(index, value);
    }

    renderPickerAutoApplySmartModeDisabled(
        ranges,
        local,
        maxDate,
        descendingYears
    ) {
        let val1,val2 = true;
        let value = `${this.state.start.format(
        "DD MMMM YYYY"
        )} - ${this.state.end.format("DD MMMM YYYY")}`;
        return (
        <div id="DateTimeRangeContainerSmartModeDisabled">
            <br />
            <DateTimeRangeContainer
            ranges={ranges}
            start={this.state.start}
            end={this.state.end}
            local={local}
            maxDate={maxDate}
            applyCallback={this.applyCallback}
            rangeCallback={this.rangeCallback}
            descendingYears={descendingYears}
            years={[2010, 2020]}
            >
            <FormControl
                id="formControlsTextB"
                type="text"
                label="Text"
                placeholder="Enter text"
                style={
                    { cursor: "pointer" }
                }
                value={value}
                leftMode={val1}
                noMobileMode ={val2}
            />
            </DateTimeRangeContainer>
            <br />
        </div>
        );
    }

    render() {
        let now = new Date();
        let start = moment(
        new Date(now.getFullYear(), now.getMonth(), now.getDate())
        );
        let end = moment(start)
            .add(1, "days")
            .subtract(1, "seconds");
        let ranges = {
        "Today": [moment(start), moment(end)],
        "Yesterday": [
            moment(start).subtract(1, "days"),
            moment(end).subtract(1, "days")
        ],
        "Last 7 Days": [moment(start).subtract(7, "days"), moment(end)],
        "Last 30 Days": [moment(start).subtract(1, "months"), moment(end)],
        "1 Year": [moment(start).subtract(1, "years"), moment(end)]
        };
        let local = {
        format: "DD MMMM YYYY",
        sundayFirst: true
        };
        let maxDate = moment(end);
        return (
        <div className="container calendar1">
            {this.renderPickerAutoApplySmartModeDisabled(
            ranges,
            local,
            maxDate,
            true,
            true,
            true
            )}
        
        </div>
        );
    }
}
export default Calendar;
