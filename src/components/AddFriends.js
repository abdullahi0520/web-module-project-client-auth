import axios from "axios";
import { useHistory } from "react-router-dom";
import React, {useState} from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const AddFriends = () => {
    const {push} = useHistory()
    const [form, setForm] =useState({
        name:'',
        age:'',
        email:''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const submit = (e) => {
        const token = localStorage.getItem('token')
        e.preventDefault();
        axiosWithAuth().post('/friends', form)
        .then(res => {
            push('/friends')
        })
        .catch(err => {
            console.error(err)
        })
    }
        return(
        <div>
            <h2>Add A Homie</h2>
            <form onSubmit={submit}>
                <div>
                    <input
                        id='name'
                        name='name'
                        placeholder='name'
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        id='age'
                        name='age'
                        placeholder='Age'
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        id='email'
                        name='email'
                        placeholder='Email'
                        onChange={handleChange}
                    />
                </div>
                <button>Submit A Friend</button>
            </form>
        </div>
        )
    }

export default AddFriends;