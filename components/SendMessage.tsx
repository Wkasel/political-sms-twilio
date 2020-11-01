import React, { useState } from "react";
import { Container, Input, FormControl, FormLabel, FormGroup, Button } from '@material-ui/core'
import { useMutation } from '@apollo/react-hooks';
import { SAVE_PHONENUMBER } from '../utils'



export const SendSingleMessage = () => {
  const [number, setNumber] = useState("");
  const [body, setBody] = useState("");

  const onSubmit = async (e) => {
    await e.preventDefault();

    const res = await fetch("/api/sendMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ to: number, body: body }),
    });

    const data = await res.json();
    if (data.success) {
      await setNumber("");
      await setBody("");
    } else {
      await setNumber("An Error has occurred.");
      await setBody("An Error has occurred.");
    }
  };

  return (
    <div className="App">
      <Container>
        <h2>Send SMS</h2>
        <form onSubmit={onSubmit}>
          <FormGroup>
            <FormLabel htmlFor="to">To</FormLabel>
            <FormControl>
              <Input
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </FormControl>
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="message">Body</FormLabel>
            <FormControl>
              <Input
                multiline
                rows={3}
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
            </FormControl>
          </FormGroup>
          <Button variant="contained" type="submit">
            Send
          </Button>
        </form>
      </Container>
      {/* {console.log(`Number is ${number} and the Message is ${body}`)} */}
    </div>
  );
}

