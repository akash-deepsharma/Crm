import { useAuth } from '@/utils/AuthContext';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function ButtonHeader() {
    const { user } = useAuth();
    
  return (
    <div className="navbar-right">
            {user ? (
              <div className="search-option style-dark">
                <div className="search-btn">
                  <Link href="/profile">
                    <i className="fa-regular fa-user"></i>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="menu-button">
                <Link href="/login">
                  <div className="btn btn-outline-primary btn-light">
                    sign in / sign up
                  </div>
                </Link>
              </div>
            )}
          </div>
  )
}
