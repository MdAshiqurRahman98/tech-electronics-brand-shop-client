

const Footer = () => {
    return (
        <footer className="footer p-10 text-white">
            <aside className="mt-10">
                <p>B-tech Technology Ltd.<br />Copyright &copy; B-tech Technology | All rights reserved.</p>
            </aside>
            <nav>
                <header className="footer-title">Brands</header>
                <a className="link link-hover">Apple</a>
                <a className="link link-hover">Samsung</a>
                <a className="link link-hover">Sony</a>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <a className="link link-hover">Mission and vision</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Career</a>
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;