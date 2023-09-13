function JSClock(date) {

//Getting Time
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    let formattedTime = String(hour % 12);
    if (formattedTime === "0") {
      formattedTime = "12";
    }
    formattedTime += (minute < 10 ? ":0" : ":") + minute;
    formattedTime += (second < 10 ? ":0" : ":") + second;
    formattedTime += hour >= 12 ? " PM" : " AM";
//Getting Date
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    let formattedDate = `${day}-${month}-${year}`;


    // console.log(formattedDate,formattedTime);
    return `${formattedDate} ${formattedTime}`;

    /*
    // To Show Local System Formatted Date & Time
    // return date.toLocaleString();
    // return date.toDateString();
    */
  }
const date = new Date();
console.log(JSClock(date));