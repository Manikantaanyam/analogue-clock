
setInterval(setClock, 1000);

function setClock(){

      const hourshand = document.querySelector("[data-hour]")
      const minuteshand = document.querySelector("[data-minute]")
      const secondshand = document.querySelector("[data-second]")

      const d = new Date()
      const second = d.getSeconds()/60
      const minute = (second+d.getMinutes())/60
      const hour = (minute+d.getHours())/12
     
      setRotation(secondshand,second)
      setRotation(minuteshand, minute)
      setRotation(hourshand, hour)

};

    function  setRotation(element, rotation){
          element.style.setProperty("--rotation", rotation*360)
      }

setClock()


// setInterval(()=>{



//       const d = new Date()
     
//       const second = d.getSeconds()/60
//       const minute = (second+d.getMinutes())/60
//       const hour = (minute+d.getHours())/12

     
     

//      hourshand.style.transform = `rotate(${hour * 360}deg)`;
//      minuteshand.style.transform = `rotate(${minute * 360}deg)`;
//      secondshand.style.transform = `rotate(${second * 360}deg)`;



// }, 1000)