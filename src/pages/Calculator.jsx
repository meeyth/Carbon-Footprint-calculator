import React, { useState } from 'react'

const Calculator = () => {
    const [pdk, setPdk] = useState(0);
    const [cl, setCl] = useState(0);
    const [elec, setElec] = useState(0);
    const [cw, setCw] = useState(0);
    const [animal, setAnimal] = useState(0);
    const [food, setFood] = useState(0);
    const [essential, setEssential] = useState(0);
    const [nonEssential, setNonEssential] = useState(0);
    const [bedroom, setBedroom] = useState(0);
    const [car, setCar] = useState(0);
    const [ac, setAc] = useState(0);
    const [fridge, setFridge] = useState(0);
    const [washing, setWashing] = useState(0);
    const [geaser, setGeaser] = useState(0);
    const [microwave, setMicrowave] = useState(0);
    const [bicycle, setBicycle] = useState(0);
    const [telivision, setTelivision] = useState(0);
    const [computer, setComputer] = useState(0);
    const [mobile, setMobile] = useState(0);
    const [wheeler, setWheeler] = useState(0);
    const [cycle, setCycle] = useState(0);
    const [water, setWater] = useState(0);
    const [GDP, setGDP] = useState(0);

    const [dispose, setDispose] = useState(0);
    const [urinal, setUrinal] = useState(0);
    const [location, setLocation] = useState(0);
    const [family, setFamily] = useState(0);

    const [totalCarbon, setTotalCarbon] = useState(null);

    const calculate = () => {
        // The implementation and calculation details cannot be relealed
    }

    return (

        <div className="flex flex-col items-center h-fit bg-gradient-to-br from-[#E3FFFA] to-[#D0FF6C] p-6 w-[100%]">
            <div className="flex flex-col justify-center items-center h-[10%] w-[100%]">
                <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-slate-800">Calculate Your Carbon-Footprint</h1>
                <h3 className="text-sm font-semibold text-slate-900">Fill all the values for one week, and for all the family members</h3>
            </div>
            <div className="relative bg-gradient-to-br from-green-300 to-lime-200 rounded-lg shadow-lg w-[100%] md:w-[80%] lg:w-[80%] mt-10 flex flex-col h-fit ">
                <div className=" bg-white bg-opacity-20 backdrop-filter backdrop-blur-md rounded-lg p-3 md:p-10 lg:p-10 flex flex-col h-fit shadow-lg w-[100%] md:w-[100%] lg:w-[100%] ">

                    <label htmlFor="family" className="text-md text-slate-700"><b>No of family members:</b></label>
                    <input id='family' type="number" placeholder='values in numbers' className='rounded-md h-10 p-2 mt-1' onChange={(e) => setFamily(e.target.value)} />

                    <label htmlFor="pdk" className="text-md text-slate-700 mt-3"><b>Usage of Petrol/Diesel/Kerocene:</b></label>
                    <input id='pdk' type="number" placeholder='values in liters' className='rounded-md h-10 p-2 mt-1' onChange={(e) => setPdk(e.target.value)} />
                    <label htmlFor="cl" className="text-md text-slate-700 mt-3"><b>Usage of CNG/LPG:</b></label>
                    <input id='cl' type="number" placeholder='values in liters' className='rounded-md h-10 p-2 mt-1' onChange={(e) => setCl(e.target.value)} />
                    <label htmlFor="elec" className="text-md text-slate-700 mt-3"><b>Usage of Electricity:</b></label>
                    <input id='elec' type="number" placeholder='values in Kwh' className='rounded-md h-10 p-2 mt-1' onChange={(e) => setElec(e.target.value)} />
                    <label htmlFor="cw" className="text-md text-slate-700 mt-3"><b>Usage of Coal/Wood:</b></label>
                    <input id='cw' type="number" placeholder='values in Kg' className='rounded-md h-10 p-2 mt-1' onChange={(e) => setCw(e.target.value)} />
                    <label htmlFor="animal" className="text-md text-slate-700 mt-3"><b>Consumption of Meat/Fish/Eggs or any other animal product like milk:</b></label>
                    <input id='animal' type="number" placeholder='values in Kg' className='rounded-md h-10 p-2 mt-1' onChange={(e) => setAnimal(e.target.value)} />
                    <label htmlFor="food" className="text-md text-slate-700 mt-3"><b>Consumption of  other food product:</b></label>
                    <input id='food' type="number" placeholder='values in Kg' className='rounded-md h-10 p-2 mt-1' onChange={(e) => setFood(e.target.value)} />
                    <label htmlFor="Essential" className="text-md text-slate-700 mt-3"><b>Consumption of Goods or Servicea(Essential i.e, Schooling, Medicine, Clothes):</b></label>
                    <input id='Essential' type="number" placeholder='values in cost(USD)' className='rounded-md h-10 p-2 mt-1' onChange={(e) => setEssential(e.target.value)} />
                    <label htmlFor="nonEssential" className="text-md text-slate-700 mt-3"><b>Consumption of Goods or Services(Non-Essential):</b></label>
                    <input id='nonEssential' type="number" placeholder='values in cost(USD)' className='rounded-md h-10 p-2 mt-1' onChange={(e) => setNonEssential(e.target.value)} />
                    <label htmlFor="Bedroom" className="text-md text-slate-700 mt-3"><b>No of Bedroom(s):</b></label>
                    <input id='Bedroom' type="number" placeholder='values in number' className='rounded-md h-10 p-2 mt-1' onChange={(e) => setBedroom(e.target.value)} />
                    <label htmlFor="Car" className="text-md text-slate-700 mt-3"><b>No of Car(s):</b></label>
                    <input id='Car' type="number" placeholder='values in number' className='rounded-md h-10 p-2 mt-1' onChange={(e) => setCar(e.target.value)} />
                    <label htmlFor="Ac" className="text-md text-slate-700 mt-3"><b>No of Ac(s):</b></label>
                    <input id='Ac' type="number" placeholder='values in number' className='rounded-md h-10 p-2 mt-1' onChange={(e) => setAc(e.target.value)} />
                    <label htmlFor="Fridge" className="text-md text-slate-700 mt-3"><b>No of Fridge(s):</b></label>
                    <input id='Fridge' type="number" placeholder='values in number' className='rounded-md h-10 p-2 mt-1' onChange={(e) => setFridge(e.target.value)} />
                    <label htmlFor="Washing" className="text-md text-slate-700 mt-3"><b>No of Washing Machine(s):</b></label>
                    <input id='Washing' type="number" placeholder='values in number' className='rounded-md h-10 p-2 mt-1' onChange={(e) => setWashing(e.target.value)} />
                    <label htmlFor="Geaser" className="text-md text-slate-700 mt-3"><b>No of Geaser(s):</b></label>
                    <input id='Geaser' type="number" placeholder='values in number' className='rounded-md h-10 p-2 mt-1' onChange={(e) => setGeaser(e.target.value)} />
                    <label htmlFor="Microwave" className="text-md text-slate-700 mt-3"><b>No of Microwave Oven(s):</b></label>
                    <input id='Microwave' type="number" placeholder='values in number' className='rounded-md h-10 p-2 mt-1' onChange={(e) => setMicrowave(e.target.value)} />
                    <label htmlFor="Bicycle" className="text-md text-slate-700 mt-3"><b>No of Bicycle(s):</b></label>
                    <input id='Bicycle' type="number" placeholder='values in number' className='rounded-md h-10 p-2 mt-1' onChange={(e) => setBicycle(e.target.value)} />
                    <label htmlFor="Telivision" className="text-md text-slate-700 mt-3"><b>No of Telivision(s):</b></label>
                    <input id='Telivision' type="number" placeholder='values in number' className='rounded-md h-10 p-2 mt-1' onChange={(e) => setTelivision(e.target.value)} />
                    <label htmlFor="Computer" className="text-md text-slate-700 mt-3"><b>No of Computer/Laptop(s):</b></label>
                    <input id='Computer' type="number" placeholder='values in number' className='rounded-md h-10 p-2 mt-1' onChange={(e) => setComputer(e.target.value)} />
                    <label htmlFor="Mobile" className="text-md text-slate-700 mt-3"><b>No of Mobile/Tablet(s):</b></label>
                    <input id='Mobile' type="number" placeholder='values in number' className='rounded-md h-10 p-2 mt-1' onChange={(e) => setMobile(e.target.value)} />
                    <label htmlFor="wheeler" className="text-md text-slate-700 mt-3"><b>No of Two wheeler(s):</b></label>
                    <input id='wheeler' type="number" placeholder='values in number' className='rounded-md h-10 p-2 mt-1' onChange={(e) => setWheeler(e.target.value)} />


                    <b className="text-md text-slate-700 mt-3">How do you dispose your waste?</b>
                    <div className='flex gap-4'>
                        <input name="waste" id='a' type="radio" className='rounded-md h-10 p-2 mt-1' value="no-dispose" onChange={(e) => setDispose(e.target.value)} />
                        <label htmlFor="a" className="text-md text-slate-700 mt-3">Do not dispose at all just through somewhere</label>
                    </div>
                    <div className='flex gap-4'>
                        <input name="waste" id='b' type="radio" className='rounded-md h-10 p-2 mt-1' value="dispose" onChange={(e) => setDispose(e.target.value)} />
                        <label htmlFor="b" className="text-md text-slate-700 mt-3">Dispose all waste together</label>
                    </div>
                    <div className='flex gap-4'>
                        <input name="waste" id='c' type="radio" className='rounded-md h-10 p-2 mt-1' value="proper-dispose" onChange={(e) => setDispose(e.target.value)} />
                        <label htmlFor="c" className="text-md text-slate-700 mt-3">Proper disposal other segregation</label>
                    </div>
                    <div className='flex gap-4'>
                        <input name="waste" id='d' type="radio" className='rounded-md h-10 p-2 mt-1' value="CRR" onChange={(e) => setDispose(e.target.value)} />
                        <label htmlFor="d" className="text-md text-slate-700 mt-3">Compost waste / Reuse / Recycle of waste</label>
                    </div>


                    <b className="text-md text-slate-700 mt-3">Do you use proper Urnal?</b>
                    <div className='flex gap-4'>
                        <input name="urinal" id='e' type="radio" className='rounded-md h-10 p-2 mt-1' value="bio-toilet" onChange={(e) => setUrinal(e.target.value)} />
                        <label htmlFor="e" className="text-md text-slate-700 mt-3">Scientific Bio-toilet</label>
                    </div>
                    <div className='flex gap-4'>
                        <input name="urinal" id='f' type="radio" className='rounded-md h-10 p-2 mt-1' value="pit-toilet" onChange={(e) => setUrinal(e.target.value)} />
                        <label htmlFor="f" className="text-md text-slate-700 mt-3">Non Scientific pit toilet</label>
                    </div>
                    <div className='flex gap-4'>
                        <input name="urinal" id='g' type="radio" className='rounded-md h-10 p-2 mt-1' value="open" onChange={(e) => setUrinal(e.target.value)} />
                        <label htmlFor="g" className="text-md text-slate-700 mt-3">Open defection</label>
                    </div>


                    <label htmlFor="cycle" className="text-md text-slate-700 mt-3"><b>Approx Km you walk or cycle:</b></label>
                    <input id='cycle' type="number" placeholder='values in Km' className='rounded-md h-10 p-2 mt-1' onChange={(e) => setCycle(e.target.value)} />
                    <label htmlFor="Water" className="text-md text-slate-700 mt-3"><b>Approx Water used:</b></label>
                    <input id='Water' type="number" placeholder='values in liter' className='rounded-md h-10 p-2 mt-1' onChange={(e) => setWater(e.target.value)} />

                    <b className="text-md text-slate-700 mt-3">How do you consider your location?</b>
                    <div className='flex gap-4'>
                        <input name="loc" id='i' type="radio" className='rounded-md h-10 p-2 mt-1' value="metro" onChange={(e) => setLocation(e.target.value)} />
                        <label htmlFor="i" className="text-md text-slate-700 mt-3">Metro</label>
                    </div>
                    <div className='flex gap-4'>
                        <input name="loc" id='j' type="radio" className='rounded-md h-10 p-2 mt-1' value="urban" onChange={(e) => setLocation(e.target.value)} />
                        <label htmlFor="j" className="text-md text-slate-700 mt-3">Urban</label>
                    </div>
                    <div className='flex gap-4'>
                        <input name="loc" id='k' type="radio" className='rounded-md h-10 p-2 mt-1' value="semi-urban" onChange={(e) => setLocation(e.target.value)} />
                        <label htmlFor="k" className="text-md text-slate-700 mt-3">Semi-Urban</label>
                    </div>
                    <div className='flex gap-4'>
                        <input name="loc" id='l' type="radio" className='rounded-md h-10 p-2 mt-1' value="rural" onChange={(e) => setLocation(e.target.value)} />
                        <label htmlFor="l" className="text-md text-slate-700 mt-3">Rural</label>
                    </div>
                    <div className='flex gap-4'>
                        <input name="loc" id='l' type="radio" className='rounded-md h-10 p-2 mt-1' value="ext-rural" onChange={(e) => setLocation(e.target.value)} />
                        <label htmlFor="l" className="text-md text-slate-700 mt-3">Extreme Rural</label>
                    </div>

                    <label htmlFor="GDP" className="text-md text-slate-700 mt-3"><b>Per capital GDP of your country:</b></label>
                    <input id='GDP' type="number" placeholder='values in number' className='rounded-md h-10 p-2 mt-1' onChange={(e) => setGDP(e.target.value)} />


                    <button className='mt-6 h-10 bg-gradient-to-br from-[#E3FFFA] to-[#D0FF6C] p-2 rounded-lg shadow-lg text-lg text-slate-900 font-bold' onClick={calculate}>Calculate</button>
                    {totalCarbon ? <div className="mt-5 h-12 w-[100%] bg-white rounded-lg opacity-80 flex items-center justify-center">
                        <b>Your Carbon Footprint is - {totalCarbon} <sub>*(appx)</sub></b>
                    </div> : ""}
                </div>

            </div>

        </div>

    )
}

export default Calculator