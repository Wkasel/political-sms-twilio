import gql from 'graphql-tag';

export const SAVE_PHONENUMBER = gql`
  mutation savePhoneNumber($phonenumber: String!) {
    savePhoneNumber(phonenumber: $phonenumber) {
      phonenumber
    }
  }
`;

export const SEND_SMS = gql`
  mutation sendSMS($to:String,$body:String) {
    sendSMS(to:$to,body:$body) {
      to
      body
    }
  }
`;

