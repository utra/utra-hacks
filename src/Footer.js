import React from 'react';
import Button from 'react-bootstrap/Button';

export default function Footer() {
  return (
    <div className>
      <div className="bg-dark text-center text-white">
        <div>
            <Button></Button>
            <Button></Button>
            <Button></Button>
            <Button></Button>
        </div>
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2020 Copyright: All Rights Reserved
        </div>
      </div>
    </div>
  );
}
