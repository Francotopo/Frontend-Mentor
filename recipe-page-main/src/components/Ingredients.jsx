export default function Ingredients() {
  const imgredientsList = [
    '2-3 large eggs',
    'Salt, to taste',
    'Pepper, to taste',
    '1 tablespoon of butter or oil',
    'Optional fillings: cheese, diced vegetables, cooked meats, herbs',
  ]

  return (
    <div>
      <h2 className="mt-8  text-roseTitle text-3xl font-serif">Ingredients</h2>
      <ul className="my-6 list-disc ml-6 mt-3 marker:text-roseTitle ">
        {imgredientsList.map((item, index) => (
          <li className="pl-3 leading-9" key={index}>
            {item}
          </li>
        ))}
      </ul>
      <hr />
    </div>
  )
}
