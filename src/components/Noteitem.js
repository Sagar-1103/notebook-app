import React, { useState } from 'react'

export default function Noteitem(props) {
  const {updateIndex}=props;
  const [modalClick,setModalClick]=useState(false)
  const clickedModal = ()=>{
    setModalClick(modalClick?false:true);
    updateIndex();
  }
  
  return (
    <div className=' my-10 '>
      <h1 className="text-2xl font-semibold mx-8 mb-4" style={{fontSize:"30px"}}>Your Notes</h1>
    <div className="container mx-auto flex flex-wrap">
      {/* Flex Item 1 */}
      <div className="bg-teal-200 mx-8 relative mb-2 sm:mb-3 md:mb-5 lg:mb-6 xl:mb-8 p-4 rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
        <h3 className="text-xl font-semibold">Item 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <i className="fa-solid fa-trash fa-lg mt-5 cursor-pointer"></i>
        <i className="fa-solid fa-pen-to-square fa-lg absolute right-1 top-3 cursor-pointer" onClick={clickedModal}></i>
      </div>
      {/* Flex Item 1 */}
      <div className="bg-gray-400 mx-8 relative mb-2 sm:mb-3 md:mb-5 lg:mb-6 xl:mb-8 p-4 rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
        <h3 className="text-xl font-semibold">Item 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <i className="fa-solid fa-trash fa-lg mt-5 cursor-pointer"></i>
        <i className="fa-solid fa-pen-to-square fa-lg absolute right-1 top-3 cursor-pointer" onClick={clickedModal}></i>
      </div>
      {/* Flex Item 1 */}
      <div className="bg-red-100 mx-8 relative mb-2 sm:mb-3 md:mb-5 lg:mb-6 xl:mb-8 p-4 rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
        <h3 className="text-xl font-semibold">Item 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <i className="fa-solid fa-trash fa-lg mt-5 cursor-pointer"></i>
        <i className="fa-solid fa-pen-to-square fa-lg absolute right-1 top-3 cursor-pointer" onClick={clickedModal}></i>
      </div>
      {/* Flex Item 1 */}
      <div className="bg-gray-200 mx-8 relative mb-2 sm:mb-3 md:mb-5 lg:mb-6 xl:mb-8 p-4 rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
        <h3 className="text-xl font-semibold">Item 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <i className="fa-solid fa-trash fa-lg mt-5 cursor-pointer"></i>
        <i className="fa-solid fa-pen-to-square fa-lg absolute right-1 top-3 cursor-pointer"></i>
      </div>
      {/* Flex Item 1 */}
      <div className="bg-gray-200 mx-8 relative mb-2 sm:mb-3 md:mb-5 lg:mb-6 xl:mb-8 p-4 rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
        <h3 className="text-xl font-semibold">Item 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <i className="fa-solid fa-trash fa-lg mt-5 cursor-pointer"></i>
        <i className="fa-solid fa-pen-to-square fa-lg absolute right-1 top-3 cursor-pointer"></i>
      </div>
      {/* Flex Item 1 */}
      <div className="bg-gray-200 mx-8 relative mb-2 sm:mb-3 md:mb-5 lg:mb-6 xl:mb-8 p-4 rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
        <h3 className="text-xl font-semibold">Item 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <i className="fa-solid fa-trash fa-lg mt-5 cursor-pointer"></i>
        <i className="fa-solid fa-pen-to-square fa-lg absolute right-1 top-3 cursor-pointer"></i>
      </div>
      {/* Flex Item 1 */}
      <div className="bg-gray-200 mx-8 relative mb-2 sm:mb-3 md:mb-5 lg:mb-6 xl:mb-8 p-4 rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
        <h3 className="text-xl font-semibold">Item 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <i className="fa-solid fa-trash fa-lg mt-5 cursor-pointer"></i>
        <i className="fa-solid fa-pen-to-square fa-lg absolute right-1 top-3 cursor-pointer"></i>
      </div>
      {/* Flex Item 1 */}
      <div className="bg-gray-200 mx-8 relative mb-2 sm:mb-3 md:mb-5 lg:mb-6 xl:mb-8 p-4 rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
        <h3 className="text-xl font-semibold">Item 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <i className="fa-solid fa-trash fa-lg mt-5 cursor-pointer"></i>
        <i className="fa-solid fa-pen-to-square fa-lg absolute right-1 top-3 cursor-pointer"></i>
      </div>
      {/* Flex Item 1 */}
      <div className="bg-gray-200 mx-8 relative mb-2 sm:mb-3 md:mb-5 lg:mb-6 xl:mb-8 p-4 rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
        <h3 className="text-xl font-semibold">Item 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <i className="fa-solid fa-trash fa-lg mt-5 cursor-pointer"></i>
        <i className="fa-solid fa-pen-to-square fa-lg absolute right-1 top-3 cursor-pointer"></i>
      </div>
      {/* Flex Item 1 */}
      <div className="bg-gray-200 mx-8 relative mb-2 sm:mb-3 md:mb-5 lg:mb-6 xl:mb-8 p-4 rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
        <h3 className="text-xl font-semibold">Item 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <i className="fa-solid fa-trash fa-lg mt-5 cursor-pointer"></i>
        <i className="fa-solid fa-pen-to-square fa-lg absolute right-1 top-3 cursor-pointer"></i>
      </div>
      
    </div>
      {/* ?????? */}
      <div className={`fixed top-0 z-50 left-0 w-full h-full flex items-center justify-center ${modalClick ? '' : 'hidden'}`}>
      <div className="modal-container  relative">
        <div className="modal-content xl:w-96 lg:w-96 md:w-96 sm:w-80 w-64 border-gray border-solid border-2 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Edit Note</h2>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-600 mb-1">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              // value={editedNote.title}
              // onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-black"
              placeholder="Enter the note title"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-600 mb-1">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              // value={editedNote.description}
              // onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-black"
              placeholder="Enter the note description"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="tags" className="block text-gray-600 mb-1">
              Tags
            </label>
            <input
              type="text"
              id="tags"
              name="tags"
              // value={editedNote.tags}
              // onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-black"
              placeholder="Enter tags"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              // onClick={handleSave}
              className=" bg-gray-800 text-white font-semibold py-2 rounded-lg hover:ring focus:outline-none px-4 mr-2"
            >
              Save
            </button>
            <i class="fa-solid absolute top-5 right-1 fa-circle-xmark fa-2xl cursor-pointer" onClick={clickedModal}></i>
          </div>
        </div>
      </div>
    </div>
      {/* ?????? */}
    </div>
  )
}
