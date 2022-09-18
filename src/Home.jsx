import React from "react";
import PopupGfg from "./PopupGfg"

function Home() {

  return (
    <div className="bg-cover h-screen  bg-[url('https://cdn.discordapp.com/attachments/1001168177952211054/1019485159269072916/4kmanzara.4d0fb49d.webp')] grow-0 bg-cover bg-center  text-white  ">
      <div className="lg:flex ml-auto justify-center text-white text-xl font-bold space-x-8   sm:flex hidden py-5">
      
        <h1>HOME</h1>
        <h1>WEBSITE</h1>
        <h1>RESUME</h1>
        <h1>ABOUT</h1>
        <PopupGfg/>
      </div>
      <div className="flex justify-center  mt-10 ">
        <div className="mt-40 space-y-5">
       
            <h1 className="text-6xl font-bold mt-7">Hello, I'm SaGaR </h1>
        

          <div className="ml-20 space-y-5">
            <h1>AND THIS IS MY RESUME</h1>
            <div className="flex w-5 ml-10 space-x-3">
           
                <img src="https://cdn.discordapp.com/attachments/1001168177952211054/1019558331259560006/icons8-linkedin-24.png" />
         

           
          
                <img
                  class="rounded-t-lg"
                  src="https://cdn.discordapp.com/attachments/1001168177952211054/1019558331515408395/icons8-discord-30.png"
                  alt=""
                />
           

              <img src="https://cdn.discordapp.com/attachments/1001168177952211054/1019558331028885564/icons8-github-25.png" />
              <img
                className=""
                src="https://cdn.discordapp.com/attachments/1001168177952211054/1019558330781401129/icons8-youtube-50_1.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
