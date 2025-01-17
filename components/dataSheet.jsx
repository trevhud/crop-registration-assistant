import React from 'react'

import {
    DataSheetGrid,
    textColumn,
    floatColumn,
    keyColumn
} from 'react-datasheet-grid'

import PropTypes from 'prop-types'

import 'react-datasheet-grid/dist/style.css'

export default function DataSheet({ transcripts }) {

    // const [data, setData] = React.useState([
    //     { greenhouse: true, row: 'Elon', Metric: 'Musk' },
    // ])

    const data = transcripts.map((transcript, index) => {
        return transcript;
    });

    const columns = [
        {
            ...keyColumn('greenhouse', textColumn),
            title: 'Greenhouse',
        },
        {
            ...keyColumn('row', textColumn),
            title: 'Row',
        },
        {
            ...keyColumn('metric', textColumn),
            title: 'Metric',
        },
        {
            ...keyColumn('value', floatColumn),
            title: 'Value',
        },
        {
            ...keyColumn('unit', textColumn),
            title: 'Unit',
        },
    ]

    return (
        <DataSheetGrid
            value={data}
            columns={columns}
        />
    )
}

DataSheet.propTypes = {
    /**
     * Close dialog event handler
     */
    transcripts: PropTypes.array,
}