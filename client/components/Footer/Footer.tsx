import ColourPalette from '../Nav/ColourPalette'
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src="/images/logo.png" alt="Logo" className="logo" />
        <h2 className="title">Re-Solve</h2>
      </div>
      <div className="footer-text-container">
        <div className="footer-text">
          <p className="copyright">© 2024 Re-Solve. All rights reserved.</p>
          <p className="links">
            Design by <span className="link">Re-Solve Team</span> | Powered by{' '}
            <span className="link">
              <a href="https://devacademy.co.nz/" className="link">
                Dev Academy
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
