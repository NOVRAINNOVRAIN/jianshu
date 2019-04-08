import { createGlobalStyle } from 'styled-components'

const GlobalIconfontStyle = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1554691690347'); /* IE9 */
    src: url('./iconfont.eot?t=1554691690347#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAPYAAsAAAAAB+wAAAOKAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqDKIMEATYCJAMQCwoABCAFhG0HRxv1BsgekiRC4AcKHAAAEoB4+G+/dt/82WV2F/EkJtVPJ3G6SciEoi2RKZWQvAR+nl31qmXN0p20Auqgwa9txk0LH0j0kBpwvf85Zrq0CeS32Vwy4vlwgKNoHVh0gBzwHQjeMHblRewm0DSiK+woM78cbGTGoEDcC7wcbFJKuSYzFKFeMjPbYhPAUkkj8TPAq//38QcbYQOSWgXGyOPLDBUkf7o9iyQG/B8AvV0EsMbTg82jwhKQietS4ykiDC4hNJX2FnaAokiM1dTtWeT//4i9F2ExTaTe/7yog5HeDrZgqOLTzaaQ+OzGLBNFQvYN7JRBQQMPwBsYuCEvz5Kq2LhRDp4ymYMDycjKSQ3Vo+c0f3KOZ3f5bmo0QDPIA+Soc9hAlh3onxhfsWUFDFhJjT6MYSzLB7EDB5LMtClQ3q+qmNHWPXnJKW/3XrN8eA929urtW9tV7LzaVXntGnP9Onv1asWVK30tfnlAT/7sa9fqRrkz0wauXu5WMXXmjCmuB7isix3TLyL7/wquqROLKvBUhZB43eJ3olk6Gh2EWaYEGjoxgl0fKi859klfVjrt5fbbu93Hdv7wVzbPiO8fHd4Tw7ERheAY4StdvJ7fH7k55/Zs0zbfBg9Pyn2z94ucsJ4Lv1vlNbwg060wA87XTyWOHSWmmjSX5kinxLFTmurxxYtxyKvHdKjEF2EautT9MWk3/NczPVsPGPF7JkT+cwAYAf7/ExE+YSDRg2gKvyduEfF/sZfHG4u39nOI/2pDXUbBx4XrauT4H2gB7Vm/gqWw/pkpt4EL5KgcQ5WzzLKNkwCaOVu77QEJTU38qSi97o1hHgCxPhTOgpC0GYZKMYXM2CWoadmCumIXmhZlzW/pIyJEtgUWDAUQuq2HpNM7VLqdRWbsXagZ9BbquoOAppNwWbFlJgQyTURyCaloRR0tKA16ztJIZJBZivgqrVxMcnw8g0Sz4KFDAoOzkSykR+IYY8zVfKgkcTQnGnR0JtgPabUG2iga1EgpBVZKkjE2KIgr+1Kg0qAD0iERIidBVGgKdWgCJQM9zs0vIXO/XwrhVdGSE2uyKtQMRGQmtE4LESi4BTJLqG+VdS33mFXjhZJIODSOyECHlgn0iNYMGtCM5d3UECVJoMoefqNYQSgX11YYOL9Y94QroMmYkAPHCMwCs4S0L5cd/UbdlJVIqRH0tgVyXi9wAhIBAAAA') format('woff2'),
    url('./iconfont.woff?t=1554691690347') format('woff'),
    url('./iconfont.ttf?t=1554691690347') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1554691690347#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .iconAa:before {
    content: "\e636";
  }

  .iconicon-checkin:before {
    content: "\e615";
  }

  .iconMagnifier:before {
    content: "\e62d";
  }
`

export { GlobalIconfontStyle }