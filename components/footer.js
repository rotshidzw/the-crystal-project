import React from 'react'

const footer = () => {
  return (
    
<footer class="bg-white rounded-lg shadow text-black m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://ROTSHIDZWA.com/" class="flex items-center mb-4 sm:mb-0">
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">ROTSHIDZWA</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0">
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-black sm:text-center">© 2023 <a href="#" class="hover:underline">rotshidzwa™</a>. All Rights Reserved.</span>
    </div>
</footer>


  )
}

export default footer