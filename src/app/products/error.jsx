"use client"; 

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  
  return (
    <div style={{ 
      padding: '20px', 
      border: '2px solid red', 
      borderRadius: '10px',
      textAlign: 'center' 
    }}>
      <h2 style={{ color: 'red' }}>error ⚠️</h2>
      <p>Failed to load products.</p>
      
      <button 
        onClick={() => reset()}
        style={{ padding: '10px 20px', cursor: 'pointer' }}
      >
       try again
      </button>
    </div>
  );
}