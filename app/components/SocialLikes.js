import React from 'react';
import {ShareButtons, ShareCounts, generateShareIcon} from 'react-share';

class SocialLikes extends React.Component{
    render() {
        const {
            FacebookShareButton,
            GooglePlusShareButton,
            LinkedinShareButton,
            TwitterShareButton,
            TelegramShareButton,
            WhatsappShareButton,
            PinterestShareButton,
            VKShareButton,
            OKShareButton,
            RedditShareButton,
            EmailShareButton,
        } = ShareButtons;

        const {
            FacebookShareCount,
            GooglePlusShareCount,
            LinkedinShareCount,
            PinterestShareCount,
            VKShareCount,
            OKShareCount,
            RedditShareCount,
        } = ShareCounts;

        const FacebookIcon = generateShareIcon('facebook');
        const TwitterIcon = generateShareIcon('twitter');
        const TelegramIcon = generateShareIcon('telegram');
        const WhatsappIcon = generateShareIcon('whatsapp');
        const GooglePlusIcon = generateShareIcon('google');
        const LinkedinIcon = generateShareIcon('linkedin');
        const PinterestIcon = generateShareIcon('pinterest');
        const VKIcon = generateShareIcon('vk');
        const OKIcon = generateShareIcon('ok');
        const RedditIcon = generateShareIcon('reddit');
        const EmailIcon = generateShareIcon('email');
        return(
            <div className="likes">

                <FacebookShareButton url={'https://sales-generator.ru/check-list/'} picture={'https://sales-generator.ru/check-list/images/best-sale.png'}><FacebookIcon size={32}/></FacebookShareButton>
                <FacebookShareCount url={'https://sales-generator.ru/check-list/'}>
                    {shareCount => (
                        <span className="myShareCountWrapper">{shareCount}
                        </span>
                    )}
                </FacebookShareCount>
                <VKShareButton url={'https://sales-generator.ru/check-list/'} image={'https://sales-generator.ru/check-list/images/best-sale.png'}><VKIcon size={32}/></VKShareButton>
                <VKShareCount url={'https://sales-generator.ru/check-list/'}>
                    {shareCount => (
                        <span className="myShareCountWrapper">{shareCount}
                        </span>
                    )}
                </VKShareCount>
                <OKShareButton url={'https://sales-generator.ru/check-list/'} image={'https://sales-generator.ru/check-list/images/best-sale.png'}><OKIcon size={32}/></OKShareButton>
                <OKShareCount url={'https://sales-generator.ru/check-list/'}>
                    {shareCount => (
                        <span className="myShareCountWrapper">{shareCount}
                        </span>
                    )}
                </OKShareCount>

                <TwitterShareButton url={'https://sales-generator.ru/check-list/'}><TwitterIcon size={32}/></TwitterShareButton>

                <GooglePlusShareButton url={'https://sales-generator.ru/check-list/'}><GooglePlusIcon size={32}/></GooglePlusShareButton>
                <GooglePlusShareCount url={'https://sales-generator.ru/check-list/'}>
                    {shareCount => (
                        <span className="myShareCountWrapper">{shareCount}
                        </span>
                    )}
                </GooglePlusShareCount>

            </div>
        );
    }
}
export default SocialLikes;
