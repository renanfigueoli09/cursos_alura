import crypto from "crypto";

export const criaSenhaCriptografada = (senha: string) => {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.createHmac("sha256", salt);

  hash.update(senha);
  return hash.digest("hex");
};
