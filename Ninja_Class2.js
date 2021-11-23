$(document).ready(function() {
    function Ninja(name, health = 100) {
        this.name = name;
        this.health = health;
        let speed = 3;
        let strength = 3;
  
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

    Ninja.prototype.kick = function(anotherNinja) {
        if (anotherNinja instanceof Ninja) {
            const damage = anotherNinja.readStrength() * 15;
            anotherNinja.health -= damage;
            console.log(
                anotherNinja.name +
                " was kicked by " +
                this.name +
                " and lost " +
                damage +
                " health!"
        );
        console.log(
            anotherNinja.name +
            "'s health is " +
            anotherNinja.health  +
            ". " +
            this.name +
            "'s health is " +
            this.health +
            "."
        );

        return this;

        } else {
            return "That is not a ninja!";
        }
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
  
    Ninja.prototype.punch = function(anotherNinja) {
        if (anotherNinja instanceof Ninja) {
            anotherNinja.health -= 5;
            console.log(
                anotherNinja.name +
                " was punched by " +
                this.name +
                " and lost 5 health!"
        );
            console.log(
            this.name +
            "'s health is " +
            this.health +
            ". " +
            anotherNinja.name +
            "'s health is " +
            anotherNinja.health +
            "."
        );
        return this;
        }else {
            return "That is not a ninja!";
        }
    };

    const blueNinja = new Ninja("Goemon");
    const redNinja = new Ninja("Bill Gates");
    redNinja.punch(blueNinja);
    
  
    blueNinja.kick(redNinja);
    // -> "Bill Gates was kicked by Goemon and lost 15 Health!"
    // In this case, redNinja Bill Gates lost 15 health because blueNinja Goemon has 1 point of strength
});