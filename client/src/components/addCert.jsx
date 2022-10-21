//form add certificate
import React, { Component } from "react";
import { db } from "../firebase-config";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";

class AddCert extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
        name: "",
        stu_id: "",
        email: "",
        course: "",
        date: "",
        college: "", 
        term: "",
        transactionETH: "",
        };
    }

    handleChange = (e) => {
        this.setState({
        [e.target.name]: e.target.value,
        });
    };
    
    certificatesCollection = collection(db, "cerfiticates");

    addCertToFirebase = async (e) => {
        //setDoc = dateTime.Now()
        e.preventDefault();
        const newCert = {
        name: this.state.name,
        stu_id: this.state.stu_id,
        email: this.state.email,
        course: this.state.course,
        date: this.state.date,
        college: this.state.college,
        term: this.state.term,
        transactionETH: this.state.transactionETH,
        };
        await setDoc(doc(this.certificatesCollection, this.state.stu_id), newCert);
        this.setState({
        name: "",
        stu_id: "",
        email: "",
        course: "",
        date: "",
        college: "",
        term: "",
        transactionETH: "0x0000000000000000000000000000000000000000",
        });
    };
        // const certificatesCollection = collection(db, "cerfiticates");
        // e.preventDefault();
        // const { name, stu_id, email, course, date, college, term } = this.state;
        // const docRef = await addDoc(this.certificatesCollection, {
        // name: name,
        // stu_id: stu_id,
        // email: email,
        // course: course,
        // date: date,
        // college: college,
        // term: term,
        // transactionETH: "0x0000000000000000000000000000000000000000",
        // });
        // console.log("Document written with ID: ", docRef.id);


    render() {
        return (
            <div>
                <form onSubmit={this.addCertToFirebase}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="stu_id"
                        placeholder="Student ID"
                        value={this.state.stu_id}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="course"
                        placeholder="Course"
                        value={this.state.course}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="date"
                        placeholder="Date"
                        value={this.state.date}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="college"
                        placeholder="College"
                        value={this.state.college}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="term"
                        placeholder="Term"
                        value={this.state.term}
                        onChange={this.handleChange}
                    />
                    <input type="submit" value="Add Certificate" />
                </form>
            </div>
        );

    }
   
}
export default AddCert;
