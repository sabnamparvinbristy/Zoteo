import { useSelector } from "react-redux";

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="p-6 max-w-lg mx-auto rounded-lg shadow-lg bg-transparent">
      <h1 className="text-3xl font-semibold text-center my-6 text-gray-800">Profile</h1>
      
      <form className="flex flex-col gap-5">
        <div className="flex justify-center mb-6">
          <img 
            src={currentUser.avatar} 
            alt="profile" 
            className="rounded-full h-32 w-32 object-cover cursor-pointer transform transition-transform hover:scale-105" 
          />
        </div>

        <input 
          type="text" 
          placeholder="Username" 
          id="username" 
          className="border p-4 rounded-lg text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
        />
        <input 
          type="email" 
          placeholder="Email" 
          id="email" 
          className="border p-4 rounded-lg text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
        />
        <input 
          type="password" 
          placeholder="Password" 
          id="password" 
          className="border p-4 rounded-lg text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
        />

        <button className="bg-slate-700 text-white rounded-lg p-4 uppercase font-semibold transition-all hover:opacity-90 disabled:opacity-70">
          Update
        </button>
      </form>

      <div className="flex justify-between mt-6">
        <span className="text-red-700 cursor-pointer hover:text-red-800 transition-all">Delete Account</span>
        <span className="text-red-700 cursor-pointer hover:text-red-800 transition-all">Sign Out</span>
      </div>
    </div>
  );
}
