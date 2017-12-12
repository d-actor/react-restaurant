50.times do
  MenuItem.create(
    item: Faker::Food.dish,
    description: Faker::Lorem.sentence,
    price: Faker::Commerce.price.to_f,
  )
end
