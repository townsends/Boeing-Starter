import React from 'react';

function PLDTable(props) {
    let table = PLDTableInnerds(props.table);
    return (
        <div align = "center">
            <h3>PLD Active List</h3>
            {(props.table &&
            <table border='solid black'>
                <tbody>
                    <tr>
                        <th>
                            PldID
                        </th>
                        <th>
                            Model
                        </th>
                        <th>
                            Rev
                        </th>
                        <th>
                            Figure Number
                        </th>
                        <th>
                            Rel
                        </th>
                        <th>
                            Approved Date
                        </th>
                        <th>
                            Figure Type
                        </th>
                        <th>
                            Illustrator
                        </th>
                        <th>
                            Data Author
                        </th>
                        <th>
                            Data Checker
                        </th>
                        <th>
                            PLD Approver
                        </th>
                        <th>
                            Due Date
                        </th>
                        <th>
                            Status
                        </th>
                        <th>
                            PLD Number
                        </th>
                    </tr>
                    {table.rows}
                </tbody>
            </table>) || <p align = "center">No available Documents</p>}
        </div>
    );
}

function PLDTableInnerds(ptable) {
    let table = ptable;
    let rows = table.map((data) =>
        <tr key={data.PldID}>
            <td>
                {data.PldID}
            </td>
            <td>
                {data.Model}
            </td>
            <td>
                {data.Rev}
            </td>
            <td>
                {data.Figure_Number}
            </td>
            <td>
                {data.Rel}
            </td>
            <td>
                {data.Approved_Date}
            </td>
            <td>
                {data.Figure_Type}
            </td>
            <td>
                {data.Illustrator}
            </td>
            <td>
                {data.Data_Author}
            </td>
            <td>
                {data.Data_Checker}
            </td>
            <td>
                {data.PLD_Approver}
            </td>
            <td>
                {data.Due_Date}
            </td>
            <td>
                {data.Status}
            </td>
            <td>
                {data.PLD_Number}
            </td>
        </tr>
    );
    return (
        {rows}
    )
}

export default PLDTable;