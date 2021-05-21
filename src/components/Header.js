import React from 'react';
import Link from './Link.js';

const Header = () => {
	return (
		<div className="ui secondary pointing menu">
			<Link href="/" className="item">
				Accordion
			</Link>
			<Link href="/search" className="item">
				Search
			</Link>
			<Link href="/list" className="item">
				Dropdown
			</Link>
			<Link href="/translate" className="item">
				Translate
			</Link>
		</div>
	);
}

export default Header;