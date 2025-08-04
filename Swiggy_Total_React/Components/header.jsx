export default function Header(){

    return(
        <>
            <div className="bg-[#ff5200] py-3 relative">
                <div className=" max-w-[80%] container mx-auto  flex justify-between ">
                    <img className="h-15 " src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"/>
                    <div className="flex gap-10 items-center">
                        <a className="text-white font-bold" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
                        <a className="text-white font-bold" href="https://partner.swiggy.com/login#/swiggy">Partner with us</a>
                        <a className="text-white border border-white py-2 px-5 rounded-xl font-bold" href="https://www.swiggy.com/corporate/">Get the App</a>
                        <a className="bg-black text-white py-2 px-5 rounded-xl  font-bold" href="https://www.swiggy.com/corporate/">Sign in</a>
                    </div>
                </div>

                <div>
                    <img className="w-[250px] h-[450px] absolute left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="" />
                    <img className="w-[250px] h-[450px] absolute right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="" />
                </div>

                <div className="max-w-[60%] container mx-auto mt-20">
                    <div className="text-center">
                        <p className="text-5xl font-bold text-white">Order food & groceries. Discover best restaurants. Swiggy it!</p>
                    </div>
                    <div className="flex gap-10 justify-center mt-7"> 
                        <input className="bg-white px-5 py-3 rounded font-bold w-60 outline-none" type="text" placeholder="Enter Your delivery Location" />
                        <input className="bg-white px-5 py-3 rounded font-bold w-90 outline-none" type="text" placeholder="Search for restaurent, item and more" />
                    </div>
                </div>
                <div className="flex justify-center mt-5    ">
                    <img className="h-80 w-90" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" alt="" />
                    <img className="h-80 w-90" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" alt="" />
                    <img className="h-80 w-90" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" alt="" />
                </div>
            </div>   
        </>
    )
}