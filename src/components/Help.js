import { FAQdata } from "../utils/constents";
import { FawCard } from "./FawCard";

const Help= () => {
  const handleClick = (e) =>{
    e.currentTarget.classList.toggle('collapse-close');
  }

  return (
    // <div className="flex flex-col bg-white items-center pb-9">
    //   <h1 className="mt-12 mb-6 text-2xl text-cyan-900 font-bold">FAQs</h1>
    //   <h1 className="text-6xl font-serif font-bold text-black">
    //     Frequently Asked Questions
    //   </h1>
    //   <h1 className="text-3xl mt-6 mb-14 text-gray-400">
    //     Have Questions? We are here to help
    //   </h1>
    //   {FAQdata.map((data ,index) => {
    //     return (
    //       <div key={index}>
    //         <FawCard ONClicker={handleClick} que={data.que} info={data.ans} />
    //       </div>
    //     );
    //   })}
    //   <div className="flex flex-col mt-6 items-center bg-slate-100 py-8 px-[450] rounded-3xl">
    //     <div className=" text-black text-3xl mb-4">Still Have Questions?</div>
    //     <div className="text-slate-400">
    //       Contact @rishabhdubey006@gmail.com for further queries
    //     </div>
    //   </div>
    // </div>
    <div class="max-w-2xl mx-auto py-8">
        <h1 class="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h1>
        
        <div class="border border-gray-300 rounded p-4 mb-4 bg-white shadow">
            <h2 class="text-lg font-semibold mb-2">What is Tailwind CSS?</h2>
            <p class="text-gray-700">Tailwind CSS is a utility-first CSS framework for creating custom designs without having to leave your HTML.</p>
        </div>

        <div class="border border-gray-300 rounded p-4 mb-4 bg-white shadow">
            <h2 class="text-lg font-semibold mb-2">How do I install Tailwind CSS?</h2>
            <p class="text-gray-700">You can install Tailwind CSS via npm or yarn by running <code>npm install tailwindcss</code> or <code>yarn add tailwindcss</code>.</p>
        </div>

        <div class="border border-gray-300 rounded p-4 mb-4 bg-white shadow">
            <h2 class="text-lg font-semibold mb-2">Can I customize Tailwind CSS?</h2>
            <p class="text-gray-700">Yes, Tailwind CSS allows extensive customization. You can customize colors, spacing, typography, breakpoints, and more by editing the <code>tailwind.config.js</code> file.</p>
        </div>
        </div>
  );
};

export default Help;
