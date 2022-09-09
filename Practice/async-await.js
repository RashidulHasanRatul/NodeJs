const doWork = async () => {
  return "Ratul";
};

doWork()
  .then((result) => {
    console.log("The Result is" + result);
  })
  .catch((e) => {
    console.log(e);
  });
