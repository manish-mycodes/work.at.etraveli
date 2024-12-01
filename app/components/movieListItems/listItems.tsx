import { MovieObjectType } from '@/app/types'
import { intToRoman } from '@/app/utility/numberFormater'

export default function ListItems({
    items,
    itemSelectHandler,
}: {
    items: MovieObjectType[]
    itemSelectHandler: (episode_id: number) => void
}) {
    return (
        <ul className="uppercase text-sm cursor-pointer">
            {items.length > 0 &&
                items.map((item: MovieObjectType) => {
                    return (
                        <li
                            key={item.episode_id}
                            className="p-2  border-b border-gray-300 hover:bg-gray-200 py-4 pl-4 pr-2"
                            onClick={() => itemSelectHandler(item.episode_id)}
                        >
                            <div className="flex justify-between">
                                {/* Serial No and Title */}
                                <div className="flex justify-start gap-4">
                                    <div>{`Episode ${item.episode_id}`}</div>
                                    <div>{`Episode ${intToRoman(item.episode_id)} ${item.title}`}</div>
                                </div>
                                {/* released date */}
                                <div>{item.release_date}</div>
                            </div>
                        </li>
                    )
                })}
        </ul>
    )
}
