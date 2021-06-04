var Sensor = require('./sensor.js');

Alarm = function() {
	this._lowPressureThreshold = 17;
	this._highPressureThreshold = 21;
	this._sensor = new Sensor();
	this._alarmOn = false;
};

Alarm.prototype = {

	check: function(psiPressureValue) {
		this._alarmOn = this.shouldTriggerAlarm(psiPressureValue);
	},

	alarmOn: function() {
		return this._alarmOn;
	},

	shouldTriggerAlarm: function(psiPressureValue) {
		return psiPressureValue < this._lowPressureThreshold || this._highPressureThreshold < psiPressureValue
	}
};

module.exports = Alarm;
