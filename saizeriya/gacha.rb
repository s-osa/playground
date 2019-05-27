class Menu
  def initialize(category, name, price)
    @category = category
    @name = name
    @price = price
  end

  attr_reader :category, :name, :price

  def to_s
    "#{name}: #{price} JPY"
  end
end

class Alcohol < Menu
  def initialize(name, price)
    super('Alcohol', name, price)
  end
end

class Appetizer < Menu
  def initialize(name, price)
    super('Appetizer', name, price)
  end
end

menus = [
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
  Appetizer.new('辛味チキン', 299),
  Appetizer.new('アスパラガスのオーブン焼き', 299),
  Appetizer.new('ポップコーンシュリンプ', 299),
  Appetizer.new('エスカルゴのオーブン焼き', 399),
  Appetizer.new('セットプチフォッカ', 79),
  Appetizer.new('ムール貝のガーリック焼き', 399),
  Appetizer.new('野菜ソースのグリルソーセージ', 399),
  Appetizer.new('チョリソー', 399),
  Appetizer.new('柔らか青豆の温サラダ', 199),
  Appetizer.new('削りたてペコリーノチーズ', 100),
  Appetizer.new('セロリのピクルス', 199),
  Appetizer.new('真イカのパプリカソース', 199),
  Appetizer.new('ほうれんそうのソテー', 199),
  Appetizer.new('キャベツのアンチョビソーテー', 199),
  Appetizer.new('ポテトのグリル', 199),
  Appetizer.new('ガーリックトースト', 189),
  Appetizer.new('ミニフィセル', 169),
  Appetizer.new('フォッカチオ', 119),
  Appetizer.new('プチフォッカ', 139),
  Appetizer.new('熟成ミラノサラミ', 299),
  Appetizer.new('熟成ミラノサラミWサイズ', 598),
  Appetizer.new('フレッシュチーズとトマトのサラダ', 299),
  Appetizer.new('フレッシュチーズとトマトのサラダW', 598),
  Appetizer.new('プロシュート', 399),
  Appetizer.new('プロシュートW', 798),
]

max = ARGV[0] ? Integer(ARGV[0]) : 1000
category = ARGV[1]

results = []

if category
  menus = menus.select{ |m| m.category == category }
end

loop do
  menu = menus.select{ |m| m.price < max - results.map(&:price).sum }.sample

  if menu
    results << menu
  else
    break
  end
end

puts results
puts "TOTAL: #{results.map(&:price).sum}"
