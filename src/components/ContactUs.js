const Contact =()=>{
    return(
        <div>
            <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
            <form>
               <input type="text" className="border border-black rounded-lg p-2 m-3" placeholder="name"/>
               <input type="text" className="border border-black rounded-lg p-2  m-3" placeholder="message"/>
               <button className="border border-black p-2 m-2 rounded-md hover:bg-red-400 cursor-pointer">Submit</button> 
            </form>
        </div>
    )
}
export default Contact;