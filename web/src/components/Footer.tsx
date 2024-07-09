export default function Footer() {
  return (
    <footer style={{ display: "flex", gap: '3rem', marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid gray' }}>
      <div>
        <p style={{ marginBottom: '0', marginTop: '0' }}>Curso de Programación</p>
        <h2 style={{ marginTop: '0' }}>Codo a Codo</h2>
        <img src="/logos/codo-a-codo.png" alt="logo de Programación Codo a Codo" width={150} />
      </div>
      <div style={{ width: '80%' }}>
        <h2 style={{marginTop: '0'}}>Tecnologías web utilizadas</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div style={{ flexGrow: '1' }}>
            <h3>Back-end</h3>
            <ul  style={{listStyle: 'none', paddingLeft: '0'}}>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>ThunderClient for VSCode</li>
              <li>DBeaver</li>
              <li>Xampp</li>
              <li>JWT for auth</li>
              <li>Sequelize for model</li>
            </ul>
          </div>
          <div style={{ flexGrow: '1' }}>
            <h3>Front-end</h3>
            <ul style={{listStyle: 'none', paddingLeft: '0'}}>
              <li>Vite</li>
              <li>React</li>
              <li>react-router-dom</li>
              <li>react-hook-form</li>
              <li>sooner for toast</li>
              <li>Joy UI</li>
            </ul>
          </div>
          <div style={{ flexGrow: '1' }}>
            <h3>Rest</h3>
            <ul style={{listStyle: 'none', paddingLeft: '0'}}>
              <li>VSCode</li>
              <li>Git</li>
              <li>Cloudinary</li>
            </ul>
          </div>
          <div></div>
        </div>
      </div>
    </footer>
  )
}
