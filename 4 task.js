function ElectricalApliances(name, consumption) {
    this.name = name,
    this.consumptionOfTheElectricalAppliance = consumption;
    this.status = false;
    ElectricalApliances.generalConsumption = 0;

}
ElectricalApliances.prototype.turnOn = function () {
    console.log(` ${this.name} is turned on`);
    if (!this.status) {
        this.status = true;
        ElectricalApliances.generalConsumption += this.consumptionOfTheElectricalAppliance;
    }
}
ElectricalApliances.prototype.turnOff = function () {
    console.log(`${this.name} is turned off`);
    if (this.status) {
        this.status = false;
        ElectricalApliances.generalConsumption -= this.consumptionOfTheElectricalAppliance;
    }
}
const kettle = new ElectricalApliances("kettle", 150);
const laptop = new ElectricalApliances("laptop", 200);
kettle.mission = "Boil";
kettle.backlightCol = "Basic white";
kettle.changeCol = function (color) {
    this.backlightCol = color;
};
laptop.sleepMode = false;
laptop.turnOnSleepMode = function(){
    if (this.sleepMode==true || this.status==false){
        console.log(`Your laptop is aleready in sleep mode or turned off`)
    } else {
        this.sleepMode=true;
        ElectricalApliances.generalConsumption -= (this.consumptionOfTheElectricalAppliance / 2)
    }
}
laptop.turnOffSleepMode = function(){
    if (this.sleepMode==false || this.status==false){
        console.log(`Your laptop is not in sleep mode or turned off`)
    } else {
        this.sleepMode=false;
        ElectricalApliances.generalConsumption += (this.consumptionOfTheElectricalAppliance / 2)
    }
}
laptop.turnOff = function() {
    if (this.sleepMode==false || this.status==false){
    } else {
        this.sleepMode=false;
        ElectricalApliances.generalConsumption += (this.consumptionOfTheElectricalAppliance / 2)
    }
    console.log(`${this.name} is turned off`);
    if (this.status) {
        this.status = false;
        ElectricalApliances.generalConsumption -= this.consumptionOfTheElectricalAppliance;
    }
}