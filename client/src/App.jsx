import background from './assets/19836.jpg'

function App() {

  return (
    <>
    <div className="h-screen flex bg-[#FAFAFA] relative">
      <p className='absolute bottom-8 left-20 text-xs font-serif lowercase'><a href="https://www.freepik.com/free-vector/medics-working-charts_4950249.htm#query=hospital%20management&position=0&from_view=keyword&track=ais&uuid=1eb5c821-c821-4428-8f49-83c3147d77d0">* Image by katemangostar</a> on Freepik</p>
        <img src={background} className='w-3/5 object-cover'/>

      <div className="flex items-center">
        <form className='flex flex-col items-center gap-6'>
          <legend className='text-3xl font-bold text-center mb-6'>Welcome To <br/>WellSpring Health Care System</legend>
          <fieldset className='w-full flex flex-col items-center'>
<label htmlFor="" className='text-base font-semibold w-4/5 '>Username</label>
          <input type="text" placeholder='Username'/>
          </fieldset>
          <fieldset className='w-full flex flex-col items-center'>
<label htmlFor="" className='text-base font-semibold w-4/5'>Password</label>
          <input type="password" placeholder='Password'/>
          </fieldset>
          <button className='bg-blue-500 my-4 py-3 px-10 rounded-md outline-none border-none text-white text-base text-center'>Login</button>
          </form>
          </div>
    </div>
    </>
  )
}

export default App
