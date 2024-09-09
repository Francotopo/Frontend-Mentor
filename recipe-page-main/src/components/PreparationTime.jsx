export default function PreparationTime() {
  const prepTime = {
    total: 'Approximately 10 minutes',
    preparation: '5 minutes',
    cooking: '5 minutes',
  }

  return (
    <div className="px-7 py-7 rounded-xl bg-[#FFF7FC] ">
      <p className="text-lg font-bold text-roseTitle  ">Preparation time</p>
      <ul className="list-disc ml-6 mt-3 marker:text-roseTitle  ">
        <li className="">
          <span className="font-bold ml-3">Total: </span>
          {prepTime.total}
        </li>
        <li>
          <span className="font-bold ml-3">Prépation: </span>
          {prepTime.preparation}
        </li>
        <li>
          <span className="font-bold ml-3">Total: </span>
          {prepTime.cooking}
        </li>
      </ul>
    </div>
  )
}
