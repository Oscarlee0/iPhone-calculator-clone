import React, { useState } from "react";

const App = () => {
  return (
    <>
      <Calculator />
    </>
  );
};

const Calculator = () => {
  const [input, setInput] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleClick = (symbol) => {
    if (!isNaN(symbol) || symbol === ".") {
      setInput((prev) => (prev === "0" ? symbol : prev + symbol));
    } else if (symbol === "AC") {
      setInput("0");
      setPreviousValue(null);
      setOperator(null);
    } else if (symbol === "C") {
      setInput((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
    } else if (symbol === "+/-") {
      setInput((prev) => (prev !== "0" ? String(-parseFloat(prev)) : prev));
    } else if (symbol === "%") {
      setInput((prev) =>
        prev !== "0" ? String(parseFloat(prev) / 100) : prev
      );
    } else if (["+", "-", "×", "÷"].includes(symbol)) {
      setPreviousValue(input);
      setOperator(symbol);
      setInput("0");
    } else if (symbol === "=") {
      if (previousValue && operator && input !== "0") {
        let result;
        const num1 = parseFloat(previousValue);
        const num2 = parseFloat(input);

        if (operator === "+") result = num1 + num2;
        else if (operator === "-") result = num1 - num2;
        else if (operator === "×") result = num1 * num2;
        else if (operator === "÷") result = num2 !== 0 ? num1 / num2 : "Error";

        setInput(String(result));
        setPreviousValue(null);
        setOperator(null);
      }
    }
  };

  return (
    <>
      <section className='w-full bg-gray-200 p-4 h-screen items-center justify-center'>
        <h1 className='flex text-center justify-center mx-auto mt-10 font-bold '>
          IPHONE CALCULATOR CLONE
        </h1>
        <div className='w-[300px] h-[520px] bg-[#1C1C1C] text-center p-4 flex flex-col mx-auto mt-20 rounded-lg'>
          {/* answer display  */}
          <div className='w-[100%] h-[30%] justify-end items-end flex'>
            <h1 className='text-white text-6xl font-normal'>{input}</h1>
          </div>

          {/* Button Sections */}
          <div className='w-full h-[70%] pt-4 rounded-lg flex flex-col gap-1'>
            <div className='w-full flex flex-row justify-between items-center gap-1'>
              <ButtonCal
                color='bg-[#b0b0af]'
                symbol='AC'
                onClick={handleClick}
              />
              <ButtonCal
                color='bg-[#b0b0af]'
                symbol='+/-'
                onClick={handleClick}
              />
              <ButtonCal
                color='bg-[#b0b0af]'
                symbol='%'
                onClick={handleClick}
              />
              <ButtonCal symbol='÷' onClick={handleClick} />
            </div>

            <div className='w-full flex flex-row justify-between items-center gap-1'>
              <ButtonCal
                color='bg-[#505050]'
                symbol='7'
                onClick={handleClick}
              />
              <ButtonCal
                color='bg-[#505050]'
                symbol='8'
                onClick={handleClick}
              />
              <ButtonCal
                color='bg-[#505050]'
                symbol='9'
                onClick={handleClick}
              />
              <ButtonCal symbol='×' onClick={handleClick} />
            </div>

            <div className='w-full flex flex-row justify-between items-center gap-1'>
              <ButtonCal
                color='bg-[#505050]'
                symbol='4'
                onClick={handleClick}
              />
              <ButtonCal
                color='bg-[#505050]'
                symbol='5'
                onClick={handleClick}
              />
              <ButtonCal
                color='bg-[#505050]'
                symbol='6'
                onClick={handleClick}
              />
              <ButtonCal symbol='-' onClick={handleClick} />
            </div>

            <div className='w-full flex flex-row justify-between items-center gap-1'>
              <ButtonCal
                color='bg-[#505050]'
                symbol='1'
                onClick={handleClick}
              />
              <ButtonCal
                color='bg-[#505050]'
                symbol='2'
                onClick={handleClick}
              />
              <ButtonCal
                color='bg-[#505050]'
                symbol='3'
                onClick={handleClick}
              />
              <ButtonCal symbol='+' onClick={handleClick} />
            </div>

            <div className='w-full flex flex-row justify-between items-center gap-1'>
              <ButtonCal
                color='bg-[#505050]'
                symbol='C'
                onClick={handleClick}
              />
              <ButtonCal
                color='bg-[#505050]'
                symbol='0'
                onClick={handleClick}
              />
              <ButtonCal
                color='bg-[#505050]'
                symbol='.'
                onClick={handleClick}
              />
              <ButtonCal symbol='=' onClick={handleClick} />
            </div>
          </div>
          <div className='w-[100px] h-[4px] bg-white flex items-center justify-center mx-auto mt-5 rounded-xl'></div>
        </div>
      </section>
    </>
  );
};

const ButtonCal = ({ symbol, color = "bg-[#FF9500]", onClick }) => {
  return (
    <div
      className={`w-[60px] h-[60px] ${color} rounded-full flex items-center justify-center`}
      onClick={() => onClick(symbol)}
    >
      <span className='text-white text-xl font-normal'>{symbol}</span>
    </div>
  );
};



export default App;
