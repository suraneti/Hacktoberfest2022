export function encode64(str) {
  return Buffer.from(str).toString('base64');
}

export function decode64(base64) {
  return Buffer.from(base64, 'base64').toString('ascii');
}
