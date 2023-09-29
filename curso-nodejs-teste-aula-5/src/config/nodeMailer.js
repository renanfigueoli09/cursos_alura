import nodemailer from 'nodemailer';

const enviarEmail = async (para, assunto, mensagem) => {
  try {
    const testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    const mailOptions = {
      from: '"Fred Foo" <foo@example.com>',
      to: para,
      subject: assunto,
      text: mensagem,
    };

    const info = await transporter.sendMail(mailOptions);

    return info;
  } catch (error) {
    throw new Error('Erro ao enviar o e-mail.');
  }
};

export default enviarEmail;
