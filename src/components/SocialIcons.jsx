import React from 'react'
import { Link } from 'react-router-dom'

export default function SocialIcons() {
    return (
        <div className="inline-social-icons">
            <ul>
                <li><Link to='https://www.facebook.com' target='_blank'></Link></li>
                <li><Link to='https://www.x.com' target='_blank'></Link></li>
                <li><Link to='https://www.instagram.com' target='_blank'></Link></li>
                <li><Link to='https://www.github.com' target='_blank'></Link></li>
            </ul>
        </div>
    )
}