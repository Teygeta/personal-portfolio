import Image from 'next/image';
import { DesignConcepts } from '@/components/DesignConcepts';

export function Portfolio() {

  return (
    <section id="portfolio" className="relative">
      {/*scurire foto per far meglio contrast con il testo*/}
      <Image
        alt="portfolio-bg"
        style={{ objectFit: 'cover' }}
        src="/img/unsplash_DVzaV16Wcao.png"
        fill
        quality={100}
        className="-z-10"
      />
      <div className="mx-auto max-w-7xl">
        <svg width="100%" height="173" viewBox="0 0 1385 173" fill="none" xmlns="http://www.w3.org/2000/svg"
             className="absolute top-24 max-md:hidden">
          <path
            d="M29.3519 3.98799V2.98799H28.5128L28.3671 3.81428L29.3519 3.98799ZM142.124 15.604L141.417 16.3111L141.417 16.3111L142.124 15.604ZM145.996 78.04L146.86 78.5429L146.864 78.5361L145.996 78.04ZM124.7 98.852L125.184 99.7269L125.184 99.7269L124.7 98.852ZM34.1919 106.354V105.354H33.3516L33.2068 106.182L34.1919 106.354ZM23.0599 170V171H23.9001L24.0449 170.172L23.0599 170ZM0.0698675 170L-0.914931 169.826L-1.12195 171H0.0698675V170ZM119.86 76.104L119.161 75.3886L119.153 75.3969L119.86 76.104ZM123.974 30.608L123.254 31.3016L123.974 30.608ZM48.7119 24.074V23.074H47.8718L47.7269 23.9015L48.7119 24.074ZM37.8219 86.268L36.8369 86.0955L36.6316 87.268H37.8219V86.268ZM29.3519 4.98799H107.76V2.98799H29.3519V4.98799ZM107.76 4.98799C122.764 4.98799 133.923 8.8172 141.417 16.3111L142.831 14.8969C134.837 6.90279 123.086 2.98799 107.76 2.98799V4.98799ZM141.417 16.3111C148.931 23.8251 152.74 34.1945 152.74 47.548H154.74C154.74 33.7975 150.805 22.8709 142.831 14.8969L141.417 16.3111ZM152.74 47.548C152.74 58.6826 150.197 68.673 145.128 77.5439L146.864 78.5361C152.12 69.3376 154.74 59.0001 154.74 47.548H152.74ZM145.132 77.5371C140.06 86.2534 133.093 93.0627 124.216 97.9771L125.184 99.7269C134.376 94.6387 141.606 87.5732 146.86 78.5429L145.132 77.5371ZM124.216 97.9771C115.341 102.89 105.426 105.354 94.4499 105.354V107.354C105.738 107.354 115.99 104.817 125.184 99.7269L124.216 97.9771ZM94.4499 105.354H34.1919V107.354H94.4499V105.354ZM33.2068 106.182L22.0748 169.828L24.0449 170.172L35.1769 106.526L33.2068 106.182ZM23.0599 169H0.0698675V171H23.0599V169ZM1.05467 170.174L30.3367 4.16169L28.3671 3.81428L-0.914931 169.826L1.05467 170.174ZM94.4499 87.268C104.861 87.268 113.591 83.7869 120.567 76.8111L119.153 75.3969C112.577 81.9731 104.367 85.268 94.4499 85.268V87.268ZM120.559 76.8194C127.718 69.8269 131.266 60.5999 131.266 49.242H129.266C129.266 60.1481 125.877 68.8291 119.161 75.3886L120.559 76.8194ZM131.266 49.242C131.266 41.0054 129.122 34.5121 124.694 29.9143L123.254 31.3016C127.215 35.4159 129.266 41.3453 129.266 49.242H131.266ZM124.694 29.9143C120.251 25.3001 113.739 23.074 105.34 23.074V25.074C113.397 25.074 119.308 27.2039 123.254 31.3016L124.694 29.9143ZM105.34 23.074H48.7119V25.074H105.34V23.074ZM47.7269 23.9015L36.8369 86.0955L38.8069 86.4405L49.6969 24.2465L47.7269 23.9015ZM37.8219 87.268H94.4499V85.268H37.8219V87.268ZM188.586 155.722L187.913 156.462L187.923 156.47L188.586 155.722ZM171.888 84.816L170.901 84.6573L171.888 84.816ZM203.106 22.622L203.763 23.3755L203.768 23.3718L203.106 22.622ZM320.718 17.782L320.055 18.5305L320.055 18.5305L320.718 17.782ZM337.658 88.204L338.645 88.3674L338.645 88.3627L337.658 88.204ZM305.956 150.882L305.298 150.129L305.294 150.132L305.956 150.882ZM289.984 136.12L290.666 136.851L290.671 136.846L289.984 136.12ZM314.426 84.816L313.444 84.6251L313.444 84.6292L314.426 84.816ZM303.294 32.302L302.608 33.0298L302.615 33.0366L302.623 33.0432L303.294 32.302ZM195.12 88.204L196.102 88.3949L196.102 88.3908L195.12 88.204ZM206.01 140.96L205.324 141.688L205.331 141.694L206.01 140.96ZM241.584 171.662C219.161 171.662 201.759 166.058 189.249 154.974L187.923 156.47C200.904 167.973 218.834 173.662 241.584 173.662V171.662ZM189.259 154.982C176.924 143.754 170.71 128.154 170.71 108.048H168.71C168.71 128.598 175.08 144.781 187.913 156.462L189.259 154.982ZM170.71 108.048C170.71 101.665 171.429 93.9767 172.875 84.9747L170.901 84.6573C169.443 93.7247 168.71 101.525 168.71 108.048H170.71ZM172.875 84.9747C177.204 58.0405 187.525 37.5443 203.763 23.3755L202.449 21.8685C185.775 36.417 175.284 57.3835 170.901 84.6573L172.875 84.9747ZM203.768 23.3718C220.005 9.04471 241.21 1.84199 267.478 1.84199V-0.158015C240.828 -0.158015 219.119 7.15927 202.444 21.8722L203.768 23.3718ZM267.478 1.84199C290.065 1.84199 307.546 7.44697 320.055 18.5305L321.381 17.0335C308.399 5.53034 290.387 -0.158015 267.478 -0.158015V1.84199ZM320.055 18.5305C332.546 29.5988 338.836 45.0337 338.836 64.972H340.836C340.836 44.5769 334.38 28.5519 321.381 17.0335L320.055 18.5305ZM338.836 64.972C338.836 71.3553 338.117 79.0433 336.671 88.0453L338.645 88.3627C340.103 79.2953 340.836 71.4953 340.836 64.972H338.836ZM336.671 88.0405C332.182 115.136 321.7 135.797 305.298 150.129L306.614 151.635C323.446 136.927 334.099 115.802 338.645 88.3674L336.671 88.0405ZM305.294 150.132C289.057 164.459 267.852 171.662 241.584 171.662V173.662C268.234 173.662 289.943 166.345 306.618 151.632L305.294 150.132ZM241.584 153.818C262.1 153.818 278.5 148.196 290.666 136.851L289.302 135.389C277.591 146.308 261.724 151.818 241.584 151.818V153.818ZM290.671 136.846C302.814 125.36 311.029 108.035 315.408 85.0028L313.444 84.6292C309.111 107.416 301.031 124.294 289.297 135.394L290.671 136.846ZM315.408 85.0069C316.552 79.1225 317.12 72.442 317.12 64.972H315.12C315.12 72.3446 314.559 78.8935 313.444 84.6251L315.408 85.0069ZM317.12 64.972C317.12 50.7199 312.77 39.5347 303.965 31.5608L302.623 33.0432C310.92 40.5573 315.12 51.1521 315.12 64.972H317.12ZM303.98 31.5742C295.354 23.4463 283.384 19.444 268.204 19.444V21.444C283.032 21.444 294.455 25.347 302.608 33.0298L303.98 31.5742ZM268.204 19.444C247.529 19.444 231.048 25.0649 218.88 36.4106L220.244 37.8734C231.953 26.9551 247.9 21.444 268.204 21.444V19.444ZM218.88 36.4106C206.732 47.7379 198.517 64.9855 194.138 88.0172L196.102 88.3908C200.435 65.6038 208.515 48.8101 220.244 37.8734L218.88 36.4106ZM194.138 88.0131C192.994 93.8975 192.426 100.578 192.426 108.048H194.426C194.426 100.675 194.987 94.1265 196.102 88.3949L194.138 88.0131ZM192.426 108.048C192.426 122.295 196.692 133.553 205.324 141.688L206.696 140.232C198.55 132.556 194.426 121.873 194.426 108.048H192.426ZM205.331 141.694C214.117 149.817 226.245 153.818 241.584 153.818V151.818C226.592 151.818 215.004 147.914 206.689 140.226L205.331 141.694ZM379.117 3.98799V2.98799H378.278L378.133 3.81428L379.117 3.98799ZM497.94 15.362L497.247 16.0837L497.255 16.0911L497.94 15.362ZM498.665 79.008L497.877 78.3931L497.87 78.4015L498.665 79.008ZM470.11 98.61L469.821 97.6525L468.815 97.9557L469.167 98.9453L470.11 98.61ZM495.519 170V171H496.937L496.462 169.665L495.519 170ZM470.835 170L469.892 170.33L470.126 171H470.835V170ZM446.877 101.514L447.821 101.184L447.587 100.514H446.877V101.514ZM384.925 101.514V100.514H384.087L383.941 101.34L384.925 101.514ZM372.825 170V171H373.664L373.81 170.174L372.825 170ZM349.835 170L348.851 169.826L348.644 171H349.835V170ZM475.918 72.232L476.588 72.9736L476.598 72.9648L475.918 72.232ZM479.547 30.124L478.854 30.8448L478.869 30.8584L478.883 30.8714L479.547 30.124ZM398.477 24.074V23.074H397.636L397.492 23.9035L398.477 24.074ZM388.555 81.428L387.57 81.2575L387.368 82.428H388.555V81.428ZM379.117 4.98799H463.091V2.98799H379.117V4.98799ZM463.091 4.98799C478.264 4.98799 489.592 8.74048 497.247 16.0837L498.632 14.6403C490.477 6.81816 478.572 2.98799 463.091 2.98799V4.98799ZM497.255 16.0911C504.921 23.2876 508.797 33.1665 508.797 45.854H510.797C510.797 32.7281 506.769 22.279 498.624 14.6329L497.255 16.0911ZM508.797 45.854C508.797 58.2254 505.155 69.058 497.877 78.3931L499.454 79.6229C507.019 69.9206 510.797 58.6506 510.797 45.854H508.797ZM497.87 78.4015C490.742 87.7479 481.403 94.1622 469.821 97.6525L470.398 99.5675C482.371 95.9592 492.069 89.3054 499.461 79.6144L497.87 78.4015ZM469.167 98.9453L494.577 170.335L496.462 169.665L471.052 98.2747L469.167 98.9453ZM495.519 169H470.835V171H495.519V169ZM471.779 169.67L447.821 101.184L445.934 101.844L469.892 170.33L471.779 169.67ZM446.877 100.514H384.925V102.514H446.877V100.514ZM383.941 101.34L371.841 169.826L373.81 170.174L385.91 101.688L383.941 101.34ZM372.825 169H349.835V171H372.825V169ZM350.82 170.174L380.102 4.16169L378.133 3.81428L348.851 169.826L350.82 170.174ZM450.749 82.428C460.975 82.428 469.611 79.2869 476.588 72.9735L475.247 71.4905C468.672 77.4385 460.53 80.428 450.749 80.428V82.428ZM476.598 72.9648C483.606 66.4573 487.081 57.7876 487.081 47.064H485.081C485.081 57.3137 481.781 65.4227 475.237 71.4992L476.598 72.9648ZM487.081 47.064C487.081 39.4406 484.837 33.4876 480.212 29.3766L478.883 30.8714C482.97 34.5044 485.081 39.8448 485.081 47.064H487.081ZM480.241 29.4032C475.791 25.1249 469.205 23.074 460.671 23.074V25.074C468.916 25.074 474.914 27.0565 478.854 30.8448L480.241 29.4032ZM460.671 23.074H398.477V25.074H460.671V23.074ZM397.492 23.9035L387.57 81.2575L389.541 81.5985L399.463 24.2445L397.492 23.9035ZM388.555 82.428H450.749V80.428H388.555V82.428ZM589.198 24.074L590.183 24.2471L590.389 23.074H589.198V24.074ZM532.086 24.074L531.102 23.8961L530.889 25.074H532.086V24.074ZM535.716 3.98799V2.98799H534.881L534.732 3.81015L535.716 3.98799ZM672.93 3.98799L673.914 4.16583L674.127 2.98799H672.93V3.98799ZM669.3 24.074V25.074H670.136L670.284 24.2518L669.3 24.074ZM612.188 24.074V23.074H611.349L611.203 23.9009L612.188 24.074ZM586.536 170V171H587.376L587.521 170.173L586.536 170ZM563.546 170L562.561 169.827L562.355 171H563.546V170ZM589.198 23.074H532.086V25.074H589.198V23.074ZM533.07 24.2518L536.7 4.16583L534.732 3.81015L531.102 23.8961L533.07 24.2518ZM535.716 4.98799H672.93V2.98799H535.716V4.98799ZM671.946 3.81015L668.316 23.8961L670.284 24.2518L673.914 4.16583L671.946 3.81015ZM669.3 23.074H612.188V25.074H669.3V23.074ZM611.203 23.9009L585.551 169.827L587.521 170.173L613.173 24.2471L611.203 23.9009ZM586.536 169H563.546V171H586.536V169ZM564.531 170.173L590.183 24.2471L588.213 23.9009L562.561 169.827L564.531 170.173ZM697.451 3.98799V2.98799H696.612L696.467 3.81428L697.451 3.98799ZM815.063 3.98799L816.048 4.16583L816.26 2.98799H815.063V3.98799ZM811.433 24.074V25.074H812.269L812.418 24.2518L811.433 24.074ZM716.811 24.074V23.074H715.971L715.826 23.9023L716.811 24.074ZM707.615 76.83L706.63 76.6583L706.426 77.83H707.615V76.83ZM793.525 76.83L794.51 77.0078L794.722 75.83H793.525V76.83ZM789.895 96.916V97.916H790.731L790.88 97.0938L789.895 96.916ZM703.985 96.916V95.916H703.146L703.001 96.7431L703.985 96.916ZM691.159 170V171H691.999L692.144 170.173L691.159 170ZM668.169 170L667.185 169.826L666.978 171H668.169V170ZM697.451 4.98799H815.063V2.98799H697.451V4.98799ZM814.079 3.81015L810.449 23.8961L812.418 24.2518L816.048 4.16583L814.079 3.81015ZM811.433 23.074H716.811V25.074H811.433V23.074ZM715.826 23.9023L706.63 76.6583L708.601 77.0017L717.797 24.2457L715.826 23.9023ZM707.615 77.83H793.525V75.83H707.615V77.83ZM792.541 76.6522L788.911 96.7382L790.88 97.0938L794.51 77.0078L792.541 76.6522ZM789.895 95.916H703.985V97.916H789.895V95.916ZM703.001 96.7431L690.175 169.827L692.144 170.173L704.97 97.0889L703.001 96.7431ZM691.159 169H668.169V171H691.159V169ZM669.154 170.174L698.436 4.16169L696.467 3.81428L667.185 169.826L669.154 170.174ZM843.215 155.722L842.542 156.462L842.552 156.47L843.215 155.722ZM826.517 84.816L825.53 84.6573L826.517 84.816ZM857.735 22.622L858.392 23.3755L858.397 23.3718L857.735 22.622ZM975.347 17.782L974.684 18.5305L974.684 18.5305L975.347 17.782ZM992.287 88.204L993.273 88.3674L993.274 88.3627L992.287 88.204ZM960.585 150.882L959.927 150.129L959.923 150.132L960.585 150.882ZM944.613 136.12L945.295 136.851L945.3 136.846L944.613 136.12ZM969.055 84.816L968.073 84.6251L968.072 84.6292L969.055 84.816ZM957.923 32.302L957.237 33.0298L957.244 33.0366L957.252 33.0432L957.923 32.302ZM849.749 88.204L850.731 88.3949L850.731 88.3908L849.749 88.204ZM860.639 140.96L859.953 141.688L859.96 141.694L860.639 140.96ZM896.213 171.662C873.79 171.662 856.388 166.058 843.878 154.974L842.552 156.47C855.533 167.973 873.463 173.662 896.213 173.662V171.662ZM843.888 154.982C831.553 143.754 825.339 128.154 825.339 108.048H823.339C823.339 128.598 829.709 144.781 842.542 156.462L843.888 154.982ZM825.339 108.048C825.339 101.665 826.057 93.9767 827.504 84.9747L825.53 84.6573C824.072 93.7247 823.339 101.525 823.339 108.048H825.339ZM827.504 84.9747C831.833 58.0405 842.154 37.5443 858.392 23.3755L857.077 21.8685C840.404 36.417 829.913 57.3835 825.53 84.6573L827.504 84.9747ZM858.397 23.3718C874.634 9.04471 895.839 1.84199 922.107 1.84199V-0.158015C895.457 -0.158015 873.748 7.15927 857.073 21.8722L858.397 23.3718ZM922.107 1.84199C944.694 1.84199 962.175 7.44697 974.684 18.5305L976.01 17.0335C963.028 5.53034 945.016 -0.158015 922.107 -0.158015V1.84199ZM974.684 18.5305C987.175 29.5988 993.465 45.0337 993.465 64.972H995.465C995.465 44.5769 989.009 28.5519 976.01 17.0335L974.684 18.5305ZM993.465 64.972C993.465 71.3553 992.746 79.0433 991.3 88.0453L993.274 88.3627C994.731 79.2953 995.465 71.4953 995.465 64.972H993.465ZM991.3 88.0405C986.811 115.136 976.329 135.797 959.927 150.129L961.243 151.635C978.075 136.927 988.728 115.802 993.273 88.3674L991.3 88.0405ZM959.923 150.132C943.686 164.459 922.48 171.662 896.213 171.662V173.662C922.863 173.662 944.572 166.345 961.247 151.632L959.923 150.132ZM896.213 153.818C916.729 153.818 933.128 148.196 945.295 136.851L943.931 135.389C932.22 146.308 916.353 151.818 896.213 151.818V153.818ZM945.3 136.846C957.443 125.36 965.658 108.035 970.037 85.0028L968.072 84.6292C963.74 107.416 955.66 124.294 943.926 135.394L945.3 136.846ZM970.037 85.0069C971.181 79.1225 971.749 72.442 971.749 64.972H969.749C969.749 72.3446 969.188 78.8935 968.073 84.6251L970.037 85.0069ZM971.749 64.972C971.749 50.7199 967.399 39.5347 958.594 31.5608L957.252 33.0432C965.548 40.5573 969.749 51.1521 969.749 64.972H971.749ZM958.609 31.5742C949.983 23.4463 938.012 19.444 922.833 19.444V21.444C937.661 21.444 949.084 25.347 957.237 33.0298L958.609 31.5742ZM922.833 19.444C902.158 19.444 885.677 25.0649 873.509 36.4106L874.873 37.8734C886.582 26.9551 902.529 21.444 922.833 21.444V19.444ZM873.509 36.4106C861.361 47.7379 853.146 64.9855 848.766 88.0172L850.731 88.3908C855.064 65.6038 863.144 48.8101 874.873 37.8734L873.509 36.4106ZM848.767 88.0131C847.623 93.8975 847.055 100.578 847.055 108.048H849.055C849.055 100.675 849.616 94.1265 850.73 88.3949L848.767 88.0131ZM847.055 108.048C847.055 122.295 851.321 133.553 859.953 141.688L861.325 140.232C853.178 132.556 849.055 121.873 849.055 108.048H847.055ZM859.96 141.694C868.746 149.817 880.874 153.818 896.213 153.818V151.818C881.221 151.818 869.633 147.914 861.318 140.226L859.96 141.694ZM1033.75 3.98799V2.98799H1032.91L1032.76 3.81428L1033.75 3.98799ZM1056.74 3.98799L1057.72 4.16112L1057.93 2.98799H1056.74V3.98799ZM1031.08 149.914L1030.1 149.741L1029.89 150.914H1031.08V149.914ZM1120.38 149.914L1121.37 150.092L1121.58 148.914H1120.38V149.914ZM1116.75 170V171H1117.59L1117.74 170.178L1116.75 170ZM1004.46 170L1003.48 169.826L1003.27 171H1004.46V170ZM1033.75 4.98799H1056.74V2.98799H1033.75V4.98799ZM1055.75 3.81486L1030.1 149.741L1032.07 150.087L1057.72 4.16112L1055.75 3.81486ZM1031.08 150.914H1120.38V148.914H1031.08V150.914ZM1119.4 149.736L1115.77 169.822L1117.74 170.178L1121.37 150.092L1119.4 149.736ZM1116.75 169H1004.46V171H1116.75V169ZM1005.45 170.174L1034.73 4.16169L1032.76 3.81428L1003.48 169.826L1005.45 170.174ZM1171.36 3.98799V2.98799H1170.52L1170.38 3.81428L1171.36 3.98799ZM1194.35 3.98799L1195.34 4.16169L1195.54 2.98799H1194.35V3.98799ZM1165.07 170V171H1165.91L1166.06 170.174L1165.07 170ZM1142.08 170L1141.1 169.826L1140.89 171H1142.08V170ZM1171.36 4.98799H1194.35V2.98799H1171.36V4.98799ZM1193.37 3.81428L1164.09 169.826L1166.06 170.174L1195.34 4.16169L1193.37 3.81428ZM1165.07 169H1142.08V171H1165.07V169ZM1143.07 170.174L1172.35 4.16169L1170.38 3.81428L1141.1 169.826L1143.07 170.174ZM1233.39 155.722L1232.72 156.462L1232.73 156.47L1233.39 155.722ZM1216.69 84.816L1215.71 84.6573L1216.69 84.816ZM1247.91 22.622L1248.57 23.3755L1248.57 23.3718L1247.91 22.622ZM1365.52 17.782L1364.86 18.5305L1364.86 18.5305L1365.52 17.782ZM1382.46 88.204L1383.45 88.3674L1383.45 88.3627L1382.46 88.204ZM1350.76 150.882L1350.1 150.129L1350.1 150.132L1350.76 150.882ZM1334.79 136.12L1335.47 136.851L1335.48 136.846L1334.79 136.12ZM1359.23 84.816L1358.25 84.6251L1358.25 84.6292L1359.23 84.816ZM1348.1 32.302L1347.41 33.0298L1347.42 33.0366L1347.43 33.0432L1348.1 32.302ZM1239.93 88.204L1240.91 88.3949L1240.91 88.3908L1239.93 88.204ZM1250.82 140.96L1250.13 141.688L1250.14 141.694L1250.82 140.96ZM1286.39 171.662C1263.97 171.662 1246.57 166.058 1234.06 154.974L1232.73 156.47C1245.71 167.973 1263.64 173.662 1286.39 173.662V171.662ZM1234.07 154.982C1221.73 143.754 1215.52 128.154 1215.52 108.048H1213.52C1213.52 128.598 1219.89 144.781 1232.72 156.462L1234.07 154.982ZM1215.52 108.048C1215.52 101.665 1216.24 93.9767 1217.68 84.9747L1215.71 84.6573C1214.25 93.7247 1213.52 101.525 1213.52 108.048H1215.52ZM1217.68 84.9747C1222.01 58.0405 1232.33 37.5443 1248.57 23.3755L1247.26 21.8685C1230.58 36.417 1220.09 57.3835 1215.71 84.6573L1217.68 84.9747ZM1248.57 23.3718C1264.81 9.04471 1286.02 1.84199 1312.28 1.84199V-0.158015C1285.63 -0.158015 1263.93 7.15927 1247.25 21.8722L1248.57 23.3718ZM1312.28 1.84199C1334.87 1.84199 1352.35 7.44697 1364.86 18.5305L1366.19 17.0335C1353.21 5.53034 1335.19 -0.158015 1312.28 -0.158015V1.84199ZM1364.86 18.5305C1377.35 29.5988 1383.64 45.0337 1383.64 64.972H1385.64C1385.64 44.5769 1379.19 28.5519 1366.19 17.0335L1364.86 18.5305ZM1383.64 64.972C1383.64 71.3553 1382.92 79.0433 1381.48 88.0453L1383.45 88.3627C1384.91 79.2953 1385.64 71.4953 1385.64 64.972H1383.64ZM1381.48 88.0405C1376.99 115.136 1366.51 135.797 1350.1 150.129L1351.42 151.635C1368.25 136.927 1378.91 115.802 1383.45 88.3674L1381.48 88.0405ZM1350.1 150.132C1333.86 164.459 1312.66 171.662 1286.39 171.662V173.662C1313.04 173.662 1334.75 166.345 1351.42 151.632L1350.1 150.132ZM1286.39 153.818C1306.91 153.818 1323.31 148.196 1335.47 136.851L1334.11 135.389C1322.4 146.308 1306.53 151.818 1286.39 151.818V153.818ZM1335.48 136.846C1347.62 125.36 1355.84 108.035 1360.22 85.0028L1358.25 84.6292C1353.92 107.416 1345.84 124.294 1334.1 135.394L1335.48 136.846ZM1360.21 85.0069C1361.36 79.1225 1361.93 72.442 1361.93 64.972H1359.93C1359.93 72.3446 1359.37 78.8935 1358.25 84.6251L1360.21 85.0069ZM1361.93 64.972C1361.93 50.7199 1357.58 39.5347 1348.77 31.5608L1347.43 33.0432C1355.73 40.5573 1359.93 51.1521 1359.93 64.972H1361.93ZM1348.79 31.5742C1340.16 23.4463 1328.19 19.444 1313.01 19.444V21.444C1327.84 21.444 1339.26 25.347 1347.41 33.0298L1348.79 31.5742ZM1313.01 19.444C1292.34 19.444 1275.85 25.0649 1263.69 36.4106L1265.05 37.8734C1276.76 26.9551 1292.71 21.444 1313.01 21.444V19.444ZM1263.69 36.4106C1251.54 47.7379 1243.32 64.9855 1238.94 88.0172L1240.91 88.3908C1245.24 65.6038 1253.32 48.8101 1265.05 37.8734L1263.69 36.4106ZM1238.95 88.0131C1237.8 93.8975 1237.23 100.578 1237.23 108.048H1239.23C1239.23 100.675 1239.79 94.1265 1240.91 88.3949L1238.95 88.0131ZM1237.23 108.048C1237.23 122.295 1241.5 133.553 1250.13 141.688L1251.5 140.232C1243.36 132.556 1239.23 121.873 1239.23 108.048H1237.23ZM1250.14 141.694C1258.92 149.817 1271.05 153.818 1286.39 153.818V151.818C1271.4 151.818 1259.81 147.914 1251.5 140.226L1250.14 141.694Z"
            fill="black" fillOpacity="0.1"/>
        </svg>
        <div className="mix-blend-difference px-3 md:pt-36 md:pl-[15%] max-md:mx-auto max-md:w-fit max-md:text-center ">
          <h1 className="italic font-semibold text-4xl md:text-5xl max-md:py-7">PORTFOLIO</h1>
          {/*TODO Centrare testi*/}
          <p className="text-md md:text-xl max-md:max-w-xs">Alcuni dei miei progetti
            personali che realizzo per applicare cio&apos; che studio e migliorare le mie competenze
          </p>
        </div>
        <div className="flex justify-center mt-24">
          <div className="">
            <p className="mix-blend-difference mb-8 text-center md:text-xl ">Dai un&apos;occhiata miei
              profili:</p>
            <a href="https://github.com/Teygeta" target="_blank">
              <button className="custom-button mx-auto w-36 md:w-52 hover:scale-110">GitHub</button>
            </a>
            <br/>
            <a target="_blank"
               href="https://talent.start2impact.it/profile/vittorio-gioda">
              <button className="custom-button md:w-52 mx-auto bg-custom-light-green hover:scale-110">
                <span className="mix-blend-difference">Start2Impact</span>
              </button>
            </a>
          </div>
          <DesignConcepts/>
        </div>
        <div className="md:hidden w-fit mx-auto py-10 saturate-50">
          <Image
            alt="design-group"
            src="/img/Designgroup.webp"
            width="300"
            height="0"
            quality={100}
          />
        </div>
      </div>
    </section>
  )
}