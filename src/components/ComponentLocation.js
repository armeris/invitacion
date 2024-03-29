import React from 'react';

export default function ComponentLocation() {
        return (
                <div className={"content-box"}>
                        <div className={"content-text"}>
                                <h2 className={"content-title"}>Localización:</h2>
                                <p>
                                        La celebración será en GU San Sebastián, justo al lado del
                                        ayuntamiento.
                                </p>
                                <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.6534755072103!2d-1.9887739841424905!3d43.32151297913407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd51a552903c2231%3A0x7fee091e350eb46c!2sGU%20San%20Sebasti%C3%A1n!5e0!3m2!1ses!2ses!4v1580762508323!5m2!1ses!2ses"
                                        width="100%"
                                        height="450"
                                        frameBorder="0"
                                        allowFullScreen=""
                                        title="map"
                                ></iframe>
                        </div>
                </div>
        );
}
