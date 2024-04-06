import React, { useState } from 'react';
import logo from './assets/logo (3).png'
import circle from './assets/circle.png' 
import pnb from './assets/pnb.png'
import './font.css'

function Homepg() {

  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const items = [
    {
      title: 'TRANSPARENCY',
      description: "Blockchain's inherent transparency and immutability foster trust among all parties involved. By providing a shared, tamper-proof ledger of transactions, insurers, policyholders, and other stakeholders can rely on accurate and verifiable data.",
    },
    {
      title: 'TIME',
      description: "The utilization of blockchain in insurance significantly reduces the time required for various operations. Through the elimination of manual paperwork and the automation of processes facilitated by smart contracts.",
    },
    {
      title: 'FRAUDULENT',
      description: "Blockchain technology serves as a robust defense mechanism against fraudulent activities within the insurance sector. The decentralized nature of blockchain networks makes them resistant to unauthorized alterations or falsifications of data.",
    },
    {
      title: 'DECENTRALIZATION',
      description: "Decentralization inherent in blockchain networks mitigates the risk of a single point of failure. Traditional insurance systems often rely on centralized databases, making them vulnerable to cyberattacks or technical failures.",
    },
  ];

  return (
    <div>
    <div className="flex gap-2">
      <div className="flex-row h-[70vh] text-center items-center justify-center w-[60vw] ml-6">
        <div className="mt-[200px] mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500" style={{ fontSize: '2.7em', fontFamily: 'Space Grotesk', fontWeight: 'bolder' }}>
          Shield in the blockchain insurance realm.
        </div>
        <div className='text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500' style={{ fontSize: '2em', fontFamily: 'Space Grotesk', fontWeight: 'bolder' }}>
          Trust. Efficiency. Security
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img className="w-[350px] ml-20 shadow-white-glow rounded-3xl pt-2" src={logo} alt="Logo" />
      </div>
    </div>

    <div className='flex gap-9 mb-36 items-center justify-center mt-9'>
      {items.map((item, index) => (
        <div
          key={index}
          className='p-5 text-center h-[45vh] w-[20vw] rounded-3xl'
          style={{
            backgroundColor: hoveredItem === index ? 'rgb(191, 87, 26)' : '#092635',
            transition: 'background-color 0.3s',
            color: hoveredItem === index ? '#092635' : '#E3651D',
          }}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <div className='font-bold text-xl mb-5' style={{fontFamily: 'Nanum Gothic Coding', fontWeight: 'bold' }}>{item.title}</div>
          <div className='text-lg' style={{ color: 'white', fontFamily: 'Space Grotesk'}}>{item.description}</div>
        </div>
      ))}
    </div>

    <div className='flex items-center justify-center mb-16 w-[1400px] ml-12' ><img src={pnb} alt="" /></div>

    <div className='flex w-[70vw] items-center justify-center mx-auto mb-20 text-xl p-5 rounded-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400' style={{backgroundColor: '#092635' }}>
      <div style={{ fontFamily: 'Space Grotesk', fontWeight: 'bold' }}>Life insurance can do more than just provide your loved ones with financial security. Our plans are created to be your source of support through the Circle of Life. Be it responsibility towards your family, achieving your wealth plans and goals or saving for the later stages in life, PNB Metlife plans meet the needs of every aspect of your life.</div>
      <div className='w-[1800px]'><img src={circle} alt="" /></div>
    </div>
    </div>
  );
}

export default Homepg;
