import React from 'react'
import { Link } from 'react-router-dom'
import SocialIcons from './SocialIcons'

export default function Footer() {
  return (
    <footer className="site-footer">
        <div className="container">
            <div className="footer-content">
                <div className="footer-item footer-logo-item">
                    <Link to='/' className='logo'>Shop.co</Link>
                    <p>
                        We have clothes that suits your style and which you’re proud to wear. From women to men.
                    </p>
                    <SocialIcons />
                </div>
                <div className="footer-item">
                    <h4 className="widget-title">Company</h4>
                    <ul>
                        <li><Link>About</Link></li>
                        <li><Link>Features</Link></li>
                        <li><Link>Works</Link></li>
                        <li><Link>Career</Link></li>
                    </ul>
                </div>
                <div className="footer-item">
                    <h4 className="widget-title">Help</h4>
                    <ul>
                        <li><Link>About</Link></li>
                        <li><Link>Features</Link></li>
                        <li><Link>Works</Link></li>
                        <li><Link>Career</Link></li>
                    </ul>
                </div>
                <div className="footer-item">
                    <h4 className="widget-title">Faq</h4>
                    <ul>
                        <li><Link>About</Link></li>
                        <li><Link>Features</Link></li>
                        <li><Link>Works</Link></li>
                        <li><Link>Career</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}
