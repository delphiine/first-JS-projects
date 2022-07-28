const Thermostat = require('./Thermostat');

describe('Thermostat', () => {
    it('returns the initial temperature of 20 degrees', () => {
        const thermostat = new Thermostat();
        expect(thermostat.getTemperature()).toEqual(20);
    });

    it('returns a temperature of 22 degrees if increased twice', () => {
        const thermostat = new Thermostat();
        thermostat.up();
        thermostat.up();
        expect(thermostat.getTemperature()).toEqual(22);
    });

    it('returns a temperature of 21 degrees if decreased once', () => {
        const thermostat = new Thermostat();
        thermostat.up();
        thermostat.up();
        thermostat.down();
        expect(thermostat.getTemperature()).toEqual(21);
    });

    it("changes the power saving default mode from true to false'", () => {
        const thermostat = new Thermostat();
        expect(thermostat.setPowerSavingMode()).toEqual(false);
    });

    it("returns the maximum temperature '25' when the power saving mode is on", () => {
        const thermostat = new Thermostat();
        for (let i = 0 ; i < 10 ; i++) {
            thermostat.up();
        }
        expect(thermostat.getTemperature()).toEqual(25);
    });

    it("doesn't allow the temperature to be decreased beyond the minimum temperature '10'", () => {
        const thermostat = new Thermostat();
        for (let i = 20; i > 0 ; i--) {
            thermostat.down();
        }
        expect(thermostat.getTemperature()).toEqual(10);
    });

    it("returns a temperature of '26' if increased while the power saving mode is off", () => {
        const thermostat = new Thermostat();
        thermostat.setPowerSavingMode();
        for (let i = 0 ; i < 6 ; i++) {
            thermostat.up();
        }
        expect(thermostat.getTemperature()).toEqual(26);
    });

    it("rests the temperature to 20", () => {
        const thermostat = new Thermostat();
        for (let i = 0 ; i < 4 ; i++) {
            thermostat.up();
        }
        expect(thermostat.getTemperature()).toEqual(24);

        thermostat.reset()
        expect(thermostat.getTemperature()).toEqual(20);
    });
});
