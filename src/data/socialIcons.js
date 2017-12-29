import faBullhorn from '@fortawesome/fontawesome-free-solid/faBullhorn'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faGithubSquare from '@fortawesome/fontawesome-free-brands/faGithubSquare'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin'
import faTwitterSquare from '@fortawesome/fontawesome-free-brands/faTwitterSquare'

export const DEFAULT_ICON = faBullhorn

export const socialIcons = [
  { id: `FACEBOOK`,   urlFragment: `facebook.com/`,   icon: faFacebook },
  { id: `GITHUB`,     urlFragment: `github.com/`,     icon: faGithubSquare },
  { id: `INSTAGRAM`,  urlFragment: `instagram.com/`,  icon: faInstagram },
  { id: `LINKEDIN`,   urlFragment: `linkedin.com/`,   icon: faLinkedin },
  { id: `TWITTER`,    urlFragment: `twitter.com/`,    icon: faTwitterSquare },
]
