import Image from 'next/image'

export default function Home() {
  return (
<div className='bg-slate-100'>
  {/* start nav */}
   <div class="bg-[url('/img/hero.jpg')] hero__container">
      <nav>
         <div className='flex justify-between p-10 mx-20'>
           <h3 className='text-2xl text-gray-200'>
            <a href="#">  team   </a>
            </h3>
           <div className='flex gap-2'>
              <li className='font-sm text-gray-200'><a href="#">Products</a></li>
              <li className='font-sm text-gray-200'><a href="#">Blogs</a></li>
              <li className='font-sm text-gray-200'><a href="#">Contact</a></li>
              <li className='font-sm text-gray-200'><a href="#">Login</a></li>
             <button className='bg-gray-500 text-white text-sm p-2'>Get Acess</button>
           </div>

         </div>
      </nav>
        {/*start Hero section */}
     <div >
        <div className='flex flex-col gap-2 p-10 mx-20'>
          <h2 className='text-6xl text-gray-100'> Instant Collaboration for <br/> remote teams</h2>
          <p className='text-sm text-gray-100'> All in one place for your remote team to chat, 
          collaborate and track project progress</p>
          <div>
            <input type='text' placeholder='your email' className='p-2 mr-2' />
            <button className='bg-blue-500 text-white p-2'>Get early access</button>
          </div>
          </div>
     </div>

   {/* end Hero Section */}
   </div>
   {/* end nav */}

    {/* start team hub component */}
       <div className='flex flex-col md:flex-row p-10 mx-20 mt-5'>
           <div className='flex-1'>
            {/* left-side component */}
              <h2 className='text-5xl text-gray-600 mt-40 mb-10'>Your hub for team work</h2>
              <p className='text-sm text-gray-400'>This summer’s Women’s World Cup is set to be the biggest and 
                best yet, with more teams involved than ever before.
                 It means there are to be eight debutantes in Australia 
                 and New Zealand, with some nations appearing in a World Cup for the first time at any level, on both the men’s and women’s side.</p>
           </div>
           <div className='flex-1'>
                 {/* right-side component */}
                   <Image
                 src='/img/meetings.png'
                      width={320}
                      height={320}
                     alt="meetings"
                      className="object-contain ml-20"
                    />
           </div>
       </div>
    {/* end team hub component */}


        {/* start simple task component */}
       <div className='flex flex-col md:flex-row p-10 mx-20 mt-5 gap-2'>          
           <div className='flex-1'>
                 {/* right-side component */}
               
                  <Image
                   src='/img/photo1.jpg'
                      width={320}
                      height={320}
                     alt="meetings"
                      className="object-contain ml-20"
                    />
           </div>
            <div className='flex-1'>
            {/* left-side component */}
              <h2 className='text-5xl text-gray-600 mt-40 mb-10'>Simple Task Management</h2>
              <p className='text-sm text-gray-400'>This summer’s Women’s World Cup is set to be the biggest and 
                best yet, with more teams involved than ever before.
                 It means there are to be eight debutantes in Australia 
                 and New Zealand, with some nations appearing in a World Cup for the first time at any level, on both the men’s and women’s side.</p>
           </div>
       </div>
    {/* end simple task component */}

     {/* start schedule component */}
       <div className='flex flex-col md:flex-row p-10 mx-20 mt-5'>
           <div className='flex-1'>
            {/* left-side component */}
              <h2 className='text-5xl text-gray-600 mt-40 mb-10'>Scheduling that actually works</h2>
              <p className='text-sm text-gray-400'>This summer’s Women’s World Cup is set to be the biggest and 
                best yet, with more teams involved than ever before.
                 It means there are to be eight debutantes in Australia 
                 and New Zealand, with some nations appearing in a World Cup for the first time at any level, on both the men’s and women’s side.</p>
           </div>
           <div className='flex-1'>
                 {/* right-side component */}
               
                  <Image
                     src='/img/photo2.jpg'
                      width={320}
                      height={320}
                     alt="meetings"
                      className="object-contain ml-20"
                    />
           </div>
       </div>
    {/* end schedule component */}
 

   {/* team starts here */}
     <div className='p-10 mx-20'>
      <h2 className='text-5xl text-gray-800'>What people say about team</h2>
     </div>
     <div className='flex flex-col md:flex-row p-10 mx-20'>
        <div className='bg-white flex flex-col flex-1 p-5 m-2'>
          <h5>*********</h5>
          <p className='text-sm text-gray-600'>  It means there are to be eight debutantes in Australia 
                 and New Zealand, with some nations appearing in a World Cup for the first time at any level, on both the men’s and women’s side.</p>
          <div className='flex'>
            
                  <Image
                   src='/img/photo1.jpg'
                      width={20}
                      height={20}
                     alt="meetings"
                      className="object-contain ml-20"
                    />
                    <h4 className='text-xl font-bold text-gray-700'>Tunde Elesho</h4>
          </div>
        </div>
        <div className='bg-white flex flex-col flex-1 p-5 m-2'>
          <h5>*********</h5>
          <p className='text-sm text-gray-600'>  It means there are to be eight debutantes in Australia 
                 and New Zealand, with some nations appearing in a World Cup for the first time at any level, on both the men’s and women’s side.</p>
          <div className='flex'>
            
                  <Image
                   src='/img/photo1.jpg'
                      width={20}
                      height={20}
                     alt="meetings"
                      className="object-contain ml-20"
                    />
                    <h4 className='text-xl font-bold text-gray-700'>Tunde Elesho</h4>
          </div>
        </div>
        <div className='bg-white flex flex-col flex-1 p-5 m-2'>
          <h5>*********</h5>
          <p className='text-sm text-gray-600'>  It means there are to be eight debutantes in Australia 
                 and New Zealand, with some nations appearing in a World Cup for the first time at any level, on both the men’s and women’s side.</p>
          <div className='flex'>
            
                  <Image
                   src='/img/photo1.jpg'
                      width={20}
                      height={20}
                     alt="meetings"
                      className="object-contain ml-20"
                    />
                    <h4 className='text-xl font-bold text-gray-700'>Tunde Elesho</h4>
          </div>
        </div>
        <div className='bg-white flex flex-col flex-1 p-5 m-2'>
          <h5>*********</h5>
          <p className='text-sm text-gray-600'>  It means there are to be eight debutantes in Australia 
                 and New Zealand, with some nations appearing in a World Cup for the first time at any level, on both the men’s and women’s side.</p>
          <div className='flex'>
            
                  <Image
                   src='/img/photo1.jpg'
                      width={20}
                      height={20}
                     alt="meetings"
                      className="object-contain ml-20"
                    />
                    <h4 className='text-xl font-bold text-gray-700'>Tunde Elesho</h4>
          </div>
        </div>
     </div>

   {/* team ends here */}
</div>
  )
}
