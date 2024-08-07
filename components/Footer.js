import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
function Footer() {
return (
<div className='footer-container'>
<section className='footer-subscription'>
<p className='footer-subscription-heading'>
Fotografias grupo #8
</p>
<p className='footer-subscription-text'>Somos la mejor compañia en fotografias.</p><div className='input-areas'><form><input
className='footer-input'
name='email'
type='email'
placeholder='Your Email'
/>
<Button buttonStyle='btn--outline'>Subscribete</Button>
</form>
</div>
</section>
<div class='footer-links'>
<div className='footer-link-wrapper'>
<div class='footer-link-items'>

<h2>Sobre Nosotros</h2>
<Link to='/sign-up'>Personal</Link>
<Link to='/'>Catalago</Link>
<Link to='/'>Horarios</Link>
<Link to='/'>Reseñas</Link>
<Link to='/'>Reclamos</Link>
</div>
<div class='footer-link-items'>

<h2>Contactanos</h2>
<Link to='https://wa.link/frtxfq'>Contactanos</Link>
<Link to='/'>Soporte</Link>
<Link to='/'>Destinos</Link>
<Link to='/'>Telefonos</Link>
</div>
</div>
<div className='footer-link-wrapper'>
<div class='footer-link-items'>

<h2>Fotografias</h2>
<Link to='App'>Matrimoniales</Link>
<Link to='/'>Familiares</Link>
<Link to='/'>Bebés</Link>
<Link to='/'>Influencers</Link>
</div>
<div class='footer-link-items'>

<h2>Redes Sociales</h2>
<Link to='https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fedit%2F%3F__coig_login%3D1'>Instagram</Link>
<Link to='https://www.facebook.com/login/'>Facebook</Link>
<Link to='https://www.youtube.com/account'>YouTube</Link>
<Link to='https://twitter.com/i/flow/login'>Twitter</Link>
</div>
</div>
</div>
<section class='social-media'>
<div class='social-media-wrap'>
<div class='footer-logo'>
<Link to='/' className='social-logo'>

FOTOGRAFICS
<i class='fab fa-typo3' />
</Link>
</div>
<small class='website-rights'>FOTOGRAFICS © 2024</small>
<div class='social-icons'>
<Link class='social-icon-link facebook'to='https://www.facebook.com/login/'target='_blank'aria-label='Facebook'><i class='fab fa-facebook-f'/></Link>
<Link class='social-icon-link instagram'to='https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fedit%2F%3F__coig_login%3D1'target='_blank'aria-label='Instagram'><i class='fab fa-instagram' /></Link>
<Link class='social-icon-link youtube'to='https://www.youtube.com/account'target='_blank'aria-label='Youtube'><i class='fab fa-youtube' /></Link>
<Link class='social-icon-link twitter'to='https://twitter.com/i/flow/login'target='_blank'aria-label='Twitter'><i class='fab fa-twitter' /></Link>
<Link class='social-icon-link twitter'to='https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1'target='_blank'aria-label='LinkedIn'><i class='fab fa-linkedin' /></Link>
</div>
</div>
</section>
</div>
);
}
export default Footer;

