import View from "~/components/View";

export default function Index() {
  return (
    <View>
      <div className="w-128 h-52 p-6 bg-white rounded-2xl">
        <h1>Welcome to CodeLeap network!</h1>
        <form className="flex flex-col">
          <label>Please enter your username</label>
          <input
            type="text"
            id="username"
          />
          <div className="flex justify-end">
            <button className="w-28 h-8 bg-[#7695EC] text-white rounded-lg">ENTER</button>
          </div>
        </form>
      </div>
    </View>
  )
}
