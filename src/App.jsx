import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div className=' flex justify-center p-4'>
      <div className='w-100 h-175 bg-gray-50 flex flex-col justify-end'>
        <div className='p-4'>
          <h1 className='text-3xl'>Welcome to PopX</h1>
          <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quasi fuga doloribus!</p>
        </div>
        <div className='flex flex-col p-4 gap-4'>
          <Link to="/login" className='text-white bg-purple-700 rounded-full p-3 2-full'>Already Registered? Login</Link>
          <Link to="/signup" className='bg-[#6c25ff4b] rounded-full p-3 '>Create Account</Link>
        </div>
      </div>
    </div>
  )
}

function Login() {
  return (
    <div className=' flex justify-center p-4'>
      <div className='w-100 h-175 bg-gray-50 flex flex-col'>
        <div className='p-4'>
          <h1 className='text-3xl'>Signin to your PopX account</h1>
          <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quasi fuga doloribus!</p>
        </div>
        <div className='flex flex-col px-5'>
          <p className='bg-gray-50 w-fit relative top-6 left-2 p-1 text-[#773eeafc]'>Email Address</p>
          <input placeholder='Enter email address' className='border border-black rounded-full p-4' />
          <p className='bg-gray-50 w-fit relative top-6 left-2 p-1 text-[#773eeafc]'>Password</p>
          <input placeholder='Enter password' className='border border-black rounded-full p-4' />
          <Link to="/profile" className='bg-gray-300 rounded-full p-3 m-2'>Login</Link>
        </div>
      </div>
    </div>

  )
}

function Signup() {
  return (
    <div className=' flex justify-center p-4'>
      <div className='w-100 h-175 bg-gray-50 flex flex-col'>
        <div className='p-4'>
          <h1 className='text-3xl'>Create your your PopX account</h1>
        </div>
        <div className='flex flex-col px-5 '>
          <p className='bg-gray-50 w-fit relative top-6 left-2 p-1 text-[#773eeafc]'>Full Name</p>
          <input placeholder='Enter email address' className='border border-black rounded-full p-4' />
          <p className='bg-gray-50 w-fit relative top-6 left-2 p-1 text-[#773eeafc]'>Phone number</p>
          <input placeholder='Enter email address' className='border border-black rounded-full p-4' />
          <p className='bg-gray-50 w-fit relative top-6 left-2 p-1 text-[#773eeafc]'>Email Address</p>
          <input placeholder='Enter email address' className='border border-black rounded-full p-4' />
          <p className='bg-gray-50 w-fit relative top-6 left-2 p-1 text-[#773eeafc]'>Password</p>
          <input placeholder='Enter email address' className='border border-black rounded-full p-4' />
          <p className='bg-gray-50 w-fit relative top-6 left-2 p-1 text-[#773eeafc]'>Company name</p>
          <input placeholder='Enter email address' className='border border-black rounded-full p-4' />

          <div>
            <label>
              <div class="flex flex-col">
                <label class="text-sm font-medium text-black mb-2">Are you an Agency?<span class="text-red-500">*</span>
                </label>
              </div>
            </label>
            <div class="flex items-center gap-6">
              <label>
                <input class="accent-primary" type="radio" value="Yes" name="agency" /> Yes
              </label>
              <label>
                <input class="accent-primary" type="radio" value="No" name="agency" /> No
              </label>
            </div>

          </div>
          <Link to="/profile" className='bg-purple-700 rounded-full p-3 m-2'>Create Account</Link>

        </div>
      </div>
    </div>

  )
}

function Profile() {
  return (
    <div className=' flex justify-center p-4'>
      <div className='w-100 h-175 bg-gray-50 flex flex-col justify-end'>
        <div className='p-4'>
          <h1 className='text-3xl'>Welcome to PopX</h1>
          <h2 className='text-3xl'>Welcome to PopX</h2>
          <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quasi fuga doloribus!</p>
        </div>
        
      </div>
    </div>
  )
  
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
