/* globals describe, it */
var chai = require('chai');
chai.should();

var Alarm = require('../tire-pressure-monitoring-system/alarm.js');

describe('Tyre Pressure Monitoring System', function() {

	describe('Alarm', function() {

		it('should have an alarm initialized to false', function() {
			var alarm = new Alarm();
			alarm.alarmOn().should.equal(false);
		});

		it('should set the alarmOn to true if the pressure is lower than 17', function() {
			var alarm = new Alarm();
			alarm.check(16)
			alarm.alarmOn().should.equal(true)
			alarm.check(17)
			alarm.alarmOn().should.equal(false)
			alarm.check(15)
			alarm.alarmOn().should.equal(true)
		})

		it('should set the alarmOn to true if the pressure is greather than 21', function() {
			var alarm = new Alarm();
			alarm.check(21)
			alarm.alarmOn().should.equal(false)
			alarm.check(22)
			alarm.alarmOn().should.equal(true)
			alarm.check(20)
			alarm.alarmOn().should.equal(false)
		})
	});
});
