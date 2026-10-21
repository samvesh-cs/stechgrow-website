import Button from "./Button";

export default function Preview() {
    return (
        <div className="flex min-h-64 items-center justify-center flex-col md:gap-10 gap-5 rounded-4xl bg-neutral-100 md:px-15 px-9 md:py-10 py-5 text-center text-neutral-600 md:min-h-96">

            <img src="images\previewVideo.png" alt="preview image" className="shadow-md rounded-2xl" />

            <Button/>
            

        </div>
    )
}
