class Vehicle
  def initialize(make, model)
    @make = make
    @model = model
  end

  def check_fuel
    puts "#{@make} #{@model} is checking fuel levels."
  end

  def maintenance
    puts "#{@make} #{@model} is under maintenance."
  end
end

class Car < Vehicle
  def special_feature
    puts "Car has 4 seats and AC facility."
  end
end

class Truck < Vehicle
  def special_feature
    puts "Truck is used for carrying heavy loads."
  end
end

class Motorcycle < Vehicle
  def special_feature
    puts "Motorcycle is fast and fuel efficient."
  end
end

c = Car.new("Toyota", "Innova")
c.check_fuel
c.special_feature

t = Truck.new("Tata", "LPT")
t.maintenance
t.special_feature
