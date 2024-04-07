import "./font.css";
import { useState } from "react";
import Web3 from "web3";
import { NavLink } from "react-router-dom";

function Header() {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
        setIsConnected(true);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error("MetaMask not detected");
    }
  };

  return (
    <div className="h-[13vh] flex justify-between items-center px-24">
      <div>
      <NavLink
          to="/home"
          className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400"
          style={{ fontFamily: "Nanum Gothic Coding", fontWeight: 800 }}
        >
          SecureInsure
          </NavLink>
      </div>
      <div className="flex gap-7">   
        <NavLink
          to="/st"
          className="group hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-200 hover:to-blue-500 px-5 py-2 rounded-3xl shadow-blue-600 bg-gray-900 tracking-wide cursor-pointer hover:text-lg transition-all duration-250 flex justify-center items-center"
          style={{ fontFamily: "Nanum Gothic Coding", fontWeight: 600 }}
        >
          Send Transaction
          </NavLink>

          <NavLink
          to="/th"
          className="group hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-200 hover:to-blue-500 px-5 py-2 rounded-3xl shadow-blue-600 bg-gray-900 tracking-wide cursor-pointer hover:text-lg transition-all duration-250 flex justify-center items-center"
          style={{ fontFamily: "Nanum Gothic Coding", fontWeight: 600 }}
        >
          Transaction History
          </NavLink>

          <NavLink
          to="/claims"
          className="group hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-200 hover:to-blue-500 px-5 py-2 rounded-3xl shadow-blue-600 bg-gray-900 tracking-wide cursor-pointer hover:text-lg transition-all duration-250 flex justify-center items-center"
          style={{ fontFamily: "Nanum Gothic Coding", fontWeight: 600 }}
        >
          Claims
          </NavLink>

          <NavLink
          to="/profile"
          className="group hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-200 hover:to-blue-500 px-5 py-2 rounded-3xl shadow-blue-600 bg-gray-900 tracking-wide cursor-pointer hover:text-lg transition-all duration-250 flex justify-center items-center"
          style={{ fontFamily: "Nanum Gothic Coding", fontWeight: 600 }}
        >
          Profile
          </NavLink>
        <div
          className={`relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-3xl group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 ${
            isConnected ? "text-gray-400" : ""
          }`}
          onClick={isConnected ? null : connectWallet}
          style={{ fontFamily: "Nanum Gothic Coding", fontWeight: 700 }}
        >
          <span
            className={`relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-3xl cursor-pointer group-hover:bg-opacity-0 ${
              isConnected ? "text-sm" : "" // Apply smaller font size if connected
            }`}
          >
            {isConnected ? `(${account})` : "Connect Wallet"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;