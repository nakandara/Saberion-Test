import { nanoid } from "@reduxjs/toolkit";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLaptop, laptopSliceSelector } from "../storeNew/reducers/laptopSlice";

const LaptopComponents = () => {
    const laptop = useSelector(laptopSliceSelector);
    const dispatch = useDispatch();
    const price = useRef()
    const cpu = useRef()
    const gen = useRef()
    const ram = useRef()
    const hdd = useRef()
    const addAlptopHandler = () => {
        dispatch(addLaptop(price.current.value, cpu.current.value, gen.current.value, ram.current.value, hdd.current.value))
    };
    return (
        <div>
            <div></div>
            <h4>ADD LAPTOP</h4>
            <input ref={price} type="text" placeholder="price "></input>
            <input ref={cpu} type="text" placeholder="cpu"></input>
            <input ref={gen} type="text" placeholder="gen"></input>
            <input ref={ram} type="text" placeholder="ram"></input>
            <input ref={hdd} type="text" placeholder="hdd"></input>
            <button onClick={addAlptopHandler}>Add Laptop</button>
            {laptop.map((ele) => (
                <p key={ele.id}>
                    {ele.price}|{ele.spec.cpu}|{ele.spec.ram}
                </p>
            ))}
        </div>
    );
};

export default LaptopComponents;
