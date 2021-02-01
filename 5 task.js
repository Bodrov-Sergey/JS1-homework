class ElectricalApliances {
    constructor(name, consumption) {
        this.name = name;
        this.consumptionOfTheElectricalAppliance = consumption;
        this.status = false;
        ElectricalApliances.generalConsumption = 0;
    }
    turnOn() {
        console.log(` ${this.name} is turned on`);
        if (!this.status) {
            this.status = true;
            ElectricalApliances.generalConsumption += this.consumptionOfTheElectricalAppliance;
        }
    }
    turnOff() {
        console.log(`${this.name} is turned off`);
        if (this.status) {
            this.status = false;
            ElectricalApliances.generalConsumption -= this.consumptionOfTheElectricalAppliance;
        }
    }
}
class AplianceWithBacklight extends ElectricalApliances {
    constructor(name, consumption) {
        super(name, consumption);
        this.backlightCol = "Basic white";
    }
    changeCol(color) {
        this.backlightCol = color;
    }
}
class AplianceWithSleepmode extends ElectricalApliances {
    constructor(name, consumption) {
        super(name, consumption);
        this.sleepMode = false;
    }
    turnOnSleepMode() {
        if (this.sleepMode == true || this.status == false) {
            console.log(`Your laptop is aleready in sleep mode or turned off`)
        } else {
            this.sleepMode = true;
            ElectricalApliances.generalConsumption -= (this.consumptionOfTheElectricalAppliance / 2)
        }
    }
    turnOffSleepMode() {
        if (this.sleepMode == false || this.status == false) {
            console.log(`Your laptop is not in sleep mode or turned off`)
        } else {
            this.sleepMode = false;
            ElectricalApliances.generalConsumption += (this.consumptionOfTheElectricalAppliance / 2)
        }
    }
    turnOff() {
        if (this.sleepMode == false || this.status == false) {} else {
            this.sleepMode = false;
            ElectricalApliances.generalConsumption += (this.consumptionOfTheElectricalAppliance / 2)
        }
        console.log(`${this.name} is turned off`);
        if (this.status) {
            this.status = false;
            ElectricalApliances.generalConsumption -= this.consumptionOfTheElectricalAppliance;
        }
    }
}
const kettle = new AplianceWithBacklight("kettle", 150);
const laptop = new AplianceWithSleepmode("laptop", 200);
kettle.mission = "Boil";
laptop.mission = "Attract";