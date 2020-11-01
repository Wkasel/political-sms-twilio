# Politcal SMS Tools

Upload a CSV, send out texts. :)

given:

```csv
fname,mname,lname,phone
william,Evan,Kasel,+14155551234
```

and

```javascript
Hello ${fname} ${mname} ${lname}
```

yields:

```
Hello William Evan Kasel
```

## Installation

```bash
yarn && yarn start
```

go to `https://localhost:3000` upload a csv
