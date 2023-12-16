export const prepareDate = (timeStamp: number) => {
  const UTCdate = new Date(timeStamp).toUTCString().split(' ');
  const date = UTCdate.slice(0, 4).join(' ');
  const time = UTCdate.slice(4).join(' ');

  return ({ date, time })
}
