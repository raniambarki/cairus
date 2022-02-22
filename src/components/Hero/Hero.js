import girl from '../../images/pic.png'


export default function Hero() {
    return (
        <div className=' bg-indigo-700'>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">

                <div className="flex flex-col items-center justify-between lg:flex-row">

                    <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
                        <div className="max-w-xl mb-6">
                            <div>
                                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                                    Coming soon!
                                </p>
                            </div>
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-indigo-50 sm:text-4xl sm:leading-none">
              La création d'une
            <br className="hidden md:block" />
            entreprise n'a jamais été {' '}
                <span className="inline-block text-teal-accent-400">
                aussi facile!
                </span>
              </h2>
              <p className="text-base text-indigo-50 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
              </p>
                        </div>
                        <div className="flex flex-col items-center md:flex-row">
                            <a
                                href="/"
                                className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-indigo-900 transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-white hover:bg-indigo-100 focus:shadow-outline focus:outline-none"
                            >
                                <span>Domicilier mon entreprise</span>

                            </a>
                            <a
                                href="/"
                                aria-label=""
                                className="inline-flex items-center font-semibold text-white transition-colors duration-200 hover:text-indigo-100"
                            >
Être rappelé                            </a>
                        </div>
                    </div>

                    <div className="relative lg:w-1/2">
                        <img
                            className="object-cover w-full 56h- rounded sm:h-96"
                            src={girl}
                            alt=""
                        />
                        
                    </div>
                </div>
            </div>
        </div>
    );
};