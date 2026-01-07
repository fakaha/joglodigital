export const Card = (props) => {
    const { title, description, image} = props
    return (
        <div className="flex flex-row items-center bg-[#F5F5DC] hover:bg-[#e4e0dc] gap-6 border border-[#7A4F2E] p-3 rounded-xl">
            <div className="">
                {image && <img src={image} alt="" className="w-[150px] "/> }
            </div>
            <div>
                <p className="text-xl font-bold mb-3">{title}</p>
                <p className="text-lg">{description}</p>
            </div>
        </div>
    )
}