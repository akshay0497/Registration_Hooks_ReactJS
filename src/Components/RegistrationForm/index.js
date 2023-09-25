import React, { useEffect, useState } from "react";

const RegistrationForm = () => {
    const data = { name: "", email: "", password: "" };
    const [inputData, setInputData] = useState(data);
    const [flag, setFlag] = useState(false);
    useEffect(() => {
        console.log("Registered");
    }, [flag]);

    const handleData = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
        console.log(inputData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputData.name || !inputData.email || !inputData.password) {
            alert("All fields are Mandatory");
        } else {
             setFlag(true);
        }
    };

    return (
        <div >
        <div className="bg-[#273233] w-screen h-screen absolute  ">
            <pre className="bg-white text-[#127c71] h-10 py-2 w-fit rounded-md  ">
                {flag ? (
                    <h2>Hello {inputData.name}, You've Registered Successfully </h2>
                ) : ("")}
            </pre>
            <form onSubmit={handleSubmit} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div>
                    <h1 className="bg-clip-text p-5 text-transparent bg-gradient-to-r from-teal-400 to-blue-500 text-4xl ">REGISTRATION FORM</h1>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        autoComplete="off"
                        name="name"
                        value={inputData.name}
                        onChange={handleData}
                        className="w-9/12 my-5 bg-slate-100 h-8 rounded py-2 "
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Enter your email"
                        autoComplete="off"
                        name="email"
                        value={inputData.email}
                        onChange={handleData}
                        className="w-9/12 py-2 my-5 bg-slate-100 h-8 rounded "

                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Enter your password"
                        autoComplete="off"
                        name="password"
                        value={inputData.password}
                        onChange={handleData}
                        className="w-9/12 py-2 my-5 bg-slate-100 h-8 rounded "

                    />
                </div>
                <div>
                    <button type="submit" className="bg-[#0d6efd] my-10 rounded-3xl text-white text-xl w-20 h-10 ">Save</button>
                </div>
            </form>
        </div>
        </div>
    );
};

export default RegistrationForm;
