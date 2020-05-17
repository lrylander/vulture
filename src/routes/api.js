// dependencies
const express = require('express');
const connect = require('connect-ensure-login');

// models
const User = require('../models/user');
const Food = require('../models/food');

const router = express.Router();

// api endpoints
router.get('/whoami', function(req, res) {
  
  if(req.isAuthenticated()){
    res.send(req.user);
  }
  else{
    res.send({});
  }
});

//ADD POST FOR REPORT HERE?????

//variables
             
var buildingItems = [
  ['1', 42.358018, -71.092498],
  ['2', 42.358782, -71.090035],
  ['3', 42.360358, -71.089264],
  ['4', 42.359237, -71.090825],
  ['5', 42.358776, -71.092958],
  ['6', 42.359237, -71.090825],
  ['6B', 42.360091, -71.094160],
  ['6C', 42.359570, -71.090752],
  ['7', 42.359155, -71.093058],
  ['7A', 42.360091, -71.094160],
  ['8', 42.360023, -71.090750],
  ['9', 42.359737, -71.093696],
  ['10', 42.359767, -71.092017],
  ['11', 42.359589, -71.092836],
  ['13', 42.359897, -71.092742],
  ['14', 42.360871, -71.087605],
  ['16', 42.360465, -71.090525],
  ['17', 42.360127, -71.093491],
  ['18', 42.360105, -71.089814],
  ['24', 42.360630, -71.092113],
  ['26', 42.360927, -71.091239],
  ['31', 42.360372, -71.093068],
  ['32', 42.361610, -71.090635],
  ['33', 42.358018, -71.092498],
  ['34', 42.361099, -71.091925],
  ['35', 42.360386, -71.093940],
  ['36', 42.361412, -71.091700],
  ['37', 42.360734, -71.093268],
  ['38', 42.361129, -71.092346],
  ['39', 42.360893, -71.092753],
  ['41', 42.3609252, -71.09443879999998],
  ['42', 42.3610902, -71.0941024],
  ['43', 42.36071889999999, -71.0936964],
  ['44', 42.3612043, 71.09341410000002],
  ['46', 42.362363, -71.091609],
  ['48', 42.3624148, -71.09069039999997],
  ['50', 42.359367, -71.088313],
  ['51', 42.3585322, -71.08772809999999],
  ['54', 42.360309, -71.089315],
  ['56', 42.360707, -71.089851],
  ['57',42.361147, -71.090080],
  ['62', 42.360228, -71.088673],
  ['64', 42.360391, -71.088137],
  ['66', 42.360980, -71.089070],
  ['68', 42.361527, -71.088622],
  ['76', 42.360091, -71.094160],
  ['E1', 42.3596025, -71.08703659999998],
  ['E2', 42.3595998, -71.08739259999999],
  ['E14', 42.360477, -71.087321],
  ['E15', 42.360860, -71.087604],
  ['E17', 42.361493, -71.087885],
  ['E18', 42.361727, -71.087751],
  ['E19', 42.362158, -71.087972],
  ['E23', 42.361123, -71.086604],
  ['E25', 42.361690, -71.086980],
  ['E38', 42.362154, -71.085853],
  ['E39', 42.362114, -71.085467],
  ['E40', 42.361155, -71.084839],
  ['E48', 42.362068, -71.084696],
  ['E51', 42.360577, -71.084353],
  ['E52', 42.360728, -71.083752],
  ['E53', 42.361219, -71.083601],
  ['E55', 42.361762, -71.083885],
  ['E60', 42.361154, -71.082172],
  ['E70', 42.362811, -71.083508],
  ['N4', 42.362044, -71.092792],
  ['N9', 42.360961, -71.095193],
  ['N10', 42.360878, -71.095456],
  ['N16', 42.361381, -71.094103],
  ['N16A', 42.361264, -71.094366],
  ['N51', 42.362250, -71.097535],
  ['N52', 42.362238, -71.097186],
  ['N57', 42.362990, -71.098532],
  ['NE18', 42.362663, -71.085197],
  ['NE25', 42.3628177, -71.0875671],
  ['NE30', 42.362986, -71.088730],
  ['NE47', 42.363444, -71.092592],
  ['NE48', 42.364039, -71.092710],
  ['NE49', 42.363385, -71.093091],
  ['NE108', 42.363385, -71.093091],
  ['NE125', 42.368135, -71.086984],
  ['NW10', 42.360360, -71.098045],
  ['NW12', 42.360072, -71.096967],
  ['NW13', 42.359945, -71.097224],
  ['NW14', 42.359794, -71.097589],
  ['NW15', 42.359413, -71.098168],
  ['NW16', 42.360078, -71.098757],
  ['NW17', 42.359883, -71.099138],
  ['NW20', 42.359299, -71.098478],
  ['NW21', 42.359064, -71.099146],
  ['NW22', 42.359738, -71.099543],
  ['NW23', 42.359587, -71.099919],
  ['NW30', 42.358667, -71.099989],
  ['NW35', 42.358913, -71.101325],
  ['NW61', 42.362069, -71.098634],
  ['NW86', 42.359924, -71.102137],
  ['W1', 42.3576901, -71.09348949999998],
  ['W2', 42.357253, -71.093797],
  ['W4', 42.357083, -71.094350],
  ['W5', 42.356936, -71.095106],
  ['W7', 42.356777, -71.095857],
  ['W8', 42.355331, -71.096802],
  ['W11', 42.358255, -71.093518],
  ['W15', 42.358330, -71.094146],
  ['W16', 42.358122, -71.095046],
  ['W20', 42.359036, -71.094762],
  ['W31', 42.359612, -71.095265],
  ['W34', 42.358573, -71.096536],
  ['W35', 42.358724, -71.095742],
  ['W45', 42.359109, -71.097550],
  ['W51', 42.356070, -71.098051],
  ['W51C', 42.356196, -71.097223],
  ['W53', 42.356936, -71.097800],
  ['W53A', 42.356982, -71.097347],
  ['W53B', 42.356964, -71.097047],
  ['W53C', 42.356600, -71.098139],
  ['W53D', 42.356913, -71.098308],
  ['W59', 42.358117, -71.099557],
  ['W61', 42.355674, -71.099545],
  ['W70', 42.355195, -71.100621],
  ['W71', 42.354839, -71.101791],
  ['W79', 42.357132, -71.101446],
  ['W84', 42.354359, -71.103459],
  ['W85', 42.355020, -71.103237],
  ['W85ABC', 42.354980, -71.103897],
  ['W85DE', 42.355378, -71.103945],
  ['W85FG', 42.355640, -71.103599],
  ['W85HJK', 42.355452, -71.103148],
  ['W89', 42.355551, -71.104657],
  ['W91', 42.354366, -71.104442],
  ['W92', 42.354936, -71.104604],
  ['W98', 42.353988, -71.106650],
  ['WW15', 42.355352, -71.109427],
  ['WW25', 42.355624, -71.106400],

];


////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
router.post(
  '/report',
  function(req, res) {
    Food.remove({ _id: req.body._id },function(err) {
      if (err){
        console.log("sad");
      }
    });
});
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////


router.get('/user', function(req, res) {
  User.findOne({ _id: req.query._id }, function(err, user) {
    res.send(user);
  });
});

router.get('/food', function(req, res) {
  Food.find({}, function(err, food) {
    res.send(food);
  });
});

router.post(
  '/findfood',
  connect.ensureLoggedIn(), //Ensure user is logged in
  function(req, res) {
//    console.log(req);
//  console.log(req.body);

for (i=0; i<buildingItems.length; i++){
       if (buildingItems[i][0] == req.body.building){
              latitude = buildingItems[i][1],
              longitude = buildingItems[i][2]
       }
}


    const newFood = new Food({
      'creator_id': req.user._id,
      'creator_name': req.user.name,
      'food_type': req.body.food_type,
      'building': req.body.building,
      'room': req.body.room,
      'quantity': req.body.quantity,
      'vendor': req.body.vendor,
      'notes': req.body.notes,
      'latitude': latitude,
      'longitude': longitude,
      'posting_time': new Date().toLocaleTimeString(),
      'food_image': req.body.food_image
      

    });



    newFood.save(function(err,story) {
      User.findOne({ _id: req.user._id },function(err,user) {

        user.save(); // this is OK, because the following lines of code are not reliant on the state of user, so we don't have to shove them in a callback. 
        });
        // configure socketio
      if (err) console.log(err);
    });

    res.redirect(301, '/');
  }
);

module.exports = router;
