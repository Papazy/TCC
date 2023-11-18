import { problemTag } from "@/Data/data";

export default function CardTag() {
    return (
        <div className="overflow-y-auto md:w-1/3 md:h-[200px] w-full  bg-gray-100 rounded-md border-black  border p-4">
            {problemTag.map((category, index) => (
                <span
                    key={index}
                    className="text-xs font-semibold inline-block py-1 px-2 rounded-full m-1 bg-gray-300"
                >
                    {category}
                </span>
            ))}
        </div>
    );
}
