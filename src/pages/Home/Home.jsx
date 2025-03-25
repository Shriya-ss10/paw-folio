import { useNavigate } from 'react-router-dom';
import { FaBook, FaSearch, FaStar } from 'react-icons/fa';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();
    
    return (
        <div className='holder'>
            <lander className='lander'>
                <div className='lander-content flex flex-c text-center text-white'>
                    <h2 className='lander-title text-capitalize animate-fade-in'>Welcome to PawFolio ฅ&nbsp;ฅ</h2>
                    <p className='lander-text fs-18 fw-3 animate-fade-in-delay'>
                        Welcome to your cozy book discovery corner! ☕︎<br />
                        Discover countless stories, from timeless classics to hidden gems.<br />
                        Let's embark on your next reading adventure together! (•˕&nbsp;•マ.ᐟ
                    </p>
                    <button 
                        className='lander-btn animate-bounce' 
                        onClick={() => navigate('/search')}>
                        Start Exploring!
                    </button>
                    
                    {/* Features Section */}
                    <div className='features-grid'>
                        <div className='feature-card'>
                            <FaSearch className='feature-icon' />
                            <h3>Search Books</h3>
                            <p>Find your next read from millions of titles</p>
                        </div>
                        <div className='feature-card'>
                            <FaBook className='feature-icon' />
                            <h3>Detailed Info</h3>
                            <p>Get comprehensive book details</p>
                        </div>
                        <div className='feature-card'>
                            <FaStar className='feature-icon' />
                            <h3>Favourites</h3>
                            <p>Save and organise your favourite books</p>
                        </div>
                    </div>
                </div>
            </lander>
        </div>
    )
}

export default Home;