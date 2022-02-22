const Step = [
    { Step: "Accompagnement", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum nisi sed rhoncus elementum. Nullam nec facilisis ipsum. Duis sed felis sit amet mauris mattis accumsan', href: "#" },
    { Step: "Accompagnement", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum nisi sed rhoncus elementum. Nullam nec facilisis ipsum. Duis sed felis sit amet mauris mattis accumsan', href: "#" },
    { Step: "Service Divers", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum nisi sed rhoncus elementum. Nullam nec facilisis ipsum. Duis sed felis sit amet mauris mattis accumsan', href: "#" },
];


export default function Steps() {
    return (
        <div className="bg-gray-900">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">

                        Comment Domicilier mon entreprise ? </h2>
                </div>



                <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
                    <div className="lg:py-6 lg:pr-16">
                        {Step.map((item) => (
                            <div className="flex">
                                <div className="flex flex-col items-center mr-4">
                                    <div>
                                        <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                            <svg
                                                className="w-4 text-gray-600"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                viewBox="0 0 24 24"
                                            >
                                                <line
                                                    fill="none"
                                                    strokeMiterlimit="10"
                                                    x1="12"
                                                    y1="2"
                                                    x2="12"
                                                    y2="22"
                                                />
                                                <polyline
                                                    fill="none"
                                                    strokeMiterlimit="10"
                                                    points="19,15 12,22 5,15"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="w-px h-full bg-white" />
                                </div>
                                <div className="pt-1 pb-8">
                                    <p className="mb-2 text-lg font-bold text-white ">{item.Step}</p>
                                    <p className="text-gray-500">
                                        {item.description}      </p>
                                </div>
                            </div>
                        ))}

                        <div className="flex">
                            <div className="flex flex-col items-center mr-4">
                                <div>
                                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                        <svg
                                            className="w-6 text-gray-600"
                                            stroke="white"
                                            viewBox="0 0 24 24"
                                        >
                                            <polyline
                                                fill="none"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeMiterlimit="10"
                                                points="6,12 10,16 18,8"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-1">
                                <p className="mb-2 text-lg font-bold text-white">Success</p>
                            </div>
                        </div>
                    </div>


                <div className="relative">
                    <img
                        className="inset-0 object-cover object-bottom w-full rounded shadow-lg h-96 lg:absolute lg:h-full"
                        src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt=""
                    />
                </div>
            </div>
        </div>
    </div >
    );
};




