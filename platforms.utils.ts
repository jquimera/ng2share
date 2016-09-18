export interface Platform{
  name:string;
  url:string;
  logoOfficial:string;
  logo:string;
  text:string;
}
interface Platforms { // plural
  twitter:Platform;
  facebook:Platform;
  googlePlus:Platform;
  pinterest:Platform;
  reddit:Platform;
  linkedin:Platform;
}

export const platforms:Platforms = {
  twitter : {
              name: 'twitter',
              url: 'https://twitter.com/intent/tweet?url=',
              logoOfficial:'twitter',
              logo:'twitter',
              text:'Tweet'
            },
  googlePlus : {
              name: 'google-plus',
              url: 'https://plus.google.com/share?url=',
              logoOfficial:'google-plus',
              logo:'google-plus',
              text:'Share'
            },
  facebook : {
              name:'facebook',
              url: 'http://www.facebook.com/sharer/sharer.php?u=',
              logoOfficial:'facebook-official',
              logo:'facebook',
              text:'Share'
          },
  reddit : {
              name: 'reddit',
              url: 'http://www.reddit.com/submit?url=',
              logoOfficial:'reddit',
              logo:'reddit',
              text:'Submit'
          },
  pinterest:{
              name:'pinterest',
              url: 'https://pinterest.com/pin/create/button/?url=',
              logoOfficial:'pinterest-official',
              logo:'pinterest-lean',
              text:'Pin'
        },
  linkedin : {
              name:'linkedin',
              url: 'http://www.linkedin.com/shareArticle?mini=true&url=',
              logoOfficial:'linkedin',
              logo:'linkedin2',
              text:'Share'
        }
}
