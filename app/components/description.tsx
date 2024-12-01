import { intToRoman } from '../utility/numberFormater'

type Description = {
    title: string
    description: string
    episodeId: number
}
export default function Description({
    episodeId,
    title,
    description,
}: Description) {
    return (
        <div>
            <h2 className="text-xl font-semibold ">{`EPISODE ${intToRoman(episodeId)} - ${title}`}</h2>
            <div
                dangerouslySetInnerHTML={{
                    __html: description,
                }}
            />
        </div>
    )
}
