//form add certificate
import React, {  useEffect, useState } from "react";
import { db } from "../firebase-config";
import { collection, setDoc, doc } from "firebase/firestore";
import abi from "../utils/Certificates.json";
import { ethers } from "ethers";

const AddCertETH = () => {
    //this step is setting up the state
    const contractAddress = "0xD185f1427B67D185859e10D5B6A2E7B976a25733";
    const contractABI = abi.abi;
    const [name, setName] = useState("");
    const [stu_id, setStu_id] = useState("");
    const [email, setEmail] = useState("");
    const [course, setCourse] = useState("");
    const [date, setDate] = useState("");
    const [college, setCollege] = useState("");
    const [term, setTerm] = useState("");
    const [transactionETH, setTransactionETH] = useState("");

    //this step is checking if the user has metamask installed
    useEffect(() => {
        if (window.ethereum) {
            console.log("MetaMask is installed");
        } else {
            console.log("MetaMask is not installed");
        }
    }, []);

    //this step is connecting to the blockchain
    const connectToBlockchain = async () => {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI, signer);
        return contract;
    }

    //this step is adding the certificate to the blockchain and the firebase database
    const addCertificateETH = async () => {
        const contract = await connectToBlockchain();
        const transaction = await contract.addCertificate(name, stu_id, email, course, date, college, term);
        await transaction.wait();
        setTransactionETH(transaction.hash);
        console.log(transaction.hash);
        const certificatesCollection = collection(db, "certificates");
        await setDoc(doc(certificatesCollection, stu_id), {
            name: name,
            stu_id: stu_id,
            email: email,
            course: course,
            date: date,
            college: college,
            term: term,
            transactionETH: transaction.hash,
        });
    }





    return (
        <div>
            <h1>Add Certificate</h1>
            <input type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Enter Student ID" onChange={(e) => setStu_id(e.target.value)} />
            <input type="text" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="Enter Course" onChange={(e) => setCourse(e.target.value)} />
            <input type="text" placeholder="Enter Date" onChange={(e) => setDate(e.target.value)} />
            <input type="text" placeholder="Enter College" onChange={(e) => setCollege(e.target.value)} />
            <input type="text" placeholder="Enter Term" onChange={(e) => setTerm(e.target.value)} />
            <button onClick={addCertificateETH}>Add Certificate to Blockchain</button>
            <p>Transaction Hash: {transactionETH}</p>
        </div>

    );
}
export default AddCertETH;
