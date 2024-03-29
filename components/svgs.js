import * as React from "react"
import Svg, { Rect, G, Path, Defs, Circle, ClipPath } from "react-native-svg"

export const CircleLogo = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={39}
    height={40}
    fill="none"
    {...props}
  >
    <Path
      fill="#B6DE7C"
      d="M38.61 12.676a20 20 0 1 0-6.916 23.55l-2.101-2.916a16.407 16.407 0 1 1 5.674-19.318l3.344-1.316Z"
    />
  </Svg>
)

export const UserIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Circle cx={20} cy={20} r={20} fill="#fff" />
    <Path
      fill="#3C4731"
      fillRule="evenodd"
      d="m25.13 21.568 5.76 2.618a4.167 4.167 0 0 1 2.443 3.794v1.187a4.167 4.167 0 0 1-4.166 4.166H10.833a4.167 4.167 0 0 1-4.166-4.166V27.98c0-1.634.955-3.117 2.442-3.794l5.761-2.618a8.333 8.333 0 1 1 10.26 0Zm-8.528 1.043L9.8 25.704a2.5 2.5 0 0 0-1.466 2.276v1.187a2.5 2.5 0 0 0 2.5 2.5h18.334a2.5 2.5 0 0 0 2.5-2.5V27.98a2.5 2.5 0 0 0-1.466-2.276l-6.803-3.093a8.303 8.303 0 0 1-3.398.722c-1.21 0-2.36-.258-3.398-.722ZM26.667 15a6.667 6.667 0 1 1-13.334 0 6.667 6.667 0 0 1 13.334 0Z"
      clipRule="evenodd"
    />
  </Svg>
)

export const Kosmetolog = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={80}
    height={80}
    fill="none"
    {...props}
  >
    <Rect width={80} height={80} fill="#3C4731" rx={20} />
    <G fill="#fff" fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
      <Path d="M38.32 11.96h19.375v2.97H38.32v-2.97Z" opacity={0.985} />
      <Path
        d="M38.477 17.195h19.062a113.485 113.485 0 0 1-.86 5.86c-4.573-3.16-9.443-3.694-14.609-1.602-.962.455-1.874.989-2.734 1.602-.323-1.948-.61-3.901-.86-5.86Z"
        opacity={0.972}
      />
      <Path
        d="M29.805 19.852c.904-.14 1.543.198 1.914 1.015.039 1.98.052 3.958.039 5.938h-2.969c-.013-1.954 0-3.907.04-5.86.15-.527.475-.892.976-1.093Z"
        opacity={0.969}
      />
      <Path
        d="M47.852 22.43c3.282.012 6.12 1.12 8.515 3.32a2663.528 2663.528 0 0 0-2.422 16.992H42.07a1481.24 1481.24 0 0 0-2.422-16.992c2.327-2.108 5.061-3.215 8.204-3.32Z"
        opacity={0.992}
      />
      <Path d="M26.133 29.07h8.281v4.297h-8.281V29.07Z" opacity={0.978} />
      <Path
        d="M38.398 51.96H22.227c-.038-4.82 0-9.638.117-14.452.4-1.027 1.142-1.639 2.226-1.836l5.703-.04c2.035-.01 4.066.029 6.094.118 1.147.391 1.81 1.185 1.992 2.383.04 4.61.053 9.218.04 13.828Z"
        opacity={0.993}
      />
      <Path d="M53.79 51.96H42.226v-6.952h11.562v6.953Z" opacity={0.98} />
    </G>
    <Path
      fill="#fff"
      d="M15.072 65v-5.6h.832v2.344h1.048l1.976-2.344h1.024l-2.304 2.72 2.48 2.88h-1.04l-2.128-2.472h-1.056V65h-.832Zm5.887-3.712c.342-.341.883-.512 1.624-.512.742 0 1.28.17 1.616.512.342.341.512.885.512 1.632 0 .752-.168 1.299-.504 1.64-.336.336-.877.504-1.624.504-.746 0-1.288-.168-1.624-.504-.336-.341-.504-.888-.504-1.64 0-.747.168-1.29.504-1.632Zm.28 1.632c0 .49.107.848.32 1.072.214.224.555.336 1.024.336.47 0 .811-.112 1.024-.336.214-.224.32-.581.32-1.072 0-.496-.106-.853-.32-1.072-.208-.224-.549-.336-1.024-.336-.474 0-.818.112-1.032.336-.208.219-.312.576-.312 1.072Zm6.28 2.144c-.725 0-1.253-.168-1.583-.504-.326-.341-.488-.888-.488-1.64 0-.747.162-1.29.488-1.632.33-.341.858-.512 1.584-.512.634 0 1.114.128 1.44.384.325.25.525.65.6 1.2h-.776c-.07-.293-.206-.507-.408-.64-.198-.139-.478-.208-.84-.208-.46 0-.792.112-1 .336-.203.219-.304.576-.304 1.072 0 .49.104.848.312 1.072.208.224.538.336.992.336.362 0 .642-.067.84-.2.202-.139.338-.355.408-.648h.776c-.075.555-.275.957-.6 1.208-.326.25-.806.376-1.44.376ZM30.5 65v-4.16h1.273l1.48 3.368 1.48-3.368h1.272V65h-.784v-3.456L33.668 65h-.84l-1.544-3.456V65H30.5Zm6.96-.448c-.33-.341-.496-.885-.496-1.632 0-.747.166-1.29.496-1.632.336-.341.877-.512 1.624-.512.742 0 1.275.17 1.6.512.33.341.496.885.496 1.632 0 .027-.003.067-.008.12v.12h-3.408c.027.416.147.723.36.92.219.197.541.296.968.296.624 0 1.021-.213 1.192-.64h.816c-.112.49-.341.835-.688 1.032-.341.197-.784.296-1.328.296-.746 0-1.288-.17-1.624-.512Zm1.632-3.088c-.4 0-.71.088-.928.264-.213.17-.341.45-.384.84h2.616c-.043-.395-.17-.677-.384-.848-.208-.17-.515-.256-.92-.256Zm6.683.112H44.11V65h-.784v-3.424h-1.664v-.736h4.112v.736Zm.982-.288c.342-.341.883-.512 1.624-.512.742 0 1.28.17 1.616.512.342.341.512.885.512 1.632 0 .752-.168 1.299-.504 1.64-.336.336-.877.504-1.624.504-.746 0-1.288-.168-1.624-.504-.336-.341-.504-.888-.504-1.64 0-.747.168-1.29.504-1.632Zm.28 1.632c0 .49.107.848.32 1.072.214.224.555.336 1.024.336.47 0 .81-.112 1.024-.336.214-.224.32-.581.32-1.072 0-.496-.106-.853-.32-1.072-.208-.224-.55-.336-1.024-.336s-.818.112-1.032.336c-.208.219-.312.576-.312 1.072ZM51.087 65v-.784h.248c.133 0 .235-.05.304-.152.075-.107.136-.323.184-.648.053-.33.096-.824.128-1.48l.056-1.096h3.384V65h-.784v-3.424h-1.864l-.016.424c-.037.8-.112 1.421-.224 1.864-.107.437-.248.736-.424.896-.176.16-.413.24-.712.24h-.28Zm5.77-3.712c.342-.341.883-.512 1.625-.512.741 0 1.28.17 1.616.512.341.341.512.885.512 1.632 0 .752-.168 1.299-.504 1.64-.336.336-.878.504-1.624.504-.747 0-1.288-.168-1.624-.504-.336-.341-.504-.888-.504-1.64 0-.747.168-1.29.504-1.632Zm.28 1.632c0 .49.108.848.32 1.072.214.224.556.336 1.025.336.47 0 .81-.112 1.024-.336.213-.224.32-.581.32-1.072 0-.496-.107-.853-.32-1.072-.208-.224-.55-.336-1.024-.336-.475 0-.819.112-1.032.336-.208.219-.312.576-.312 1.072ZM61.57 65v-4.16h3.096v.736h-2.312V65h-.784Z"
    />
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M20 12h40v40H20z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export const Okylist = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={80}
    height={80}
    fill="none"
    {...props}
  >
    <Rect width={80} height={80} fill="#3C4731" rx={20} />
    <Path
      fill="#fff"
      d="M23.86 60.016c.453-.453 1.181-.68 2.184-.68 1.003 0 1.73.227 2.184.68.453.453.68 1.181.68 2.184 0 1.003-.227 1.73-.68 2.184-.453.453-1.181.68-2.184.68-1.003 0-1.73-.227-2.184-.68-.453-.453-.68-1.181-.68-2.184 0-1.003.227-1.73.68-2.184Zm.632.6c-.32.325-.48.853-.48 1.584 0 .73.16 1.261.48 1.592.325.325.843.488 1.552.488.71 0 1.224-.163 1.544-.488.325-.33.488-.861.488-1.592 0-.73-.163-1.259-.488-1.584-.32-.33-.835-.496-1.544-.496-.71 0-1.227.165-1.552.496ZM30.732 65h-.783v-4.16h.784v1.672h.776l1.352-1.672h.96l-1.664 2.032L33.925 65h-.968l-1.448-1.752h-.776V65Zm5.294 0-1.736-4.16h.84l1.312 3.136 1.32-3.136h.84L36.034 67h-.84l.832-2Zm2.737 0v-.784h.248c.133 0 .234-.05.304-.152.075-.107.136-.323.184-.648.053-.33.096-.824.128-1.48l.056-1.096h3.384V65h-.784v-3.424h-1.864l-.016.424c-.038.8-.112 1.421-.224 1.864-.107.437-.248.736-.424.896-.176.16-.413.24-.712.24h-.28Zm6.179 0h-.688v-4.16h.784v2.904l2.52-2.904h.688V65h-.784v-2.904L44.942 65Zm6.34.064c-.726 0-1.254-.168-1.585-.504-.325-.341-.488-.888-.488-1.64 0-.747.163-1.29.488-1.632.331-.341.859-.512 1.584-.512.635 0 1.115.128 1.44.384.326.25.526.65.6 1.2h-.776c-.069-.293-.205-.507-.408-.64-.197-.139-.477-.208-.84-.208-.458 0-.792.112-1 .336-.202.219-.304.576-.304 1.072 0 .49.104.848.312 1.072.208.224.539.336.992.336.363 0 .643-.067.84-.2.203-.139.339-.355.408-.648h.776c-.074.555-.274.957-.6 1.208-.325.25-.805.376-1.44.376Zm6.613-3.488H56.23V65h-.784v-3.424h-1.664v-.736h4.112v.736Z"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M55.195 13.133c2.596.239 3.677 1.645 3.242 4.219-.175.429-.41.82-.703 1.171l-2.851 2.383c.796.832.887 1.731.273 2.696-.795.738-1.641.803-2.539.195l-.82-.977-7.383 5.82a25.77 25.77 0 0 1-2.422.704c-.502.32-1.023.607-1.562.86-1.589.077-2.227-.665-1.914-2.227l.234-.391a5.966 5.966 0 0 0 1.953-2.813c.134-.107.238-.238.313-.39a796.289 796.289 0 0 0 7.382-5.86 10.548 10.548 0 0 0-.664-.859c-.55-1.228-.224-2.126.977-2.695.974-.197 1.716.129 2.226.976l2.774-2.304a4.57 4.57 0 0 1 1.484-.508Zm-6.172 3.047c.32-.063.568.042.743.312a176.63 176.63 0 0 0 3.906 4.922c.239.33.46.668.664 1.016-.2.524-.526.628-.977.312a315.193 315.193 0 0 0-4.14-5.234 3.58 3.58 0 0 1-.508-.86c.066-.185.17-.341.312-.468Zm.157 3.36c.624.728 1.223 1.484 1.797 2.265a109.038 109.038 0 0 1-3.829 3.047 18.179 18.179 0 0 1-.312-3.438c.787-.626 1.568-1.251 2.344-1.875Z"
      clipRule="evenodd"
      opacity={0.962}
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M39.023 30.555c.133-.013.263 0 .391.039.393.367.758.758 1.094 1.172a21.981 21.981 0 0 1 10.156 3.203 39.58 39.58 0 0 1 7.305 5.898.71.71 0 0 1 0 .781 34.902 34.902 0 0 1-10.664 7.54c-5.484 2.235-10.9 2.079-16.25-.47a33.295 33.295 0 0 1-9.57-6.991 1.17 1.17 0 0 1-.079-.782 31.422 31.422 0 0 1 11.367-7.851 21.351 21.351 0 0 1 5.391-1.25c.278-.439.564-.869.86-1.29Zm2.422 2.656c3.736 1.014 5.884 3.436 6.446 7.266.153 3.953-1.552 6.752-5.117 8.398-3.612 1.223-6.724.455-9.337-2.305-2.11-2.706-2.5-5.65-1.171-8.828 1.103-2.21 2.834-3.668 5.195-4.375-.224 1.102.167 1.896 1.172 2.383 2.043.365 2.98-.481 2.812-2.54Zm-8.28 1.172c-2.481 2.507-3.38 5.502-2.696 8.984a9.552 9.552 0 0 0 2.773 4.805 16.963 16.963 0 0 1-3.437-1.563 36.202 36.202 0 0 1-6.953-5.312 29.473 29.473 0 0 1 10.312-6.914Z"
      clipRule="evenodd"
      opacity={0.959}
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M38.945 36.96c2.697-.204 4.376.994 5.04 3.595.154 3.009-1.265 4.702-4.259 5.078-2.225-.156-3.644-1.301-4.257-3.438a4.34 4.34 0 0 1 .078-2.187 1 1 0 0 1 .234-.469c.384 1.127 1.152 1.53 2.305 1.211 1.188-.743 1.37-1.68.547-2.813a3.947 3.947 0 0 0-.938-.468c.396-.24.813-.41 1.25-.508Z"
      clipRule="evenodd"
      opacity={0.971}
    />
  </Svg>
)

export const Preparaty = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={80}
    height={80}
    fill="none"
    {...props}
  >
    <Rect width={80} height={80} fill="#3C4731" rx={20} />
    <G fill="#fff" fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
      <Path
        d="M59.961 40.102v2.109c-.789 3.796-3.106 5.97-6.953 6.523-3.989.07-6.658-1.765-8.008-5.507l-7.5-19.532c-1.157-3.352-.467-6.255 2.07-8.71 2.907-2.196 5.953-2.404 9.141-.626a8.143 8.143 0 0 1 2.93 3.555 711.184 711.184 0 0 1 3.554 9.375.891.891 0 0 1-.468.664l-9.61 3.672c-.434.403-.408.768.078 1.094a.975.975 0 0 0 .547 0l9.375-3.594c.537-.14.889.055 1.055.586a571.819 571.819 0 0 0 3.203 8.36c.255.67.45 1.348.586 2.03Z"
        opacity={0.989}
      />
      <Path
        d="M31.602 22.914c1.339-.057 2.667.034 3.984.273.198.04.367.132.508.274a670.754 670.754 0 0 1 5.976 15.781c.006.45-.215.685-.664.703a1.1 1.1 0 0 1-.586-.195A6438.848 6438.848 0 0 1 22.5 28.93a.977.977 0 0 1-.078-.703c2.301-3.072 5.36-4.843 9.18-5.313Z"
        opacity={0.984}
      />
      <Path
        d="M19.96 37.21v-2.812c.194-1.37.572-2.699 1.134-3.984.265-.29.59-.38.976-.273 7.103 4.17 14.2 8.35 21.29 12.539a.752.752 0 0 1 .117.351 3.08 3.08 0 0 1-.508.899c-3.475 3.953-7.81 5.45-13.008 4.492-4.897-1.277-8.087-4.337-9.57-9.18-.17-.682-.314-1.36-.43-2.031Z"
        opacity={0.988}
      />
    </G>
    <Path
      fill="#fff"
      d="M16.564 64v-5.6h5.344V64h-.832v-4.816h-3.68V64h-.832Zm6.608 2v-6.16h.784v.584c.293-.432.81-.648 1.552-.648.666 0 1.149.17 1.448.512.304.336.456.88.456 1.632 0 .747-.152 1.29-.456 1.632-.3.341-.782.512-1.448.512-.742 0-1.26-.216-1.552-.648V66h-.784Zm1.112-3c.213.219.552.328 1.016.328.464 0 .8-.11 1.008-.328.213-.224.32-.584.32-1.08 0-.49-.107-.848-.32-1.072-.208-.224-.544-.336-1.008-.336-.464 0-.803.112-1.016.336-.208.224-.312.581-.312 1.072 0 .496.104.856.312 1.08Zm4.363.552c-.331-.341-.496-.885-.496-1.632 0-.747.165-1.29.496-1.632.336-.341.877-.512 1.624-.512.741 0 1.274.17 1.6.512.33.341.496.885.496 1.632 0 .027-.003.067-.008.12v.12H28.95c.026.416.146.723.36.92.218.197.541.296.968.296.624 0 1.021-.213 1.192-.64h.816c-.112.49-.342.835-.688 1.032-.342.197-.784.296-1.328.296-.747 0-1.288-.17-1.624-.512Zm1.632-3.088c-.4 0-.71.088-.928.264-.214.17-.342.45-.384.84h2.616c-.043-.395-.171-.677-.384-.848-.208-.17-.515-.256-.92-.256ZM33.328 64v-4.16h3.992V64h-.784v-3.424h-2.424V64h-.784Zm6.62.064c-.555 0-.96-.099-1.217-.296-.256-.197-.384-.515-.384-.952 0-.453.142-.776.425-.968.288-.197.749-.296 1.384-.296h1.416c0-.379-.097-.653-.289-.824-.191-.176-.498-.264-.92-.264-.335 0-.594.056-.776.168-.18.107-.304.28-.368.52h-.776c.075-.48.267-.83.577-1.048.309-.219.767-.328 1.375-.328.683 0 1.18.141 1.488.424.315.277.472.723.472 1.336V64h-.783v-.536c-.315.4-.857.6-1.625.6Zm-.816-1.28c0 .208.08.36.24.456.165.09.418.136.76.136.453 0 .791-.083 1.016-.248.229-.165.37-.43.423-.792v-.192h-1.215c-.817 0-1.224.213-1.224.64ZM43.523 66v-6.16h.784v.584c.293-.432.81-.648 1.552-.648.667 0 1.15.17 1.448.512.304.336.456.88.456 1.632 0 .747-.152 1.29-.456 1.632-.299.341-.781.512-1.448.512-.741 0-1.259-.216-1.552-.648V66h-.784Zm1.112-3c.214.219.552.328 1.016.328.464 0 .8-.11 1.008-.328.214-.224.32-.584.32-1.08 0-.49-.106-.848-.32-1.072-.208-.224-.544-.336-1.008-.336-.464 0-.803.112-1.016.336-.208.224-.312.581-.312 1.072 0 .496.104.856.312 1.08Zm5.531 1.064c-.554 0-.96-.099-1.216-.296-.256-.197-.384-.515-.384-.952 0-.453.142-.776.424-.968.288-.197.75-.296 1.384-.296h1.416c0-.379-.096-.653-.288-.824-.192-.176-.498-.264-.92-.264-.336 0-.594.056-.776.168-.181.107-.304.28-.368.52h-.776c.075-.48.267-.83.576-1.048.31-.219.768-.328 1.376-.328.683 0 1.179.141 1.488.424.315.277.472.723.472 1.336V64h-.784v-.536c-.314.4-.856.6-1.624.6Zm-.816-1.28c0 .208.08.36.24.456.166.09.419.136.76.136.454 0 .792-.083 1.016-.248.23-.165.37-.43.424-.792v-.192h-1.216c-.816 0-1.224.213-1.224.64Zm7.978-2.208h-1.664V64h-.784v-3.424h-1.663v-.736h4.111v.736ZM58.093 64v-4.16h.784v1.28h1.24c.571 0 .985.115 1.24.344.257.23.385.595.385 1.096 0 .501-.128.867-.384 1.096-.256.23-.667.344-1.232.344h-2.032Zm4.44 0v-4.16h.785V64h-.785Zm-2.488-2.144h-1.168v1.408h1.176c.315 0 .544-.056.689-.168.144-.112.216-.29.216-.536 0-.245-.072-.424-.216-.536-.145-.112-.377-.168-.697-.168Z"
    />
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M20 11h40v40H20z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export const Psyholog = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={80}
    height={80}
    fill="none"
    {...props}
  >
    <Rect width={80} height={80} fill="#3C4731" rx={20} />
    <Path
      fill="#fff"
      d="M20.977 65v-5.6h5.344V65h-.832v-4.816h-3.68V65h-.832Zm8.455.064c-.725 0-1.253-.168-1.584-.504-.325-.341-.488-.888-.488-1.64 0-.747.163-1.29.488-1.632.33-.341.859-.512 1.584-.512.635 0 1.115.128 1.44.384.326.25.526.65.6 1.2h-.776c-.07-.293-.205-.507-.408-.64-.197-.139-.477-.208-.84-.208-.459 0-.792.112-1 .336-.203.219-.304.576-.304 1.072 0 .49.104.848.312 1.072.208.224.539.336.992.336.363 0 .643-.067.84-.2.203-.139.339-.355.408-.648h.776c-.075.555-.274.957-.6 1.208-.325.25-.805.376-1.44.376ZM33.1 65h-.688v-4.16h.784v2.904l2.52-2.904h.688V65h-.784v-2.904L33.1 65Zm4.108 0 1.728-2.104-1.688-2.056h.984l1.2 1.464 1.2-1.464h.984l-1.68 2.056L41.656 65h-.984l-1.24-1.512L38.192 65h-.984Zm5.398-3.712c.342-.341.883-.512 1.624-.512.742 0 1.28.17 1.616.512.342.341.512.885.512 1.632 0 .752-.168 1.299-.504 1.64-.336.336-.877.504-1.624.504-.746 0-1.288-.168-1.624-.504-.336-.341-.504-.888-.504-1.64 0-.747.168-1.29.504-1.632Zm.28 1.632c0 .49.107.848.32 1.072.214.224.555.336 1.024.336.47 0 .811-.112 1.024-.336.214-.224.32-.581.32-1.072 0-.496-.106-.853-.32-1.072-.208-.224-.549-.336-1.024-.336-.474 0-.818.112-1.032.336-.208.219-.312.576-.312 1.072ZM46.937 65v-.784h.248c.133 0 .235-.05.304-.152.075-.107.136-.323.184-.648.053-.33.096-.824.128-1.48l.056-1.096h3.384V65h-.784v-3.424h-1.864l-.016.424c-.037.8-.112 1.421-.224 1.864-.107.437-.248.736-.424.896-.176.16-.413.24-.712.24h-.28Zm5.77-3.712c.342-.341.884-.512 1.625-.512s1.28.17 1.616.512c.341.341.512.885.512 1.632 0 .752-.168 1.299-.504 1.64-.336.336-.877.504-1.624.504-.747 0-1.288-.168-1.624-.504-.336-.341-.504-.888-.504-1.64 0-.747.168-1.29.504-1.632Zm.28 1.632c0 .49.108.848.32 1.072.214.224.556.336 1.025.336.47 0 .81-.112 1.024-.336.213-.224.32-.581.32-1.072 0-.496-.107-.853-.32-1.072-.208-.224-.55-.336-1.024-.336-.475 0-.819.112-1.032.336-.208.219-.312.576-.312 1.072ZM57.42 65v-4.16h3.096v.736h-2.312V65h-.784Z"
    />
    <G fill="#fff" fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
      <Path
        d="M34.336 11.96h1.797c.94.197 1.8.588 2.578 1.173.078 3.541.104 7.083.078 10.625.548-.013 1.094 0 1.64.039.702.402.897.988.587 1.758a.863.863 0 0 1-.43.43c-.59.111-1.19.15-1.797.117v4.687c-.86.013-1.72 0-2.578-.039-.884-1.81-2.316-2.512-4.297-2.11-1.056.38-1.811 1.083-2.266 2.11-2.37.04-4.739.052-7.109.04a5.552 5.552 0 0 1 1.953-3.4c.34-.21.652-.444.938-.703-1.328-2.892-.833-5.418 1.484-7.578a6.704 6.704 0 0 1 2.383-1.132c.253-3.221 1.933-5.226 5.039-6.016Z"
        opacity={0.991}
      />
      <Path
        d="M43.79 11.96h1.796c3.139.786 4.78 2.791 4.922 6.017 3.53 1.07 5.054 3.44 4.57 7.109a7.382 7.382 0 0 1-.586 1.602 6.737 6.737 0 0 1 2.54 2.851c.188.397.305.814.35 1.25h-9.218c.013.548 0 1.094-.039 1.64-.403.702-.988.897-1.758.587a.863.863 0 0 1-.43-.43 7.408 7.408 0 0 1-.117-1.797h-4.687c-.013-.86 0-1.72.039-2.578 1.81-.884 2.512-2.316 2.11-4.297-.38-1.056-1.083-1.811-2.11-2.266a154.78 154.78 0 0 1 .039-8.515 6.436 6.436 0 0 1 2.578-1.172ZM36.133 51.96h-1.797c-3.062-.744-4.728-2.697-5-5.858a.386.386 0 0 1 .078-.196c-2.978-.762-4.54-2.676-4.687-5.742a5.938 5.938 0 0 1 .703-2.93 6.737 6.737 0 0 1-2.54-2.851 6.803 6.803 0 0 1-.35-1.25h9.218c-.013-.548 0-1.095.039-1.64.402-.702.988-.897 1.758-.587a.863.863 0 0 1 .43.43c.111.59.15 1.19.117 1.797h4.687c.013.86 0 1.719-.039 2.578-1.81.884-2.512 2.316-2.11 4.297.38 1.056 1.083 1.811 2.11 2.265.065 2.84.052 5.678-.04 8.516a6.435 6.435 0 0 1-2.577 1.172Z"
        opacity={0.991}
      />
      <Path
        d="M45.586 51.96h-1.797a6.435 6.435 0 0 1-2.578-1.17 361.165 361.165 0 0 1-.078-10.626c-.548.013-1.095 0-1.64-.039-.702-.403-.897-.988-.587-1.758a.863.863 0 0 1 .43-.43c.59-.111 1.189-.15 1.797-.117v-4.687c.86-.013 1.719 0 2.578.039.884 1.81 2.316 2.512 4.297 2.11 1.056-.38 1.81-1.083 2.265-2.11 2.37-.04 4.74-.052 7.11-.04a5.553 5.553 0 0 1-1.953 3.4c-.34.21-.652.444-.938.702 1.328 2.892.833 5.419-1.484 7.578a6.704 6.704 0 0 1-2.383 1.133c-.253 3.22-1.933 5.226-5.04 6.016Z"
        opacity={0.991}
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M20 12h40v40H20z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export const Dantist = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={80}
    height={80}
    fill="none"
    {...props}
  >
    <Rect width={80} height={80} fill="#3C4731" rx={20} />
    <Path
      fill="#fff"
      d="M23.582 66.344h-.832v-2.128h.72a.716.716 0 0 0 .28-.328c.074-.155.146-.461.216-.92.069-.459.122-1.085.16-1.88l.08-1.688h4.176v4.816h.944v2.128h-.832V65h-4.912v1.344Zm.848-2.128h3.12v-4.032h-2.56l-.04.936c-.075 1.552-.248 2.584-.52 3.096Zm7.11.848c-.555 0-.96-.099-1.216-.296-.256-.197-.384-.515-.384-.952 0-.453.141-.776.424-.968.288-.197.75-.296 1.384-.296h1.416c0-.379-.096-.653-.288-.824-.192-.176-.499-.264-.92-.264-.336 0-.595.056-.776.168-.181.107-.304.28-.368.52h-.776c.074-.48.266-.83.576-1.048.31-.219.768-.328 1.376-.328.682 0 1.178.141 1.488.424.315.277.472.723.472 1.336V65h-.784v-.536c-.315.4-.856.6-1.624.6Zm-.816-1.28c0 .208.08.36.24.456.165.09.419.136.76.136.453 0 .792-.083 1.016-.248.23-.165.37-.43.424-.792v-.192h-1.216c-.816 0-1.224.213-1.224.64ZM35.899 65h-.784v-4.16h.784v1.712h2.424V60.84h.784V65h-.784v-1.712H35.9V65Zm8.092-3.424h-1.664V65h-.784v-3.424H39.88v-.736h4.112v.736ZM45.444 65h-.688v-4.16h.784v2.904l2.52-2.904h.688V65h-.784v-2.904L45.444 65Zm6.34.064c-.726 0-1.254-.168-1.584-.504-.326-.341-.488-.888-.488-1.64 0-.747.162-1.29.488-1.632.33-.341.858-.512 1.584-.512.634 0 1.114.128 1.44.384.325.25.525.65.6 1.2h-.776c-.07-.293-.206-.507-.408-.64-.198-.139-.478-.208-.84-.208-.459 0-.792.112-1 .336-.203.219-.304.576-.304 1.072 0 .49.104.848.312 1.072.208.224.538.336.992.336.362 0 .642-.067.84-.2.202-.139.338-.355.408-.648h.776c-.075.555-.275.957-.6 1.208-.326.25-.806.376-1.44.376Zm6.613-3.488h-1.664V65h-.784v-3.424h-1.664v-.736h4.112v.736Z"
    />
    <G fill="#fff" fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
      <Path
        d="M27.54 11.96h2.343c2.161.34 3.984 1.316 5.469 2.93.153.073.309.138.468.196.52-.245.963-.597 1.328-1.055a9.296 9.296 0 0 1 4.61-2.07h2.344c3.35.608 5.693 2.483 7.03 5.625-.21.276-.457.51-.741.703a40.121 40.121 0 0 1-2.149-2.07c-1.764-1.213-3.509-1.187-5.234.078l-2.852 2.851c-1.265 1.727-1.29 3.471-.078 5.235.72.693 1.41 1.41 2.07 2.148-.66.74-1.35 1.455-2.07 2.149-1.213 1.763-1.187 3.508.078 5.234A88.3 88.3 0 0 0 43.32 37c1.676 1.029 3.316.977 4.922-.156l2.031-2.032c.246.007.441.125.586.352-.17 4.089-.379 8.178-.625 12.266-.284 2.423-1.6 3.933-3.945 4.53h-1.875c-2.195-.436-3.797-1.66-4.805-3.67l-2.968-7.657c-.216-.61-.62-.805-1.211-.586a1.207 1.207 0 0 0-.43.586l-2.969 7.656c-1.007 2.01-2.608 3.234-4.804 3.672h-1.875c-2.109-.48-3.398-1.783-3.868-3.906-.51-8.658-1.019-17.304-1.523-25.938v-2.422c.63-3.769 2.766-6.256 6.406-7.46.402-.088.793-.18 1.172-.274Z"
        opacity={0.991}
      />
      <Path
        d="M59.96 30.633v1.25c-.159.461-.406.878-.741 1.25a34.709 34.709 0 0 1-2.852 2.695c-.898.383-1.784.357-2.656-.078-4.152-4.073-8.28-8.175-12.383-12.305-.703-1.033-.729-2.074-.078-3.125a29.489 29.489 0 0 1 3.164-3.086c1.008-.423 1.971-.345 2.89.235l12.15 12.148c.213.325.383.663.507 1.016Zm-14.53-9.61c.753-.015 1.079.35.976 1.094-.36.524-.803.602-1.328.235-.331-.565-.214-1.008.352-1.329Zm2.422 2.344c.718.028 1.018.393.898 1.094-.228.432-.58.575-1.055.43-.648-.577-.595-1.085.157-1.524Z"
        opacity={0.979}
      />
      <Path
        d="M59.96 21.18v1.25c-.123.352-.292.69-.507 1.015a70.24 70.24 0 0 1-1.992 1.953 318.994 318.994 0 0 1-5.938-5.937 28.403 28.403 0 0 1 2.188-2.148c1.184-.575 2.278-.444 3.281.39a34.742 34.742 0 0 1 2.696 2.852c.085.22.176.428.273.625Z"
        opacity={0.966}
      />
      <Path
        d="M43.242 27.664c2.052 1.921 4.057 3.9 6.016 5.938a70.513 70.513 0 0 1-1.953 1.992c-.92.58-1.883.658-2.891.234a36.69 36.69 0 0 1-2.93-2.773c-.88-1.113-.933-2.26-.156-3.438a67.396 67.396 0 0 0 1.914-1.953Z"
        opacity={0.965}
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M20 12h40v40H20z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export const Terapevt = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={80}
    height={80}
    fill="none"
    {...props}
  >
    <Rect width={80} height={80} fill="#3C4731" rx={20} />
    <Path
      fill="#fff"
      d="M26.305 59.184h-2.352V64h-.832v-4.816h-2.352V58.4h5.536v.784Zm.314 4.368c-.33-.341-.496-.885-.496-1.632 0-.747.166-1.29.496-1.632.336-.341.878-.512 1.624-.512.742 0 1.275.17 1.6.512.331.341.496.885.496 1.632 0 .027-.002.067-.008.12v.12h-3.408c.027.416.147.723.36.92.219.197.542.296.968.296.624 0 1.022-.213 1.192-.64h.816c-.112.49-.341.835-.688 1.032-.341.197-.784.296-1.328.296-.746 0-1.288-.17-1.624-.512Zm1.632-3.088c-.4 0-.709.088-.928.264-.213.17-.341.45-.384.84h2.616c-.042-.395-.17-.677-.384-.848-.208-.17-.514-.256-.92-.256ZM31.301 66v-6.16h.784v.584c.293-.432.81-.648 1.551-.648.667 0 1.15.17 1.448.512.304.336.456.88.456 1.632 0 .747-.151 1.29-.456 1.632-.298.341-.78.512-1.448.512-.74 0-1.258-.216-1.552-.648V66H31.3Zm1.112-3c.213.219.552.328 1.016.328.463 0 .8-.11 1.008-.328.213-.224.32-.584.32-1.08 0-.49-.107-.848-.32-1.072-.209-.224-.544-.336-1.008-.336-.465 0-.803.112-1.017.336-.207.224-.312.581-.312 1.072 0 .496.105.856.313 1.08Zm5.53 1.064c-.554 0-.96-.099-1.215-.296-.256-.197-.384-.515-.384-.952 0-.453.141-.776.424-.968.288-.197.749-.296 1.384-.296h1.416c0-.379-.096-.653-.288-.824-.192-.176-.499-.264-.92-.264-.336 0-.595.056-.776.168-.182.107-.304.28-.368.52h-.776c.074-.48.266-.83.576-1.048.309-.219.768-.328 1.376-.328.682 0 1.178.141 1.488.424.314.277.472.723.472 1.336V64h-.784v-.536c-.315.4-.856.6-1.624.6Zm-.815-1.28c0 .208.08.36.24.456.165.09.418.136.76.136.453 0 .792-.083 1.016-.248.229-.165.37-.43.424-.792v-.192h-1.216c-.816 0-1.224.213-1.224.64ZM41.519 64v-4.16h3.992V64h-.784v-3.424h-2.424V64h-.784Zm5.452-.448c-.33-.341-.496-.885-.496-1.632 0-.747.165-1.29.496-1.632.336-.341.877-.512 1.624-.512.741 0 1.275.17 1.6.512.33.341.496.885.496 1.632 0 .027-.003.067-.008.12v.12h-3.408c.027.416.147.723.36.92.219.197.541.296.968.296.624 0 1.021-.213 1.192-.64h.816c-.112.49-.341.835-.688 1.032-.341.197-.784.296-1.328.296-.747 0-1.288-.17-1.624-.512Zm1.632-3.088c-.4 0-.71.088-.928.264-.213.17-.341.45-.384.84h2.616c-.043-.395-.17-.677-.384-.848-.208-.17-.515-.256-.92-.256ZM51.653 64v-4.16h2.127c.528 0 .912.088 1.152.264.24.176.36.459.36.848 0 .421-.136.717-.408.888.4.17.6.507.6 1.008 0 .405-.123.699-.368.88-.245.181-.643.272-1.192.272h-2.272Zm2.2-1.816h-1.417v1.128h1.416c.299 0 .515-.043.648-.128.133-.09.2-.237.2-.44 0-.197-.067-.339-.2-.424-.133-.09-.35-.136-.648-.136Zm-1.417-.592h1.248c.293 0 .504-.043.632-.128s.192-.221.192-.408c0-.181-.067-.315-.2-.4-.128-.085-.333-.128-.616-.128h-1.256v1.064Zm7.654-1.016h-1.664V64h-.784v-3.424h-1.664v-.736h4.112v.736Z"
    />
    <G fill="#fff" fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
      <Path
        d="M38.71 10.96h2.5c4.15.704 6.923 3.047 8.321 7.032 1.12 4.687-.247 8.45-4.101 11.29-3.34 1.974-6.752 2.105-10.235.39-4.197-2.63-5.825-6.393-4.883-11.29.94-3.27 2.984-5.55 6.133-6.835a16.564 16.564 0 0 1 2.266-.586Z"
        opacity={0.991}
      />
      <Path
        d="M38.867 50.96H20.352c-.466-6.785 1.8-12.449 6.796-16.991a43.817 43.817 0 0 1 2.54-1.836c.039 2.343.052 4.687.039 7.031-2.468.553-3.991 2.064-4.57 4.531a26.181 26.181 0 0 0-.118 3.203h2.266c-.013-.86 0-1.719.039-2.578.385-1.87 1.531-2.885 3.437-3.047 1.743.103 2.863.988 3.36 2.657.104.934.143 1.871.117 2.812h2.265c.017-.966-.022-1.93-.117-2.89-.542-2.417-2-3.98-4.375-4.688-.065-2.76-.052-5.521.04-8.281a.92.92 0 0 1 .624-.117c.269.167.516.362.742.586a610.08 610.08 0 0 0 5.391 7.578c.04 4.01.052 8.02.04 12.03Z"
        opacity={0.981}
      />
      <Path
        d="M59.648 50.96H41.133c-.013-4.01 0-8.02.039-12.03a634.82 634.82 0 0 1 5.469-7.735c.257-.187.53-.343.82-.468l.781.312c.104 2.813.104 5.625 0 8.438-1.778.874-2.442 2.28-1.992 4.218.644 1.54 1.802 2.282 3.477 2.227 2.124-.459 3.1-1.774 2.93-3.945-.262-1.186-.952-1.993-2.071-2.422-.013-2.396 0-4.792.039-7.188 5.135 3.423 8.104 8.215 8.906 14.375a46.97 46.97 0 0 1 .117 4.219Zm-16.015-6.015c.836-.05 1.305.34 1.406 1.172-.246.943-.819 1.243-1.719.899-.796-.834-.692-1.524.313-2.07Z"
        opacity={0.985}
      />
      <Path
        d="M37.305 32.992c.018-.046.057-.072.117-.078 1.693.414 3.386.414 5.078 0l.117.078a47.748 47.748 0 0 1-2.656 3.672c-.89-1.227-1.775-2.451-2.656-3.672Z"
        opacity={0.929}
      />
      <Path
        d="M49.258 41.508c.972.096 1.35.617 1.133 1.562-.564.763-1.189.815-1.875.157-.37-.848-.123-1.42.742-1.72Z"
        opacity={0.916}
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M20 11h40v40H20z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export const Rentgen = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={80}
    height={80}
    fill="none"
    {...props}
  >
    <Rect width={80} height={80} fill="#3C4731" rx={20} />
    <Path
      fill="#fff"
      d="M24.113 64v-5.6h2.784c.672 0 1.16.141 1.464.424.304.283.456.739.456 1.368 0 .63-.152 1.085-.456 1.368-.304.283-.792.424-1.464.424h-1.952V64h-.832Zm.832-2.8h1.904c.4 0 .691-.08.872-.24.182-.16.272-.416.272-.768 0-.352-.09-.608-.272-.768-.18-.16-.472-.24-.872-.24h-1.904V61.2Zm4.946 2.352c-.33-.341-.496-.885-.496-1.632 0-.747.166-1.29.496-1.632.336-.341.878-.512 1.624-.512.742 0 1.275.17 1.6.512.331.341.496.885.496 1.632 0 .027-.002.067-.008.12v.12h-3.408c.027.416.147.723.36.92.219.197.542.296.968.296.624 0 1.022-.213 1.192-.64h.816c-.112.49-.341.835-.688 1.032-.341.197-.784.296-1.328.296-.746 0-1.288-.17-1.624-.512Zm1.632-3.088c-.4 0-.709.088-.928.264-.213.17-.341.45-.384.84h2.616c-.042-.395-.17-.677-.384-.848-.208-.17-.514-.256-.92-.256ZM35.356 64h-.784v-4.16h.784v1.712h2.425V59.84h.784V64h-.784v-1.712h-2.425V64Zm8.092-3.424h-1.664V64H41v-3.424h-1.664v-.736h4.112v.736ZM44.213 64v-4.16h3.096v.736h-2.312V64h-.784Zm4.077-.448c-.33-.341-.496-.885-.496-1.632 0-.747.165-1.29.496-1.632.336-.341.877-.512 1.624-.512.741 0 1.274.17 1.6.512.33.341.496.885.496 1.632 0 .027-.003.067-.008.12v.12h-3.408c.026.416.146.723.36.92.218.197.541.296.968.296.624 0 1.021-.213 1.192-.64h.816c-.112.49-.342.835-.688 1.032-.342.197-.784.296-1.328.296-.747 0-1.288-.17-1.624-.512Zm1.632-3.088c-.4 0-.71.088-.928.264-.214.17-.342.45-.384.84h2.616c-.043-.395-.17-.677-.384-.848-.208-.17-.515-.256-.92-.256ZM53.755 64h-.784v-4.16h.784v1.712h2.424V59.84h.784V64h-.784v-1.712h-2.424V64Z"
    />
    <G fill="#fff" fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
      <Path
        d="M19.96 10.96h14.845c.013 2.527 0 5.053-.04 7.58-2.476 1.15-3.466 3.077-2.968 5.78a5.58 5.58 0 0 0 2.226 2.93c-.653 3.172.518 5.36 3.516 6.563.636.133 1.274.224 1.914.273.61 1.452 1.195 2.91 1.758 4.375H19.96v-27.5Z"
        opacity={0.996}
      />
      <Path
        d="M37.148 10.96h3.75c-.026 3.152 0 6.303.079 9.454 1.09-.024 1.988.367 2.695 1.172.709 1.292.54 2.451-.508 3.477-1.041.677-2.083.677-3.125 0a17.94 17.94 0 0 0-1.016-.977 15.18 15.18 0 0 0-.937.898c-1.356.893-2.593.75-3.71-.43-.685-1.055-.659-2.097.077-3.124.744-.73 1.642-1.069 2.695-1.016v-9.453Z"
        opacity={0.977}
      />
      <Path
        d="M43.164 10.96h16.797v27.5c-3.118.027-6.23 0-9.336-.077a564.765 564.765 0 0 1-3.633-8.125c1.205-1.955 1.244-3.934.117-5.938l-.703-.86c.007-2.33-1.047-3.97-3.164-4.92-.078-2.526-.104-5.052-.078-7.58Z"
        opacity={0.996}
      />
      <Path
        d="M45.352 25.96c.141.148.232.33.273.548.184.918.002 1.75-.547 2.5a5.502 5.502 0 0 0-.742.82 418.254 418.254 0 0 0 3.828 8.555 42.35 42.35 0 0 1-4.453.039 232.482 232.482 0 0 1-2.89-6.992c-.42.066-.838.157-1.25.273-2.103.16-3.275-.803-3.516-2.89.007-.304.046-.604.117-.899a7.071 7.071 0 0 0 2.851-.781c2.088 1.095 4.041.9 5.86-.586.166-.19.322-.386.469-.586Z"
        opacity={0.971}
      />
      <Path
        d="M19.96 40.727h40v8.28h-3.124v1.954h-2.422v-1.953H25.508v1.953h-2.422v-1.953H19.96v-8.281Zm25.157 2.968h7.656v2.266h-7.656v-2.266Zm-18.984.078h2.265v2.032h-2.265v-2.032Zm5.547 0h2.265v2.032H31.68v-2.032Zm5.547 0h2.265v2.032h-2.265v-2.032Z"
        opacity={0.98}
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M20 11h40v40H20z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export const Dietolog = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={80}
    height={80}
    fill="none"
    {...props}
  >
    <Rect width={80} height={80} fill="#3C4731" rx={20} />
    <Path
      fill="#fff"
      d="M21.328 65.344h-.832v-2.128h.72a.716.716 0 0 0 .28-.328c.074-.155.146-.461.216-.92s.122-1.085.16-1.88l.08-1.688h4.176v4.816h.944v2.128h-.832V64h-4.912v1.344Zm.848-2.128h3.12v-4.032h-2.56l-.04.936c-.075 1.552-.248 2.584-.52 3.096Zm6.498.784h-.688v-4.16h.784v2.904l2.52-2.904h.689V64h-.784v-2.904L28.675 64Zm4.764-.448c-.33-.341-.496-.885-.496-1.632 0-.747.166-1.29.496-1.632.336-.341.878-.512 1.624-.512.742 0 1.275.17 1.6.512.33.341.496.885.496 1.632 0 .027-.002.067-.008.12v.12h-3.408c.027.416.147.723.36.92.219.197.542.296.968.296.624 0 1.022-.213 1.192-.64h.816c-.112.49-.341.835-.688 1.032-.341.197-.784.296-1.328.296-.746 0-1.288-.17-1.624-.512Zm1.632-3.088c-.4 0-.71.088-.928.264-.213.17-.341.45-.384.84h2.616c-.042-.395-.17-.677-.384-.848-.208-.17-.514-.256-.92-.256Zm6.683.112h-1.664V64h-.784v-3.424H37.64v-.736h4.112v.736Zm.982-.288c.342-.341.883-.512 1.624-.512.742 0 1.28.17 1.616.512.342.341.512.885.512 1.632 0 .752-.168 1.299-.504 1.64-.336.336-.877.504-1.624.504-.746 0-1.288-.168-1.624-.504-.336-.341-.504-.888-.504-1.64 0-.747.168-1.29.504-1.632Zm.28 1.632c0 .49.107.848.32 1.072.214.224.555.336 1.024.336.47 0 .81-.112 1.024-.336.214-.224.32-.581.32-1.072 0-.496-.106-.853-.32-1.072-.208-.224-.55-.336-1.024-.336s-.818.112-1.032.336c-.208.219-.312.576-.312 1.072ZM47.066 64v-.784h.248c.133 0 .235-.05.304-.152.075-.107.136-.323.184-.648.053-.33.096-.824.128-1.48l.056-1.096h3.384V64h-.784v-3.424h-1.864l-.016.424c-.037.8-.112 1.421-.224 1.864-.107.437-.248.736-.424.896-.176.16-.413.24-.712.24h-.28Zm5.77-3.712c.342-.341.883-.512 1.625-.512.741 0 1.28.17 1.616.512.341.341.512.885.512 1.632 0 .752-.168 1.299-.504 1.64-.336.336-.877.504-1.624.504-.747 0-1.288-.168-1.624-.504-.336-.341-.504-.888-.504-1.64 0-.747.168-1.29.504-1.632Zm.28 1.632c0 .49.108.848.32 1.072.214.224.556.336 1.025.336.47 0 .81-.112 1.024-.336.213-.224.32-.581.32-1.072 0-.496-.107-.853-.32-1.072-.208-.224-.55-.336-1.024-.336-.475 0-.819.112-1.032.336-.208.219-.312.576-.312 1.072ZM57.55 64v-4.16h3.096v.736h-2.312V64h-.784Z"
    />
    <G fill="#fff" fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
      <Path
        d="M19.96 10.96h30c.027 4.168 0 8.335-.077 12.5-.156.08-.313.157-.469.235a22.553 22.553 0 0 1-1.055-2.265 122.75 122.75 0 0 1-5.976 2.578v-1.016H27.46v2.578c4.766-.026 9.532 0 14.297.078l.547 1.25c-2.867-.22-5.289.704-7.266 2.774-2.526.039-5.052.052-7.578.039v2.5h5.937a18.909 18.909 0 0 0-1.015 4.102c-1.64.039-3.281.052-4.922.039v2.578c1.615-.026 3.23 0 4.844.078.099 1.319.307 2.62.625 3.906-1.822.078-3.645.104-5.47.078v2.578c2.11-.026 4.22 0 6.33.078a16.097 16.097 0 0 0 3.515 5.313H19.96v-40Zm7.5 5.392h14.923v2.578H27.46v-2.578Z"
        opacity={0.993}
      />
      <Path
        d="M59.96 36.586v3.125a17.431 17.431 0 0 1-2.694 7.734c-1.235 1.821-2.915 2.993-5.04 3.516h-2.343a10.28 10.28 0 0 1-2.032-.664 2.382 2.382 0 0 0-.859 0c-.663.295-1.34.516-2.031.664h-2.344c-2.219-.564-3.95-1.814-5.195-3.75-2.649-4.381-3.222-9.017-1.719-13.906 1.494-3.201 3.98-4.412 7.461-3.633a9 9 0 0 1 2.852 1.289 17.271 17.271 0 0 0-1.368-5.04 16.215 16.215 0 0 1 2.344-1.132.285.285 0 0 1 .117.078 21.389 21.389 0 0 1 1.172 3.36c.751-1.556 1.988-2.48 3.711-2.774a9.191 9.191 0 0 1 2.11-.195 7.883 7.883 0 0 1-1.016 4.14c3.356.05 5.492 1.69 6.406 4.922.199.758.355 1.513.469 2.266Z"
        opacity={0.992}
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M20 11h40v40H20z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export const Home = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    fill="none"
    {...props}
  >
    <Rect width={50} height={50} fill="#FAFF7E" rx={25} />
    <Path
      fill="#3C4731"
      fillRule="evenodd"
      d="M38.708 36.208v-12.94l.304.25a.833.833 0 1 0 1.06-1.286L25.904 10.565a.833.833 0 0 0-1.06 0L10.68 22.232a.833.833 0 0 0 1.06 1.286l.303-.25v12.94a4.167 4.167 0 0 0 4.166 4.167h5c.46 0 .834-.373.834-.833v-10c0-.46.373-.834.833-.834h5c.46 0 .833.373.833.834v10c0 .46.373.833.834.833h5a4.167 4.167 0 0 0 4.166-4.167Z"
      clipRule="evenodd"
    />
  </Svg>
)

export const Stick = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    fill="none"
    {...props}
  >
    <Rect width={50} height={50} fill="#3C4731" rx={25} />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M10 14.165c0-2.3 1.865-4.165 4.165-4.165h9.997c.221 0 .433.088.59.244l13.833 13.834a4.832 4.832 0 0 1 0 6.833l-7.674 7.674a4.832 4.832 0 0 1-6.833 0L10.244 24.75a.833.833 0 0 1-.244-.589v-9.997Zm8.33 2.5a1.666 1.666 0 1 0 0 3.332 1.666 1.666 0 0 0 0-3.332Zm3.333 1.666a3.332 3.332 0 1 0-6.665 0 3.332 3.332 0 0 0 6.665 0Z"
      clipRule="evenodd"
    />
  </Svg>
)

export const Account = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    fill="none"
    {...props}
  >
    <Rect width={50} height={50} fill="#3C4731" rx={25} />
    <Path
      fill="#fff"
      d="m30.771 26.764 6.481 2.946A4.688 4.688 0 0 1 40 33.977v1.336A4.688 4.688 0 0 1 35.312 40H14.689A4.688 4.688 0 0 1 10 35.312v-1.335a4.688 4.688 0 0 1 2.748-4.267l6.481-2.946a9.375 9.375 0 1 1 11.542 0Z"
    />
    <Path
      stroke="#3C4731"
      strokeLinecap="round"
      strokeWidth={2}
      d="M17 26c1.787 1.669 5.114 3 7.467 3 2.353 0 6.772-1.418 8.533-3"
    />
  </Svg>
)