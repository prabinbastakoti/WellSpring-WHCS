import background from './assets/414.jpg'

function App() {

  return (
    <>
    <div className="h-screen bg-[#BFE9FF] flex relative overflow-hidden">
      <img src={background} className='h-full'/>
      <div className='h-full flex-1 flex justify-center items-center absolute top-10 right-24'>
        <form className='flex flex-col items-center gap-6'>
          <legend className='text-4xl font-bold text-center mb-6'>Welcome To <br/>WellSpring Health Care System</legend>
          <fieldset className='w-full flex flex-col items-center'>
<label htmlFor="" className='text-lg font-semibold w-4/5 '>Username</label>
          <input type="text" placeholder='type your username'/>
          </fieldset>
          <fieldset className='w-full flex flex-col items-center'>
<label htmlFor="" className='text-lg font-semibold w-4/5'>Password</label>
          <input type="password" placeholder='type your password'/>
          </fieldset>
          <button className='bg-blue-500 my-4 py-3 px-10 rounded-md outline-none border-none text-white text-lg text-center'>Login</button>
          </form>
          </div>
    </div>
    </>
  )
}

export default App
