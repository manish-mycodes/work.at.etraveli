type DescriptionType = {
    title: string
    description: string
    episodeIdRoman: string
}
export default function Description({
    episodeIdRoman,
    title,
    description,
}: DescriptionType) {
    return (
        <div>
            <h2 className="text-xl font-semibold ">{`${episodeIdRoman} - ${title}`}</h2>
            <div
                dangerouslySetInnerHTML={{
                    __html: description,
                }}
            />
        </div>
    )
}