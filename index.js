/* const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log("draw")
    }
} */

//Factory Function
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("Yo");
    },
  };
}

const circle = createCircle(1);

// Constructor Function
function Circle(radius) {
  console.log("this", this);

  //abstraction

  let defaultLocation = { x: 0, y: 0 };
  let computeOptimumLocation = function () {
    // do something
  };
  this.radius = radius;
  this.draw = function () {
    //each tiem draw func is called, these variables, x,y will be reinitialized
    // let x, y;

    computeOptimumLocation(0.1);

    console.log("Constructor");
  };

  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) throw new Error("Invalid Location.");
      defaultLocation = value;
    },
  });
}

//Methods
//Method call is another way to use new Circle(1), empty object is targeted with this in constructor, 1 is passed explicitly
Circle.call({}, 1);

//With apply method, arguments are passed in an array
Circle.apply({}, [1]);

//adding properties to objects
circle.location = { x: 1 };
//acessing properties in object
const propertyName = "location";
circle[propertyName] = { x: 1 };

//deleting object properties
delete circle["location"];

//looping over properties of an object
for (let key in circle) {
  if (typeof circle[key] !== "function") console.log(key, circle[key]);
}

const keys = Object.keys(circle);
console.log(keys);

if ("radius" in circle) console.log("Circle has radius");

const another = new Circle(1);
another.defaultLocation = 1;










