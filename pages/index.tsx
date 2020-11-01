// import Link from 'next/link'
// @ts-nocheck
import React, { useLayoutEffect, useState } from 'react';
import { Input, Button, Container, Grid } from '@material-ui/core';
import { Uploader } from '../components/Uploader'
import { ProgressBar } from '../components/ProgressBar';

const IndexPage = () => {
  const [csv, setCsv] = useState(``);
  const [data, setData] = useState();
  const [ready, setReady] = useState(false);
  const [totalRecords, setTotalRecords] = useState(0);
  const [processedRecords, setProcessedRecords] = useState(0);

  const onUpload = React.useCallback((csv) => {
    console.log('receiving...', csv)
    setTotalRecords(csv.length);
    setProcessedRecords(0);
  }, [csv]);

  return (
    <Container>
      <Grid>
        <Grid row>
          <h1>Table</h1>
          <Uploader onDrop={onUpload} />
          <hr />
        </Grid>
        <Grid row>
          <ProgressBar numerator={processedRecords} denominator={totalRecords} />
        </Grid>
        <Grid row>
          {ready ? (
            <DataTable
              data={data}
              csvDelimiter=","
              renderCell=""
              tableClassName="table table-striped table-hover"
            />
          ) : null}
        </Grid>
      </Grid>
    </Container>
  )

}

export default IndexPage;