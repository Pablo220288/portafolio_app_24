import * as React from 'react';

export function EmailTemplate({ fullName, email, phone, message }) {
  return (
    <div style={{
      fontFamily: "'Helvetica Neue', Arial, sans-serif",
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      color: '#333333',
      lineHeight: '1.5',
      backgroundColor: '#ffffff',
      border: '1px solid #eaeaea',
      borderRadius: '5px'
    }}>
      <div style={{
        borderBottom: '1px solid #eaeaea',
        paddingBottom: '15px',
        marginBottom: '20px'
      }}>
        <h1 style={{
          color: '#3F4531',
          fontSize: '24px',
          margin: '0 0 10px 0'
        }}>Nuevo mensaje de contacto</h1>
        <p style={{
          color: '#666666',
          margin: '0',
          fontSize: '14px'
        }}>Has recibido un nuevo mensaje a través del formulario de contacto</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2 style={{
          fontSize: '18px',
          color: '#3F4531',
          margin: '0 0 15px 0',
          paddingBottom: '5px',
          borderBottom: '1px solid #f0f0f0'
        }}>Información del contacto</h2>
        
        <div style={{ display: 'flex', marginBottom: '10px' }}>
          <strong style={{ width: '100px', color: '#555555' }}>Nombre:</strong>
          <span>{fullName}</span>
        </div>
        
        <div style={{ display: 'flex', marginBottom: '10px' }}>
          <strong style={{ width: '100px', color: '#555555' }}>Email:</strong>
          <a href={`mailto:${email}`} style={{ color: '#1a73e8', textDecoration: 'none' }}>
            {email}
          </a>
        </div>
        
        {phone && (
          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <strong style={{ width: '100px', color: '#555555' }}>Teléfono:</strong>
            <a href={`tel:${phone}`} style={{ color: '#1a73e8', textDecoration: 'none' }}>
              {phone}
            </a>
          </div>
        )}
      </div>

      <div>
        <h2 style={{
          fontSize: '18px',
          color: '#3F4531',
          margin: '0 0 15px 0',
          paddingBottom: '5px',
          borderBottom: '1px solid #f0f0f0'
        }}>Mensaje</h2>
        <div style={{
          backgroundColor: '#f9f9f9',
          padding: '15px',
          borderRadius: '4px',
          borderLeft: '3px solid #3F4531'
        }}>
          <p style={{ margin: '0', whiteSpace: 'pre-line' }}>{message}</p>
        </div>
      </div>

      <div style={{
        marginTop: '30px',
        paddingTop: '15px',
        borderTop: '1px solid #eaeaea',
        fontSize: '12px',
        color: '#999999',
        textAlign: 'center'
      }}>
        <p style={{ margin: '0' }}>Este mensaje fue enviado desde el formulario de contacto de DYB-ARQS</p>
        <p style={{ margin: '5px 0 0 0' }}>© {new Date().getFullYear()} Todos los derechos reservados</p>
      </div>
    </div>
  );
}