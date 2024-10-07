import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <div className="w-[140px]">
        <svg
          className="pablo"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 534.69 181.2"
        >
          <defs>
            <g id="Capa_2">
              <mask id="capa-dos-p">
                <path
                  className="capa-p"
                  id="capa-p"
                  d="M102.75,3.44l-3.21,3.02-3.21,4.97-8.38,14.71-21.13,38.57-15.19,29.61-14.71,28.05-11.3,21.91-5.36,9.35-6.72,11.01-8.18,11.98s-3.02,4.09-2.92,1.75c.02-.43-.59,.28-.58-.07,.03-1.5,.58-3.24,.58-3.24l2.92-8.08,6.82-16.07,6.72-14.28,7.69-13.77,8.38-13.46,9.74-14.01,5.45-7.25,17.73-19.73,14.61-13.05,17.14-12.86,14.51-9.06,13.34-7.21,8.86-3.8,5.26-1.17,3.99-.19,2.73,.97,1.27,2.05,.97,3.21v3.99l-.97,3.8-2.05,7.69-4.38,10.42-7.3,14.32-5.06,8.28-5.94,8.38-5.84,7.69-5.36,6.14-6.04,6.33-6.53,6.43-4.77,4.48-6.43,5.06-7.11,5.16-6.71,4.09-8.09,4.19-8.18,3.41-5.65,1.62-5.06,1.11-5.16,.58-5.45,.19-5.26-.39-2.63-.78-4.97-2.05-3.51-2.34-3.8-3.7-2.23-3.51-1.27-4.09-.68-4.48,.39-4.67,1.56-5.28,2.62-4.27,4.26-5.06,4.61-4.09,4.46-2.92,6.84-3.6,7.3-3.02,4.58-1.66,10.47-2.82,15.73-2.82,13.05-2.14,16.85-2.24,22.71-2.43,7.78-.58h5.36l5.06,.49,3.6,1.9"
                  fill="none"
                  stroke="#ffed00"
                  strokeMiterlimit="10"
                  strokeWidth="4.2"
                />
              </mask>
            </g>
          </defs>
          <g id="Capa_1">
            <path
              mask="url(#capa-dos-p)"
              id="p"
              d="M18.47,134.14c-.8-.98-1.39-1.79-1.79-2.44-.4-.64-.86-1.43-1.38-2.35-.52-.92-.98-2.02-1.38-3.31-.4-1.29-.72-2.61-.97-3.96-1.16-8.46,2.18-16.41,10.03-23.83,2.52-2.52,5.51-4.82,8.97-6.9,3.47-2.09,6.32-3.59,8.56-4.51,2.24-.92,4.89-1.9,7.96-2.94,3.07-1.04,4.63-1.56,4.69-1.56,.74-.92,1.67-1.99,2.81-3.22,1.14-1.23,1.96-2.16,2.48-2.81,.52-.64,1.26-1.73,2.21-3.27,.95-1.53,2.04-3.46,3.27-5.8,12.27-23.43,22.2-41.52,29.81-54.28,2.27-3.86,3.79-6.3,4.55-7.31,.77-1.01,1.43-1.52,1.98-1.52,.92,0,1.53,.37,1.84,1.1,.31,.74,.15,1.38-.46,1.93-.86,.68-3.99,5.81-9.38,15.41-5.4,9.6-10.61,19.04-15.64,28.34-5.03,9.29-7.54,14.05-7.54,14.26s.74-.37,2.21-1.75c1.47-1.38,3.82-3.46,7.04-6.26,3.22-2.79,6.9-5.81,11.04-9.06,4.14-3.25,9.38-6.88,15.73-10.9,6.35-4.02,12.86-7.74,19.55-11.18,8.34-4.23,14.72-6.35,19.14-6.35,1.53,0,2.59,.06,3.17,.18,.58,.12,1.21,.4,1.89,.83,.92,.74,1.75,1.72,2.48,2.94,.98,1.66,1.16,4.65,.55,8.97-.61,4.32-1.96,9.09-4.05,14.31-1.04,2.58-2.7,6.26-4.97,11.04-2.27,4.78-3.99,8.07-5.15,9.84l-1.2,2.12,5.61,.18c3.68,.12,6.04,.46,7.08,1.01,.8,.49,1.32,1.01,1.56,1.56,.24,.55,.21,1.01-.09,1.38-.37,.18-1.99,.09-4.88-.28-2.64-.31-5.28-.34-7.91-.09l-3.59,.37-3.86,5.8c-6.56,9.69-14.23,18.91-23,27.65-8.77,8.74-17.48,15.87-26.13,21.39-2.82,1.72-6.27,3.56-10.35,5.52-4.08,1.96-7.53,3.4-10.35,4.32-4.84,1.59-9.61,2.68-14.31,3.27-4.69,.58-8.72,.57-12.1-.05-2.21-.37-3.56-.64-4.05-.83-.24-.12-.54,.01-.87,.41-.34,.4-.81,1.18-1.43,2.35-3.86,7.18-8.23,14.6-13.11,22.26-4.88,7.67-8.11,12.14-9.71,13.43-.8,.74-1.44,1.13-1.93,1.2-.49,.06-1.07-.15-1.75-.64-.98-.8-1.2-2.32-.64-4.55,.55-2.24,2.18-6.67,4.88-13.29,1.66-4.23,3.47-8.48,5.43-12.74,1.96-4.26,3.7-7.88,5.2-10.86,1.5-2.98,2.25-4.49,2.25-4.55Zm-10.58,31.92c-.24,.55-.55,1.32-.92,2.3-1.59,3.92-2.3,5.92-2.12,5.98,.06,.06,.31-.18,.74-.74,.55-.8,1.78-2.64,3.68-5.52,2.82-4.17,5.66-8.65,8.51-13.43s5.72-9.78,8.6-15c.12,.06-1.41-.86-4.6-2.76-.24-.18-.4-.28-.46-.28-.49,.8-1.33,2.41-2.53,4.83-1.2,2.42-2.85,5.98-4.97,10.67-2.12,4.69-4.09,9.34-5.93,13.94ZM48.19,88.04c-.18-.43-3.53,.92-10.03,4.05-9.2,4.48-15.55,9.92-19.04,16.33-3.5,6.41-3.71,12.86-.64,19.37,.92,2.02,1.53,3.04,1.84,3.04,.12,0,.4-.4,.83-1.2,1.35-3.07,4.48-8.42,9.38-16.05,4.91-7.64,9.26-13.97,13.06-19,1.6-2.15,2.79-3.76,3.59-4.83,.8-1.07,1.14-1.64,1.01-1.7Zm-20.52,48.02c.18-.06,1.2-1.75,3.04-5.06,1.84-3.31,4-7.31,6.49-12.01s4.94-9.37,7.36-14.03c2.42-4.66,4.45-8.63,6.07-11.91,1.63-3.28,2.41-4.92,2.35-4.92-.24,0-2.12,2.38-5.61,7.13-3.5,4.75-6.47,8.88-8.92,12.37-3.68,5.52-7.22,11.16-10.63,16.93-3.4,5.76-4.92,8.77-4.55,9.02,.68,.55,1.52,1.13,2.53,1.75,1.01,.61,1.64,.86,1.89,.74Zm68.45-58.14c-8.04,1.1-16.15,2.39-24.33,3.86-8.19,1.47-12.5,2.42-12.93,2.85-.12,.12-3.22,5.95-9.29,17.48-3.31,6.44-6.62,12.82-9.94,19.14-3.31,6.32-5.53,10.58-6.67,12.79-1.13,2.21-1.7,3.37-1.7,3.5,0,.49,1.15,.84,3.45,1.06,2.3,.21,5.06,.24,8.28,.09,3.22-.15,5.97-.48,8.23-.97,3.99-.92,8.68-2.53,14.08-4.83,5.4-2.3,10.09-4.71,14.08-7.22,7.24-4.6,14.73-10.57,22.49-17.89,7.76-7.33,14.52-14.83,20.29-22.49,1.16-1.53,2.36-3.17,3.59-4.92,1.23-1.75,2.22-3.2,2.99-4.37,.77-1.16,1.12-1.78,1.06-1.84-.18-.18-4.43,.2-12.74,1.15-8.31,.95-15.29,1.83-20.93,2.62Zm-23.74-10.76c-3.25,2.94-5.57,5.18-6.95,6.72-1.38,1.53-2.53,3.07-3.45,4.6-.55,.92-.67,1.41-.37,1.47,.31,.06,2.67-.34,7.08-1.2,13.98-2.76,32.38-5.3,55.2-7.64,5.52-.49,8.52-.98,9.02-1.47,.74-1.04,2.16-3.57,4.28-7.59,2.12-4.02,3.76-7.41,4.92-10.17,2.88-6.62,4.89-12.36,6.03-17.2,1.13-4.84,1.24-8.13,.32-9.84-1.72-3.74-9.38-2.21-23,4.6-19.01,9.81-36.71,22.39-53.08,37.72Z"
              fill="#ffffff"
            />
          </g>
          <defs>
            <g id="Capa_2">
              <mask id="capa-dos-ab">
                <polyline
                  className="capa-ab"
                  id="capa-ab"
                  points="161.46 70.77 158.8 70.42 156.2 70.42 154.35 70.59 152.11 71.63 150.59 72.89 148.89 74.8 147.91 76.37 147.15 78.11 146.88 80.04 147.24 81.61 148.6 81.74 149.44 81.62 150.78 81.53 152.1 81.09 156.72 78.64 163.23 74.79 163.44 76.39 163.44 78.4 164.28 80.36 165.53 81.47 167.26 81.91 169.33 81.55 171.35 80.54 173.19 79.58 176.64 77.63 178.76 75.99 180.88 74.23 184.53 70.74 186.27 68.44 188.47 64.89 190 61.97 192.46 57.59 194.37 53.5 197.56 46.68 200.7 39.86 202.68 34.65 203.96 31.15 205.09 28.61 205.59 28.48 205.93 28.63 205.93 29.09 205.49 30.1 203.64 35.05 200.2 42.58 195.96 51.29 191.66 60.73 187.82 68.46 183.56 78.63 178.88 87.34 177.08 90.05 176.91 90.39 177.35 90.7 181.23 83.88 183.43 79.85 189.46 74.08 193.28 71.02 196.59 68.88 198.73 67.97 200.1 68.02 201 69.34 200.81 70.95 199.95 73.24 198.17 76.68 196.78 79.12 194.49 81.64 191.45 82.83 188.6 82.92 187.02 82.29 185.6 80.86 187.09 79.31 190.25 75.38"
                  fill="none"
                  stroke="#ffed00"
                  strokeMiterlimit="10"
                  strokeWidth="4.2"
                />
              </mask>
            </g>
          </defs>
          <g id="Capa_1">
            <path
              mask="url(#capa-dos-ab)"
              id="ab"
              d="M203.3,28.52c.8-1.16,1.67-1.66,2.62-1.47,.95,.18,1.43,.92,1.43,2.21,0,.8-.46,2.27-1.38,4.42-.92,2.15-2.82,6.23-5.7,12.24-8.1,17.42-12.02,26.25-11.78,26.5,.06,.06,.24-.06,.55-.37,3.92-3.07,6.82-4.91,8.69-5.52,1.87-.61,3.3-.18,4.28,1.29,.98,1.47,.6,4.03-1.15,7.68-1.75,3.65-3.85,6.27-6.3,7.87-1.53,.86-2.94,1.29-4.23,1.29-2.64,0-4.36-.68-5.15-2.02-.25-.31-.46-.43-.64-.37-.18,.06-.49,.37-.92,.92-1.29,1.78-2.24,3.28-2.85,4.51-1.29,2.39-2.22,3.8-2.81,4.23-.58,.43-1.24,.31-1.98-.37-.43-.49-.52-1.09-.28-1.79,.24-.71,.95-2.1,2.12-4.19,.8-1.47,1.87-3.6,3.22-6.39,1.35-2.79,2.02-4.34,2.02-4.65,0-.18-.64,.37-1.93,1.66-2.33,2.09-4.77,3.8-7.31,5.15-2.55,1.35-4.71,2.02-6.49,2.02-1.6,0-2.81-.32-3.63-.97-.83-.64-1.55-1.85-2.16-3.63-.25-.55-.52-.77-.83-.64-.25,.12-.86,.52-1.84,1.2-4.29,2.94-7.54,4.42-9.75,4.42-2.15-.06-3.46-.81-3.96-2.25-.49-1.44-.12-3.39,1.1-5.84,1.41-2.76,3.63-4.83,6.67-6.21,3.04-1.38,5.38-1.39,7.04-.05,.8,.68,1.01,1.35,.64,2.02-.25,.37-.54,.6-.87,.69-.34,.09-1.06,.14-2.16,.14-1.41,0-2.68,.25-3.82,.74-1.14,.49-2.01,1.1-2.62,1.84-.61,.74-1.17,1.5-1.66,2.3-.49,.8-.74,1.47-.74,2.02v1.01c.25,.25,.84,.17,1.79-.23,.95-.4,2.05-.95,3.31-1.66,1.26-.7,2.5-1.44,3.73-2.21,1.23-.77,2.33-1.44,3.31-2.02,.98-.58,1.59-.87,1.84-.87,1.16,0,1.93,1.2,2.3,3.59,.24,1.41,.49,2.33,.74,2.76,.98,1.23,3.5,.63,7.54-1.79,4.05-2.42,7.42-5.35,10.12-8.79,3.07-3.86,6.01-8.8,8.83-14.81,2.82-6.01,5.2-11.53,7.13-16.56,1.93-5.03,3.23-8.03,3.91-9.02Zm-4.42,41.22c-.37,0-1.47,.69-3.31,2.07-1.84,1.38-3.4,2.65-4.69,3.82-1.78,1.72-2.67,2.94-2.67,3.68s.12,1.26,.37,1.56c.25,.31,.8,.41,1.66,.32,.86-.09,1.6-.29,2.21-.6,.92-.43,1.9-1.29,2.94-2.58,1.04-1.29,1.84-2.54,2.39-3.77,1.23-3,1.59-4.51,1.1-4.51Z"
              fill="#ffffff"
            />
          </g>
          <defs>
            <g id="Capa_2">
              <mask id="capa-dos-l">
                <polyline
                  className="capa-l"
                  id="capa-l"
                  points="233.59 13.94 229.33 20.23 224.88 28.99 220.57 38.41 215.16 50.39 209.9 62.96 205.96 74.79 205.96 79.61 207.34 81.29 209.76 82.17 212.75 81.73 215.75 80.41 219.78 77.86 228.6 71.21"
                  fill="none"
                  stroke="#ffed00"
                  strokeMiterlimit="10"
                  strokeWidth="4.2"
                />
              </mask>
            </g>
          </defs>
          <g id="Capa_1">
            <path
              mask="url(#capa-dos-l)"
              id="l"
              d="M233.11,15.09c.8,.68,.61,1.84-.55,3.5-1.35,1.96-4,7.1-7.96,15.41-3.96,8.31-7.76,16.96-11.41,25.94-3.65,8.99-5.47,14.74-5.47,17.25,0,1.66,.58,2.67,1.75,3.04,1.17,.37,2.73,.06,4.69-.92,1.16-.55,2.88-1.56,5.15-3.04,2.27-1.47,4.08-2.7,5.43-3.68,1.53-1.1,2.48-1.26,2.85-.46,.49,1.04-.77,2.79-3.77,5.24-.92,.74-1.96,1.5-3.13,2.3-3.13,2.02-5.69,3.34-7.68,3.96-1.99,.61-3.76,.58-5.29-.09-1.29-.74-2.15-1.55-2.58-2.44-.43-.89-.61-2.38-.55-4.46,0-1.66,.11-3.02,.32-4.09,.21-1.07,.69-2.71,1.43-4.92,2.21-6.56,6.38-16.48,12.51-29.76,6.13-13.28,10-20.81,11.59-22.59,.92-.92,1.81-.98,2.67-.18Z"
              fill="#ffffff"
            />
          </g>
          <defs>
            <g id="Capa_2">
              <mask id="capa-dos-o">
                <polyline
                  className="capa-o"
                  id="capa-o"
                  points="231.55 70.04 228.23 72.02 225.61 73.95 223.67 76.08 221.84 79.2 221.57 80.71 222.26 81.82 223.54 82.09 225.48 81.17 227.64 79.88 230.17 77.95 231.91 75.85 232.04 73.75 230.95 71.82 229.05 72.87 229.18 75.16 230.07 76.88 232.04 77.72 235.25 77.59 239.06 76.88 243.35 75.82 247.03 74.44 250.11 73.06 251.82 72.31"
                  fill="none"
                  stroke="#ffed00"
                  strokeMiterlimit="10"
                  strokeWidth="4.2"
                />
              </mask>
            </g>
          </defs>
          <g id="Capa_1">
            <path
              mask="url(#capa-dos-o)"
              id="o"
              d="M249.76,71.67c.43,0,.78,.25,1.06,.74,.28,.49,.32,.95,.14,1.38-.12,.61-.72,1.18-1.79,1.7-1.07,.52-3.02,1.27-5.84,2.25-2.45,.8-4.66,1.26-6.62,1.38-1.96,.12-3.42,.22-4.37,.28-.95,.06-1.79,.43-2.53,1.1-.86,.74-2.01,1.46-3.45,2.16-1.44,.7-2.56,1.06-3.36,1.06s-1.53-.37-2.21-1.1c-.92-.98-1.15-2.16-.69-3.54,.46-1.38,1.61-3.2,3.45-5.47,1.17-1.23,2.35-2.16,3.54-2.81s2.19-.87,2.99-.69c.8,.12,1.58,.74,2.35,1.84,.77,1.1,1.06,1.96,.87,2.58-.18,.68-.06,1.1,.37,1.29,.37,.06,1.23-.01,2.58-.23,1.35-.21,2.9-.55,4.65-1.01s3.3-.97,4.65-1.52c2.7-.92,4.11-1.38,4.23-1.38Zm-23.18,6.9c.55-.43,.93-.8,1.15-1.1,.21-.31,.32-.52,.32-.64s-.03-.34-.09-.64c-.06-.31-.09-.58-.09-.83,0-1.1-1.01-.4-3.04,2.12-.86,1.1-1.29,1.75-1.29,1.93,0,.86,1.01,.58,3.04-.83Z"
              fill="#ffffff"
            />
          </g>
          <defs>
            <g id="Capa_2">
              <mask id="capa-dos-h">
                <polyline
                  className="capa-h"
                  id="capa-h"
                  points="304.07 1.03 295.7 22.12 274.02 76.33 261.13 107.07 248.06 134.65 240.12 147.88 233.81 154.97 227.83 158.58 222.36 160.69 217.41 159.58 212.03 155.48 208.02 148.05 205.55 137.46 204.86 126.36 204.86 119.7 206.06 112.36 208.79 105.28 212.38 101.52 216.99 98.62 223.65 96.57 230.13 95.76 243.2 94.52 256 93.92 262.66 93.66 270.94 92.64 282.38 90.85 294.17 88.37 307.91 84.53 319.18 79.92 334.29 71.47 340.36 66.6 350.69 57.21 359.05 47.39 367.34 36.29 376.3 23.65 381.68 14.43 385.44 6.32 386.37 3.93 385.44 2.31 383.9 2.57 381.17 5.73 377.75 9.65 370.15 20.07 362.04 33.05 350.43 53.2 337.45 79.32 325.67 105.53 319.1 121.41 308.25 152.15 308.17 154.11 308.85 153.94 313.46 144.81 319.27 130.29 323.2 121.67 328.4 112.02 332.84 103.23 338.14 95.03 344.28 86.24 350.6 78.13 354.27 74.2 356.66 72.15"
                  fill="none"
                  stroke="#ffed00"
                  strokeMiterlimit="10"
                  strokeWidth="4.2"
                />
              </mask>
            </g>
          </defs>
          <g id="Capa_1">
            <path
              mask="url(#capa-dos-h)"
              id="h"
              d="M303.58,2.13c.74,.25,1.04,.84,.92,1.79-.12,.95-.74,2.71-1.84,5.29-4.6,11.59-9.22,23.17-13.85,34.73-4.63,11.56-8.08,20.16-10.35,25.81-2.27,5.64-3.8,9.51-4.6,11.59-2.39,6.32-3.56,9.51-3.5,9.57,.18,.06,2.65-.31,7.41-1.1,4.75-.8,8.82-1.53,12.19-2.21,11.1-2.39,20.58-5.4,28.43-9.02,7.85-3.62,15.24-8.4,22.17-14.35l4.6-4.05,3.5-6.81c6.07-11.22,11.94-21.25,17.62-30.08,5.67-8.83,10.26-15.06,13.75-18.68,1.04-1.1,1.84-1.9,2.39-2.39,.55-.49,1.01-.81,1.38-.97,.37-.15,.77-.23,1.2-.23,3.56,0,3.68,3.44,.37,10.3-3.01,6.26-7.59,13.68-13.75,22.26-6.16,8.59-12.74,16.71-19.73,24.38-1.23,1.35-2.18,2.48-2.85,3.4-.68,.92-1.33,1.93-1.98,3.04-.64,1.1-1.58,2.85-2.81,5.24-3.74,7.42-8.92,18.77-15.55,34.04-6.26,14.11-9.02,20.76-8.28,19.96,.18-.25,.95-1.72,2.3-4.42,2.58-5.64,6.07-12.01,10.49-19.09s8.71-13.36,12.88-18.81c3.13-4.05,5.26-6.58,6.39-7.59,1.13-1.01,2.07-1.18,2.81-.51,.92,.98,.55,2.21-1.1,3.68-1.78,1.72-4.8,5.55-9.06,11.5-4.26,5.95-7.9,11.38-10.9,16.28-2.09,3.43-5.24,9.51-9.48,18.22-4.23,8.71-7.21,15.27-8.92,19.69-2.33,5.83-3.93,9.52-4.78,11.09-.86,1.56-1.75,2.35-2.67,2.35-.74,0-1.24-.18-1.52-.55-.28-.37-.35-1.12-.23-2.25,.12-1.14,.43-2.58,.92-4.32,.49-1.75,1.23-4.16,2.21-7.22,1.16-3.31,2.45-6.89,3.86-10.72,1.41-3.83,2.84-7.56,4.28-11.18,1.44-3.62,2.96-7.28,4.55-10.99,1.59-3.71,3.11-7.21,4.55-10.49,1.44-3.28,2.84-6.44,4.19-9.48,1.35-3.04,2.58-5.75,3.68-8.14,1.1-2.39,2.05-4.48,2.85-6.26,.8-1.78,1.38-3.13,1.75-4.05,.37-.92,.49-1.32,.37-1.2-.61,.37-1.72,1.2-3.31,2.48-14.78,10.98-35.48,18.4-62.1,22.26-4.05,.61-6.16,1.01-6.35,1.2-.25,.24-1.13,2.21-2.67,5.89-3.74,9.02-7.73,17.82-11.96,26.4-4.23,8.59-7.79,15.12-10.67,19.6-3.74,5.58-7.9,9.66-12.47,12.24-4.57,2.58-8.79,3.22-12.65,1.93-8.1-2.88-12.94-13.03-14.54-30.45-.43-4.97-.37-9.51,.18-13.62,.55-4.11,1.58-7.67,3.08-10.67,1.5-3.01,3.42-5.37,5.75-7.08,3.01-2.27,6.85-3.85,11.55-4.74,4.69-.89,12.93-1.61,24.7-2.16,1.96-.12,4.36-.26,7.18-.41,2.82-.15,4.92-.28,6.3-.37,1.38-.09,2.19-.17,2.44-.23,.68-.06,1.2-.35,1.56-.87,.37-.52,1.04-1.95,2.02-4.28,1.6-3.74,6.32-15.49,14.17-35.24,7.85-19.75,12.79-32.08,14.81-36.98,2.45-6.19,3.71-9.35,3.77-9.48,.43-1.16,.86-1.95,1.29-2.35,.43-.4,.98-.44,1.66-.14Zm-60.9,138.55c1.29-2.15,3.54-6.41,6.76-12.79,3.22-6.38,5.6-11.26,7.13-14.63,4.97-11.22,7.42-17.02,7.36-17.39,0-.18-2.42-.15-7.27,.09-2.76,.12-5.61,.24-8.56,.37-11.53,.49-19.7,1.24-24.52,2.25-4.81,1.01-8.45,2.77-10.9,5.29-2.02,1.96-3.46,4.34-4.32,7.13-.86,2.79-1.38,6.76-1.56,11.91-.37,11.04,1.14,20.15,4.51,27.32,1.72,3.86,4.02,6.39,6.9,7.59,2.88,1.2,6.07,.93,9.57-.78,5.03-2.52,10-7.97,14.9-16.38ZM382.88,7.01c.18-.55-.15-.43-1.01,.37-1.9,1.78-4.23,4.63-6.99,8.56-2.7,3.93-6.66,10.17-11.87,18.72-5.21,8.56-7.85,13.14-7.91,13.75,0,.55,2.61-2.54,7.82-9.29,.86-1.16,1.66-2.24,2.39-3.22,3.74-4.97,7.47-10.5,11.18-16.61,3.71-6.1,5.84-10.2,6.39-12.28Z"
              fill="#ffffff"
            />
          </g>
          <defs>
            <g id="Capa_2">
              <mask id="capa-dos-e">
                <polyline
                  className="capa-e"
                  id="capa-e"
                  points="348.9 83.47 353.55 80.89 356.38 78.49 358.87 76.29 359.64 74.57 358.93 72.97 356.38 72.97 353.55 74.93 350.92 76.94 348.9 79.2 347.54 81.81 347.24 83.47 348.13 85.49 350.06 86.2 352.28 86.67 355.37 86.14 359.29 84.72 362.61 83.06 366.47 80.33 369.85 77.06 371.92 74.04 373.29 71.6 373.82 70.48 374.65 66.56 374.36 64.42 372.4 63.18 370.26 63.18 367.47 63.83 365.22 65.06 363.38 66.56 363.68 67.57 366.17 68.1 369.14 68.16 371.92 68.34 377.32 68.52 381.48 68.93 383.79 70.06 383.79 71.25 383.49 72.85 382.19 76.35 378.69 81.87 375.31 87.51 372.64 92.79 371.86 94.74 371.09 96.7"
                  fill="none"
                  stroke="#ffed00"
                  strokeMiterlimit="10"
                  strokeWidth="4.2"
                />
              </mask>
            </g>
          </defs>
          <g id="Capa_1">
            <path
              mask="url(#capa-dos-e)"
              id="er"
              d="M372.49,95.88c-.12,.12-.49,.06-1.1-.18-.92-.49-.97-1.78-.14-3.86,.83-2.09,2.75-5.58,5.75-10.49,1.47-2.33,2.53-4.05,3.17-5.15,.64-1.1,1.1-1.98,1.38-2.62,.28-.64,.41-1.18,.41-1.61,0-.55-.15-.89-.46-1.01-.31-.12-1.23-.24-2.76-.37-.37-.06-.66-.11-.87-.14-.21-.03-.52-.06-.92-.09-.4-.03-.78-.08-1.15-.14l-1.56,3.4c-1.35,2.64-3.36,5.17-6.03,7.59-2.67,2.42-5.44,4.19-8.33,5.29-3.37,1.41-5.98,2.12-7.82,2.12-1.59,0-3.08-.63-4.46-1.89-1.38-1.26-2.07-2.62-2.07-4.09s.69-2.99,2.07-4.74,3.07-3.22,5.06-4.42c1.99-1.2,3.76-1.79,5.29-1.79,1.53-.12,2.54,.37,3.04,1.47,.49,1.1,.31,2.36-.55,3.77-.49,.86-1.53,1.95-3.13,3.27-1.6,1.32-3.16,2.41-4.69,3.27l-2.12,1.29h2.02c.98,0,2.41-.32,4.28-.97s3.54-1.4,5.01-2.25c1.47-.8,3.13-2.08,4.97-3.86,1.84-1.78,3.13-3.31,3.86-4.6,.86-1.47,1.29-2.3,1.29-2.48,0-.12-1.17-.31-3.5-.55-2.7-.12-4.62-.55-5.75-1.29-1.14-.74-1.49-1.72-1.06-2.94,.55-1.41,2.58-2.64,6.07-3.68,3-.98,5.37-.77,7.08,.64,.8,.49,1.32,1.32,1.56,2.48,.06,.74,.24,1.2,.55,1.38,.31,.18,1.13,.31,2.48,.37,1.23,.12,2.28,.32,3.17,.6,.89,.28,1.56,.64,2.02,1.1s.81,.94,1.06,1.43c.24,.49,.28,1.14,.09,1.93-.18,.8-.38,1.53-.6,2.21-.22,.68-.63,1.55-1.24,2.62-.61,1.07-1.17,2.02-1.66,2.85-.49,.83-1.17,1.89-2.02,3.17-1.23,2.02-2.33,3.86-3.31,5.52-.98,1.66-1.7,2.9-2.16,3.73s-.86,1.53-1.2,2.12c-.34,.58-.57,.98-.69,1.2-.12,.21-.25,.35-.37,.41Zm-15.46-20.52c-.61,0-1.79,.63-3.54,1.89-1.75,1.26-2.81,2.22-3.17,2.9-.31,.55-.34,.8-.09,.74,.31-.06,1.29-.67,2.94-1.84,2.76-2.21,4.05-3.43,3.86-3.68Zm10.4-8.83c.49,.18,1.5,.28,3.04,.28,1.04,0,1.69-.03,1.93-.09,.24-.06,.31-.31,.18-.74,0-.24-.03-.43-.09-.55-.06-.12-.2-.21-.41-.28-.21-.06-.57-.09-1.06-.09-1.23,0-2.24,.18-3.04,.55-.61,.31-.92,.49-.92,.55s.12,.18,.37,.37Z"
              fill="#ffffff"
            />
          </g>
          <defs>
            <g id="Capa_2">
              <mask id="capa-dos-n">
                <polyline
                  className="capa-n"
                  id="capa-n"
                  points="393.52 70.89 391.44 76.17 389.9 80.03 388.83 82.17 389.19 82.17 392.63 78.72 395.66 76.11 399.22 74.81 401.41 74.69 402.72 75.7 403.43 76.88 404.91 78.49 406.4 79.02 408.3 78.55 410.49 77.83 412.86 76.53 415.3 75.28 417.14 74.21 419.45 72.61"
                  fill="none"
                  stroke="#ffed00"
                  strokeMiterlimit="10"
                  strokeWidth="4.2"
                />
              </mask>
            </g>
          </defs>
          <g id="Capa_1">
            <path
              mask="url(#capa-dos-n)"
              id="n"
              d="M412.5,74.81c3.74-1.84,5.76-2.42,6.07-1.75,.06,.12,.09,.28,.09,.46,0,1.35-2.06,3.07-6.16,5.15-1.53,.74-2.87,1.27-4,1.61-1.14,.34-2.04,.46-2.71,.37-.68-.09-1.26-.28-1.75-.55-.49-.28-.89-.61-1.2-1.01-.31-.4-.57-.8-.78-1.2-.22-.4-.48-.72-.78-.97-.31-.24-.64-.37-1.01-.37-.98,0-2.29,.46-3.91,1.38-1.63,.92-3.05,2.06-4.28,3.4-1.23,1.35-2.08,2.13-2.58,2.35-.49,.21-.98,.08-1.47-.41-.37-.43-.46-1.07-.28-1.93,.18-.86,.77-2.39,1.75-4.6,.8-2.08,1.38-3.42,1.75-4,.37-.58,.89-.87,1.56-.87,.49,0,.81,.12,.97,.37,.15,.25,.21,.61,.18,1.1-.03,.49-.02,1.07,.05,1.75l1.93-1.01c4.35-2.08,7.39-1.56,9.11,1.56,.49,1.1,1.1,1.61,1.84,1.52,.74-.09,2.61-.87,5.61-2.35Z"
              fill="#ffffff"
            />
          </g>
          <defs>
            <g id="Capa_2">
              <mask id="capa-dos-an">
                <polyline
                  className="capa-an"
                  id="capa-an"
                  points="423.6 72.02 421.74 70.54 420.4 71.28 416.64 74.39 414.35 77.17 413.22 79.55 413.87 80.39 415.77 79.91 417.91 78.37 420.87 76.29 423.6 73.8 424.32 73.15 424.02 76.23 423.54 78.55 423.9 80.39 425.44 81.22 427.4 80.39 429.42 78.96 432.21 76.88 435.35 74.63 439.62 71.19 436.48 79.44 436.42 80.21 437.84 79.14 440.04 76.71 442.23 75.34 444.31 74.27 446.57 73.5 447.99 74.04 449.06 75.34 450.42 76.77 452.2 77.83 454.22 77.89 456.59 77.72 459.09 77.17 461.52 75.91 464.31 74.1 466.27 72.49"
                  fill="none"
                  stroke="#ffed00"
                  strokeMiterlimit="10"
                  strokeWidth="4.2"
                />
              </mask>
            </g>
          </defs>
          <g id="Capa_1">
            <path
              mask="url(#capa-dos-an)"
              id="an"
              d="M440.01,79.5c-1.78,1.47-2.91,2.21-3.4,2.21-1.47,0-2.12-.98-1.93-2.94l.37-1.47-2.67,1.93c-2.58,1.9-4.51,3.05-5.8,3.45-1.29,.4-2.36,.23-3.22-.51-.31-.31-.57-.61-.78-.92-.22-.31-.38-.64-.51-1.01-.12-.37-.22-.66-.28-.87-.06-.21-.12-.72-.18-1.52-.12,.06-.52,.35-1.2,.87-.68,.52-1.38,1.03-2.12,1.52-.74,.49-1.52,.95-2.35,1.38s-1.61,.61-2.35,.55c-.74-.06-1.32-.43-1.75-1.1-.49-.67-.6-1.46-.32-2.35,.28-.89,.97-2.07,2.07-3.54,.86-1.23,2.13-2.51,3.82-3.86,1.69-1.35,2.96-2.12,3.82-2.3,.43-.12,.9-.11,1.43,.05,.52,.15,.97,.41,1.33,.78,.37,.37,.58,.74,.64,1.1,0,.55,.21,1.1,.64,1.66,.25,.31,.37,.78,.37,1.43s-.18,1.89-.55,3.73c-.18,.92-.12,1.38,.18,1.38,.74,0,3.16-1.55,7.27-4.65,4.11-3.1,6.29-4.71,6.53-4.83,.49-.12,1.01,.03,1.56,.46,.49,.31,.74,.69,.74,1.15s-.18,1.12-.55,1.98c-.12,.31-.06,.43,.18,.37,.18,0,.58-.15,1.2-.46,3.31-1.53,5.61-1.62,6.9-.28,1.66,1.72,2.68,2.68,3.08,2.9,.4,.22,1.33,.26,2.81,.14,1.59,0,3.65-.58,6.16-1.75,1.59-.8,2.59-1.24,2.99-1.33,.4-.09,.75,.05,1.06,.41,.43,.37,.63,.66,.6,.87-.03,.22-.29,.57-.78,1.06-.37,.61-.92,1.2-1.66,1.75-.74,.55-1.58,1.06-2.53,1.52-.95,.46-1.95,.81-2.99,1.06-1.1,.25-2.13,.38-3.08,.41-.95,.03-1.78-.05-2.48-.23-.71-.18-1.35-.41-1.93-.69-.58-.28-1.07-.61-1.47-1.01-.4-.4-.75-.77-1.06-1.1-.31-.34-.57-.64-.78-.92-.22-.28-.38-.47-.51-.6-.06,.06-.26,.15-.6,.28-.34,.12-.68,.26-1.01,.41-.34,.15-.77,.37-1.29,.64-.52,.28-1.09,.66-1.7,1.15-.61,.49-1.26,1.04-1.93,1.66Zm-23.18-2.67l-.09,.09c-.12,.25-.12,.31,0,.18,.12-.06,.52-.34,1.2-.83,.8-.61,1.47-1.13,2.02-1.56,1.35-1.23,1.93-1.84,1.75-1.84-.12,0-.43,.17-.92,.51-.49,.34-1.01,.74-1.56,1.2-.55,.46-1.06,.91-1.52,1.33-.46,.43-.75,.74-.87,.92Z"
              fill="#ffffff"
            />
          </g>
          <defs>
            <g id="Capa_2">
              <mask id="capa-dos-de">
                <polyline
                  className="capa-de"
                  id="capa-de"
                  points="470.06 72.55 468.16 72.14 466.62 73.09 464.72 74.63 462.65 76.65 460.92 78.73 459.38 80.92 459.38 82.76 460.81 83.06 462.88 82.7 465.13 81.16 466.98 79.85 468.71 77.6 470.3 74.99 471.66 71.6 472.55 70 474.45 66.41 477.48 60.98 480.45 55.58 483.83 49.95 487.69 44.67 488.75 43.48 489.58 43.48 489.58 44.13 486.5 48.64 482.76 54.99 478.13 63.27 474.48 69.88 469.29 78.73 467.69 83.65 467.45 86.02 468.1 88.1 469.71 88.93 471.31 88.34 473.5 87.45 476 86.32 478.49 84.66 482.11 82.05 484.96 79.85 486.44 78.49 487.69 76.94 488.99 75.34 490 73.8 490 72.79 489.23 71.78 487.69 71.78 486.08 72.38 484.66 73.5 483.47 74.81 482.34 76.39 481.34 78.01 480.84 79.97 480.33 81.81 480.56 84.42 482.17 85.07 483.65 85.49 485.9 85.07 487.69 84.36 489.64 83.41 492.31 81.93 495.99 79.44 505.66 71.96"
                  fill="none"
                  stroke="#ffed00"
                  strokeMiterlimit="10"
                  strokeWidth="4.2"
                />
              </mask>
            </g>
          </defs>
          <g id="Capa_1">
            <path
              mask="url(#capa-dos-de)"
              id="de"
              d="M465.96,83.18c-.49,.31-1.04,.61-1.66,.92-.92,.55-1.99,.81-3.22,.78-1.23-.03-2.21-.35-2.94-.97-1.04-1.35-.74-3.28,.92-5.8,.92-1.41,2.06-2.74,3.4-4,1.35-1.26,2.67-2.22,3.96-2.9,1.29-.67,2.3-.92,3.04-.74,.49,.12,.86,.02,1.1-.32,.24-.34,.77-1.24,1.56-2.71,1.9-3.62,3.92-7.21,6.07-10.76,1.84-3.13,3.42-5.69,4.74-7.68,1.32-1.99,2.47-3.54,3.45-4.65,.98-1.1,1.79-1.73,2.44-1.89,.64-.15,1.21-.01,1.7,.41,.43,.8,.49,1.6,.18,2.39-.31,.8-1.38,2.73-3.22,5.8-.8,1.29-1.46,2.36-1.98,3.22-.52,.86-1.26,2.12-2.21,3.77-.95,1.66-1.92,3.31-2.9,4.97-1.72,3.13-3.39,6.03-5.01,8.69-1.63,2.67-2.73,4.48-3.31,5.43-.58,.95-1.12,2.04-1.61,3.27-.49,1.23-.89,2.7-1.2,4.42-.25,1.47,.09,2.18,1.01,2.12,.92-.06,2.58-.83,4.97-2.3,1.35-.8,2.21-1.38,2.58-1.75,.37-.37,.58-.92,.64-1.66,.31-1.9,1.18-3.88,2.62-5.93,1.44-2.05,3.04-3.54,4.78-4.46,1.75-.92,3.42-.86,5.01,.18,.74,.55,1.01,1.32,.83,2.3-.25,1.96-2.3,4.78-6.16,8.46-1.29,1.23-1.75,1.84-1.38,1.84h.37c2.7-.74,6.87-3.13,12.51-7.18,3.68-2.64,5.89-3.83,6.62-3.59,.24,.25,.4,.52,.46,.83,.12,.55-.71,1.67-2.48,3.36-1.78,1.69-3.9,3.39-6.35,5.11-2.45,1.72-5.05,3.11-7.77,4.19-2.73,1.07-4.86,1.27-6.39,.6-.68-.37-1.21-.52-1.61-.46-.4,.06-1.15,.46-2.25,1.2-2.58,1.47-4.66,2.35-6.26,2.62-1.6,.28-2.88-.02-3.86-.87-.55-.43-.89-.84-1.01-1.24-.12-.4-.18-1.18-.18-2.35v-2.67Zm2.76-8.83h-.14s-.18,.08-.46,.23c-.28,.15-.48,.26-.6,.32-.43,.31-1.13,.91-2.12,1.79-.98,.89-1.87,1.78-2.67,2.67-.8,.89-1.2,1.43-1.2,1.61,0,.49,.95,0,2.85-1.47,.49-.31,.92-.64,1.29-1.01,.8-.61,1.5-1.35,2.12-2.21,.61-.86,.92-1.5,.92-1.93Zm14.35,4.32c0,.18,.41-.09,1.24-.83s1.62-1.53,2.39-2.39c.77-.86,1.09-1.32,.97-1.38-.12-.12-.55,.15-1.29,.83-.74,.68-1.46,1.41-2.16,2.21-.71,.8-1.09,1.32-1.15,1.56Z"
              fill="#ffffff"
            />
          </g>
          <defs>
            <g id="Capa_2">
              <mask id="capa-dos-z">
                <polyline
                  className="capa-z"
                  id="capa-z"
                  points="501.45 72.98 504.35 74.23 506.01 74.82 507.44 75.89 508.15 77.31 507.32 79.39 506.01 80.99 504.8 82.35 503.88 83.66 505.9 83.19 507.85 83.19 509.1 83.66 510.17 84.25 511.18 85.2 511.53 86.21 511.53 86.98 511.53 88.29 511.53 89.24 511.06 90.36 509.51 93.21 507.02 96.36 504.18 99.92 502.17 102.17 499.01 104.84 496.17 106.92 494.03 108.4 492.72 108.05 492.72 106.44 493.32 104.31 494.82 101.88 497 98.43 499.37 95.53 501.86 92.98 503.94 91.14 506.67 89.3 509.51 87.1 513.67 84.43 515.75 83.24 518.89 81.52 522.81 79.33 527.32 77.01 531.17 75.18 534.38 73.69"
                  fill="none"
                  stroke="#ffed00"
                  strokeMiterlimit="10"
                  strokeWidth="4.2"
                />
              </mask>
            </g>
          </defs>
          <g id="Capa_1">
            <path
              mask="url(#capa-dos-z)"
              id="z"
              d="M531.57,73.68c.67,.18,1.12,.46,1.33,.83,.21,.37,.14,.77-.23,1.2-.43,.55-2.91,1.99-7.45,4.32-3.07,1.6-5.34,2.79-6.81,3.59-1.47,.8-2.61,1.53-3.4,2.21-.8,.67-1.26,1.13-1.38,1.38-.12,.24-.25,.74-.37,1.47-.74,2.94-3.01,6.64-6.81,11.09-3.8,4.45-7.39,7.65-10.76,9.61-1.04,.61-1.82,.93-2.35,.97-.52,.03-1.09-.17-1.7-.6-1.04-.68-1.24-2.15-.6-4.42,.64-2.27,2.01-4.78,4.09-7.54,2.58-3.44,5.7-6.53,9.38-9.29,.61-.37,1.21-.77,1.79-1.2,.58-.43,1.03-.78,1.33-1.06,.31-.28,.46-.45,.46-.51,0-.31-.77-.46-2.3-.46-1.96,.24-3.13-.02-3.5-.78-.37-.77,.09-1.98,1.38-3.63,.98-1.04,1.64-1.87,1.98-2.48,.34-.61,.38-1.07,.14-1.38-.25-.31-.8-.58-1.66-.83-1.23-.37-1.93-.97-2.12-1.79-.18-.83,.31-1.36,1.47-1.61,1.59-.37,3.19,.22,4.78,1.75,.8,.86,1.24,1.64,1.33,2.35,.09,.71-.17,1.7-.78,2.99l-.92,1.56,1.2,.37c.55,.12,1.06,.31,1.52,.55,.46,.25,.75,.41,.87,.51,.12,.09,.34,.12,.64,.09,.31-.03,.67-.15,1.1-.37,.43-.21,1.13-.6,2.12-1.15,2.7-1.66,5.73-3.31,9.11-4.97,3.86-2.02,6.22-2.94,7.08-2.76Zm-28.8,25.48c1.16-1.29,2.59-3.13,4.28-5.52,1.69-2.39,2.44-3.68,2.25-3.86-.37,0-1.53,.83-3.5,2.48-4.11,3.19-7.3,6.59-9.57,10.21-1.23,2.02-1.75,3.11-1.56,3.27,.18,.15,1.23-.51,3.13-1.98,2.94-2.7,4.6-4.23,4.97-4.6Z"
              fill="#ffffff"
            />
          </g>
        </svg>
      </div>
      {/* <Image className="w-[150px]" src="/logo.png" alt="logo" width={239} height={81} priority /> */}
    </Link>
  );
};

export default Logo;
