/*Referensi Tab : 
- https://js.hyperui.dev/examples/tabs
*/
// import "alpinejs";
import React from "react";
import CardTag from "./CardTag";
import ProblemCard from "./ProblemCard";
import ProblemTop from "./ProblemTop";

export default function ProblemPage({ problemCard }) {
    return (
        <>
            <ProblemTop />

            <section className="flex justify-between md:flex-row gap-4 flex-col md:mx-8 mx-2">
                <div className="md:w-2/3  w-full flex flex-col gap-4">
                    {problemCard.map((problem, index) => (
                        <ProblemCard
                            key={index}
                            title={problem.title}
                            editorial={problem.editorial}
                            tags={problem.tags}
                            attempt={problem.attempt}
                            description={problem.description}
                        />
                    ))}
                </div>

                <CardTag />
            </section>
        </>
    );
}
