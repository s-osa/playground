class Alcohol
  def initialize(name, price)
    @name = name
    @price = price
  end

  attr_reader :name, :price

  def to_s
    "#{name}: #{price} JPY"
  end
end

alcs = [
  Alcohol.new('デカンタ 250ml 赤', 200),
  Alcohol.new('デカンタ 250ml 白', 200),
  Alcohol.new('デカンタ 500ml 赤', 399),
  Alcohol.new('デカンタ 500ml 白', 399),
  Alcohol.new('グラスワイン 赤', 100),
  Alcohol.new('グラスワイン 白', 100),
  Alcohol.new('グラッパ', 379),
  Alcohol.new('キリン一番搾り ジョッキ', 399),
  Alcohol.new('キリン一番搾り グラス', 299),
  Alcohol.new('ストロングゼロ', 379),
]

max = 1000
results = []

loop do
  alc = alcs.select{|a| a.price < max - results.map(&:price).sum }.sample

  if alc
    results << alc
  else
    break
  end
end

puts results
puts "TOTAL: #{results.map(&:price).sum}"
