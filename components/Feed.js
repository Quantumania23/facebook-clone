import Stories from "./Stories"

function Feed() {
  return (
    <div className="flex-grow h-screen pb-44 pt-6 mr-4
    xl:mr-40 overflow-y-auto">
        <div className="mx-auto max-w-md md:max-w-lg
        lg:max-w-2xl">
            {/* stories */}
            <Stories/>
            {/* input box */}
            {/* posts */}
        </div>
    </div>
  )
}

export default Feed