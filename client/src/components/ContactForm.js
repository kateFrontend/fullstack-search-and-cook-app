import React, { useState } from 'react'
import axios from 'axios'
import image from '../assets/cook.jpg'

export default () => {
    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
    })
    const [inputs, setInputs] = useState({
        email: '',
        message: '',
    })
    const handleServerResponse = (ok, msg) => {
        if (ok) {
            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg: msg },
            })
            setInputs({
                email: '',
                message: '',
            })
        } else {
            setStatus({
                info: { error: true, msg: msg },
            })
        }
    }
    const handleOnChange = (e) => {
        e.persist()
        setInputs((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }))
        setStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null },
        })
    }
    const handleOnSubmit = (e) => {
        e.preventDefault()
        setStatus((prevStatus) => ({ ...prevStatus, submitting: true }))
        axios({
            method: 'POST',
            url: 'https://formspree.io/f/myyvppyg',
            data: inputs,
        })
            .then((response) => {
                handleServerResponse(
                    true,
                    'Thank you, your message has been submitted.'
                )
            })
            .catch((error) => {
                handleServerResponse(false, error.response.data.error)
            })
    }
    return (
        <>
            <h1 className="contact-title">Contact us</h1>

            <main className="contact-section">
                <form className="contact-form" onSubmit={handleOnSubmit}>
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        name="_name"
                        onChange={handleOnChange}
                        required
                        value={inputs.name}
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="_replyto"
                        onChange={handleOnChange}
                        required
                        value={inputs.email}
                    />
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        onChange={handleOnChange}
                        required
                        value={inputs.message}
                    />
                    <button
                        className="btn-contact btn-primary"
                        type="submit"
                        disabled={status.submitting}
                    >
                        {!status.submitting
                            ? !status.submitted
                                ? 'Submit'
                                : 'Submitted'
                            : 'Submitting...'}
                    </button>
                </form>
                {status.info.error && (
                    <div className="error">Error: {status.info.msg}</div>
                )}
                {!status.info.error && status.info.msg && (
                    <p>{status.info.msg}</p>
                )}
                <div>
                    <img className="contact-img" src={image} alt="image" />
                </div>
            </main>
        </>
    )
}
