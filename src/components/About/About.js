const navigation = [
    { name: "Qui sommes nous", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit malesuada nulla sodales imperdiet. Suspendisse vitae feugiat risus. Praesent convallis ut arcu non malesuada. Vestibulum varius diam et dui feugiat semper. " },
    { name: "Notre vision", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit malesuada nulla sodales imperdiet. Suspendisse vitae feugiat risus. Praesent convallis ut arcu non malesuada. Vestibulum varius diam et dui feugiat semper. " },
    { name: "Notre mission", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit malesuada nulla sodales imperdiet. Suspendisse vitae feugiat risus. Praesent convallis ut arcu non malesuada. Vestibulum varius diam et dui feugiat semper. " },
];

export default function About() {
    return (
        <div className="bg-indigo-700">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>
                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="3071a3ad-db4a-4cbe-ac9a-47850b69e4b7"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#3071a3ad-db4a-4cbe-ac9a-47850b69e4b7)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span className="relative">À</span>
                        </span>{' '}
                        propos de nous                    </h2>
                    <p className="text-base text-indigo-50 md:text-lg">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque rem aperiam, eaque ipsa quae.
                    </p>
                </div>

                <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
                        <div className="flex flex-col justify-center">
                        {navigation.map((item) => (
                            <div className="flex">
                                <div className="mr-4">
                                    <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                                        <svg
                                            className="w-8 h-8 text-deep-purple-accent-400"
                                            stroke="currentColor"
                                            viewBox="0 0 52 52"
                                        >
                                            <polygon
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                fill="none"
                                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h6 className="mb-2 font-semibold leading-5 text-indigo-50">
                                        {item.name}
                                    </h6>
                                    <p className="text-sm text-indigo-200">
                                        {item.description}
                                    </p>
                                    <hr className="w-full my-6 border-gray-300" />
                                </div>
                            </div>
                                                ))}

                        </div>



                    <div className="grid grid-cols-2 gap-5">
                        <img
                            className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
                            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                            alt=""
                        />
                        <img
                            className="object-cover w-full h-48 rounded shadow-lg"
                            src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                            alt=""
                        />
                        <img
                            className="object-cover w-full h-48 rounded shadow-lg"
                            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};