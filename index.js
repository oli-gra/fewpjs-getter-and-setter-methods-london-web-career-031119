// Add your Circle class here
class Circle{
   constructor(radius){
      this.radius = radius
   }

   get diameter() {
      return this.radius * 2
   }

   get circumference() {
      return Math.PI * (this.radius * 2)
   }

   get area() {
      return Math.PI * (this.radius * this.radius)
   }

   set diameter(newDiameter) {
      return this.radius = newDiameter / 2
   }

   set circumference(newCirc) {
      return this.radius = newCirc / (Math.PI * 2)
   }



}