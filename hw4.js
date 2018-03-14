//start of story 4//
let updateWidget = function(data) {
console.log("Got weather data: ", data)
window.myInfo=data
let e=jQuery("#fourthArticle .numberFour");
console.log("does this work?")
let firstUrl=data.response.results[0]
let day=firstUrl["id"];
let days=firstUrl["webTitle"]
console.log(day)
console.log(days)
let night="https://www.theguardian.com/"
let sun= night + day;
let f=jQuery("#get_article");
console.log(sun);
e.html(days);
f.attr("href", sun);
let v=jQuery("#fourthArticle .linkFour")
console.log(v)
v.html("              ")
}
let downdateWidget= function(stuff){
  console.log("What does this bring?", stuff)
  window.myInfo=stuff
let y =jQuery("#fourthArticle .numberFive")
let firstUrls=stuff.response.results[1]
let john=firstUrls["id"];
let johns=firstUrls["webTitle"]
console.log(john)
console.log(johns)
let s="https://www.theguardian.com/"
let t= s + john;
let g=jQuery("#get_another_article");
console.log(t);
y.html(johns);
g.attr("href", t);
let b=jQuery("#fourthArticle .linkFive")
console.log(b)
b.html("              ")

}
let fourthStory=function(info){
  console.log("wazzup")
  let first="http://content.guardianapis.com/search?use-date=last-modified&q=human%20rights&api-key=0fd99092-16f8-4d78-b2e7-73a6793e66e0"
  fetch(first).then(convertToJSON).then(updateWidget).catch(displayError);
  console.log("hey!")
  let second="http://content.guardianapis.com/search?order-by=newest&q=amnesty&api-key=0fd99092-16f8-4d78-b2e7-73a6793e66e0"
  fetch(second).then(convertToJSON).then(downdateWidget).catch(displayError);
}
//story four ends//
//story two begins!!//
let moreUpdate=function(patio){
 console.log("Got weather data: ", patio)
 window.myInfo=patio
 let thisUrl=patio.results[0].multimedia[3].url
 let thisURL=patio.results[0].title
 let thisUrL=patio.results[0].abstract
 let thisURl=patio.results[0].byline
 console.log(thisUrl)
 console.log(thisURL)
 let two=jQuery("#secondArticle .numberTwo")
 two.html(thisURL)
 let three=jQuery("#secondArticle .linkTwo")
 three.html(thisUrL)
 let four=jQuery("#secondArticle .nextTwo")
 four.html(thisURl)
 let div=jQuery("#secondArticle img");
 div.attr('src', thisUrl)
}

 // let anotherUpdate=function(pat){
 //  console.log("Got weather data: ", pat)
 //  window.myInfo=patio
 // let myUrl=pat.results[0].multimedia[3].url
 // let myURL=pat.results[0].title
 // let myUrL=pat.results[0].abstract
 // let myURl=pat.results[0].byline
 // console.log(myUrl)
 // console.log(myURL)
 // let atwo=jQuery("#secondArticle .anotherArticle")
 // atwo.html(thisURL)
 // let athree=jQuery("#secondArticle .anotherArticle")
 // athree.html(thisUrL)
 // let afour=jQuery("#secondArticle .anotherArticle")
 // afour.html(thisURl)
 // let dive=jQuery("#secondArticle img");
 // dive.attr('src', myUrl)
 //
 // let nyStory=function(newyork){
 //   console.log("What is it?", newyork)
 //   window.myInfo=newyork
 // let it=jQuery("#secondArticle .anotherArticle")
 //  console.log("finish this")
 // let fun=  "https://api.nytimes.com/svc/news/v3/content/nyt/health.json?api-key=c57c0ad038444ebb89b9638dde269f1a&limit=2"
 // fetch(fun).then(convertToJSON).then(anotherUpdate).catch(displayError);
 // }

let secondStory= function(info){
    console.log("Got data: ", info)
    window.myInfo=info

  let two=jQuery("#secondArticle .articleColumn2")
    console.log("hihihi")
  let storyURL = "http://api.nytimes.com/svc/news/v3/content/all/health.json?api-key=c57c0ad038444ebb89b9638dde269f1a&limit=1&offset=3"
  //"https://api.nytimes.com/svc/news/v3/content/nyt/health.json?api-key=c57c0ad038444ebb89b9638dde269f1a&limit=2"
  console.log("hiya!")
  fetch(storyURL).then(convertToJSON).then(moreUpdate).catch(displayError);
 }
 // let nyStory=function(newyork){
 //   console.log("What is it?", newyork)
 //   window.myInfo=newyork
 // let it=jQuery("#secondArticle .anotherArticle")
 //  console.log("finish this")
 // let fun=  "https://api.nytimes.com/svc/news/v3/content/nyt/health.json?api-key=c57c0ad038444ebb89b9638dde269f1a&limit=2"
 // fetch(fun).then(convertToJSON).then(anotherUpdate).catch(displayError);
 // }
//end of story 2//



//  let secondStory = function(info) {
//   console.log("hi there!")
//   window.alert= "hello there"
//   let div=jQuery("#firstArticle img");
//   let feature = "http://images6.fanpop.com/image/photos/33900000/Puppy-dogs-33995803-1600-1200.jpg"
//   div.attr('src', feature)
//   console.log("hihihi")
// let storyURL = "https://api.nytimes.com/svc/news/v3/content/nyt/health.json?api-key=c57c0ad038444ebb89b9638dde269f1a&limit=1"
// fetch(storyURL).then(convertToJSON).then(updateWidget).catch(displayError);
// }
//duplicate//
// let secondStory= function(info){
//     console.log("Got data: ", info)
//     window.myInfo=info
//
//   let two=jQuery("#secondArticle .articleColumn2")
//     console.log("hihihi")
//   let storyURL = "https://api.nytimes.com/svc/news/v3/content/nyt/health.json?api-key=c57c0ad038444ebb89b9638dde269f1a&limit=1"
//   two.attr("iframe", storyURL)
//   fetch(storyURL).then(convertToJSON).then(moreUpdate).catch(displayError);
//  }
 //duplicate//
// let thirdStory=function(info){
//     console.log("it worked")
//   let three=jQuery("#thirdArticle img")
//   let storyThreeURL ="https://tools.cdc.gov/api/v2/resources/media/277692.rss">
//     console.log("hee hee")
//   three.attr("src", storyThreeURL)
//   fetch(storyThreeURL).then(convertToJSON).then(thirdStory).catch(displayError)
// // }
//
// let footerStory=function(info){
//     console.log("yelp")
//   let four=jQuery("#footer")
//   let footerStoryURL="https://t.cdc.gov/synd.aspx?url=https://t.cdc.gov/ckt&js=0"
//     console.log("hellloooo")
//   four.attr("src", footerStoryURL)
//   fetch(footerStoryURL).then(convertToJSON).then(footerStory).catch(displayError)}

//  let changeAd = function(info){
//    window.alert= "adadad"
//    let sam=jQuery("#feature .ad");
//    console.log("hiya dumdum!");
//    let joe=  "https://pixel.mathtag.com/click/img?mt_aid=8746348426971009959&mt_id=5311109&mt_adid=195294&redirect=https%3A%2F%2Fcontrol.kochava.com%2Fv1%2Fcpi%2Fclick%3Futm_medium%3Dprogrammatic%26utm_campaign%3Dad_demand_prospecting%26utm_source%3Dinstacart_digital_mediamath%26campaign_id%3Dkoinstacart-web-6kbuuhfat522e67729c5ae%26network_id%3D6683%26site_id%3D280%26mt_uuid%3D836158b2-e3e3-4400-b53c-7dd98dec97d4%26device_id%3Ddevice_id%26creative_strategy%3D2880439%26creative_id%3D5311109%26bid.attr.bid_id%3D"
// sam.attr('src', joe);
//
// }

// //
// // // // //
// // // // // //
let dateWidget = function(datan) {
console.log("Got weather data: ", datan)
window.myInfo=datan
let value=datan.main.temp.toFixed(0)
console.log(value)
let m=jQuery("#weather .card-text")
console.log(m)
m.html("It is " + value + " degrees outside")
let city=datan.name
console.log(city)
let k=jQuery("#weather .card-title")
k.html(city)
//let g=jQuery("#weather img")
console.log("hiya dumdum!")
let div = jQuery("#weather img");
let geturl = "https://openweathermap.org/img/w/"
let day=datan.weather[0];
let weatherPic= day["icon"];
let getWeather = geturl+ weatherPic + ".png"
div.attr('src', getWeather)
console.log(getWeather)
}
let whereAmI = function(test){
  console.log("Is this thing working?")
  window.myInfo=test
  navigator.geolocation.getCurrentPosition(whereAmI);
  let weatherServiceURL = 'https://api.openweathermap.org/data/2.5/weather?'
  // let div=jQuery("#weather");
  let latitude = test.coords.latitude.toFixed(4);
  let longitude = test.coords.longitude.toFixed(4);
  // let latitude = '41.8933';
  // let longitude = '-87.7813';
  let apiKey = 'a2a194b394d92e154a2d7b127321a572';
  weatherServiceURL += 'lat=' + latitude
  weatherServiceURL += '&lon=' + longitude
  weatherServiceURL +='&appid=' + apiKey + '&units=imperial'
fetch(weatherServiceURL).then(convertToJSON).then(dateWidget).catch(displayError);
 }
 jQuery("#get_forecast").on("click", whereAmI);
 jQuery("#home").on("click", secondStory);
 jQuery("#stories").on("click", fourthStory);
// jQuery("#about").on("click", thirdStory);
// jQuery("#healthUpdate").on("click", footerStory)
// jQuery("#ads").on("click", changeAd);
//

//
let convertToJSON = function(rawData) { return rawData.json(); }
let displayError = function(error) { console.debug(error); }





//
// //
// // let whereAmI = function(test){
// // console.log("Is this thing working?")
// // window.myInfo=test
// // navigator.geolocation.getCurrentPosition(whereAmI);
// // let weatherServiceURL = 'https://api.openweathermap.org/data/2.5/weather?'
// // // let div=jQuery("#weather");
// // let latitude = test.coords.latitude.toFixed(4);
// // let longitude = test.coords.longitude.toFixed(4);
// // // let latitude = '41.8933';
// // // let longitude = '-87.7813';
// // let apiKey = 'a2a194b394d92e154a2d7b127321a572';
// // weatherServiceURL += 'lat=' + latitude
// // weatherServiceURL += '&lon=' + longitude
// // weatherServiceURL +='&appid=' + apiKey + '&units=imperial'
//
//
// // // console.log(getWeather)
// // // };
// // // console.log(day)
// // // window.yesInfo=day["icon"]
// // jQuery("#weather img").attr("src", "/img/w/" + weatherPic + ".png")
// // jQuery("weather img").attr("http:openweathermap.org/img/w/01d.png")
//
// // YOUR CODE GOES HERE
// // jQuery("#weather img").attr("src", + "/img/w/04d.png")}
// ///need to change the src so it only contains the root then figure out how to insert the unique icon and add .png
// // Weather icons are provided for you. Sample URL: http://openweathermap.org/img/w/01d.png
// // The very last part ('01d.png') should be obtained from the weather information.
// //
//
// // let getWeather = function(event) {
// //   let latitude = '48.8566';
// //   let longitude = '2.3522';
// //   let apiKey = 'a2a194b394d92e154a2d7b127321a572'; // REPLACE THIS VALUE with your own key.
// //
// //   let weatherServiceURL = 'https://api.openweathermap.org/data/2.5/weather?'
// //   weatherServiceURL += 'lat=' + latitude
// //   weatherServiceURL += '&lon=' + longitude
// //   weatherServiceURL +='&appid=' + apiKey + '&units=imperial'
// // console.log("hi")
//
//
// //
// // let weatherTime = jQuery("#get_forecast");
// // weatherTime.on("click", find);
//
// //   let updateWidget = function(data) {
// //   console.log("Got weather data: ", data)
// //   window.myInfo=data
// //   let value=data.main.temp.toFixed(0)
// // console.log(value)
// //   let e=jQuery("#weather .card-text")
// // console.log(e)
// //   e.html("It is " + value + " degrees Celsius outside")
// //   let city=data.name
// // console.log(city)
// //   let f=jQuery("#weather .card-title")
// //   f.html(city)
// // }
//
// // let findOut = function(outside) {
// //   console.log("hellloooo")
// //   outside.preventDefault();
// //   navigator.geolocation.getCurrentPosition(whereAmI);
// //   console.log("whereAmI?")
// //   window.myInfo(outside)
//
// // let find = function() {
// //   console.log("trying")
// //   outside.preventDefault();
// //   navigator.geolocation.getCurrentPosition(whereAmI);
// //   console.log("is this working?")
// // }
// // fetch(weatherServiceURL).then(convertToJSON).then(updateWidget).catch(displayError);
// // }
// // jQuery("#get_forecast").on("click", whereAmI)
// // jQuery("#get_forecast").on("click", getWeather)
// // let weatherTime = jQuery("#get_forecast")
// // weatherTime.on("click", find);
// ////////////////////////////////////////////////////////////
// // YOU DO NOT NEED TO CHANGE ANY CODE BEYOND THIS POINT
// ////////////////////////////////////////////////////////////
// //
// // let convertToJSON = function(rawData) { return rawData.json(); }
// // let displayError = function(error) { console.debug(error); }
