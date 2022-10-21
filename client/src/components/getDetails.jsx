//client get details
import React, { Component } from 'react';
import { doc, getDoc, collection } from 'firebase/firestore';
import { db } from "../firebase-config";

export default class GetDetailsWithDocID extends Component {
    
        constructor(props) {
            super(props);
            this.state = {
                certificate: {},
                stu_id: "",
            };
        }
    
        componentDidMount() {
            this.getCertificate();
        }
    
        certificatesCollection = collection(db, "cerfiticates");

        getCertificate = async () => {
            const docRef = doc(this.certificatesCollection, this.state.stu_id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                this.setState({ certificate: docSnap.data() });
            } else {
                console.log("No such document!");
            }
        };
    render() {
        return (
            <div>
                <h1>Get Certificate Details</h1>
                <input type="text" placeholder="Enter Student ID" onChange={(e) => this.setState({ stu_id: e.target.value })} />
                <button onClick={this.getCertificate}>Get Certificate</button>
                <p>{this.state.certificate.name}</p>
                <p>{this.state.certificate.stu_id}</p>
                <p>{this.state.certificate.email}</p>
                <p>{this.state.certificate.course}</p>
                <p>{this.state.certificate.date}</p>
                <p>{this.state.certificate.college}</p>
                <p>{this.state.certificate.term}</p>
                <p>{this.state.certificate.transactionETH}</p>

            </div>
        )
    }


}