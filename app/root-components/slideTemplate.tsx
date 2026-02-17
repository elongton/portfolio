export const SlideTemplate = ({title, descriptives, sentence}: {title: string, descriptives: string, sentence: string}) => {

    return <>
            <div className={"mx-auto border-1 rounded-sm"} style={{ height: '500px' }}>

            <div className={"flex justify-end"} style={{ marginTop: "100px" }}>
                <div className={"text-right mr-20"}>
                    <h2 style={{ fontSize: "40px" }}>{title}</h2>
                    <p>{descriptives}</p>
                </div>
            </div>

            <div style={{ marginTop: "120px" }}>
                <div className={"ml-20"} style={{maxWidth: "500px"}}>
                    <p>{sentence}</p>
                </div>
            </div>


        </div>
    </>
}