import { data } from '../data'
import Button from './Button'

export default function Card({ cardNbr }) {
  const item = data[cardNbr]

  return (
    <div
      className={`sm:p-14 sm:flex sm:flex-col sm:items-baseline sm:first:rounded-l-lg sm:last:rounded-r-lg sm:first:rounded-r-none sm:last:rounded-l-none first:rounded-t-lg last:rounded-b-lg p-11 ${item.classnameBg}`}
    >
      <img src={item.icon} alt="" />
      <h1 className="sm:mb-6 text-[hsl(0,0%,95%)] font-heading text-[40px] font-bold my-8">
        {item.title}
      </h1>
      <p className="text-[hsla(0,0%,100%,0.75)] font-display text-[15px] font-light mb-5">
        {item.description}
      </p>
      {/* {console.log(item.classnameBtn)} */}
      <Button item={item.classnameBtn} />
    </div>
  )
}
