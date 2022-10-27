const Spinner = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" style={{margin: '0 auto', background: 'none', display: 'block'}} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<rect x="17.5" y="30" width="15" height="40" fill="#93dbe9">
  <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="18;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.2s"></animate>
  <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="64;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.2s"></animate>
</rect>
<rect x="42.5" y="30" width="15" height="40" fill="#689cc5">
  <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="20.999999999999996;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.1s"></animate>
  <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="58.00000000000001;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.1s"></animate>
</rect>
<rect x="67.5" y="30" width="15" height="40" fill="#5e6fa3">
  <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="20.999999999999996;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>
  <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="58.00000000000001;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>
</rect>
</svg>
        // <svg xmlns="http://www.w3.org/2000/svg" style={{margin: '0 auto', background: 'none', display: 'block'}} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        //     <g transform="translate(80,50)">
        //     <g transform="rotate(0)">
        //     <circle cx="0" cy="0" r="7" fill="#1c4595" fillOpacity="1">
        //     <animateTransform attributeName="transform" type="scale" begin="-0.875s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
        //     <animate attributeName="fillOpacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.875s"></animate>
        //     </circle>
        //     </g>
        //     </g><g transform="translate(71.21320343559643,71.21320343559643)">
        //     <g transform="rotate(45)">
        //     <circle cx="0" cy="0" r="7" fill="#1c4595" fillOpacity="0.875">
        //     <animateTransform attributeName="transform" type="scale" begin="-0.75s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
        //     <animate attributeName="fillOpacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.75s"></animate>
        //     </circle>
        //     </g>
        //     </g><g transform="translate(50,80)">
        //     <g transform="rotate(90)">
        //     <circle cx="0" cy="0" r="7" fill="#1c4595" fillOpacity="0.75">
        //     <animateTransform attributeName="transform" type="scale" begin="-0.625s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
        //     <animate attributeName="fillOpacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.625s"></animate>
        //     </circle>
        //     </g>
        //     </g><g transform="translate(28.786796564403577,71.21320343559643)">
        //     <g transform="rotate(135)">
        //     <circle cx="0" cy="0" r="7" fill="#1c4595" fillOpacity="0.625">
        //     <animateTransform attributeName="transform" type="scale" begin="-0.5s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
        //     <animate attributeName="fillOpacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.5s"></animate>
        //     </circle>
        //     </g>
        //     </g><g transform="translate(20,50.00000000000001)">
        //     <g transform="rotate(180)">
        //     <circle cx="0" cy="0" r="7" fill="#1c4595" fillOpacity="0.5">
        //     <animateTransform attributeName="transform" type="scale" begin="-0.375s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
        //     <animate attributeName="fillOpacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.375s"></animate>
        //     </circle>
        //     </g>
        //     </g><g transform="translate(28.78679656440357,28.786796564403577)">
        //     <g transform="rotate(225)">
        //     <circle cx="0" cy="0" r="7" fill="#1c4595" fillOpacity="0.375">
        //     <animateTransform attributeName="transform" type="scale" begin="-0.25s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
        //     <animate attributeName="fillOpacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.25s"></animate>
        //     </circle>
        //     </g>
        //     </g><g transform="translate(49.99999999999999,20)">
        //     <g transform="rotate(270)">
        //     <circle cx="0" cy="0" r="7" fill="#1c4595" fillOpacity="0.25">
        //     <animateTransform attributeName="transform" type="scale" begin="-0.125s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
        //     <animate attributeName="fillOpacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.125s"></animate>
        //     </circle>
        //     </g>
        //     </g><g transform="translate(71.21320343559643,28.78679656440357)">
        //     <g transform="rotate(315)">
        //     <circle cx="0" cy="0" r="7" fill="#1c4595" fillOpacity="0.125">
        //     <animateTransform attributeName="transform" type="scale" begin="0s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
        //     <animate attributeName="fillOpacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="0s"></animate>
        //     </circle>
        //     </g>
        //     </g>
        // </svg>
    )
}

export default Spinner;