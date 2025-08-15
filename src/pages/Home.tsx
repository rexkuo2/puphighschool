import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import './main.css';

const Home = () => {
    return (
        <div>
            <SEO title="Home - Company Name" description="Welcome to our company homepage." keywords="company, homepage, products, team" />
            <Header navigationLinks={[{ name: 'Products', path: '/product' }, { name: 'Team', path: '/team' }]} />
            <main>
                <section className="hero">
                    <h1>Welcome to Our Company</h1>
                    <p>Your success is our priority.</p>
                </section>
                <section className="featured-products">
                    <h2>Featured Products</h2>
                    {/* Product components will be rendered here */}
                </section>
                <section className="about">
                    <h2>About Us</h2>
                    <p>We are dedicated to providing the best services and products to our customers.</p>
                </section>
            </main>
            <Footer socialLinks={[{ name: 'Facebook', url: 'https://facebook.com' }, { name: 'Twitter', url: 'https://twitter.com' }]} />
        </div>
    );
};

export default Home;