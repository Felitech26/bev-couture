import Link from "next/link"

const SuccessPage = () => {
  return ( 
    <section className="py-72">
     <div className=" md:container mx-auto flex flex-col justify-center items-center">
     <h3 className="md:text-[40px] "> Your Payment Was Successful</h3>
     <h3 className="text-[23px]"> Order Is Been Proccessed! Thank You</h3>
     <Link href='/' >
     <button className="mt-10 bg-black
    px-6 py-3 border border-xl text-white border-black text-lg
    hover:bg-white hover:text-black">Back To Store</button>
     </Link>
       
     </div>
    </section>
  )
}

export default SuccessPage