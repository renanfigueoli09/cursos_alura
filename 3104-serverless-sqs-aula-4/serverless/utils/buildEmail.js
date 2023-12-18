module.exports.buildEmail = (to, subject, text) => {
  return {
    to,
    subject,
    text
  };
};
