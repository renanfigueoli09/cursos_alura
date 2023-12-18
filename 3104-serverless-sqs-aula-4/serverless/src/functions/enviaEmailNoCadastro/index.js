const nodemailer = require('nodemailer');

const emailTransport = async () => {
  return nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'elizabeth9@ethereal.email',
      pass: 'xVqyycAu7y2s4bwaUZ'
    }
  });
};

module.exports.enviaEmailNoCadastro = async (evento) => {
  const body = JSON.parse(evento.Records[0].body);
  const transport = await emailTransport();
  await transport.sendMail({
    from:'elizabeth9@ethereal.email',
    to: body.to,
    subject: body.subject,
    text: body.text
  });
};