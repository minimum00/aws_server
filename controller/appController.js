const nodemailer = require('nodemailer')



const sendEmail = async(req,res) =>{
    let config = {
        service : 'gmail',
        auth : {
            user:'riteshrai747@gmail.com',
            pass: 'srscpetuxbppvbul'
        }
    }
    // let testAccount = await nodemailer.createTransport(config);

    // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//       host: "smtp.ethereal.email",
//       port: 587,
//       secure: false, // true for 465, false for other ports
//       auth: {
//           user: testAccount.user, // generated ethereal user
//           pass: testAccount.pass, // generated ethereal password
//       },
//   });
    let transporter = nodemailer.createTransport(config)

  let message = {
      from: 'yoyo', // sender address
      to: "riteshrai747@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Successfully Register with us.", // plain text body
      html: "<b>Successfully Register with us.</b>", // html body
    }


  transporter.sendMail(message).then((info) => {
      return res.status(201)
      .json({ 
          msg: "you should receive an email",
          info : info.messageId,
          preview: nodemailer.getTestMessageUrl(info)
      })
  }).catch(error => {
      return res.status(500).json({ error })
  })
}

module.exports = sendEmail