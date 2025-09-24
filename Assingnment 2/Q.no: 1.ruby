class BankAccount
  def initialize
    @balance = 0
  end

  def add_balance(amount)
    if amount > 0
      @balance += amount
      puts "Deposited: #{amount}, New Balance: #{@balance}"
    else
      puts "Error: Deposit amount must be positive!"
    end
  end

  def withdraw(amount)
    if amount > 0 && amount <= @balance
      @balance -= amount
      puts "Withdrawn: #{amount}, New Balance: #{@balance}"
    else
      puts "Error: Insufficient funds or invalid amount!"
    end
  end

  def check_balance
    puts "Current Balance: #{@balance}"
  end
end

account = BankAccount.new
account.add_balance(500)
account.withdraw(200)
account.check_balance
