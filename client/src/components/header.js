import * as React from "react"
import PropTypes from "prop-types"
import {Link} from "gatsby"
import {useEffect} from "react";


const Header = ({siteTitle}) => {

    useEffect((() => {

        let urls = [
            'https://platform.twitter.com/widgets.js',
            '//assets.pinterest.com/js/pinit.js'
        ]

        urls.forEach((element) => {
            const script = document.createElement("script");

            script.src = element;
            script.async = true;

            document.body.appendChild(script);
        })

    }), [])

    const shareURL = (url) => {
        window.open(url, '_blank')
    }

    return (
        <header>
            <Link to="/" className="logo">
                👠 {siteTitle}
            </Link>
            <div className="share-container">
                <iframe
                    title="Facebook button"
                    src="https://www.facebook.com/plugins/share_button.php?locale=en_US&href=https%3A%2F%2Fgithub.com%2Fatapas%2Fshoes&layout=button&size=large&width=77&height=28&appId"
                    width="77" height="28"
                    style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder="0"
                    allowFullScreen="true"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                </iframe>
                <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button"
                   data-size="large"
                   data-url="https://github.com/atapas/shoes" data-lang="en" data-show-count="false">
                </a>
                <button className="share-button"
                        style={{backgroundColor: '#0e76a8'}}
                        onClick={() => shareURL('https://www.linkedin.com/shareArticle?mini=true&url=https://github.com/atapas/shoes&title=An online shoe store - \'shoes\'&summary=\'shoes\' is an online shoe store built using Gatsby and Strapi. It is an Open Source project built to learn how to use Gatsby and Strapi to build a static site.&source=')}
                >Share via LinkedIn
                </button>
                <button className="share-button"
                        style={{backgroundColor: '#25D366'}}
                        onClick={() => shareURL('https://web.whatsapp.com/send?text=https://github.com/atapas/shoes')}
                >Share via Whatsapp
                </button>
            </div>
        </header>
    )
}

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
