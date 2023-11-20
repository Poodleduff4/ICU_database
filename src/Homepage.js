import React from "react"
import PatientBox from "./PatientBox";

export default class Homepage extends React.Component {

    render() {
        let patientBoxes = []
        for (let i = 0; i < 21; i++) {
            patientBoxes.push(<PatientBox id={i} patientName='Donald Globermory' bedNumber={i} doctorName='Dr. Marley' prio='#ff0000' patientAge='23' patientSex='M'></PatientBox>)
        }
        return (
            <div className="Boxes">
                {/* nbeeeeep */}
                {patientBoxes}
            </div>

        );
    }
}