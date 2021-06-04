/* J'ai sortis la dépendance à Sensor dans l'idée
de pouvoir utiliser une version "mocké" dans les tests.
Dans l'idéal, je ferai tout le refacto pour entre dans 
de l'archi hexa (et avoir un inMemorySensor) mais ce
n'est pas le but de l'exo.
*/

Alarm = function(Sensor) {
	this._lowPressureThreshold = 17;
	this._highPressureThreshold = 21;
	this._sensor = new Sensor();
	this._alarmOn = false;
};

Alarm.prototype = {

	check: function() {
		const psiPressureValue = this.getPsiPressure();

		this._alarmOn = this.shouldTriggerAlarm(psiPressureValue);
	},

	getPsiPressure: function() {
		return this._sensor.popNextPressurePsiValue();
	},

	alarmOn: function() {
		return this._alarmOn;
	},

	shouldTriggerAlarm: function(psiPressureValue) {
		return psiPressureValue < this._lowPressureThreshold || this._highPressureThreshold < psiPressureValue
	}
};

module.exports = Alarm;
