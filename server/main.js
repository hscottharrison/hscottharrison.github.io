const express = require("express");
const cors = require("cors");
const sgMail = require('@sendgrid/mail')

const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.post('/mailer', (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    from: 'hunter@codadevelopment.net',
    to: 'hunter@codadevelopment.net',
    subject: 'NEW SUBMISSION FROM WEBSITE',
    html: `${req.body.name} <br/> ${req.body.email} <br/> ${req.body.phone} <br /> ${req.body.message} `
  }
  sgMail.send(msg)
  .then(() => {
    console.log('email sent!');
    res.status(200);
    res.end()
  })
  .catch((error) => {
    console.log(error);
    res.status(500);
    res.end();
  })
})

app.listen(3000, () => {
  console.log("Listening!");
});