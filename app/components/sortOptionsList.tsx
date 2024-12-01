export default function SortOptionsList({
    sortByCloseHandler,
    sortByHandler,
}: {
    sortByCloseHandler: () => void
    sortByHandler: (text: string) => void
}) {
    return (
        <div className="absolute top-10 w-[200px] h-[200px] border border-gray-200 rounded-md z-1 bg-gray-50 shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <div className="flex flex-col">
                <div className="flex justify-between p-2 bg-white w-full rounded-md">
                    <div>
                        <span className="text-xs font-bold">Sort by</span>
                    </div>
                    <div className="cursor-pointer">
                        <i
                            className="fa fa-times"
                            onClick={sortByCloseHandler}
                        ></i>
                    </div>
                </div>
                <div className="flex flex-col justify-start">
                    <ul className="text-xs cursor-pointer  ">
                        <li
                            onClick={() => sortByHandler('Episode')}
                            className="p-2 border-t  border-b border-gray-300 hover:bg-gray-200"
                        >
                            Episode
                        </li>
                        <li
                            onClick={() => sortByHandler('Year')}
                            className="p-2 border-b  border-gray-300 hover:bg-gray-200"
                        >
                            Year
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
