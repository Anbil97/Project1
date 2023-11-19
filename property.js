// Data property
const person = {
    name: 'John'
  };
  
  // Accessor property
  const circle = {
    radius: 5,
    get diameter() {
      return this.radius * 2;
    },
    set diameter(value) {
      this.radius = value / 2;
    }
  };
  
  console.log(circle.diameter); // 10
  circle.diameter = 20;
  console.log(circle.radius); // 10
  