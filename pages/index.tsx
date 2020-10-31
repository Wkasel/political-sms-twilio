// import Link from 'next/link'
// @ts-nocheck
import React, { useLayoutEffect, useState } from 'react';
import { Input, Button, Container, Grid, TextField, FormControl } from '@material-ui/core';
import { Uploader } from '../components/Uploader'
import { ProgressBar } from '../components/ProgressBar';
import { useMutation } from '@apollo/client';
import { SEND_SMS } from '../utils/data';
// import DDBQ from 'debouncing-batch-queue';

import axios from 'axios';







const IndexPage = () => {
  const [csv, setCsv] = useState(``);
  const [data, setData] = useState();
  const [ready, setReady] = useState(false);
  const [totalRecords, setTotalRecords] = useState(0);
  const [processedRecords, setProcessedRecords] = useState(0);
  const [messageBody, setMessageBody] = useState('')
  const [processing, setProcessing] = useState(false);
  const [status, setStatus] = useState('...')

  // const [
  //   sentMessage,
  //   { loading: mutationLoading, error: mutationError },
  // ] = useMutation(SEND_SMS);


  const onUpload = React.useCallback((csv) => {
    console.log('receiving...', csv)
    setTotalRecords(csv.length);
    setData(csv);

    setProcessedRecords(0);
  }, [csv]);



  const handleSendNow = async () => {
    // const queue = new DDBQ(1000, 5);

    setProcessing(true);
    setStatus('starting...')

    console.log({ data, totalRecords, processedRecords, messageBody })

    await blastItOut().then(() => {
      setProcessing(false)
      setStatus('done!')
    })
    console.log("DONE")
  }

  const blastItOut = async () => {
    return await Promise.all(data.map((r) => {
      try {
        if (r.data[0] !== "") {
          // graphql problems because schema is isomorphic, twilio core is file system only (not browser);
          // scrapping gql to just hotwire into a direct rest request

          // sentMessage({ variables: { to: r.data[4], body: messageBody } })
          let results = `empty number - ${r.data[4]}`
          if (r.data[4] !== '') {
            results = axios.post(`/api/sms`, {
              to: r.data[4],
              body: messageBody
            })
          }

          // const results = data || error;
          console.log({ results })
          return results;
        }
      } catch (e) {
        console.error(e)
      }




    }))
  }


  return (
    <Container>
      <Grid>
        <Grid row>
          <h1>Table</h1>
          <Uploader onDrop={onUpload} />
          <hr />
        </Grid>
        <Grid row>
          <div style={{ minHeight: 300 }}>
            <form>
              <FormControl style={{ width: "100%" }}>
                <TextField id="message-body" label="Message Body" placeholder="Message Body" variant="standard" onChange={(e) => setMessageBody(e.target.value)} multiline />
              </FormControl>
              <FormControl style={{ paddingTop: 20 }}><Button disabled={processing} variant="contained" color="primary" onClick={handleSendNow}>Send now to ( {totalRecords} ) recipients</Button></FormControl>

            </form>
          </div>
        </Grid>
        <Grid row>
          Status: {status}
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