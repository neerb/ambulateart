import React from 'react'
import './codestitch.css'

function CodeStitch() {
    return (
        <div>
            <section id="reviews-1611">
                <div className="cs-container">
                    <picture className="cs-picture">
                        {/*Mobile Image*/}
                        <source
                            media="(max-width: 600px)"
                            srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/fishing7.jpg"
                        />
                        {/*Tablet and above Image*/}
                        <source
                            media="(min-width: 601px)"
                            srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/fishing7.jpg"
                        />
                        <img
                            loading="lazy"
                            decoding="async"
                            src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/fishing7.jpg"
                            alt="fishing"
                            width={413}
                            height={516}
                        />
                    </picture>
                    <div className="cs-content">
                        <span className="cs-topper">Testimonials</span>
                        <h2 className="cs-title">Thousands of Happy Fish Hunters</h2>
                        <p className="cs-text">
                            “Outstanding store for fishing accessories! Top-notch products,
                            user-friendly website, and excellent customer service. They truly care
                            about anglers and provide valuable tips. Highly recommended!”
                        </p>
                        <div className="cs-flex-group">
                            <picture className="cs-profile-wrapper">
                                <img
                                    className="cs-profile"
                                    src="https://csimg.nyc3.digitaloceanspaces.com/Reviews/profile3.png"
                                    decoding="async"
                                    alt="profile"
                                    width={50}
                                    height={50}
                                    aria-hidden="true"
                                />
                            </picture>
                            <span className="cs-name">
                                Jenny Wilson
                                <span className="cs-job">Fish Hunter</span>
                            </span>
                        </div>
                    </div>
                </div>
                {/*SVG Quotes*/}
                <svg
                    className="cs-quotes"
                    width={182}
                    height={152}
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 182 152"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clipPath="url(#a)" fill="var(--quoteColor)">
                        <path d="M41.75 152H0L33.315 0H100.1L41.75 152ZM123.651 152h-41.75L115.214 0H182l-58.349 152Z" />
                    </g>
                    <defs>
                        <clipPath id="a-1611">
                            <path fill="#fff" d="M0 0h182v152H0z" />
                        </clipPath>
                    </defs>
                </svg>
                <picture className="cs-background">
                    {/*Mobile Image*/}
                    <source
                        media="(max-width: 600px)"
                        srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Landscapes/coast.jpg"
                    />
                    {/*Tablet and above Image*/}
                    <source
                        media="(min-width: 601px)"
                        srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Landscapes/coast.jpg"
                    />
                    <img
                        loading="lazy"
                        decoding="async"
                        src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Landscapes/coast.jpg"
                        alt="coast"
                        width={1280}
                        height={568}
                    />
                </picture>
            </section>
            <section id="cta-1611">
                <div className="cs-container">
                    <div className="cs-content">
                        <span className="cs-topper">Subscribe</span>
                        <h2 className="cs-title">
                            Subscribe Your Email for Newsletter &amp; Promotion
                        </h2>
                        <p className="cs-text">
                            Nulla dig nissimmi quis neque interdum. An Ohio man allegedly punched
                            his lawyer in the face in court Tuesday upon finding out he was
                            sentenced.
                        </p>
                        <form className="cs-form" name="Contact Form" method="post">
                            <input
                                className="cs-input"
                                type="email"
                                id="cs-email-302-1611"
                                name="find-us"
                                placeholder="Email Address"
                            />
                            <button className="cs-button-solid cs-submit" type="submit">
                                Subscribe Now
                            </button>
                        </form>
                    </div>
                </div>
                {/*Background Image*/}
                <picture className="cs-background">
                    <source
                        media="(max-width: 600px)"
                        srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Landscapes/underwater.jpg"
                    />
                    <source
                        media="(min-width: 601px)"
                        srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Landscapes/underwater.jpg"
                    />
                    <img
                        loading="lazy"
                        decoding="async"
                        src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Landscapes/underwater.jpg"
                        alt="water"
                        width={1920}
                        height={486}
                        aria-hidden="true"
                    />
                </picture>
                <div className="cs-wrapper">
                    <img
                        className="cs-fish cs-fish1"
                        loading="lazy"
                        decoding="async"
                        src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/left-fish.svg"
                        alt="fish"
                        width={1920}
                        height={486}
                        aria-hidden="true"
                    />
                    <img
                        className="cs-fish cs-fish1"
                        loading="lazy"
                        decoding="async"
                        src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/right-fish.svg"
                        alt="fish"
                        width={1920}
                        height={486}
                        aria-hidden="true"
                    />
                </div>
            </section>
        </div >
    );
}

export default CodeStitch
