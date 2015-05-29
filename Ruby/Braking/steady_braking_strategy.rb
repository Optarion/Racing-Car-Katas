class SteadyBrakingStrategy
  def power_dissipation(velocity, brake)
    brake.force_at_brake_level(100.0) * velocity
  end
end