import gql from 'graphql-tag';

export const SAVE_PHONENUMBER = gql`
  mutation savePhoneNumber($phonenumber: String!) {
    savePhoneNumber(phonenumber: $phonenumber) {
      phonenumber
    }
  }
`;

