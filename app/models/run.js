let latitude;
let longitude;
URL = "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDz4oPRDA5oeIdo4PP4wmowCqWxiewevoc"


function createRun(){
  let id = 0
  return class {
    constructor(userId, startPoint, endPoint, beginTime, endTime){
      this.userId = userId;
      this.startPoint = startPoint;
      this.endPoint = endPoint;
      this.beginTime = beginTime;
      this.endTime = endTime;
      this.id = ++id;
      store.runs.push(this);
      this.start = function (){
        console.log("fetching start location!")
        fetch(URL)
          .then((resp) => resp.json()) // Transform the data into json
          //JSON.stringify() ????
          .then(data => {
            console.log(data)
            // let latitude =
            // let longitude =
            // let startPoint =
          })
          .catch(function(err) {
            console.log(err)
        });
      }
    }
    user(){
      return User.find(this.userId)
    }
    static find(id){
      return store.runs.filter((run) => run.id == id)[0]
    }
  }
}

let Run = createRun()
let user = new User('jess')
let secondUser = new User('jeff')
let run = new Run(user.id)
let secondrun = new Run(user.id)
let thirdrun = new Run(secondUser.id)
let fourthRun = new Run(secondUser.id)


function calculateDistance(){
  // startPoint
  // endPoint
}
