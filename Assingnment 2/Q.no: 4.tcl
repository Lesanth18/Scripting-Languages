proc Volume {radius} {
    set vol [expr {(4.0/3.0)*3.14159*pow($radius,3)}]
    return $vol
}

puts "Enter radius:"
gets stdin r
set v [Volume $r]
puts "The volume of sphere is: $v"
