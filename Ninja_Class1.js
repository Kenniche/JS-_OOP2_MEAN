$(document).ready(function() {
    function Ninja(name, health = 100) {
        this.name = name;
        this.health = health;
        var speed = 3;
        var strength = 3;
    
        this.readSpeed = function() {
            return speed;
        };
  
        this.readStrength = function() {
            return strength;
        };
        Ninja.prototype.showStats = function() {
            console.log(
            "Name: " +
                this.name +
                ", Health: " +
                this.health +
                ", Speed: " +
                this.readSpeed() +
                ", Strength: " +
                this.readStrength()
            );
            return this;
        };
    }
  
    Ninja.prototype.sayName = function() {
        console.log("My name is " + this.name + "!");
        return this;
    };
  
    Ninja.prototype.drinkSake = function() {
        this.health += 10;
        console.log(this.name + "'s health is " + this.health + ".");
        return this;
    };
  
    var ninja1 = new Ninja("Hyabusa");
    ninja1.sayName();
    // -> "My ninja name is Hyabusa!"
    ninja1.showStats();
    // -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"
    ninja1.drinkSake();
});