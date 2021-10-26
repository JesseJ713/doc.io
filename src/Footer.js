export default function Footer() {
  return (
    <div className='footer'>
      <a href='/'>
        <button className='btn-cos'>New Document</button>
      </a>

      <div
        style={{
          marginTop: '10px',
          maxWidth: '8.5in',
          margin: 'auto',
          fontFamily: 'monospace, monospace',
        }}
      >
        <h2>CTRL/CMD + S - To Save</h2>
        <h4>Save button is on top for mobile</h4>
        <p>Green - Saved To Database</p>
        <p>Red - Not Saved To Database</p>
        <h3>
          This is a minimalistic clone of google docs, Just share the link in
          the URL and enjoy real-time updates.
        </h3>
      </div>
      <div>
        <h2>
          <a
            href='https://github.com/JesseJ713/'
            rel='noopener'
            target='_black'
            style={{ marginBottom: '50px' }}
          >
            Jesse Jackson
          </a>
        </h2>
      </div>
    </div>
  );
}
