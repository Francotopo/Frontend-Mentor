export default function Button({ item }) {
  console.log(item)

  return (
    <button
      className={`sm:w-40 bg-[hsl(0,0%,95%)] w-36 rounded-full py-3 font-medium font-display text-[16px] ${item} sm:mt-auto`}
    >
      Learn More
    </button>
  )
}
