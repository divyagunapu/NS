const nodemailer = require("nodemailer");


const sendMail = async (req, res) => {

  let testAccount = await nodemailer.createTestAccount();
 // console.log("req", req)
  try {
    if (req.body) {
      // let _to = req.body.To;
      // let _subject = req.body.Subject;
      // let _body = req.body.Body;

      const { Body, Subject, TO } = req.query;
      let transporter = await nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
          user: "gunapuvenkatesh2001@gmail.com",
          pass: "ovdulrohvqakaeri",
        },
      });

      let info = await transporter.sendMail({
        from: '"divya" <gunapuvenkatesh2001@gmail.com>',
        to: TO,
        bcc:'<paluridurga81@gmail.com>',  //ravi0232@gmail.com
        subject: Subject,
        text: Body,
        html: Body,
      })

    //  res.json(info)
      return res.status(200).json({
        success: true,
        status: 200,
        data: info,
        desc: ""
      })
    }
    else {
      return res.status(401).json({
        success: true,
        status: 401,
        data: 'please send inputparms',
        desc: ""
      })
    }
  }
  catch (error) {
    console.log("errorsendemail",error)
    res.status(400).send(error);
  }
}


module.exports = sendMail;