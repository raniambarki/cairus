import React, { useState } from 'react';
import { db } from "../../firebase"
import { collection, addDoc } from "firebase/firestore";


export default function Newsletter() {

  const [newName, setNewName] = useState("")
  const [newMail, setNewMail] = useState("")
  const mailRef = collection(db, "cairus")

  const MailAdd = async (e) => {
    e.preventDefault();


    await addDoc(mailRef, { name: newName, mail: newMail }
    )
    toggleModal()
  }

  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  return (
    <div className="overflow-hidden bg-gray-900">

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between xl:flex-row">
          <div className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
              Inscrivez-vous à notre newsletter pour être au courant des dernières nouvelles et savoir tout sur
              <span className="text-indigo-700"> Cairus</span>
            </h2>
          </div>
          <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
            <div className="relative">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute bottom-0 right-0 z-0 hidden w-32 -mb-8 -mr-20 text-indigo-700 lg:w-32 lg:-mr-16 sm:block"
              >
                <defs>
                  <pattern
                    id="766323e1-e594-4ffd-a688-e7275079d540"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#766323e1-e594-4ffd-a688-e7275079d540)"
                  width="52"
                  height="24"
                />
              </svg>
              <div className="relative bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-bold sm:text-center sm:mb-6 sm:text-2xl">
                  Newsletter
                </h3>
                <form onSubmit={MailAdd}>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="name"
                      className="inline-block mb-1 font-medium"
                    >
                      Nom
                    </label>
                    <input
                      placeholder="Foulen ben foulen"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-indigo-700"
                      id="name"
                      name="name"
                      onChange={(event) => {
                        setNewName(event.target.value)
                      }}
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="mail"
                      className="inline-block mb-1 font-medium"
                    >
                      E-mail
                    </label>
                    <input
                      placeholder="Foulen@example.tn"
                      required
                      type="email"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-indigo-700"
                      id="mail"
                      name="mail"
                      onChange={(event) => {
                        setNewMail(event.target.value)
                      }}
                    />
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type='submit'
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-700 hover:bg-indigo-900"
                    >
                      S'inscrire
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {modal && (
        <div class="max-w-2xl mx-auto sm:px-6 lg:px-8">
        <div class="overflow-hidden shadow-md">
          <div class="px-6 py-4 bg-white border-b border-gray-200 font-bold uppercase">
            Merci pour votre interêt envers notre service
          </div>


          <div class="p-6 bg-white border-gray-200 text-right">
            <button class="bg-indigo-700 shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-indigo-900 rounded uppercase"
              href="#"
              onClick={toggleModal}>continuer</button>
          </div>
        </div>
      </div>
        



      )}
    </div>


  );
};