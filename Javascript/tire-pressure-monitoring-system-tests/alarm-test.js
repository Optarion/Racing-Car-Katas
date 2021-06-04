/* globals describe, it */
var chai = require('chai');
chai.should();

var Alarm = require('../tire-pressure-monitoring-system/alarm.js');

/*
Pour gagner du temps, j'ai décider de dupliquer les Sensor. 
C'est moche et j'imagine qu'iil me faudrait sans doutes une factory
ou un truc dans le genre mais je préfère me refocus sur l'exo de
refacto de Alarm (même si finalement ça en fait partie)
*/

describe('Tyre Pressure Monitoring System', function() {

	describe('Alarm', function() {

		it('should have an alarm initialized to false', function() {
			const DefaultSensor = require('./sensor-low-pressure.js');
			var alarm = new Alarm(DefaultSensor);
			alarm.alarmOn().should.equal(false);
		});
		
		it('should set the alarmOn to true if the pressure is lower than 17', function() {
			const SensorForLowPressure = require('../tire-pressure-monitoring-system-tests/sensor-low-pressure.js');
			var alarm = new Alarm(SensorForLowPressure);
			alarm.check() // pressure 16
			alarm.alarmOn().should.equal(true)
			alarm.check() // pressure 17
			alarm.alarmOn().should.equal(false)
			alarm.check() // pressure 15
			alarm.alarmOn().should.equal(true)
		})
		
		it('should set the alarmOn to true if the pressure is greather than 21', function() {
			const SensorForHighPressure = require('../tire-pressure-monitoring-system-tests/sensor-high-pressure.js');
			var alarm = new Alarm(SensorForHighPressure);
			alarm.check() // pressure 21
			alarm.alarmOn().should.equal(false)
			alarm.check() // pressure 22
			alarm.alarmOn().should.equal(true)
			alarm.check() // pressure 20
			alarm.alarmOn().should.equal(false)
		})
	});
});
