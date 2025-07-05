"use client"
import { MdDelete } from "react-icons/md";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserAuthStore } from "@/stores/userAuthStore";

const Tracks = () => {
  const { logout } = useUserAuthStore();
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login")
      logout()
    }
  }, [])
  return (
    <div className="flex flex-wrap gap-4 p-6 justify-between md:px-18">
    
    <div className="mt-4 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-zinc-200 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Anuradha
      </h5>

      <p className="mb-2 text-md font-semibold text-gray-900 dark:text-white">
        <strong>&#8377; {new Intl.NumberFormat("en-US").format(50000)}</strong>
      </p>

      <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
        joma rekheche pore nebe maksns ksnwmsn kensnkw kendke kenks ksnssns ks
        kwjakw kenskdb kenskem.
      </p>

      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        <strong>Type: Received</strong>
      </p>

      {/* the date */}
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        <strong>Date: 2023-28-10</strong>
      </p>

      <button className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
        <MdDelete className="text-xl" /> Remove
      </button>
    </div>






    <div className="mt-4 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-zinc-200 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Anuradha
      </h5>

      <p className="mb-2 text-md font-semibold text-gray-900 dark:text-white">
        <strong>&#8377; {new Intl.NumberFormat("en-US").format(50000)}</strong>
      </p>

      <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
        joma rekheche pore nebe maksns ksnwmsn kensnkw kendke kenks ksnssns ks
        kwjakw kenskdb kenskem.
      </p>

      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        <strong>Type: Received</strong>
      </p>

      {/* the date */}
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        <strong>Date: 2023-28-10</strong>
      </p>

      <button className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
        <MdDelete className="text-xl" /> Remove
      </button>
    </div>


    <div className="mt-4 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-zinc-200 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Anuradha
      </h5>

      <p className="mb-2 text-md font-semibold text-gray-900 dark:text-white">
        <strong>&#8377; {new Intl.NumberFormat("en-US").format(50000)}</strong>
      </p>

      <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
        joma rekheche pore nebe maksns ksnwmsn kensnkw kendke kenks ksnssns ks
        kwjakw kenskdb kenskem.
      </p>

      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        <strong>Type: Received</strong>
      </p>

      {/* the date */}
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        <strong>Date: 2023-28-10</strong>
      </p>

      <button className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
        <MdDelete className="text-xl" /> Remove
      </button>
    </div>



      
      </div>
  );
};

export default Tracks;
