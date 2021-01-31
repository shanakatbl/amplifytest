import React from 'react';

import Table from '../DataTable/DataTable';

const headCells = [
    { id: 'date', numeric: false, disablePadding: false, label: 'Date' },
    { id: 'time', numeric: false, disablePadding: false, label: 'Time' },
    { id: 'documentType', numeric: false, disablePadding: false, label: 'Document Type' },
    { id: 'templateType', numeric: false, disablePadding: false, label: 'Template Type' },
    { id: 'download', numeric: false, disablePadding: false, label: 'Download Link' },
];

//need change **********************************************************************************************
function createData(vId, date, time, documentType, templateType, download) {
    return { vId, date, time, documentType, templateType, download };
}

//need change **********************************************************************************************
const rows = [
    createData('v0001', '4/29/2020', '10:13 AM', 'Bill of Materials', 'Template Type 1', 'http://www.link.com'),
    createData('v0002', '5/5/2020', '8:55 PM', 'Bill of Materials', 'Template Type 1', 'http://www.link.com'),
    createData('v0003', '4/18/2020', '11:25 AM', 'Bill of Materials', 'Template Type 2', 'http://www.link.com'),
    createData('v0004', '5/2/2020', '2:30 AM', 'Invoices', 'Template Type 1', 'http://www.link.com'),
    createData('v0005', '7/4/2020', '5:15 AM', 'Invoices', 'Template Type 2', 'http://www.link.com'),
    createData('v0006', '8/28/2020', '12:13 PM', 'Invoices', 'Template Type 2', 'http://www.link.com'),
    createData('v0007', '2/6/2020', '6:25 AM', 'Logistics Documents', 'Template Type 1', 'http://www.link.com'),
    createData('v0008', '4/25/2020', '3:15 PM', 'Logistics Documents', 'Template Type 2', 'http://www.link.com'),
    createData('v0009', '7/4/2020', '4:15 AM', 'Bill of Quantities', 'Template Type 1', 'http://www.link.com'),
    createData('v0010', '9/25/2020', '11:30 AM', 'Bill of Materials', 'Template Type 2', 'http://www.link.com'),
    createData('v0011', '12/14/2020', '3:25 PM', 'Bill of Materials', 'Template Type 1', 'http://www.link.com'),
];

const IncidentResults = () => {
    return (
        <Table rows={rows} headCells={headCells} />
    );
}

export default IncidentResults;