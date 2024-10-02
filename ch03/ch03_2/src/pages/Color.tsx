export default function Color() {
  return (
    <div className="p-4 bg-sky-700">
      <p w-full p-4 text-3xl text-white>Color</p>
      <div className="mb-4">
        <p className="tex-white">Email address</p>
        <input type="email" className="text-gray-900 border-sky-200 border-4" value="Hello world!" />
        <p className="text-rose-500">This is required</p>
      </div>
    </div>
  )
}