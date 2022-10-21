//admin get all certificates
import React, { Component } from 'react';
import { doc, getDocs, collection } from 'firebase/firestore';
import { db } from "../firebase-config";


export default class GetAllCertificates extends Component {

    constructor(props) {
        super(props);
        this.state = {
            certificates: [],
        };
    }

    componentDidMount() {
        this.getAllCertificates();
    }

    certificatesCollection = collection(db, "cerfiticates");
    getAllCertificates = async () => {
        const querySnapshot = await getDocs(this.certificatesCollection);
        const certificates = [];
        querySnapshot.forEach((doc) => {
            certificates.push(doc.data());
        });
        this.setState({ certificates });
    };

    render() {
        return (
            <div>
                <table className="table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Student ID</th>
                                        <th>Email</th>
                                        <th>Course</th>
                                        <th>Date</th>
                                        <th>College</th>
                                        <th>Term</th>
                                        <th>Transaction ETH</th>
                                    </tr>
                                </thead>
                                
                {/* <button onClick={this.getAllCertificates}>Get All Certificates</button> */}
                {this.state.certificates.map((cert) => {
                    return (
                        <div>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>{cert.name}</td>
                                        <td>{cert.stu_id}</td>
                                        <td>{cert.email}</td>
                                        <td>{cert.course}</td>
                                        <td>{cert.date}</td>
                                        <td>{cert.college}</td>
                                        <td>{cert.term}</td>
                                        <td>{cert.transactionETH}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    );
                    
                })}
                </table>
            </div>
        );
    }

}