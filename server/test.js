function delayedMessage() {
    return new Promise(resolve => {
      setTimeout(() => resolve("Hello, World!"), 2000);
    });
  }
  
  async function fetchData() {
    console.log("Fetching...");
    let message = await delayedMessage();
    console.log(message);
  }
  
  fetchData();
  