import { MovieObjectType } from '../types'

export default function ListItems({
    items,
    itemSelectHandler,
}: {
    items: MovieObjectType[]
    itemSelectHandler: (episode_id: number) => void
}) {
    return items.length > 0 ? (
        <ul className="uppercase text-sm cursor-pointer">
            {items.map((item: MovieObjectType) => {
                return (
                    <li
                        key={item.episode_id}
                        className="p-2  border-b border-gray-300 hover:bg-gray-200 py-4 pl-4 pr-2"
                        onClick={() => itemSelectHandler(item.episode_id)}
                    >
                        <div className="flex justify-between">
                            {/* Serial No and Title */}
                            <div className="flex justify-start gap-4">
                                <div>{`${item.episode_id_numeric}`}</div>
                                <div>{`${item.episode_id_roman} - ${item.title}`}</div>
                            </div>
                            {/* released date */}
                            <div>{item.release_date}</div>
                        </div>
                    </li>
                )
            })}
        </ul>
    ) : (
        <div className="flex flex-col justify-center items-center h-full">
            No items available
        </div>
    )
}
