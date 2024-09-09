export default function Nutrition() {
  const nutrition = [
    { title: 'Calories', quantity: '277Kcal' },
    { title: 'Carbs', quantity: '0g' },
    { title: 'Protein', quantity: '20g' },
    { title: 'Fat', quantity: '22g' },
  ]

  return (
    <div>
      <h2 className="mt-8  text-roseTitle text-3xl font-serif mb-5">Nutrution</h2>
      <p>
        The table below shows nutritional values per serving without the additional
        fillings.
      </p>
      <div className=" mt-2 divide-y ">
        {nutrition.map((n, index) => (
          <div className="flex py-3 last:pb-0 " key={index}>
            <div className="w-72 ml-8">{n.title}</div>
            <div className="text-roseTitle font-bold ">{n.quantity}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
