import * as functions from 'firebase-functions'
import * as nodemailer from 'nodemailer'

type contactMail = {
  name: string
  email: string
  content: string
}

const gmailEmail = functions.config().gmail.email
const gmailPassword = functions.config().gmail.password
const adminEmail = functions.config().admin.email

const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
})

const adminContents = (data: contactMail) => {
  return `
name: ${data.name}
email: ${data.email}
content
${data.content}
`
}

const sendMail = functions.https.onCall(async (data: contactMail) => {
  const adminMail = {
    from: gmailEmail,
    to: adminEmail,
    subject: 'contact mail from okaryo.io',
    text: adminContents(data)
  }

  try {
    await mailTransport.sendMail(adminMail)
  } catch(error) {
    console.error('There was an error while sending the email:', error)
  }
})

export default sendMail
