// @ts-nocheck
import React, { Component } from 'react'

import { CSVReader } from 'react-papaparse'

export const Uploader = ({ onDrop }: { onDrop: (data: any) => any }) => {
    const handleOnDrop = (data) => {
        console.log('---------------------------')
        console.log(data)
        console.log('---------------------------')
        onDrop(data)
    }

    const handleOnError = (err, file, inputElem, reason) => {
        console.log(err)
    }

    const handleOnRemoveFile = (data) => {
        console.log('---------------------------')
        console.log(data)
        console.log('---------------------------')
    }


    return (
        <div>
            <CSVReader
                onDrop={handleOnDrop}
                onError={handleOnError}
                noDrag
                addRemoveButton
                onRemoveFile={handleOnRemoveFile}
            >
                <span>Click to upload.</span>
            </CSVReader>
        </div>
    )
}