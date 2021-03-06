import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from '../scss/Footer';

const getCopyrightYearRange = () => {
    const startYear = 2020;
    const currentYear = new Date().getFullYear()
    if (currentYear > startYear) {
        return `${startYear} - ${currentYear}`;
    }
    return startYear.toString();
};

const Footer = () => (
	<footer class={style.footer}>
        <div class={style.copyright}>
            Copyright &copy; {getCopyrightYearRange()} Quintschaf GbR. All rights reserved.
        </div>
        <div class={style.nav}>
            <Link href="/apps">Apps</Link>
            <Link href="/support">Support</Link>
            <Link href="/business">Business</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/imprint">Imprint</Link>
        </div>
    </footer>
);

export default Footer;
