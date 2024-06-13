import * as React from "react"
import { SVGProps } from "react"
import {motion} from "framer-motion"
const Rocket = (props: SVGProps<SVGSVGElement>) => (
  <svg
    id="main"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 100 100"
    enableBackground="new 0 0 100 100"
    xmlSpace="preserve"
    {...props}
  >
    <motion.g id="base"
        animate={{x:[1, 0, 1], scale:[1, 0.95, 1]} }
        transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }}
    >
      <path
        fill="#C8C0BB"
        d="M75.5,93.4c-11.4,6.6-30.1,6.6-41.6-0.1s-11.6-17.4-0.1-24c11.4-6.6,30.1-6.6,41.6,0.1S87,86.8,75.5,93.4z"
      />
      <path
        fill="#E3C69B"
        d="M70.1,90.2c-8.4,4.9-22.2,4.9-30.7-0.1c-8.5-4.9-8.5-12.8-0.1-17.7s22.2-4.9,30.7,0.1S78.5,85.3,70.1,90.2z "
      />
      <path
        fill="#FFCC7B"
        d="M64.6,87.1c-5.4,3.1-14.3,3.1-19.8,0c-5.5-3.2-5.5-8.3-0.1-11.4c5.4-3.1,14.3-3.1,19.8,0 C70,78.8,70,83.9,64.6,87.1z"
      />
      <path
        fill="#FFD8B6"
        d="M33,65.8l8.8,5.1c2-0.1,4,0.3,5.5,1.1c1.3,0.7,1.9,1.7,2,2.6c4.3-1.3,9.7-0.9,13.2,1.1 c4.4,2.5,4.4,6.7,0,9.2c-4.4,2.6-11.6,2.6-16,0c-3-1.7-3.9-4.1-2.9-6.3c-0.5,0.1-1.1,0.1-1.6,0.1c-0.4,0.4-0.8,0.7-1.4,1 c-2,1.1-4.7,1.6-7.3,1.4l-6.8,3.9l-13.5-7.8L33,65.8z"
      />
      <path
        fill="#FFD8B5"
        d="M49.5,83.4c2.8,1.6,7.2,1.6,10,0c2.8-1.6,2.8-4.2,0-5.8c-2.8-1.6-7.2-1.6-10,0 C46.7,79.2,46.7,81.8,49.5,83.4z"
      />
    </motion.g>
    <g id="phone">
      <g>
        <g>
          <g enableBackground="new    ">
            <g>
              <g>
                <path
                  fill="#333333"
                  d="M45,62.5l-2.6-1.6c1.2-0.7,2.1-2.3,2.1-3.7l2.6,1.6C47.1,60.1,46.1,61.8,45,62.5z"
                />
              </g>
            </g>
            <g>
              <g>
                <polygon
                  fill="#333333"
                  points="21.9,75.8 19.2,74.2 42.3,60.9 45,62.5  "
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  fill="#333333"
                  d="M18.4,74.8c0.4,0.2,0.2-0.2,0.8-0.6l2.6,1.6c-0.6,0.3-1.1,0.4-1.5,0.1C19.6,75.5,19.2,75.3,18.4,74.8z "
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  fill="#333333"
                  d="M20.4,75.9l-2.6-1.6c-0.4-0.2,0.1-0.3,0.1-0.9l1.9,1.1C19.7,75.2,20,75.7,20.4,75.9z"
                />
              </g>
            </g>
            <g>
              <g>
                <polygon
                  fill="#333333"
                  points="47.1,58.8 44.4,57.2 44.3,9 47,10.6  "
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  fill="#333333"
                  d="M44.3,9c0-0.7,0.5-0.7,0.1-0.9l1.9,1.1c0.4,0.2,0.6,0.7,0.6,1.4C46.2,10.1,45.1,9.5,44.3,9z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  fill="#333333"
                  d="M44.4,8.1l1.9,1.1C46,9,45.4,9,44.8,9.3l-1.9-1.1C43.5,7.9,44,7.9,44.4,8.1z"
                />
              </g>
            </g>
            <g>
              <g>
                <polygon
                  fill="#333333"
                  points="19.7,74.6 17.8,73.5 17.7,25.2 19.6,26.3  "
                />
              </g>
            </g>
            <g>
              <g>
                <polygon
                  fill="#333333"
                  points="21.7,22.7 19.8,21.6 42.9,8.2 44.8,9.3  "
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  fill="#333333"
                  d="M19.6,26.3l-1.9-1.1c0-1.3,1-3,2.1-3.7l1.9,1.1C20.5,23.4,19.6,25,19.6,26.3z"
                />
              </g>
            </g>
            <g>
              <g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_1_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_2_">
                      <use xlinkHref="#SVGID_1_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_2_)"
                      fill="#CAE3E3"
                      points="16.8,74.9 20.2,76.9 20,77.3 16.8,77.3  "
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_3_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use xlinkHref="#SVGID_3_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_4_)"
                      fill="#CAE3E3"
                      points="16.8,74.7 20.3,76.8 20.2,76.9 16.8,74.9  "
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_5_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_6_">
                      <use xlinkHref="#SVGID_5_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_6_)"
                      fill="#CBE3E3"
                      points="16.8,74.6 20.4,76.6 20.3,76.8 16.8,74.7  "
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_7_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_8_">
                      <use xlinkHref="#SVGID_7_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_8_)"
                      fill="#CCE4E4"
                      points="16.8,74.4 20.4,76.5 20.4,76.6 16.8,74.6  "
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_9_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_10_">
                      <use xlinkHref="#SVGID_9_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_10_)"
                      fill="#CDE4E4"
                      points="16.8,74.2 20.5,76.3 20.4,76.5 16.8,74.4  "
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_12_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_14_">
                      <use xlinkHref="#SVGID_12_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_14_)"
                      fill="#CEE4E4"
                      points="16.8,74 20.6,76.2 20.5,76.3 16.8,74.2  "
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_15_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_16_">
                      <use xlinkHref="#SVGID_15_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_16_)"
                      fill="#CFE5E5"
                      points="16.8,73.8 20.7,76 20.6,76.2 16.8,74  "
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_17_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_18_">
                      <use xlinkHref="#SVGID_17_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_18_)"
                      fill="#D0E5E5"
                      points="16.8,73.6 20.8,75.9 20.7,76 16.8,73.8  "
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_19_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_20_">
                      <use xlinkHref="#SVGID_19_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_20_)"
                      fill="#D1E5E5"
                      points="16.8,73.4 20.9,75.7 20.8,75.9 16.8,73.6  "
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_21_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_22_">
                      <use xlinkHref="#SVGID_21_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_22_)"
                      fill="#D2E6E6"
                      points="16.8,73.2 21,75.6 20.9,75.7 16.8,73.4  "
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_23_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_24_">
                      <use xlinkHref="#SVGID_23_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_24_)"
                      fill="#D3E6E6"
                      points="16.8,73 21,75.5 21,75.6 16.8,73.2  "
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_25_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_26_">
                      <use xlinkHref="#SVGID_25_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_26_)"
                      fill="#D4E6E6"
                      points="16.8,72.8 21.1,75.3 21,75.5 16.8,73  "
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_27_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_28_">
                      <use xlinkHref="#SVGID_27_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_28_)"
                      fill="#D5E7E7"
                      points="16.8,72.6 21.2,75.2 21.1,75.3 16.8,72.8  "
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_29_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_30_">
                      <use xlinkHref="#SVGID_29_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_30_)"
                      fill="#D7E7E7"
                      points="16.8,72.4 21.3,75 21.2,75.2 16.8,72.6  "
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_31_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_32_">
                      <use xlinkHref="#SVGID_31_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_32_)"
                      fill="#D8E7E7"
                      points="16.8,72.2 21.4,74.9 21.3,75 16.8,72.4  "
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_33_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_34_">
                      <use xlinkHref="#SVGID_33_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_34_)"
                      fill="#D9E8E8"
                      points="16.8,72 21.4,74.7 21.4,74.9 16.8,72.2  "
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_35_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_36_">
                      <use xlinkHref="#SVGID_35_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_36_)"
                      fill="#DAE8E8"
                      points="16.8,71.8 21.5,74.6 21.4,74.7 16.8,72  "
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_37_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_38_">
                      <use xlinkHref="#SVGID_37_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_38_)"
                      fill="#DBE8E8"
                      points="16.8,71.6 21.6,74.4 21.5,74.6 16.8,71.8  "
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_39_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_40_">
                      <use xlinkHref="#SVGID_39_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_40_)"
                      fill="#DCE9E9"
                      points="16.8,71.4 21.7,74.3 21.6,74.4 16.8,71.6  "
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_41_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_42_">
                      <use xlinkHref="#SVGID_41_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_42_)"
                      fill="#DDE9E9"
                      points="16.8,71.2 21.8,74.1 21.7,74.3 16.8,71.4  "
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_43_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_44_">
                      <use xlinkHref="#SVGID_43_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_44_)"
                      fill="#DEE9E9"
                      points="16.8,71 21.9,74 21.8,74.1 16.8,71.2  "
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_45_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_46_">
                      <use xlinkHref="#SVGID_45_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_46_)"
                      fill="#DFEAEA"
                      points="16.8,70.8 22,73.8 21.9,74 16.8,71  "
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_47_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_48_">
                      <use xlinkHref="#SVGID_47_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_48_)"
                      fill="#E0EAEA"
                      points="16.8,70.6 22,73.7 22,73.8 16.8,70.8  "
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_49_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_50_">
                      <use xlinkHref="#SVGID_49_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_50_)"
                      fill="#E1EAEA"
                      points="16.8,70.4 22.1,73.6 22,73.7 16.8,70.6  "
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_51_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_52_">
                      <use xlinkHref="#SVGID_51_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_52_)"
                      fill="#E2EBEB"
                      points="16.8,70.2 22.2,73.4 22.1,73.6 16.8,70.4  "
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_53_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_54_">
                      <use xlinkHref="#SVGID_53_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_54_)"
                      fill="#E3EBEB"
                      points="16.8,70 22.3,73.3 22.2,73.4 16.8,70.2  "
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_55_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_56_">
                      <use xlinkHref="#SVGID_55_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_56_)"
                      fill="#E3EBEB"
                      points="16.8,23 16.9,22.8 42.8,37.8 22.3,73.3 16.8,70  "
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_57_"
                        d="M27.5,18.7c1.5-0.8,3.8-0.9,5.3,0l23.9,13.8c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L32.9,16.5c-1.5-0.8-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_58_">
                      <use xlinkHref="#SVGID_57_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={29.8}
                      y={15.3}
                      transform="matrix(-0.5 0.866 -0.866 -0.5 70.9486 19.4892)"
                      clipPath="url(#SVGID_58_)"
                      fill="#E3EBEB"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_59_"
                        d="M27.5,18.6c1.5-0.8,3.8-0.9,5.3,0l23.9,13.8c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L32.8,16.4c-1.5-0.9-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_60_">
                      <use xlinkHref="#SVGID_59_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={29.9}
                      y={15.1}
                      transform="matrix(-0.5001 0.866 -0.866 -0.5001 70.9838 19.2499)"
                      clipPath="url(#SVGID_60_)"
                      fill="#E8EFEF"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_61_"
                        d="M27.4,18.4c1.5-0.8,3.8-0.9,5.3,0l23.9,13.8c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L32.7,16.2c-1.5-0.8-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_62_">
                      <use xlinkHref="#SVGID_61_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={29.9}
                      y={15}
                      transform="matrix(-0.5 0.866 -0.866 -0.5 70.9421 19.0084)"
                      clipPath="url(#SVGID_62_)"
                      fill="#ECF2F2"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_63_"
                        d="M27.3,18.3c1.5-0.8,3.8-0.9,5.3,0l23.9,13.8c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L32.7,16.1c-1.5-0.8-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_64_">
                      <use xlinkHref="#SVGID_63_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={30}
                      y={14.9}
                      transform="matrix(-0.4999 0.8661 -0.8661 -0.4999 70.9746 18.7892)"
                      clipPath="url(#SVGID_64_)"
                      fill="#EFF4F4"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_65_"
                        d="M27.3,18.2c1.5-0.8,3.8-0.9,5.3,0L56.5,32c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L32.6,16c-1.5-0.8-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_66_">
                      <use xlinkHref="#SVGID_65_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={30.1}
                      y={14.8}
                      transform="matrix(-0.5 0.866 -0.866 -0.5 70.9634 18.5553)"
                      clipPath="url(#SVGID_66_)"
                      fill="#F2F6F6"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_67_"
                        d="M27.2,18.1c1.5-0.8,3.8-0.9,5.3,0l23.9,13.8c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L32.5,15.9c-1.5-0.9-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_68_">
                      <use xlinkHref="#SVGID_67_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={30.1}
                      y={14.7}
                      transform="matrix(-0.5001 0.866 -0.866 -0.5001 70.9484 18.3581)"
                      clipPath="url(#SVGID_68_)"
                      fill="#F5F8F8"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_69_"
                        d="M27.1,18c1.5-0.8,3.8-0.9,5.3,0l23.9,13.8c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L32.5,15.8c-1.5-0.8-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_70_">
                      <use xlinkHref="#SVGID_69_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={30.2}
                      y={14.6}
                      transform="matrix(-0.5 0.866 -0.866 -0.5 70.953 18.1206)"
                      clipPath="url(#SVGID_70_)"
                      fill="#F7FAFA"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_71_"
                        d="M27.1,17.9c1.5-0.8,3.8-0.9,5.3,0l23.9,13.8c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L32.4,15.7c-1.5-0.8-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_72_">
                      <use xlinkHref="#SVGID_71_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={30.3}
                      y={14.5}
                      transform="matrix(-0.5 0.866 -0.866 -0.5 70.9544 17.8782)"
                      clipPath="url(#SVGID_72_)"
                      fill="#F8FBFB"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_73_"
                        d="M27,17.8c1.5-0.8,3.8-0.9,5.3,0l23.9,13.8c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L32.4,15.6c-1.5-0.9-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_74_">
                      <use xlinkHref="#SVGID_73_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={30.3}
                      y={14.3}
                      transform="matrix(-0.5001 0.866 -0.866 -0.5001 70.9896 17.639)"
                      clipPath="url(#SVGID_74_)"
                      fill="#FAFCFC"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_75_"
                        d="M26.9,17.6c1.5-0.8,3.8-0.9,5.3,0l23.9,13.8c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L32.3,15.4c-1.5-0.8-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_76_">
                      <use xlinkHref="#SVGID_75_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={30.4}
                      y={14.2}
                      transform="matrix(-0.4999 0.8661 -0.8661 -0.4999 70.9605 17.4167)"
                      clipPath="url(#SVGID_76_)"
                      fill="#FBFDFD"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_77_"
                        d="M26.9,17.5c1.5-0.8,3.8-0.9,5.3,0l23.9,13.8c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L32.2,15.3c-1.5-0.8-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_78_">
                      <use xlinkHref="#SVGID_77_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={30.5}
                      y={14.1}
                      transform="matrix(-0.5 0.866 -0.866 -0.5 70.9678 17.1867)"
                      clipPath="url(#SVGID_78_)"
                      fill="#FCFDFD"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_79_"
                        d="M26.8,17.4c1.5-0.8,3.8-0.9,5.3,0L56,31.2c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L32.2,15.2c-1.5-0.8-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_80_">
                      <use xlinkHref="#SVGID_79_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={30.5}
                      y={14}
                      transform="matrix(-0.5 0.866 -0.866 -0.5 70.9415 16.9443)"
                      clipPath="url(#SVGID_80_)"
                      fill="#FCFEFE"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_81_"
                        d="M26.7,17.3c1.5-0.8,3.8-0.9,5.3,0l23.9,13.8c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L32.1,15.1c-1.5-0.9-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_82_">
                      <use xlinkHref="#SVGID_81_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={30.6}
                      y={13.9}
                      transform="matrix(-0.5001 0.866 -0.866 -0.5001 70.9543 16.7472)"
                      clipPath="url(#SVGID_82_)"
                      fill="#FDFEFE"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_83_"
                        d="M26.7,17.2c1.5-0.8,3.8-0.9,5.3,0L55.9,31c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L32,15c-1.5-0.8-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_84_">
                      <use xlinkHref="#SVGID_83_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={30.6}
                      y={13.8}
                      transform="matrix(-0.5 0.866 -0.866 -0.5 70.9588 16.5096)"
                      clipPath="url(#SVGID_84_)"
                      fill="#FDFEFE"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_85_"
                        d="M26.6,17.1c1.5-0.8,3.8-0.9,5.3,0l23.9,13.8c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L31.9,14.8c-1.5-0.8-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_86_">
                      <use xlinkHref="#SVGID_85_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={30.7}
                      y={13.6}
                      transform="matrix(-0.5 0.866 -0.866 -0.5 70.9325 16.2672)"
                      clipPath="url(#SVGID_86_)"
                      fill="#FDFFFF"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_87_"
                        d="M26.6,17c1.5-0.8,3.8-0.9,5.3,0l23.9,13.8c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L31.9,14.7c-1.5-0.9-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_88_">
                      <use xlinkHref="#SVGID_87_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={30.8}
                      y={13.5}
                      transform="matrix(-0.5001 0.866 -0.866 -0.5001 70.9677 16.0279)"
                      clipPath="url(#SVGID_88_)"
                      fill="#FEFFFF"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_89_"
                        d="M26.5,16.8c1.5-0.8,3.8-0.9,5.3,0l23.9,13.8c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L31.8,14.6c-1.5-0.8-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_90_">
                      <use xlinkHref="#SVGID_89_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={30.9}
                      y={13.4}
                      transform="matrix(-0.4999 0.8661 -0.8661 -0.4999 70.9661 15.8058)"
                      clipPath="url(#SVGID_90_)"
                      fill="#FEFFFF"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_91_"
                        d="M26.4,16.7c1.5-0.8,3.8-0.9,5.3,0l23.9,13.8c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L31.8,14.5c-1.5-0.8-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_92_">
                      <use xlinkHref="#SVGID_91_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={30.9}
                      y={13.3}
                      transform="matrix(-0.5 0.866 -0.866 -0.5 70.9736 15.5757)"
                      clipPath="url(#SVGID_92_)"
                      fill="#FEFFFF"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_93_"
                        d="M26.4,16.6c1.5-0.8,3.8-0.9,5.3,0l23.9,13.8c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L31.7,14.4c-1.5-0.9-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_94_">
                      <use xlinkHref="#SVGID_93_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={31}
                      y={13.2}
                      transform="matrix(-0.5001 0.866 -0.866 -0.5001 70.9626 15.3324)"
                      clipPath="url(#SVGID_94_)"
                      fill="#FEFFFF"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_95_"
                        d="M26.3,16.5c1.5-0.8,3.8-0.9,5.3,0l23.9,13.8c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L31.6,14.3c-1.5-0.8-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_96_">
                      <use xlinkHref="#SVGID_95_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={31.1}
                      y={13.1}
                      transform="matrix(-0.5 0.866 -0.866 -0.5 70.9672 15.0949)"
                      clipPath="url(#SVGID_96_)"
                      fill="#FEFFFF"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_97_"
                        d="M26.2,16.4c1.5-0.8,3.8-0.9,5.3,0l23.9,13.8c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L31.5,14.2c-1.5-0.8-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_98_">
                      <use xlinkHref="#SVGID_97_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={31.1}
                      y={13}
                      transform="matrix(-0.5 0.866 -0.866 -0.5 70.9646 14.8986)"
                      clipPath="url(#SVGID_98_)"
                      fill="#FEFFFF"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_99_"
                        d="M26.1,16.3c1.5-0.8,3.8-0.9,5.3,0L55.3,30c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L31.5,14c-1.5-0.8-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_100_">
                      <use xlinkHref="#SVGID_99_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={31.2}
                      y={12.8}
                      transform="matrix(-0.5 0.866 -0.866 -0.5 70.9383 14.6562)"
                      clipPath="url(#SVGID_100_)"
                      fill="#FEFFFF"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_101_"
                        d="M26.1,16.2c1.5-0.8,3.8-0.9,5.3,0l23.9,13.8c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L31.4,13.9c-1.5-0.8-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_102_">
                      <use xlinkHref="#SVGID_101_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={31.3}
                      y={12.7}
                      transform="matrix(-0.4999 0.8661 -0.8661 -0.4999 70.969 14.4156)"
                      clipPath="url(#SVGID_102_)"
                      fill="#FEFFFF"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_103_"
                        d="M26,16c1.5-0.8,3.8-0.9,5.3,0l23.9,13.8c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L31.4,13.8c-1.5-0.8-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_104_">
                      <use xlinkHref="#SVGID_103_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={31.3}
                      y={12.6}
                      transform="matrix(-0.5 0.866 -0.866 -0.5 70.9596 14.2032)"
                      clipPath="url(#SVGID_104_)"
                      fill="#FEFFFF"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_105_"
                        d="M26,15.9c1.5-0.8,3.8-0.9,5.3,0l23.9,13.8c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L31.3,13.7c-1.5-0.8-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_106_">
                      <use xlinkHref="#SVGID_105_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={31.4}
                      y={12.5}
                      transform="matrix(-0.5 0.866 -0.866 -0.5 70.9794 13.9648)"
                      clipPath="url(#SVGID_106_)"
                      fill="#FEFFFF"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_107_"
                        d="M25.9,15.8c1.5-0.8,3.8-0.9,5.3,0l23.9,13.8c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L31.2,13.6c-1.5-0.9-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_108_">
                      <use xlinkHref="#SVGID_107_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={31.5}
                      y={12.4}
                      transform="matrix(-0.5001 0.866 -0.866 -0.5001 70.9684 13.7215)"
                      clipPath="url(#SVGID_108_)"
                      fill="#FEFFFF"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_109_"
                        d="M25.8,15.7c1.5-0.8,3.8-0.9,5.3,0L55,29.5c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L31.2,13.5c-1.5-0.8-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_110_">
                      <use xlinkHref="#SVGID_109_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={31.5}
                      y={12.3}
                      transform="matrix(-0.5 0.866 -0.866 -0.5 70.973 13.4839)"
                      clipPath="url(#SVGID_110_)"
                      fill="#FEFFFF"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_111_"
                        d="M25.8,15.6c1.5-0.8,3.8-0.9,5.3,0L55,29.4c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L31.1,13.4c-1.5-0.8-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_112_">
                      <use xlinkHref="#SVGID_111_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={31.6}
                      y={12.2}
                      transform="matrix(-0.5 0.866 -0.866 -0.5 70.9478 13.3141)"
                      clipPath="url(#SVGID_112_)"
                      fill="#FEFFFF"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_113_"
                        d="M25.7,15.5c1.5-0.8,3.8-0.9,5.3,0l23.9,13.8c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L31.1,13.3c-1.5-0.8-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_114_">
                      <use xlinkHref="#SVGID_113_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={31.6}
                      y={12.1}
                      transform="matrix(-0.5 0.866 -0.866 -0.5 70.9279 13.1698)"
                      clipPath="url(#SVGID_114_)"
                      fill="#FDFEFE"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_115_"
                        d="M25.7,15.4c1.5-0.8,3.8-0.9,5.3,0l23.9,13.8c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L31,13.2c-1.5-0.8-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_116_">
                      <use xlinkHref="#SVGID_115_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={31.7}
                      y={12}
                      transform="matrix(-0.5 0.866 -0.866 -0.5 70.9542 13.0296)"
                      clipPath="url(#SVGID_116_)"
                      fill="#FCFDFD"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_117_"
                        d="M25.6,15.4c1.5-0.8,3.8-0.9,5.3,0l23.9,13.8c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L31,13.1c-1.5-0.8-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_118_">
                      <use xlinkHref="#SVGID_117_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={31.7}
                      y={12}
                      transform="matrix(-0.5 0.866 -0.866 -0.5 70.9343 12.8854)"
                      clipPath="url(#SVGID_118_)"
                      fill="#FBFDFD"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_119_"
                        d="M25.6,15.3c1.5-0.8,3.8-0.9,5.3,0l23.9,13.8c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L30.9,13.1c-1.5-0.8-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_120_">
                      <use xlinkHref="#SVGID_119_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={31.8}
                      y={11.9}
                      transform="matrix(-0.5 0.866 -0.866 -0.5 70.9606 12.7174)"
                      clipPath="url(#SVGID_120_)"
                      fill="#FAFCFC"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_121_"
                        d="M25.5,15.2c1.5-0.8,3.8-0.9,5.3,0L54.7,29c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L30.9,13c-1.5-0.8-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_122_">
                      <use xlinkHref="#SVGID_121_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={31.8}
                      y={11.8}
                      transform="matrix(-0.5 0.866 -0.866 -0.5 70.9407 12.5732)"
                      clipPath="url(#SVGID_122_)"
                      fill="#F9FBFB"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_123_"
                        d="M25.5,15.2c1.5-0.8,3.8-0.9,5.3,0l23.9,13.8c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L30.8,12.9c-1.5-0.8-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_124_">
                      <use xlinkHref="#SVGID_123_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={31.9}
                      y={11.7}
                      transform="matrix(-0.5 0.866 -0.866 -0.5 70.967 12.433)"
                      clipPath="url(#SVGID_124_)"
                      fill="#F8FAFA"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_125_"
                        d="M25.5,15.1c1.5-0.8,3.8-0.9,5.3,0l23.9,13.8c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L30.8,12.9c-1.5-0.8-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_126_">
                      <use xlinkHref="#SVGID_125_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={31.9}
                      y={11.7}
                      transform="matrix(-0.5 0.866 -0.866 -0.5 70.9472 12.2888)"
                      clipPath="url(#SVGID_126_)"
                      fill="#F7FAFA"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_127_"
                        d="M25.4,15c1.5-0.8,3.8-0.9,5.3,0l23.9,13.8c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L30.7,12.8c-1.5-0.8-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_128_">
                      <use xlinkHref="#SVGID_127_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={31.9}
                      y={11.6}
                      transform="matrix(-0.5 0.866 -0.866 -0.5 70.9735 12.1485)"
                      clipPath="url(#SVGID_128_)"
                      fill="#F6F9F9"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_129_"
                        d="M25.4,14.9c1.5-0.8,3.8-0.9,5.3,0l23.9,13.8c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L30.7,12.7c-1.5-0.8-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_130_">
                      <use xlinkHref="#SVGID_129_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={32}
                      y={11.5}
                      transform="matrix(-0.5 0.866 -0.866 -0.5 70.9536 12.0043)"
                      clipPath="url(#SVGID_130_)"
                      fill="#F5F8F8"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_131_"
                        d="M25.3,14.9c1.5-0.8,3.8-0.9,5.3,0l23.9,13.8c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L30.7,12.6c-1.5-0.8-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_132_">
                      <use xlinkHref="#SVGID_131_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={32}
                      y={11.4}
                      transform="matrix(-0.5 0.866 -0.866 -0.5 70.9522 11.8359)"
                      clipPath="url(#SVGID_132_)"
                      fill="#F4F7F7"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_133_"
                        d="M25.3,14.8c1.5-0.8,3.8-0.9,5.3,0l23.9,13.8c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L30.6,12.6c-1.5-0.8-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_134_">
                      <use xlinkHref="#SVGID_133_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={32.1}
                      y={11.4}
                      transform="matrix(-0.5 0.866 -0.866 -0.5 70.96 11.6921)"
                      clipPath="url(#SVGID_134_)"
                      fill="#F3F7F7"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_135_"
                        d="M25.3,14.7c1.5-0.8,3.8-0.9,5.3,0l23.9,13.8c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L30.6,12.5c-1.5-0.8-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_136_">
                      <use xlinkHref="#SVGID_135_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={32.1}
                      y={11.3}
                      transform="matrix(-0.5 0.866 -0.866 -0.5 70.9584 11.5523)"
                      clipPath="url(#SVGID_136_)"
                      fill="#F2F6F6"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_137_"
                        d="M25.2,14.6c1.5-0.8,3.8-0.9,5.3,0l23.9,13.8c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L30.5,12.4c-1.5-0.8-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_138_">
                      <use xlinkHref="#SVGID_137_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={32.1}
                      y={11.2}
                      transform="matrix(-0.5 0.866 -0.866 -0.5 70.9387 11.4072)"
                      clipPath="url(#SVGID_138_)"
                      fill="#F1F5F5"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_139_"
                        d="M25.2,14.6c1.5-0.8,3.8-0.9,5.3,0l23.9,13.8c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L30.5,12.4c-1.5-0.8-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_140_">
                      <use xlinkHref="#SVGID_139_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={32.2}
                      y={11.1}
                      transform="matrix(-0.5 0.866 -0.866 -0.5 70.9649 11.2397)"
                      clipPath="url(#SVGID_140_)"
                      fill="#EFF4F4"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_141_"
                        d="M25.1,14.5c1.5-0.8,3.8-0.9,5.3,0l23.9,13.8c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L30.5,12.3c-1.5-0.8-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_142_">
                      <use xlinkHref="#SVGID_141_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={32.2}
                      y={11.1}
                      transform="matrix(-0.5 0.866 -0.866 -0.5 70.945 11.0954)"
                      clipPath="url(#SVGID_142_)"
                      fill="#EEF3F3"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_143_"
                        d="M25.1,14.4c1.5-0.8,3.8-0.9,5.3,0l23.9,13.8c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L30.4,12.2c-1.5-0.8-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_144_">
                      <use xlinkHref="#SVGID_143_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={32.3}
                      y={11}
                      transform="matrix(-0.5 0.866 -0.866 -0.5 70.9252 10.9511)"
                      clipPath="url(#SVGID_144_)"
                      fill="#EDF3F3"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_145_"
                        d="M25,14.3c1.5-0.8,3.8-0.9,5.3,0l23.9,13.8c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L30.4,12.1c-1.5-0.8-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_146_">
                      <use xlinkHref="#SVGID_145_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={32.3}
                      y={10.9}
                      transform="matrix(-0.5 0.866 -0.866 -0.5 70.9514 10.8114)"
                      clipPath="url(#SVGID_146_)"
                      fill="#ECF2F2"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_147_"
                        d="M25,14.3c1.5-0.8,3.8-0.9,5.3,0L54.2,28c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L30.3,12c-1.5-0.8-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_148_">
                      <use xlinkHref="#SVGID_147_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={32.4}
                      y={10.8}
                      transform="matrix(-0.4999 0.8661 -0.8661 -0.4999 70.9434 10.6593)"
                      clipPath="url(#SVGID_148_)"
                      fill="#EBF1F1"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_149_"
                        d="M25,14.2c1.5-0.8,3.8-0.9,5.3,0L54.2,28c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L30.3,12c-1.5-0.8-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_150_">
                      <use xlinkHref="#SVGID_149_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={32.4}
                      y={10.8}
                      transform="matrix(-0.5 0.866 -0.866 -0.5 70.9579 10.5265)"
                      clipPath="url(#SVGID_150_)"
                      fill="#EAF0F0"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_151_"
                        d="M24.9,14.1c1.5-0.8,3.8-0.9,5.3,0l23.9,13.8c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L30.2,11.9c-1.5-0.8-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_152_">
                      <use xlinkHref="#SVGID_151_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={32.4}
                      y={10.7}
                      transform="matrix(-0.5 0.866 -0.866 -0.5 70.938 10.3822)"
                      clipPath="url(#SVGID_152_)"
                      fill="#E9F0F0"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_153_"
                        d="M24.9,14c1.5-0.8,3.8-0.9,5.3,0l23.9,13.8c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L30.2,11.8c-1.5-0.8-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_154_">
                      <use xlinkHref="#SVGID_153_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={32.5}
                      y={10.6}
                      transform="matrix(-0.5 0.866 -0.866 -0.5 70.9643 10.2143)"
                      clipPath="url(#SVGID_154_)"
                      fill="#E8EFEF"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_155_"
                        d="M24.8,14c1.5-0.8,3.8-0.9,5.3,0L54,27.7c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L30.2,11.7c-1.5-0.8-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_156_">
                      <use xlinkHref="#SVGID_155_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={32.5}
                      y={10.6}
                      transform="matrix(-0.5 0.866 -0.866 -0.5 70.9444 10.0705)"
                      clipPath="url(#SVGID_156_)"
                      fill="#E7EEEE"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_157_"
                        d="M24.8,13.9c1.5-0.8,3.8-0.9,5.3,0L54,27.7c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L30.1,11.7c-1.5-0.8-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_158_">
                      <use xlinkHref="#SVGID_157_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={32.6}
                      y={10.5}
                      transform="matrix(-0.5 0.866 -0.866 -0.5 70.9708 9.9294)"
                      clipPath="url(#SVGID_158_)"
                      fill="#E6EDED"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_159_"
                        d="M24.7,13.8c1.5-0.8,3.8-0.9,5.3,0l23.9,13.8c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L30.1,11.6c-1.5-0.8-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_160_">
                      <use xlinkHref="#SVGID_159_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={32.6}
                      y={10.4}
                      transform="matrix(-0.5 0.866 -0.866 -0.5 70.9508 9.7856)"
                      clipPath="url(#SVGID_160_)"
                      fill="#E5EDED"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_161_"
                        d="M24.7,13.8c1.5-0.8,3.8-0.9,5.3,0l23.9,13.8c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L30,11.5c-1.5-0.8-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_162_">
                      <use xlinkHref="#SVGID_161_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={32.7}
                      y={10.4}
                      transform="matrix(-0.5 0.866 -0.866 -0.5 70.9771 9.6454)"
                      clipPath="url(#SVGID_162_)"
                      fill="#E4ECEC"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_163_"
                        d="M24.7,13.7c1.5-0.8,3.8-0.9,5.3,0l23.9,13.8c0.7,0.4,1.1,1,1.1,1.5l0-2.2c0-0.6-0.4-1.1-1.1-1.5 L30,11.5c-1.5-0.8-3.8-0.8-5.3,0"
                      />
                    </defs>
                    <clipPath id="SVGID_164_">
                      <use xlinkHref="#SVGID_163_" overflow="visible" />
                    </clipPath>
                    <rect
                      x={32.7}
                      y={10.3}
                      transform="matrix(-0.5 0.866 -0.866 -0.5 70.9573 9.4734)"
                      clipPath="url(#SVGID_164_)"
                      fill="#E3EBEB"
                      width={0.1}
                      height={29.9}
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_165_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_166_">
                      <use xlinkHref="#SVGID_165_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_166_)"
                      fill="#E3EBEB"
                      points="19.8,17.7 26.3,6.5 40.3,6.5 47.1,10.4 47.1,30.3 45.7,32.7  "
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_167_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_168_">
                      <use xlinkHref="#SVGID_167_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_168_)"
                      fill="#E3EBEB"
                      points="40.5,6.5 47.1,10.3 47.1,10.4 40.3,6.5  "
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_169_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_170_">
                      <use xlinkHref="#SVGID_169_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_170_)"
                      fill="#E3EBEB"
                      points="40.7,6.5 47.1,10.2 47.1,10.3 40.5,6.5  "
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_171_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_172_">
                      <use xlinkHref="#SVGID_171_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_172_)"
                      fill="#E3EBEB"
                      points="40.9,6.5 47.1,10.1 47.1,10.2 40.7,6.5  "
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_173_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_174_">
                      <use xlinkHref="#SVGID_173_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_174_)"
                      fill="#E3EBEB"
                      points="41.1,6.5 47.1,9.9 47.1,10.1 40.9,6.5  "
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_175_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_176_">
                      <use xlinkHref="#SVGID_175_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_176_)"
                      fill="#E3EBEB"
                      points="41.3,6.5 47.1,9.8 47.1,9.9 41.1,6.5  "
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_177_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_178_">
                      <use xlinkHref="#SVGID_177_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_178_)"
                      fill="#E3EBEB"
                      points="41.5,6.5 47.1,9.7 47.1,9.8 41.3,6.5  "
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_179_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_180_">
                      <use xlinkHref="#SVGID_179_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_180_)"
                      fill="#E3EBEB"
                      points="41.7,6.5 47.1,9.6 47.1,9.7 41.5,6.5  "
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_181_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_182_">
                      <use xlinkHref="#SVGID_181_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_182_)"
                      fill="#E3EBEB"
                      points="41.9,6.5 47.1,9.5 47.1,9.6 41.7,6.5  "
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_183_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_184_">
                      <use xlinkHref="#SVGID_183_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_184_)"
                      fill="#E3EBEB"
                      points="42.1,6.5 47.1,9.4 47.1,9.5 41.9,6.5  "
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_185_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_186_">
                      <use xlinkHref="#SVGID_185_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_186_)"
                      fill="#E3EBEB"
                      points="42.3,6.5 47.1,9.3 47.1,9.4 42.1,6.5  "
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_187_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_188_">
                      <use xlinkHref="#SVGID_187_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_188_)"
                      fill="#E2EBEB"
                      points="42.5,6.5 47.1,9.1 47.1,9.3 42.3,6.5  "
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_189_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_190_">
                      <use xlinkHref="#SVGID_189_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_190_)"
                      fill="#E2EBEB"
                      points="42.7,6.5 47.1,9 47.1,9.1 42.5,6.5  "
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_191_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_192_">
                      <use xlinkHref="#SVGID_191_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_192_)"
                      fill="#E2EBEB"
                      points="42.9,6.5 47.1,8.9 47.1,9 42.7,6.5  "
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_193_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_194_">
                      <use xlinkHref="#SVGID_193_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_194_)"
                      fill="#E1EAEA"
                      points="43.1,6.5 47.1,8.8 47.1,8.9 42.9,6.5  "
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_195_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_196_">
                      <use xlinkHref="#SVGID_195_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_196_)"
                      fill="#E0EAEA"
                      points="43.3,6.5 47.1,8.7 47.1,8.8 43.1,6.5  "
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_197_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_198_">
                      <use xlinkHref="#SVGID_197_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_198_)"
                      fill="#DFEAEA"
                      points="43.5,6.5 47.1,8.5 47.1,8.7 43.3,6.5  "
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_199_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_200_">
                      <use xlinkHref="#SVGID_199_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_200_)"
                      fill="#DDE9E9"
                      points="43.7,6.5 47.1,8.5 47.1,8.5 43.5,6.5  "
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_201_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_202_">
                      <use xlinkHref="#SVGID_201_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_202_)"
                      fill="#DBE8E8"
                      points="43.9,6.5 47.1,8.3 47.1,8.5 43.7,6.5  "
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_203_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_204_">
                      <use xlinkHref="#SVGID_203_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_204_)"
                      fill="#D9E7E7"
                      points="44.1,6.5 47.1,8.2 47.1,8.3 43.9,6.5  "
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_205_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_206_">
                      <use xlinkHref="#SVGID_205_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_206_)"
                      fill="#D6E6E6"
                      points="44.3,6.5 47.1,8.1 47.1,8.2 44.1,6.5  "
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_207_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_208_">
                      <use xlinkHref="#SVGID_207_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_208_)"
                      fill="#D2E5E5"
                      points="44.5,6.5 47.1,8 47.1,8.1 44.3,6.5  "
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_209_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_210_">
                      <use xlinkHref="#SVGID_209_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_210_)"
                      fill="#CDE3E3"
                      points="44.7,6.5 47.1,7.9 47.1,8 44.5,6.5  "
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <defs>
                      <path
                        id="SVGID_211_"
                        d="M45.2,6.8c-0.5-0.3-1.1-0.2-1.9,0.2L19.4,20.7c-1.5,0.8-2.6,2.9-2.6,4.6l0.1,49.1 c0,0.8,0.3,1.4,0.8,1.7l1.9,1.1c-0.5-0.3-0.8-0.9-0.8-1.7l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8.1 c0.7-0.4,1.4-0.5,1.9-0.2L45.2,6.8z"
                      />
                    </defs>
                    <clipPath id="SVGID_212_">
                      <use xlinkHref="#SVGID_211_" overflow="visible" />
                    </clipPath>
                    <polygon
                      clipPath="url(#SVGID_212_)"
                      fill="#CDE3E3"
                      points="47.1,7.9 44.7,6.5 47.1,6.5  "
                    />
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <path
                  fill="#B8C7CF"
                  d="M45.2,8c1.5-0.8,2.7-0.2,2.7,1.5L48,58.7c0,1.7-1.2,3.8-2.6,4.6L21.5,77.1c-1.5,0.8-2.7,0.2-2.7-1.5 l-0.1-49.1c0-1.7,1.2-3.8,2.6-4.6L45.2,8z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  fill="#323142"
                  d="M44.8,9.3C46,8.7,47,9.2,47,10.5l0.1,48.2c0,1.3-1,3-2.1,3.7L21.9,75.8c-1.2,0.7-2.1,0.1-2.1-1.2 l-0.1-48.2c0-1.3,1-3,2.1-3.7L44.8,9.3z"
                />
              </g>
            </g>
          </g>
        </g>
        <g>
          <g enableBackground="new    ">
            <g>
              <g>
                <path
                  fill="#5C92FF"
                  d="M39.4,13.2l6.1-3.5c1.2-0.7,2.1-0.1,2.1,1.2l0.1,48.2c0,1.3-1,3-2.1,3.7L22.6,76.2 c-1.2,0.7-2.1,0.1-2.1-1.2l-0.1-48.2c0-1.3,1-3,2.1-3.7l6.1-3.5C29.1,19.2,38.8,13.6,39.4,13.2z"
                />
              </g>
            </g>
            <g>
              <path
                fill="#365FCF"
                d="M39.4,13.2l6.1-3.5c0.6-0.3,1.1-0.4,1.5-0.1l-0.7-0.4C46,8.9,45.4,9,44.8,9.3l-6.1,3.5 c-0.6,0.3-10.3,6-10.9,6.3l-6.1,3.5c-1.2,0.7-2.1,2.3-2.1,3.7l0.1,48.2c0,0.7,0.2,1.1,0.6,1.4l0.7,0.4 c-0.4-0.2-0.6-0.7-0.6-1.4l-0.1-48.2c0-1.3,1-3,2.1-3.7l6.1-3.5C29.1,19.2,38.8,13.6,39.4,13.2z"
              />
            </g>
          </g>
        </g>
      </g>
      <g>
        <polygon
          fill="#323142"
          points="18.8,72 16.9,70.9 16.9,71.2 18.8,72.3  "
        />
      </g>
      <g>
        <polygon
          fill="#323142"
          points="18.7,29.8 16.8,28.7 16.8,28.9 18.7,30  "
        />
      </g>
    </g>
    <motion.g id="clouds"
        animate={{x:[0, 5, 0], scale:[1, 1.3, 1]} }
        transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }}
    >
      <g>
        <path
          fill="#FFFFFF"
          d="M20.4,56.9l0,3.9v1.8v2.8v0.1v1.1c0,0,0.1,0,0.1,0c0.1,0,0.2,0,0.4,0c0.1,0,0.1,0,0.2,0c0.1,0,0.2,0,0.3,0 c1.7,0,3.3-0.9,4.1-2.2l0,0c0.3-0.5,0.5-1,0.7-1.6c0.1-0.3,0.1-0.7,0.1-1.1c0-1.4-0.5-2.6-1.5-3.5c-0.1-0.1-0.1-0.1-0.2-0.2 c-0.9-0.8-2-1.2-3.3-1.2C21,56.8,20.6,56.9,20.4,56.9z"
        />
      </g>
      <g>
        <path
          fill="#FFFFFF"
          d="M20.4,62.7v2.8c0,0,0,0,0,0.1c0.1,0.3,0.2,0.6,0.3,0.9c0,0.1,0.1,0.2,0.1,0.3c0,0.1,0.1,0.1,0.1,0.2 c0.4,0.8,1,1.4,1.7,1.9c1,0.7,2.1,1.1,3.4,1.1c1.6,0,3-0.6,4.1-1.7c0.2-0.2,0.4-0.4,0.6-0.6c0.2-0.3,0.4-0.6,0.6-1 c0.4-0.8,0.6-1.7,0.6-2.6c0-3.2-2.6-5.9-5.9-5.9c-0.3,0-0.6,0-0.8,0.1c-0.1,0-0.3,0-0.4,0.1C22.6,58.8,20.9,60.5,20.4,62.7z"
        />
      </g>
      <g>
        <path
          fill="#FFFFFF"
          d="M37.5,76.5c-2.8,0-5.1-2.3-5.1-5.1c0-2.8,2.3-5.1,5.1-5.1s5.1,2.3,5.1,5.1C42.6,74.2,40.3,76.5,37.5,76.5z "
        />
      </g>
      <g>
        <path
          fill="#FFFFFF"
          d="M44.5,74.6c-2.5,0-4.5-2-4.5-4.5s2-4.5,4.5-4.5s4.5,2,4.5,4.5S47,74.6,44.5,74.6z"
        />
      </g>
      <g>
        <path
          fill="#FFFFFF"
          d="M33.3,65.7c-2.4,0-4.4-2-4.4-4.4c0-2.4,2-4.4,4.4-4.4c2.4,0,4.4,2,4.4,4.4C37.7,63.7,35.8,65.7,33.3,65.7z "
        />
      </g>
      <g>
        <path
          fill="#FFFFFF"
          d="M50.6,68.9c-2.5,0-4.5-2-4.5-4.5c0-2.5,2-4.5,4.5-4.5c2.5,0,4.5,2,4.5,4.5C55.1,66.9,53.1,68.9,50.6,68.9z "
        />
      </g>
      <g>
        <path
          fill="#FFFFFF"
          d="M53.1,61c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1C56.2,59.6,54.8,61,53.1,61z "
        />
      </g>
      <g>
        <path
          fill="#FFFFFF"
          d="M40.9,66c-2.2,0-4-1.8-4-4c0-2.2,1.8-4,4-4s4,1.8,4,4C44.9,64.2,43.1,66,40.9,66z"
        />
      </g>
      <g>
        <path
          fill="#FFFFFF"
          d="M47.6,60.6c-1,0-1.9-0.8-1.9-1.9s0.8-1.9,1.9-1.9c1,0,1.9,0.8,1.9,1.9C49.5,59.7,48.6,60.6,47.6,60.6z"
        />
      </g>
      <g>
        <path
          fill="#FFFFFF"
          d="M30.6,77.7c-2.4,0-4.6-1.5-5.5-3.8c-1.2-3,0.3-6.4,3.4-7.6c0.7-0.3,1.4-0.4,2.1-0.4c2.4,0,4.6,1.5,5.5,3.8 c0.6,1.5,0.5,3-0.1,4.5c-0.6,1.4-1.8,2.5-3.2,3.1C32.1,77.6,31.4,77.7,30.6,77.7z"
        />
      </g>
      <g>
        <path
          fill="#FFFFFF"
          d="M20.4,68.2V69v0.3v1.6c0,0.2,0.1,0.3,0.2,0.5c0.7,1.9,2.6,3.2,4.7,3.2c0,0,0,0,0.1,0 c0.6,0,1.2-0.1,1.8-0.3c1.1-0.4,2-1.2,2.5-2.1c0.2-0.4,0.4-0.8,0.5-1.3c0.2-0.8,0.3-1.8,0-2.6c0-0.2-0.1-0.4-0.2-0.5 c-0.5-1.4-1.7-2.5-3.1-3c-0.4-0.1-0.9-0.2-1.4-0.3h0l0,0c-0.1,0-0.1,0-0.2,0l0,0c-0.1,0-0.1,0-0.2,0c-0.5,0-1.1,0.1-1.6,0.3 c-1,0.4-1.8,1-2.4,1.9c0,0.1-0.1,0.1-0.1,0.2c-0.1,0.2-0.2,0.4-0.3,0.6C20.5,67.7,20.5,67.9,20.4,68.2z"
        />
      </g>
      <g>
        <circle fill="#FFFFFF" cx={51.9} cy={72.7} r={1.6} />
      </g>
      <g>
        <circle fill="#FFFFFF" cx={40.6} cy={52.4} r={0.7} />
      </g>
      <g>
        <circle fill="#FFFFFF" cx={31.3} cy={51.9} r={1.1} />
      </g>
      <g>
        <g>
          <path
            fill="#EBF2F7"
            d="M20.4,56.5v0.5l0,3.9v1.8v2.8v0.1v1.1v0.2v1.4v0.8c0.2,0,0.3,0,0.5,0c0.6,0,1.2-0.1,1.8-0.3 c2-0.6,3.5-2.1,4.2-4.1c0,0,0,0,0,0c0.2-0.5,0.3-1.1,0.3-1.6c0-0.1,0-0.2,0-0.3c0-1.8-0.7-3.4-2-4.5c-0.1-0.1-0.1-0.1-0.2-0.2 c-1.1-1-2.5-1.6-4.1-1.6C20.7,56.4,20.5,56.4,20.4,56.5z"
          />
        </g>
        <g>
          <path
            fill="#EBF2F7"
            d="M20.4,60.8v1.8v2.8v0.1v1.1v0.2v1.4v0.8v0.3c1.3,1.7,3.4,2.8,5.7,2.8c1.5,0,2.9-0.5,4.1-1.3 c0.5-0.3,0.9-0.7,1.3-1.2c0.1-0.1,0.2-0.3,0.4-0.4c0.9-1.2,1.4-2.6,1.4-4.2c0-3.9-3.2-7.1-7.1-7.1c-0.4,0-0.7,0-1.1,0.1 c-0.1,0-0.3,0-0.4,0.1C22.9,58.5,21.4,59.4,20.4,60.8z"
          />
        </g>
        <g>
          <circle fill="#EBF2F7" cx={36.5} cy={72.7} r={6.3} />
        </g>
        <g>
          <circle fill="#EBF2F7" cx={43.9} cy={70.6} r={5.7} />
        </g>
        <g>
          <circle fill="#EBF2F7" cx={33} cy={62.8} r={6.5} />
        </g>
        <g>
          <circle fill="#EBF2F7" cx={49.5} cy={64.8} r={6} />
        </g>
        <g>
          <circle fill="#EBF2F7" cx={52.7} cy={58.7} r={4} />
        </g>
        <g>
          <circle fill="#EBF2F7" cx={42.5} cy={64.8} r={6} />
        </g>
        <g>
          <circle fill="#EBF2F7" cx={40.6} cy={62.3} r={4.9} />
        </g>
        <g>
          <circle fill="#EBF2F7" cx={47.4} cy={59.5} r={2.9} />
        </g>
        <g>
          <circle fill="#EBF2F7" cx={29.8} cy={72.7} r={7.1} />
        </g>
        <g>
          <path
            fill="#EBF2F7"
            d="M20.4,66.8v1.4v0.8v0.3v1.6v1.9v2c0.5,0.6,1.2,1.2,1.9,1.6c1.6,0.8,3.5,1,5.2,0.3c2.4-0.9,3.9-3.2,4-5.6 c0,0,0,0,0-0.1c0-0.4,0-0.8-0.1-1.2c-0.1-0.4-0.2-0.8-0.3-1.2c-0.1-0.3-0.3-0.6-0.4-0.9c-0.8-1.5-2.2-2.5-3.8-2.9 c-0.4-0.1-0.9-0.2-1.4-0.2h0l0,0c-0.1,0-0.1,0-0.2,0l0,0c-0.1,0-0.1,0-0.2,0c-0.7,0-1.4,0.2-2,0.4c-0.9,0.3-1.7,0.9-2.3,1.5 c-0.1,0.1-0.1,0.2-0.2,0.3C20.5,66.7,20.4,66.7,20.4,66.8z"
          />
        </g>
      </g>
      <g>
        <circle fill="#FFFFFF" cx={32} cy={68.7} r={4.3} />
      </g>
      <g>
        <path
          fill="#FFFFFF"
          d="M20.4,65.5v1.1v0.2v1.4v0.8v0.3v1.6v1.9c0.9,1.3,2.2,2.1,3.8,2.5c0.4,0.1,0.9,0.1,1.4,0.1 c2.8,0,5.2-1.8,6-4.4c0,0,0-0.1,0-0.1c0.1-0.5,0.3-1.1,0.3-1.7c0,0,0-0.1,0-0.1c0-0.9-0.2-1.7-0.5-2.5c-0.7-1.8-2.3-3.1-4.2-3.6 c-0.3-0.1-0.7-0.1-1-0.2c-0.2,0-0.4,0-0.6,0C23.4,62.8,21.5,63.9,20.4,65.5L20.4,65.5z"
        />
      </g>
      <g>
        <circle fill="#FFFFFF" cx={32.2} cy={63.4} r={5.3} />
      </g>
      <g>
        <circle fill="#FFFFFF" cx={22.5} cy={79.8} r={1.6} />
      </g>
    </motion.g>
    <motion.g id="rocket"
        animate={{y:[15, 0, 15], scale:[1, 1.1, 1]} }
        transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }}
    >
      <g>
        <g>
          <path
            fill="#FEE200"
            d="M53.4,39.7c0,0-3.5,8.9,0.7,14.5c6.2-4.9,6.7-14.2,6.7-14.2L53.4,39.7z"
          />
        </g>
        <g>
          <path
            fill="#FEAE00"
            d="M53.7,41.4c0,0-1.7,6.8,1,10.4c4.1-3.2,4.8-9.8,4.8-9.8L53.7,41.4z"
          />
        </g>
        <g>
          <path
            fill="#FE7200"
            d="M54.3,42.9c0,0-1,3.1,0.9,5.6c2.8-2.2,3.1-5.2,3.1-5.2L54.3,42.9z"
          />
        </g>
        <g>
          <path
            fill="#DB233B"
            d="M51.3,34.1c0,0-1.5,0-2.1,2.5c-0.5,2-0.6,4.7-0.6,4.7l3.9-0.1L51.3,34.1z"
          />
        </g>
        <g>
          <g enableBackground="new    ">
            <g>
              <g>
                <path
                  fill="#F4F4C0"
                  d="M61.1,39c2.2,1.7,2.1,4.2-0.2,5.5c-2.4,1.3-6.1,1-8.3-0.7c-2.2-1.7-2.1-4.2,0.2-5.5 C55.2,37,58.9,37.3,61.1,39z"
                />
              </g>
            </g>
            <g enableBackground="new    ">
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_213_"
                      d="M52.5,13c0.6-1.6,1.2-2.7,1.6-3.5c0.5-1,1.5-2.2,1.9-2.8c0.3-0.3,0.8-0.9,1.3-1.4 c0.8-0.8,1.1-1.1,1.8-1.6c0.7-0.6,1.9-1.5,2.9-2c0.2,0.2,4,3.6,4.2,9.8c0.2,6.8-0.4,11.3-5,27.5c-2.2-1.7-6-2.1-8.3-0.7 c-1.3,0.7-2,1.8-1.8,3c-0.9-8-1.2-12.7-1-16.8C50.3,19.7,51.3,16.1,52.5,13z"
                    />
                  </defs>
                  <clipPath id="SVGID_214_">
                    <use xlinkHref="#SVGID_213_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_214_)" enableBackground="new    ">
                    <g>
                      <path
                        fill="#929273"
                        d="M52.5,13c-2.9,8-3.1,13.3-1.4,28.3c-0.1-1.1,0.5-2.2,1.8-3c2.4-1.3,6.1-1,8.3,0.7 c4.5-16.3,5.2-20.8,5-27.5c-0.2-6.3-4-9.6-4.2-9.8C59.5,3,54.6,6.9,52.5,13z"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_215_"
                      d="M52.5,13c0.6-1.6,1.2-2.7,1.6-3.5c0.5-1,1.5-2.2,1.9-2.8c0.3-0.3,0.8-0.9,1.3-1.4 c0.8-0.8,1.1-1.1,1.8-1.6c0.7-0.6,1.9-1.5,2.9-2c0.2,0.2,4,3.6,4.2,9.8c0.2,6.8-0.4,11.3-5,27.5c-2.2-1.7-6-2.1-8.3-0.7 c-1.3,0.7-2,1.8-1.8,3c-0.9-8-1.2-12.7-1-16.8C50.3,19.7,51.3,16.1,52.5,13z"
                    />
                  </defs>
                  <clipPath id="SVGID_216_">
                    <use xlinkHref="#SVGID_215_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_216_)">
                    <g>
                      <path
                        fill="#815E00"
                        d="M65.3,7c-1.2-3.4-3.2-5.2-3.3-5.3c-0.1,0-0.1,0.1-0.2,0.1c-0.2,0.1-0.3,0.2-0.5,0.3 c-0.4,0.3-0.4,0.3-0.7,0.5C60,3,59.9,3,59.6,3.3c-0.7,0.5-0.7,0.6-1.1,0.9c-0.7,0.7-0.8,0.7-1.2,1.2 c-0.8,0.8-0.8,0.9-1.3,1.5l-0.3,0.4c0.3-0.4,0.7-0.7,1.3-1C59.3,4.9,63,5.2,65.3,7z M65.9,9.2c-2.8-2.1-7.3-2.5-10.2-0.9 c-0.8,0.5-1.5,1.1-1.8,1.7c0.3-0.4,0.6-1,0.8-1.4c0.7-1.1,0.8-1.1,1.3-1.8c0.8-0.9,0.8-1,1.3-1.5C58,4.6,58,4.6,58.5,4.2 c0.7-0.6,0.7-0.6,1.1-0.9c0.6-0.5,0.6-0.5,0.9-0.7C61,2.2,61,2.2,61.2,2.1c0.3-0.2,0.3-0.2,0.5-0.3c0.1,0,0.1-0.1,0.2-0.1 C62.1,1.8,65,4.4,65.9,9.2z"
                      />
                    </g>
                    <g>
                      <path
                        fill="#FFC400"
                        d="M62.4,4.6c0.5,0.1,1.1,0.3,1.6,0.5c-0.3-0.6-1-2.2-2-3.5C62,1.9,62,1.9,62.4,4.6z M58.3,4.8 c0.5-0.2,1-0.3,1.5-0.4c0.2-0.5,0.9-2.1,2.1-2.8c0,0-0.1,0-0.1,0.1C60.4,2.5,59.3,3.5,58.3,4.8z M65.3,7 c-2.3-1.7-6-2.1-8.4-0.7c-0.5,0.3-1,0.7-1.3,1l0.3-0.4c0.8-0.9,0.8-1,1.3-1.5C58,4.6,58,4.6,58.5,4.2 c0.7-0.6,0.7-0.6,1.1-0.9c0.6-0.5,0.6-0.5,0.9-0.7C61,2.2,61,2.2,61.2,2.1c0.3-0.2,0.3-0.2,0.5-0.3c0.1,0,0.1-0.1,0.2-0.1 C62.1,1.8,64.1,3.6,65.3,7z"
                      />
                    </g>
                    <g>
                      <path
                        fill="#815E00"
                        d="M58.3,4.8c0.5-0.2,1-0.3,1.5-0.4c0.2-0.5,0.9-2.1,2.1-2.8c0,0-0.1,0-0.1,0.1 C60.4,2.5,59.3,3.5,58.3,4.8z"
                      />
                    </g>
                    <g>
                      <path
                        fill="#815E00"
                        d="M62.4,4.6c0.5,0.1,1.1,0.3,1.6,0.5c-0.3-0.6-1-2.2-2-3.5C62,1.9,62,1.9,62.4,4.6z"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g enableBackground="new    ">
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_217_"
                      d="M62.6,42.8c0.5-1.2,0-2.6-1.4-3.7c4.5-16.3,5.2-20.8,5-27.5c-0.2-6.3-4-9.6-4.2-9.8 c0.6,0.6,1.7,1.8,2.8,3.4c1.1,1.7,1.8,3.2,2.2,4.2c0.1,0.3,0.5,1.2,0.7,2.2c0.1,0.4,0.2,1,0.3,1.4c0.1,0.3,0.1,0.7,0.2,1.1 c0.1,0.8,0.3,3.4,0.3,4.6c0,0.9,0,2.6-0.2,4.6c-0.2,2-0.5,3.8-0.8,4.9c-0.4,1.5-0.4,1.6-0.7,2.7c-0.4,1.6-0.9,3-0.9,3 C64.7,37.2,64,39.1,62.6,42.8z"
                    />
                  </defs>
                  <clipPath id="SVGID_218_">
                    <use xlinkHref="#SVGID_217_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_218_)" enableBackground="new    ">
                    <g>
                      <path
                        fill="#929273"
                        d="M62.6,42.8c4.8-12.5,6-17.5,5.9-24.3c-0.1-4.9-0.8-7.2-1.6-9.2c-1.3-3.5-3.4-6.2-5-7.6 c0.2,0.2,4,3.6,4.2,9.8c0.2,6.8-0.4,11.3-5,27.5C62.6,40.1,63,41.5,62.6,42.8z"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_219_"
                      d="M62.6,42.8c0.5-1.2,0-2.6-1.4-3.7c4.5-16.3,5.2-20.8,5-27.5c-0.2-6.3-4-9.6-4.2-9.8 c0.6,0.6,1.7,1.8,2.8,3.4c1.1,1.7,1.8,3.2,2.2,4.2c0.1,0.3,0.5,1.2,0.7,2.2c0.1,0.4,0.2,1,0.3,1.4c0.1,0.3,0.1,0.7,0.2,1.1 c0.1,0.8,0.3,3.4,0.3,4.6c0,0.9,0,2.6-0.2,4.6c-0.2,2-0.5,3.8-0.8,4.9c-0.4,1.5-0.4,1.6-0.7,2.7c-0.4,1.6-0.9,3-0.9,3 C64.7,37.2,64,39.1,62.6,42.8z"
                    />
                  </defs>
                  <clipPath id="SVGID_220_">
                    <use xlinkHref="#SVGID_219_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_220_)">
                    <g>
                      <path
                        fill="#815E00"
                        d="M65.3,7c0.7,0.5,1.1,1.1,1.4,1.7l-0.2-0.5c-0.5-1.1-0.5-1.1-0.9-1.7c-0.5-1-0.5-1-0.9-1.5 c-0.5-0.8-0.5-0.8-0.8-1.2c-0.5-0.6-0.5-0.6-0.7-0.9c-0.4-0.4-0.4-0.4-0.6-0.7C62.2,2,62.2,2,62.1,1.9 C62,1.8,62,1.7,61.9,1.7C62.1,1.8,64.1,3.6,65.3,7z M65.9,9.2C65,4.4,62.1,1.8,62,1.7c0.1,0.1,0.1,0.1,0.2,0.2 c0.2,0.2,0.2,0.2,0.4,0.4c0.3,0.4,0.4,0.4,0.6,0.7c0.4,0.5,0.5,0.6,0.7,0.9c0.5,0.7,0.5,0.7,0.8,1.2 c0.5,0.8,0.6,0.9,0.9,1.5c0.5,1,0.6,1.1,0.9,1.7c0.5,1.1,0.5,1.2,0.8,2c0.1,0.5,0.3,1.1,0.5,1.6 C67.5,10.9,66.9,10,65.9,9.2z"
                      />
                    </g>
                    <g>
                      <path
                        fill="#FFC400"
                        d="M65.3,7c-1.2-3.4-3.2-5.2-3.3-5.3c0.1,0.1,0.1,0.1,0.2,0.2c0.2,0.2,0.2,0.2,0.4,0.4 c0.3,0.4,0.4,0.4,0.6,0.7c0.4,0.5,0.5,0.6,0.7,0.9c0.5,0.7,0.5,0.7,0.8,1.2c0.5,0.8,0.6,0.9,0.9,1.5c0.5,1,0.6,1.1,0.9,1.7 l0.2,0.5C66.4,8.1,66,7.5,65.3,7z"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g enableBackground="new    ">
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_221_"
                      d="M51,41.3c-0.4-3.9-0.7-5.9-0.9-9.6c0,0-0.1-1.5-0.1-3.1c0-1.1,0-1.6,0-2.8c0-0.7,0.1-2.6,0.4-5 c0.3-2,0.7-3.6,1-4.5c0.3-1.2,1.1-3.6,1.5-4.3c0.1-0.3,0.3-0.7,0.4-1c0.2-0.4,0.4-0.9,0.7-1.2C54.5,8.8,55,8,55.2,7.8 c2.4-3.3,5.4-5.4,6.8-6.1c0.7,0.6,1.7,1.8,2.7,3.3c1.2,1.9,1.9,3.5,2.2,4.1c0.7,1.8,1,2.9,1.3,4.5c0.3,1.7,0.4,4.8,0.4,4.8 c0,1.2,0,1.4,0,2.3c0,0.8-0.1,1.6-0.1,2.3c-0.1,0.5-0.1,1.3-0.3,2.4c-0.2,1.4-0.5,2.5-0.5,2.5c-0.4,1.6-0.4,1.7-0.7,2.7 c-0.4,1.5-0.9,3-0.9,3c-0.6,1.7-1.4,4.1-3.3,9.1c-0.3,0.7-0.8,1.3-1.7,1.8c-2.4,1.3-6.1,1-8.3-0.7 C51.7,43,51.1,42.1,51,41.3z"
                    />
                  </defs>
                  <clipPath id="SVGID_222_">
                    <use xlinkHref="#SVGID_221_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_222_)" enableBackground="new    ">
                    <g>
                      <path
                        fill="#FFFFC9"
                        d="M51,41.3c-1.5-13.3-1.4-18.5,0.4-25c1.3-4.7,2.6-6.8,3.8-8.5c3-4.2,6.7-6.1,6.8-6.1 c0.1,0,3.2,3.1,4.9,7.4c0.7,1.7,1.6,4,1.7,9.3c0.1,6.8-1.1,11.8-5.9,24.3c-0.3,0.7-0.8,1.3-1.7,1.8c-2.4,1.3-6.1,1-8.3-0.7 C51.7,43,51.1,42.1,51,41.3z"
                      />
                    </g>
                    <g>
                      <path
                        fill="#FFFFC9"
                        d="M62.1,1.8c0.2,0.2,0.2,0.2,0.4,0.4l0.3,0.3c0.1,0.1,0.2,0.3,0.3,0.4l0.3,0.4 c0.1,0.1,0.3,0.4,0.4,0.5l0.4,0.5c0.1,0.2,0.3,0.5,0.5,0.7l0.4,0.7c0.1,0.3,0.3,0.6,0.5,0.8L66,7.2c0.1,0.3,0.3,0.7,0.5,1 l0.4,0.9c0.1,0.3,0.3,0.8,0.4,1.1l0.3,1c0.1,0.4,0.2,0.9,0.3,1.3l0.2,1.1c0.1,0.4,0.1,1,0.2,1.4l0.1,1.1 c0,0.3,0,0.8,0.1,1.1l0,1.1c0,0.3,0,0.8,0,1.2l0,1.1c0,0.4,0,0.8-0.1,1.2L68.4,23c0,0.4-0.1,0.9-0.1,1.2l-0.2,1.2 c-0.1,0.4-0.2,0.9-0.2,1.3l-0.3,1.3c-0.1,0.4-0.2,1-0.3,1.4l-0.4,1.4c-0.1,0.4-0.3,1-0.4,1.5L66,33.7 c-0.2,0.5-0.4,1.1-0.5,1.6L64.8,37c-0.2,0.5-0.5,1.3-0.7,1.8l-0.7,1.9c-0.2,0.6-0.5,1.4-0.8,2.1c-0.3,0.7-0.8,1.3-1.7,1.8 c-2.4,1.3-6.1,1-8.3-0.7c-1-0.7-1.5-1.6-1.6-2.5c-0.1-0.7-0.2-1.5-0.3-2.2c-0.1-0.6-0.1-1.4-0.2-2l-0.2-1.9 c0-0.5-0.1-1.3-0.1-1.8l-0.1-1.7c0-0.5-0.1-1.1-0.1-1.6l0-1.5c0-0.4,0-1,0-1.5l0-1.3c0-0.4,0-1,0-1.4l0.1-1.2 c0-0.4,0.1-0.9,0.1-1.3l0.1-1.1c0.1-0.4,0.1-0.8,0.2-1.2l0.2-1.1c0.1-0.3,0.2-0.8,0.3-1.1l0.3-1.1c0.1-0.3,0.2-0.8,0.3-1.1 l0.3-1.1c0.1-0.3,0.3-0.8,0.4-1.1l0.4-1c0.2-0.4,0.4-0.9,0.6-1.3L54,9.8c0.2-0.3,0.5-0.8,0.7-1.1l0.6-0.8 C55.5,7.6,55.8,7.2,56,7l0.6-0.7c0.2-0.2,0.5-0.5,0.7-0.8l0.6-0.6c0.2-0.2,0.4-0.4,0.7-0.6l0.5-0.5 c0.2-0.1,0.4-0.3,0.6-0.5L60.2,3c0.1-0.1,0.3-0.2,0.5-0.3L61,2.4c0.1-0.1,0.3-0.2,0.4-0.2L61.6,2c0.1,0,0.2-0.1,0.3-0.1 L62,1.8L62.1,1.8L62.1,1.8c-0.3,1.2-0.2,1.4,0,1.7C62.2,3,62.2,2.6,62.1,1.8L62.1,1.8L62.1,1.8z"
                      />
                    </g>
                    <g>
                      <path
                        fill="#F9FBFB"
                        d="M62.1,1.8c0.2,0.2,0.2,0.2,0.4,0.4l0.3,0.3c0.1,0.1,0.2,0.3,0.3,0.4l0.3,0.4 c0.1,0.1,0.3,0.4,0.4,0.5l0.4,0.5c0.1,0.2,0.3,0.5,0.5,0.7l0.4,0.7c0.1,0.3,0.3,0.6,0.5,0.8L66,7.2c0.1,0.3,0.3,0.7,0.5,1 l0.4,0.9c0.1,0.3,0.3,0.8,0.4,1.1l0.3,1c0.1,0.4,0.2,0.9,0.3,1.3l0.2,1.1c0.1,0.4,0.1,1,0.2,1.4l0.1,1.1 c0,0.3,0,0.8,0.1,1.1l0,1.1c0,0.3,0,0.8,0,1.2l0,1.1c0,0.4,0,0.8-0.1,1.2L68.4,23c0,0.4-0.1,0.9-0.1,1.2l-0.2,1.2 c-0.1,0.4-0.2,0.9-0.2,1.3l-0.3,1.3c-0.1,0.4-0.2,1-0.3,1.4l-0.4,1.4c-0.1,0.4-0.3,1-0.4,1.5L66,33.7 c-0.2,0.5-0.4,1.1-0.5,1.6L64.8,37c-0.2,0.5-0.5,1.3-0.7,1.8l-0.7,1.9c-0.2,0.6-0.5,1.4-0.8,2.1c-0.3,0.7-0.8,1.3-1.7,1.8 c-2.4,1.3-6.1,1-8.3-0.7c-1-0.7-1.5-1.6-1.6-2.5c-0.1-0.7-0.2-1.5-0.3-2.2c-0.1-0.6-0.1-1.4-0.2-2l-0.2-1.9 c0-0.5-0.1-1.3-0.1-1.8l-0.1-1.7c0-0.5-0.1-1.1-0.1-1.6l0-1.5c0-0.4,0-1,0-1.5l0-1.3c0-0.4,0-1,0-1.4l0.1-1.2 c0-0.4,0.1-0.9,0.1-1.3l0.1-1.1c0.1-0.4,0.1-0.8,0.2-1.2l0.2-1.1c0.1-0.3,0.2-0.8,0.3-1.1l0.3-1.1c0.1-0.3,0.2-0.8,0.3-1.1 l0.3-1.1c0.1-0.3,0.3-0.8,0.4-1.1l0.4-1c0.2-0.4,0.4-0.9,0.6-1.3L54,9.8c0.2-0.3,0.5-0.8,0.7-1.1l0.6-0.8 C55.5,7.6,55.8,7.2,56,7l0.6-0.7c0.2-0.2,0.5-0.5,0.7-0.8l0.6-0.6c0.2-0.2,0.4-0.4,0.7-0.6l0.5-0.5 c0.2-0.1,0.4-0.3,0.6-0.5L60.2,3c0.1-0.1,0.3-0.2,0.5-0.3L61,2.4c0.1-0.1,0.3-0.2,0.4-0.2L61.6,2c0.1,0,0.2-0.1,0.3-0.1 L62,1.8L62.1,1.8l-0.2,0c-4.7,7.2-3,15,0.6,14.3c3.5-0.7,3.8-8.4-0.7-14.4L62,1.8L62.1,1.8z"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_223_"
                      d="M51,41.3c-0.4-3.9-0.7-5.9-0.9-9.6c0,0-0.1-1.5-0.1-3.1c0-1.1,0-1.6,0-2.8c0-0.7,0.1-2.6,0.4-5 c0.3-2,0.7-3.6,1-4.5c0.3-1.2,1.1-3.6,1.5-4.3c0.1-0.3,0.3-0.7,0.4-1c0.2-0.4,0.4-0.9,0.7-1.2C54.5,8.8,55,8,55.2,7.8 c2.4-3.3,5.4-5.4,6.8-6.1c0.7,0.6,1.7,1.8,2.7,3.3c1.2,1.9,1.9,3.5,2.2,4.1c0.7,1.8,1,2.9,1.3,4.5c0.3,1.7,0.4,4.8,0.4,4.8 c0,1.2,0,1.4,0,2.3c0,0.8-0.1,1.6-0.1,2.3c-0.1,0.5-0.1,1.3-0.3,2.4c-0.2,1.4-0.5,2.5-0.5,2.5c-0.4,1.6-0.4,1.7-0.7,2.7 c-0.4,1.5-0.9,3-0.9,3c-0.6,1.7-1.4,4.1-3.3,9.1c-0.3,0.7-0.8,1.3-1.7,1.8c-2.4,1.3-6.1,1-8.3-0.7 C51.7,43,51.1,42.1,51,41.3z"
                    />
                  </defs>
                  <clipPath id="SVGID_224_">
                    <use xlinkHref="#SVGID_223_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_224_)">
                    <g>
                      <path
                        fill="#FF2845"
                        d="M62.1,1.8c0.2,0.2,0.2,0.2,0.4,0.4c0.3,0.4,0.4,0.4,0.6,0.7c0.4,0.5,0.5,0.6,0.7,0.9 c0.5,0.7,0.5,0.7,0.8,1.2c0.5,0.8,0.6,0.9,0.9,1.5c0.5,1,0.6,1.1,0.9,1.7l0.2,0.5c0.6,1.4,0.1,2.9-1.6,3.8 c-2.4,1.3-6.2,1-8.4-0.7c-1.8-1.3-2.1-3.1-1-4.5L56,6.9c0.8-0.9,0.8-1,1.3-1.5c0.8-0.8,0.8-0.8,1.2-1.2 c0.7-0.6,0.7-0.6,1.1-0.9c0.6-0.5,0.6-0.5,0.9-0.7c0.5-0.3,0.5-0.3,0.7-0.5c0.3-0.2,0.3-0.2,0.5-0.3c0.1,0,0.1-0.1,0.2-0.1 C62,1.7,62.1,1.8,62.1,1.8z M62.1,1.8C62.1,1.8,62,1.7,62,1.7c-0.1,0-0.1,0.1-0.2,0.1c-0.2,0.1-0.3,0.2-0.5,0.3 c-0.4,0.3-0.4,0.3-0.7,0.5C60,3,60,3,59.6,3.3c-0.7,0.5-0.7,0.6-1.1,0.9c-0.7,0.7-0.8,0.7-1.2,1.2 c-0.8,0.8-0.8,0.9-1.3,1.5c-0.7,1-0.8,1.1-1.3,1.8c-0.3,0.4-0.6,1-0.8,1.4c-0.9,1.6-0.4,3.5,1.6,5 c2.8,2.1,7.3,2.5,10.2,0.9c1.8-1,2.5-2.6,2.1-4.1c-0.1-0.5-0.3-1.1-0.5-1.6c-0.4-1.2-0.5-1.3-0.8-2C66,7.1,66,7.1,65.6,6.5 c-0.5-1-0.5-1-0.9-1.5c-0.5-0.8-0.5-0.8-0.8-1.2c-0.5-0.6-0.5-0.6-0.7-0.9c-0.4-0.4-0.4-0.4-0.6-0.7 C62.2,2,62.2,1.9,62.1,1.8z"
                      />
                    </g>
                    <g>
                      <path
                        fill="#FF2845"
                        d="M61.8,1.7c0,0,0.1,0,0.1-0.1C61.9,1.7,61.9,1.7,61.8,1.7z M62.1,1.8C62.1,1.8,62,1.7,62,1.7 c-0.1,0-0.1,0.1-0.2,0.1c-0.2,0.1-0.3,0.2-0.5,0.3c-0.4,0.3-0.4,0.3-0.7,0.5C60,3,60,3,59.6,3.3c-0.7,0.5-0.7,0.6-1.1,0.9 c-0.7,0.7-0.8,0.7-1.2,1.2c-0.8,0.8-0.8,0.9-1.3,1.5l-0.3,0.4c-1,1.4-0.7,3.1,1,4.5c2.3,1.7,6,2.1,8.4,0.7 c1.7-0.9,2.2-2.4,1.6-3.8l-0.2-0.5C66,7.1,66,7.1,65.6,6.5c-0.5-1-0.5-1-0.9-1.5c-0.5-0.8-0.5-0.8-0.8-1.2 c-0.5-0.6-0.5-0.6-0.7-0.9c-0.4-0.4-0.4-0.4-0.6-0.7C62.2,2,62.2,1.9,62.1,1.8z"
                      />
                    </g>
                    <g>
                      <path
                        fill="#815E00"
                        d="M61.8,1.7c0,0,0.1,0,0.1-0.1C61.9,1.7,61.9,1.7,61.8,1.7z"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
        <g>
          <path
            fill="#FF5C72"
            d="M63.4,38.6c0,0,2.8,0.2,2.4,5.4c-0.2,2.9-0.8,5.4-0.8,5.4L61.4,44L63.4,38.6z"
          />
        </g>
      </g>
      <g>
        <path
          fill="#FF2845"
          d="M53.9,36.8c0,0-1.9,0.8-2.7,3.7c-1.4,4.6-0.9,8.3-0.9,8.3l3.5-4.8L53.9,36.8z"
        />
      </g>
      <g>
        <g enableBackground="new    ">
          <g enableBackground="new    ">
            <g>
              <g>
                <defs>
                  <path
                    id="SVGID_225_"
                    d="M56,27.9l-1,0.4c-0.4,0.2-1,0.2-1.6-0.2l1-0.4C55,28.1,55.6,28.2,56,27.9z"
                  />
                </defs>
                <clipPath id="SVGID_226_">
                  <use xlinkHref="#SVGID_225_" overflow="visible" />
                </clipPath>
                <g clipPath="url(#SVGID_226_)" enableBackground="new    ">
                  <g>
                    <path
                      fill="#E3EBEB"
                      d="M53.4,28.2l1-0.4c0.6,0.3,1.2,0.4,1.6,0.2l-1,0.4C54.6,28.6,54,28.6,53.4,28.2z"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
          <g enableBackground="new    ">
            <g>
              <path
                id="SVGID_11_"
                fill="#E3EBEB"
                d="M52.3,22.4l1-0.4c-0.5,0.2-0.9,0.8-1,1.7c-0.1,1.6,0.8,3.4,2.1,4.2l-1,0.4 c-1.3-0.7-2.2-2.6-2.1-4.2C51.4,23.2,51.8,22.6,52.3,22.4z"
              />
            </g>
            <g>
              <g>
                <defs>
                  <path
                    id="SVGID_227_"
                    d="M52.3,22.4l1-0.4c-0.5,0.2-0.9,0.8-1,1.7c-0.1,1.6,0.8,3.4,2.1,4.2l-1,0.4c-1.3-0.7-2.2-2.6-2.1-4.2 C51.4,23.2,51.8,22.6,52.3,22.4z"
                  />
                </defs>
                <clipPath id="SVGID_228_">
                  <use xlinkHref="#SVGID_227_" overflow="visible" />
                </clipPath>
                <g clipPath="url(#SVGID_228_)">
                  <g>
                    <path
                      fill="#E3EBEB"
                      d="M52.3,22.4l1-0.4c-0.5,0.2-0.9,0.8-1,1.7c-0.1,1.6,0.8,3.4,2.1,4.2l-1,0.4c-1.3-0.7-2.2-2.6-2.1-4.2 C51.4,23.2,51.8,22.6,52.3,22.4z"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
          <g enableBackground="new    ">
            <g>
              <path
                id="SVGID_13_"
                fill="#E3EBEB"
                d="M51.9,21.4l1-0.4c0.6-0.3,1.4-0.2,2.2,0.2l-1,0.4C53.2,21.2,52.5,21.1,51.9,21.4z"
              />
            </g>
            <g>
              <g>
                <defs>
                  <path
                    id="SVGID_229_"
                    d="M51.9,21.4l1-0.4c0.6-0.3,1.4-0.2,2.2,0.2l-1,0.4C53.2,21.2,52.5,21.1,51.9,21.4z"
                  />
                </defs>
                <clipPath id="SVGID_230_">
                  <use xlinkHref="#SVGID_229_" overflow="visible" />
                </clipPath>
                <g clipPath="url(#SVGID_230_)">
                  <g>
                    <path
                      fill="#E3EBEB"
                      d="M51.9,21.4l1-0.4c0.6-0.3,1.4-0.2,2.2,0.2l-1,0.4C53.2,21.2,52.5,21.1,51.9,21.4z"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
          <g enableBackground="new    ">
            <g>
              <g>
                <defs>
                  <path
                    id="SVGID_231_"
                    d="M56.5,29l-1,0.4c0.7-0.3,1.2-1.1,1.3-2.2c0.2-2.1-1.1-4.6-2.8-5.6l1-0.4c1.7,1,3,3.5,2.8,5.6 C57.7,27.9,57.2,28.6,56.5,29z"
                  />
                </defs>
                <clipPath id="SVGID_232_">
                  <use xlinkHref="#SVGID_231_" overflow="visible" />
                </clipPath>
                <g clipPath="url(#SVGID_232_)" enableBackground="new    ">
                  <g>
                    <path
                      fill="#E3EBEB"
                      d="M54,21.6l1-0.4c1.7,1,3,3.5,2.8,5.6c-0.1,1.1-0.6,1.9-1.3,2.2l-1,0.4c0.7-0.3,1.2-1.1,1.3-2.2 C57,25.1,55.7,22.6,54,21.6z"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
          <path
            fill="#C0D5EB"
            d="M53.9,28c1.3,0.7,2.5,0.1,2.6-1.5c0.1-1.6-0.8-3.4-2.1-4.2c-1.3-0.7-2.5-0.1-2.6,1.5 C51.7,25.4,52.6,27.2,53.9,28z"
          />
          <path
            fill="#B7CBE0"
            d="M51.8,23.8c0.1-1,0.6-1.6,1.3-1.7c-0.3,0.3-0.5,0.8-0.6,1.4c-0.1,1.6,0.8,3.4,2.1,4.2 c0.5,0.3,1,0.4,1.4,0.3c-0.5,0.4-1.2,0.5-2,0.1C52.6,27.2,51.7,25.4,51.8,23.8z"
          />
          <g>
            <g>
              <path
                fill="#F9FBFB"
                d="M54,21.6c1.7,1,3,3.5,2.8,5.6c-0.2,2.1-1.7,3-3.5,2c-1.7-1-3-3.5-2.8-5.6C50.7,21.5,52.3,20.6,54,21.6z  M53.4,28.2c1.3,0.7,2.5,0.1,2.6-1.5c0.1-1.6-0.8-3.4-2.1-4.2c-1.3-0.7-2.5-0.1-2.6,1.5C51.2,25.6,52.2,27.5,53.4,28.2z"
              />
            </g>
          </g>
        </g>
      </g>
      <g>
        <path
          fill="#545454"
          d="M62,1.7c-0.2,0.1-6.1,4.5-7.9,11.9c-1.9,7.5-2.4,10.1-2.2,17.1c0.1,3.9,0.4,9.1,0.7,13 c-0.9-0.7-1.4-1.6-1.5-2.4c-0.1-0.7-0.2-1.5-0.3-2.2c-0.1-0.6-0.1-1.4-0.2-2l-0.2-1.9c0-0.5-0.1-1.3-0.1-1.8l-0.1-1.7 c0-0.5-0.1-1.1-0.1-1.6l-0.1-1.5c0-0.4,0-1,0-1.5l0-1.3c0-0.4,0-0.9,0.1-1.4l0.1-1.2c0-0.4,0.1-0.9,0.1-1.3l0.1-1.1 c0.1-0.4,0.1-0.8,0.2-1.2l0.2-1.1c0.1-0.3,0.2-0.8,0.3-1.1l0.3-1.1c0.1-0.3,0.2-0.8,0.3-1.1l0.3-1.1c0.1-0.3,0.3-0.8,0.4-1.1 l0.4-1c0.2-0.4,0.4-0.9,0.6-1.3l0.5-0.9c0.2-0.3,0.5-0.8,0.7-1.1l0.6-0.8c0.2-0.3,0.5-0.7,0.7-0.9l0.6-0.7C56.7,6,57,5.7,57.2,5.4 l0.6-0.6c0.2-0.2,0.4-0.4,0.7-0.6L59,3.8c0.2-0.1,0.4-0.3,0.6-0.5L60,3c0.1-0.1,0.3-0.2,0.5-0.3l0.4-0.3c0.1-0.1,0.3-0.2,0.4-0.2 l0.3-0.2c0.1,0,0.2-0.1,0.3-0.1L62,1.7L62,1.7z"
        />
      </g>
      <g>
        <path
          fill="#EDEDED"
          d="M62.5,17.4c0,0,0.5,5-0.4,10.4s-4,17-4,17s1.6-0.1,2.4-0.7c1.5-2.9,7.4-16.9,6.2-28.2 C65.1,17.3,62.5,17.4,62.5,17.4z"
        />
      </g>
      <g>
        <path
          fill="#EDEDED"
          d="M62,2c0,0,1,6.7,0.2,14.4c2.9-0.5,4.2-1.3,4.5-2.1C66.7,12.1,62,2,62,2z"
        />
      </g>
    </motion.g>
    <g id="chat">
      <g>
        <g enableBackground="new    ">
          <g>
            <path
              fill="#E8EFEF"
              d="M24.7,50.8L24,50.4c-0.4-0.2-0.6-0.7-0.6-1.4l0.7,0.4C24.1,50,24.3,50.5,24.7,50.8z"
            />
          </g>
          <g>
            <path
              fill="#E8EFEF"
              d="M43.4,31.8l0.7,0.4c-0.4-0.2-0.9-0.2-1.5,0.1l-0.7-0.4C42.5,31.6,43,31.6,43.4,31.8z"
            />
          </g>
          <g>
            <polygon
              fill="#E8EFEF"
              points="24.1,49.4 23.4,48.9 23.3,45.2 24,45.6  "
            />
          </g>
          <g>
            <polygon
              fill="#E8EFEF"
              points="26.1,41.9 25.4,41.4 41.9,31.9 42.6,32.4  "
            />
          </g>
          <g>
            <path
              fill="#E8EFEF"
              d="M24,45.6l-0.7-0.4c0-1.4,1-3,2.1-3.7l0.7,0.4C25,42.5,24,44.2,24,45.6z"
            />
          </g>
          <g>
            <path
              fill="#FAFCFC"
              d="M42.6,32.4c1.2-0.7,2.2-0.1,2.2,1.2l0.1,3.8c0,1.4-1,3-2.1,3.7l-16.5,9.5c-1.2,0.7-2.2,0.1-2.2-1.2 L24,45.6c0-1.4,1-3,2.1-3.7L42.6,32.4z"
            />
          </g>
        </g>
      </g>
      <g>
        <g enableBackground="new    ">
          <g>
            <path
              fill="#C0D5EB"
              d="M26.8,48.8l-0.5-0.3c-0.1-0.1-0.2-0.2-0.2-0.4l0.5,0.3C26.7,48.6,26.7,48.7,26.8,48.8z"
            />
          </g>
          <g>
            <path
              fill="#C0D5EB"
              d="M30.2,41.9l0.5,0.3c-0.1-0.1-0.3-0.1-0.4,0l-0.5-0.3C29.9,41.8,30.1,41.8,30.2,41.9z"
            />
          </g>
          <g>
            <polygon
              fill="#C0D5EB"
              points="26.7,48.4 26.2,48.1 26.2,44.7 26.7,44.9  "
            />
          </g>
          <g>
            <polygon
              fill="#C0D5EB"
              points="27.3,43.9 26.8,43.6 29.8,41.9 30.3,42.2  "
            />
          </g>
          <g>
            <path
              fill="#C0D5EB"
              d="M26.7,44.9l-0.5-0.3c0-0.4,0.3-0.8,0.6-1l0.5,0.3C26.9,44.1,26.6,44.6,26.7,44.9z"
            />
          </g>
          <g>
            <path
              fill="#D4E8FF"
              d="M30.3,42.2c0.3-0.2,0.6,0,0.6,0.3V46c0,0.4-0.3,0.8-0.6,1l-3,1.7c-0.3,0.2-0.6,0-0.6-0.3v-3.4 c0-0.4,0.3-0.8,0.6-1L30.3,42.2z"
            />
          </g>
        </g>
        <g enableBackground="new    ">
          <g>
            <path
              fill="#C0D5EB"
              d="M39.5,38.9l0.5,0.3c-0.1-0.1-0.3,0-0.4,0l-0.5-0.3C39.2,38.8,39.4,38.8,39.5,38.9z"
            />
          </g>
          <g>
            <polygon
              fill="#C0D5EB"
              points="33.3,42.8 32.8,42.5 39.1,38.9 39.6,39.2  "
            />
          </g>
          <g>
            <path
              fill="#C0D5EB"
              d="M32.9,44.1l-0.5-0.3c-0.1-0.1-0.2-0.2-0.2-0.4c0-0.4,0.3-0.8,0.6-1l0.5,0.3c-0.3,0.2-0.6,0.6-0.6,1 C32.8,44,32.8,44.1,32.9,44.1z"
            />
          </g>
          <g>
            <path
              fill="#D4E8FF"
              d="M39.6,39.2c0.3-0.2,0.6,0,0.6,0.3c0,0.4-0.3,0.8-0.6,1l-6.2,3.6c-0.3,0.2-0.6,0-0.6-0.3s0.3-0.8,0.6-1 L39.6,39.2z"
            />
          </g>
        </g>
        <g enableBackground="new    ">
          <g>
            <path
              fill="#C0D5EB"
              d="M43.3,34.3l0.5,0.3c-0.1-0.1-0.3,0-0.4,0l-0.5-0.3C43,34.2,43.2,34.2,43.3,34.3z"
            />
          </g>
          <g>
            <polygon
              fill="#C0D5EB"
              points="33.3,40.4 32.8,40.1 42.9,34.3 43.4,34.6  "
            />
          </g>
          <g>
            <path
              fill="#C0D5EB"
              d="M32.9,41.8l-0.5-0.3c-0.1-0.1-0.2-0.2-0.2-0.4c0-0.4,0.3-0.8,0.6-1l0.5,0.3c-0.3,0.2-0.6,0.6-0.6,1 C32.8,41.6,32.8,41.7,32.9,41.8z"
            />
          </g>
          <g>
            <path
              fill="#D4E8FF"
              d="M43.4,34.6c0.3-0.2,0.6,0,0.6,0.3c0,0.4-0.3,0.8-0.6,1l-10,5.8c-0.3,0.2-0.6,0-0.6-0.3 c0-0.4,0.3-0.8,0.6-1L43.4,34.6z"
            />
          </g>
        </g>
      </g>
    </g>
    <g id="dotBox">
      <g>
        <path
          fill="#F2F2F2"
          d="M22.9,35.1c-1.5,1.8,1.1,4.4,1.1,4.4s-3.3-0.1-3.8-3.4C21.4,34.8,22.9,35.1,22.9,35.1z"
        />
        <linearGradient
          id="SVGID_233_"
          gradientUnits="userSpaceOnUse"
          x1={21.1503}
          y1={-1035.5396}
          x2={78.154}
          y2={-1134.2731}
          gradientTransform="matrix(0.2121 0 0 0.2121 2.2691 264.577)"
        >
          <stop
            offset={0.00810811}
            style={{
              stopColor: "#CAE3E3",
            }}
          />
          <stop
            offset={0.0653658}
            style={{
              stopColor: "#E3EBEB",
            }}
          />
          <stop
            offset={0.1809}
            style={{
              stopColor: "#E3EBEB",
            }}
          />
          <stop
            offset={0.2115}
            style={{
              stopColor: "#E7EEEE",
            }}
          />
          <stop
            offset={0.3641}
            style={{
              stopColor: "#F4F8F8",
            }}
          />
          <stop
            offset={0.559}
            style={{
              stopColor: "#FCFDFD",
            }}
          />
          <stop
            offset={0.9392}
            style={{
              stopColor: "#FEFFFF",
            }}
          />
          <stop
            offset={0.9683}
            style={{
              stopColor: "#F4F7F7",
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: "#E3EBEB",
            }}
          />
        </linearGradient>
        <path
          fill="url(#SVGID_233_)"
          d="M22.7,26.2C22,25.8,21,25.9,20,26.5L6.7,34.2c-2.1,1.2-3.9,4.2-3.9,6.7c0,1.2,0.4,2.1,1.1,2.5 l1.6,0.9c-0.7-0.4-1.1-1.3-1.1-2.5c0-2.4,1.7-5.5,3.9-6.7l13.3-7.7c1.1-0.6,2-0.7,2.7-0.3L22.7,26.2z"
        />
        <g>
          <path
            fill="#218BFF"
            d="M21.6,27.9c1.9-1.1,3.4-0.2,3.5,2c0,2.2-1.5,4.8-3.4,5.9L8.3,43.5c-1.9,1.1-3.4,0.2-3.5-2 c0-2.2,1.5-4.8,3.4-5.9L21.6,27.9z"
          />
        </g>
        <g>
          <path
            fill="#F2F2F2"
            d="M21.6,27.4c2.1-1.2,3.9-0.2,3.9,2.2c0,2.4-1.7,5.5-3.9,6.7L8.3,44c-2.1,1.2-3.9,0.2-3.9-2.2 c0-2.4,1.7-5.5,3.9-6.7L21.6,27.4z M21.6,35.8c1.9-1.1,3.4-3.8,3.4-5.9s-1.6-3-3.5-2L8.3,35.6c-1.9,1.1-3.4,3.8-3.4,5.9 c0,2.2,1.6,3,3.5,2L21.6,35.8z"
          />
        </g>
        <g>
          <g enableBackground="new    ">
            <g enableBackground="new    ">
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_234_"
                      d="M11.5,36.5l0.5,0.3c-0.3-0.1-0.6-0.1-1,0.1l-0.5-0.3C10.8,36.4,11.2,36.4,11.5,36.5z"
                    />
                  </defs>
                  <clipPath id="SVGID_235_">
                    <use xlinkHref="#SVGID_234_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_235_)">
                    <path
                      fill="#D8E3E3"
                      d="M10.9,36.9l-0.5-0.3c0.4-0.2,0.8-0.3,1-0.1l0.5,0.3C11.7,36.7,11.3,36.7,10.9,36.9z"
                    />
                  </g>
                </g>
              </g>
            </g>
            <g enableBackground="new    ">
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_236_"
                      d="M9.9,40.3L9.5,40C9.2,39.9,9,39.6,9,39.1c0-0.9,0.6-2,1.4-2.5l0.5,0.3c-0.8,0.4-1.4,1.6-1.4,2.5 C9.5,39.8,9.7,40.2,9.9,40.3z"
                    />
                  </defs>
                  <clipPath id="SVGID_237_">
                    <use xlinkHref="#SVGID_236_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_237_)">
                    <path
                      fill="#D8E3E3"
                      d="M9.9,40.3L9.5,40C9.2,39.9,9,39.6,9,39.1c0-0.9,0.6-2,1.4-2.5l0.5,0.3c-0.8,0.4-1.4,1.6-1.4,2.5 C9.5,39.8,9.7,40.2,9.9,40.3z"
                    />
                  </g>
                </g>
              </g>
            </g>
            <g>
              <path
                fill="#FEFFFF"
                d="M10.9,36.9c0.8-0.4,1.4-0.1,1.4,0.8c0,0.9-0.6,2-1.4,2.5c-0.8,0.4-1.4,0.1-1.4-0.8 C9.5,38.5,10.1,37.4,10.9,36.9z"
              />
            </g>
          </g>
          <g enableBackground="new    ">
            <g enableBackground="new    ">
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_238_"
                      d="M16,33.9l0.5,0.3c-0.3-0.1-0.6-0.1-1,0.1L15,34.1C15.3,33.8,15.7,33.8,16,33.9z"
                    />
                  </defs>
                  <clipPath id="SVGID_239_">
                    <use xlinkHref="#SVGID_238_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_239_)">
                    <path
                      fill="#D8E3E3"
                      d="M15.4,34.3L15,34.1c0.4-0.2,0.8-0.3,1-0.1l0.5,0.3C16.2,34.1,15.8,34.1,15.4,34.3z"
                    />
                  </g>
                </g>
              </g>
            </g>
            <g enableBackground="new    ">
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_240_"
                      d="M14.4,37.7l-0.5-0.3c-0.3-0.1-0.4-0.5-0.4-0.9c0-0.9,0.6-2,1.4-2.5l0.5,0.3 c-0.8,0.5-1.4,1.6-1.4,2.5C14,37.3,14.2,37.6,14.4,37.7z"
                    />
                  </defs>
                  <clipPath id="SVGID_241_">
                    <use xlinkHref="#SVGID_240_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_241_)">
                    <path
                      fill="#D8E3E3"
                      d="M14.4,37.7l-0.5-0.3c-0.3-0.1-0.4-0.5-0.4-0.9c0-0.9,0.6-2,1.4-2.5l0.5,0.3 c-0.8,0.5-1.4,1.6-1.4,2.5C14,37.3,14.2,37.6,14.4,37.7z"
                    />
                  </g>
                </g>
              </g>
            </g>
            <g>
              <path
                fill="#FEFFFF"
                d="M15.4,34.3c0.8-0.4,1.4-0.1,1.4,0.8c0,0.9-0.6,2-1.4,2.5c-0.8,0.5-1.4,0.1-1.4-0.8 C14,35.9,14.6,34.8,15.4,34.3z"
              />
            </g>
          </g>
          <g enableBackground="new    ">
            <g enableBackground="new    ">
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_242_"
                      d="M20.5,31.4l0.5,0.3c-0.3-0.1-0.6-0.1-1,0.1l-0.5-0.3C19.8,31.2,20.2,31.2,20.5,31.4z"
                    />
                  </defs>
                  <clipPath id="SVGID_243_">
                    <use xlinkHref="#SVGID_242_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_243_)">
                    <path
                      fill="#D8E3E3"
                      d="M19.9,31.7l-0.5-0.3c0.4-0.2,0.8-0.3,1-0.1l0.5,0.3C20.7,31.5,20.3,31.5,19.9,31.7z"
                    />
                  </g>
                </g>
              </g>
            </g>
            <g enableBackground="new    ">
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_244_"
                      d="M18.9,35.1l-0.5-0.3c-0.3-0.1-0.4-0.5-0.4-0.9c0-0.9,0.6-2,1.4-2.5l0.5,0.3 c-0.8,0.5-1.4,1.6-1.4,2.5C18.5,34.6,18.7,35,18.9,35.1z"
                    />
                  </defs>
                  <clipPath id="SVGID_245_">
                    <use xlinkHref="#SVGID_244_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#SVGID_245_)">
                    <path
                      fill="#D8E3E3"
                      d="M18.9,35.1l-0.5-0.3c-0.3-0.1-0.4-0.5-0.4-0.9c0-0.9,0.6-2,1.4-2.5l0.5,0.3 c-0.8,0.5-1.4,1.6-1.4,2.5C18.5,34.6,18.7,35,18.9,35.1z"
                    />
                  </g>
                </g>
              </g>
            </g>
            <g>
              <path
                fill="#FEFFFF"
                d="M19.9,31.7c0.8-0.4,1.4-0.1,1.4,0.8c0,0.9-0.6,2-1.4,2.5c-0.8,0.5-1.4,0.1-1.4-0.8 C18.5,33.3,19.1,32.2,19.9,31.7z"
              />
            </g>
          </g>
        </g>
      </g>
    </g>
    <g id="search">
      <g>
        <g enableBackground="new    ">
          <g>
            <path
              fill="#CFC7CF"
              d="M76.1,51.2c0.4-0.2,0.7-0.6,1-1.1c0.7,0.4,1.4,0.8,2.2,1.3c-0.3,0.4-0.6,0.8-1,1.1 C77.6,52.1,76.8,51.6,76.1,51.2z"
            />
          </g>
          <g>
            <path
              fill="#CFC7CF"
              d="M77.1,50.2c0.3-0.4,0.4-0.9,0.4-1.4l2.2,1.3c0,0.4-0.1,0.9-0.4,1.4C78.5,51,77.8,50.6,77.1,50.2z"
            />
          </g>
          <g>
            <polygon
              fill="#CFC7CF"
              points="79.7,50 77.5,48.8 77.5,46.6 79.7,47.8  "
            />
          </g>
          <g>
            <path
              fill="#CFC7CF"
              d="M77.1,45.7l2.2,1.3c0.3,0.1,0.4,0.5,0.4,0.9l-2.2-1.3C77.5,46.1,77.3,45.8,77.1,45.7z"
            />
          </g>
          <g>
            <path
              fill="#FFFFFF"
              d="M77.1,45.7l2.2,1.3c-0.3-0.1-0.6-0.1-1,0.1l-2.2-1.3C76.5,45.5,76.8,45.5,77.1,45.7z"
            />
          </g>
          <g>
            <path
              fill="#3F404F"
              d="M77.6,44.8l2.2,1.3c-0.4-0.2-0.8-0.2-1.4,0.1l-2.2-1.3C76.8,44.6,77.2,44.6,77.6,44.8z"
            />
          </g>
          <g>
            <polygon
              fill="#CFC7CF"
              points="59,63.6 56.9,62.3 76.1,51.2 78.3,52.5  "
            />
          </g>
          <g>
            <path
              fill="#CFC7CF"
              d="M58,63.7l-2.2-1.3c0.3,0.1,0.6,0.1,1-0.1l2.2,1.3C58.6,63.8,58.3,63.8,58,63.7z"
            />
          </g>
          <g>
            <path
              fill="#FFFFFF"
              d="M58,63.7l-2.2-1.3c-0.3-0.1-0.4-0.5-0.4-0.9l2.2,1.3C57.6,63.2,57.8,63.5,58,63.7z"
            />
          </g>
          <g>
            <path
              fill="#3F404F"
              d="M57.5,64.5l-2.2-1.3c-0.4-0.2-0.6-0.6-0.6-1.3l2.2,1.3C56.9,63.9,57.2,64.3,57.5,64.5z"
            />
          </g>
          <g>
            <polygon
              fill="#FFFFFF"
              points="57.6,62.8 55.5,61.5 55.4,59.3 57.6,60.6  "
            />
          </g>
          <g>
            <polygon
              fill="#FFFFFF"
              points="59,58.1 56.9,56.9 76.1,45.8 78.2,47  "
            />
          </g>
          <g>
            <polygon
              fill="#3F404F"
              points="56.9,63.3 54.8,62 54.8,59.6 56.9,60.9  "
            />
          </g>
          <g>
            <polygon
              fill="#3F404F"
              points="58.9,57.5 56.7,56.2 76.2,44.9 78.4,46.2  "
            />
          </g>
          <g>
            <path
              fill="#FFFFFF"
              d="M57.6,60.6l-2.2-1.3c0-0.9,0.6-2,1.4-2.4l2.2,1.3C58.2,58.6,57.6,59.7,57.6,60.6z"
            />
          </g>
          <g>
            <path
              fill="#FFFFFF"
              d="M78.2,47c0.8-0.4,1.4-0.1,1.4,0.8V50c0,0.9-0.6,2-1.4,2.4L59,63.6c-0.8,0.4-1.4,0.1-1.4-0.8v-2.2 c0-0.9,0.6-2,1.4-2.4L78.2,47z"
            />
          </g>
          <g>
            <path
              fill="#6B6E87"
              d="M78.4,46.2c1.1-0.6,2-0.1,2,1.1v2.4c0,1.3-0.9,2.8-2,3.4L58.9,64.4c-1.1,0.6-2,0.1-2-1.1v-2.4 c0-1.3,0.9-2.8,2-3.4L78.4,46.2z M79.7,50v-2.2c0-0.9-0.6-1.3-1.4-0.8L59,58.1c-0.8,0.4-1.4,1.6-1.4,2.4v2.2 c0,0.9,0.6,1.3,1.4,0.8l19.2-11.1C79,52,79.7,50.9,79.7,50z"
            />
          </g>
          <g>
            <path
              fill="#4F5163"
              d="M56.9,60.9l-2.2-1.3c0-1.3,0.9-2.8,2-3.4l2.2,1.3C57.8,58.1,56.9,59.6,56.9,60.9z"
            />
          </g>
        </g>
        <g enableBackground="new    ">
          <g>
            <path
              fill="#FF1F1F"
              d="M53.2,58.9l2.2,1.3C55,60,54.5,60,54,60.3L51.8,59C52.3,58.7,52.8,58.7,53.2,58.9z"
            />
          </g>
          <g>
            <path
              fill="#FF1F1F"
              d="M41.3,73.9l-2.2-1.3c-0.4-0.2-0.6-0.6-0.6-1.3l2.2,1.3C40.8,73.2,41,73.7,41.3,73.9z"
            />
          </g>
          <g>
            <polygon
              fill="#FF1F1F"
              points="40.8,72.6 38.6,71.3 38.6,68.9 40.8,70.2  "
            />
          </g>
          <g>
            <polygon
              fill="#FF1F1F"
              points="42.7,66.8 40.6,65.5 51.8,59 54,60.3  "
            />
          </g>
          <g>
            <path
              fill="#FF1F1F"
              d="M40.8,70.2l-2.2-1.3c0-1.3,0.9-2.8,2-3.4l2.2,1.3C41.7,67.4,40.8,68.9,40.8,70.2z"
            />
          </g>
          <g>
            <path
              fill="#FF4242"
              d="M54,60.3c1.1-0.6,2-0.1,2,1.1v2.4c0,1.3-0.9,2.8-2,3.4l-11.2,6.5c-1.1,0.6-2,0.1-2-1.1v-2.4 c0-1.3,0.9-2.8,2-3.4L54,60.3z"
            />
          </g>
        </g>
      </g>
      <g>
        <g enableBackground="new    ">
          <g>
            <path
              fill="#D3E1F2"
              d="M42.7,71.3l-0.3-0.2c0.1,0.1,0.3,0,0.4,0c0.1-0.1,0.3-0.2,0.3-0.3c0,0,0-0.1,0-0.1l0.3,0.2 c0,0,0,0,0,0.1c0,0.1-0.1,0.3-0.3,0.3C43,71.3,42.9,71.3,42.7,71.3z"
            />
          </g>
          <g>
            <path
              fill="#D3E1F2"
              d="M42.5,71.9l-0.3-0.2c0,0-0.1,0-0.1-0.1L42.5,71.9C42.4,71.9,42.4,71.9,42.5,71.9z"
            />
          </g>
          <g>
            <polygon
              fill="#D3E1F2"
              points="42.4,71.8 42.1,71.6 42.4,71 42.7,71.2  "
            />
          </g>
          <g>
            <path
              fill="#D3E1F2"
              d="M43.3,69.5l0.3,0.2c0,0,0,0,0,0L43.3,69.5L43.3,69.5z"
            />
          </g>
          <g>
            <path
              fill="#D3E1F2"
              d="M43.6,69.9l0.3,0.2c-0.1-0.1-0.4,0-0.6,0.1L43,70C43.2,69.9,43.4,69.8,43.6,69.9z"
            />
          </g>
          <g>
            <path
              fill="#D3E1F2"
              d="M43,70.2L42.7,70c0,0,0.1,0,0.3,0l0.3,0.2C43.1,70.2,43,70.2,43,70.2z"
            />
          </g>
          <g>
            <path
              fill="#D3E1F2"
              d="M43.6,68.9l0.3,0.2c-0.2-0.1-0.4-0.1-0.7,0.1L42.9,69C43.1,68.8,43.4,68.8,43.6,68.9z"
            />
          </g>
          <g>
            <path
              fill="#D3E1F2"
              d="M42.6,70.8l-0.3-0.2c-0.1-0.1-0.2-0.2-0.2-0.4c0-0.5,0.4-1,0.8-1.2l0.3,0.2c-0.4,0.2-0.8,0.7-0.8,1.2 C42.4,70.6,42.5,70.8,42.6,70.8z"
            />
          </g>
          <g>
            <path
              fill="#FFFFFF"
              d="M43.2,69.2c0.3-0.1,0.5-0.2,0.8,0l-0.4,0.5c-0.1-0.1-0.3-0.1-0.4,0S43,69.9,43,70.1 c0,0.1,0.1,0.1,0.3,0.1c0.4-0.1,0.8-0.2,0.8,0.4c0,0.5-0.5,1-0.9,1.3c-0.3,0.1-0.5,0.2-0.8,0l0.4-0.6c0.1,0.1,0.3,0.1,0.5,0 c0.1-0.1,0.3-0.2,0.3-0.3c0-0.1-0.2-0.1-0.4,0c-0.4,0.1-0.7,0.1-0.7-0.4C42.4,69.9,42.8,69.4,43.2,69.2z"
            />
          </g>
        </g>
        <g enableBackground="new    ">
          <g>
            <polygon
              fill="#D3E1F2"
              points="45.1,70.1 44.7,69.9 45.7,69.4 46,69.5  "
            />
          </g>
          <g>
            <polygon
              fill="#D3E1F2"
              points="45,69.1 44.7,69 45.7,68.4 46,68.6  "
            />
          </g>
          <g>
            <polygon
              fill="#D3E1F2"
              points="44.5,71 44.2,70.9 44.2,68.3 44.5,68.5  "
            />
          </g>
          <g>
            <polygon
              fill="#D3E1F2"
              points="44.5,68.5 44.2,68.3 45.7,67.4 46,67.6  "
            />
          </g>
          <g>
            <polygon
              fill="#FFFFFF"
              points="46,67.6 46,68.2 45,68.7 45,69.1 46,68.6 46,69.2 45,69.7 45.1,70.1 46,69.5 46,70.1 44.5,71  44.5,68.5  "
            />
          </g>
        </g>
        <g enableBackground="new    ">
          <g>
            <polygon
              fill="#D3E1F2"
              points="47.9,69.1 47.5,68.9 47.4,68.5 47.7,68.6  "
            />
          </g>
          <g>
            <polygon
              fill="#D3E1F2"
              points="47.2,68.3 46.9,68.2 47.3,68 47.6,68.2  "
            />
          </g>
          <g>
            <polygon
              fill="#D3E1F2"
              points="47.6,68.2 47.3,68 47.1,67.3 47.4,67.5  "
            />
          </g>
          <g>
            <polygon
              fill="#D3E1F2"
              points="47.1,66.9 46.8,66.7 47.4,66.4 47.7,66.6  "
            />
          </g>
          <g>
            <polygon
              fill="#D3E1F2"
              points="46.4,69.9 46.1,69.8 46.8,66.7 47.1,66.9  "
            />
          </g>
          <g>
            <path
              fill="#FFFFFF"
              d="M47.7,66.6l0.8,2.1l-0.6,0.4l-0.1-0.4L47.1,69L47,69.6l-0.6,0.4l0.8-3L47.7,66.6z M47.2,68.3l0.3-0.2 l-0.1-0.7h0L47.2,68.3z"
            />
          </g>
        </g>
        <g enableBackground="new    ">
          <g>
            <polygon
              fill="#D3E1F2"
              points="52.2,65.8 51.9,65.6 52.4,65.6 52.7,65.7  "
            />
          </g>
          <g>
            <path
              fill="#D3E1F2"
              d="M51.6,66.2L51.3,66c0.1,0,0.1,0,0.3,0c0.1-0.1,0.3-0.2,0.3-0.4l0.3,0.2c-0.1,0.2-0.2,0.3-0.3,0.4 C51.8,66.2,51.7,66.3,51.6,66.2z"
            />
          </g>
          <g>
            <path
              fill="#D3E1F2"
              d="M51.9,64.5l0.3,0.2c0,0,0,0,0.1,0L51.9,64.5C51.9,64.6,51.9,64.5,51.9,64.5z"
            />
          </g>
          <g>
            <path
              fill="#D3E1F2"
              d="M51.2,66.9l-0.3-0.2c-0.1-0.1-0.2-0.2-0.2-0.5l0.3,0.2C51,66.7,51.1,66.8,51.2,66.9z"
            />
          </g>
          <g>
            <path
              fill="#D3E1F2"
              d="M52.2,63.9l0.3,0.2c-0.2-0.1-0.4,0-0.6,0.1L51.6,64C51.8,63.9,52,63.8,52.2,63.9z"
            />
          </g>
          <g>
            <polygon
              fill="#D3E1F2"
              points="51,66.4 50.7,66.2 50.7,65.4 51,65.5  "
            />
          </g>
          <g>
            <path
              fill="#D3E1F2"
              d="M51,65.5l-0.3-0.2c0-0.6,0.4-1.1,0.9-1.4l0.3,0.2C51.5,64.4,51,64.9,51,65.5z"
            />
          </g>
          <g>
            <path
              fill="#FFFFFF"
              d="M51.9,64.1c0.3-0.2,0.6-0.2,0.8,0.1l-0.5,0.5c-0.1-0.1-0.2-0.1-0.3,0c-0.2,0.1-0.3,0.3-0.3,0.5v0.9 c0,0.2,0.1,0.2,0.3,0.1c0.1-0.1,0.3-0.2,0.3-0.4l0.5,0c-0.2,0.5-0.5,0.9-0.8,1C51.4,67,51,67,51,66.4v-0.9 C51,64.9,51.5,64.4,51.9,64.1z"
            />
          </g>
        </g>
        <g enableBackground="new    ">
          <g>
            <polygon
              fill="#D3E1F2"
              points="50,67.8 49.7,67.7 49.2,67.1 49.5,67.3  "
            />
          </g>
          <g>
            <path
              fill="#D3E1F2"
              d="M49.6,65.8l0.3,0.2c0.1,0.1,0.1,0.5-0.2,0.6l-0.3-0.2C49.7,66.3,49.8,65.9,49.6,65.8z"
            />
          </g>
          <g>
            <polygon
              fill="#D3E1F2"
              points="49.4,66.8 49.1,66.6 49.4,66.4 49.7,66.6  "
            />
          </g>
          <g>
            <path
              fill="#D3E1F2"
              d="M50.1,65.2l0.3,0.2c-0.1-0.1-0.4,0-0.6,0.1l-0.3-0.2C49.7,65.1,49.9,65.1,50.1,65.2z"
            />
          </g>
          <g>
            <polygon
              fill="#D3E1F2"
              points="48.8,66 48.5,65.8 49.4,65.3 49.7,65.4  "
            />
          </g>
          <g>
            <polygon
              fill="#D3E1F2"
              points="48.8,68.5 48.5,68.3 48.5,65.8 48.8,66  "
            />
          </g>
          <g>
            <path
              fill="#FFFFFF"
              d="M50.1,66.9l0.6,0.5L50,67.8l-0.5-0.5l-0.1,0.1v0.8l-0.6,0.3V66l0.9-0.5c0.5-0.3,0.8-0.2,0.8,0.4 C50.6,66.3,50.4,66.6,50.1,66.9z M49.7,66.6c0.4-0.2,0.4-0.8,0-0.6l-0.3,0.2v0.6L49.7,66.6z"
            />
          </g>
        </g>
        <g enableBackground="new    ">
          <g>
            <polygon
              fill="#D3E1F2"
              points="54.3,65.3 54,65.2 54,64.2 54.3,64.4  "
            />
          </g>
          <g>
            <polygon
              fill="#D3E1F2"
              points="53.7,64.1 53.4,63.9 54,63.6 54.3,63.7  "
            />
          </g>
          <g>
            <polygon
              fill="#D3E1F2"
              points="54.3,63.7 54,63.6 54,62.6 54.3,62.8  "
            />
          </g>
          <g>
            <polygon
              fill="#D3E1F2"
              points="54.3,62.8 54,62.6 54.6,62.3 54.9,62.4  "
            />
          </g>
          <g>
            <polygon
              fill="#D3E1F2"
              points="53.1,63.5 52.8,63.3 53.4,63 53.7,63.1  "
            />
          </g>
          <g>
            <polygon
              fill="#D3E1F2"
              points="53.1,66 52.8,65.9 52.8,63.3 53.1,63.5  "
            />
          </g>
          <g>
            <polygon
              fill="#FFFFFF"
              points="54.9,62.4 54.9,65 54.3,65.3 54.3,64.4 53.7,64.8 53.7,65.7 53.1,66 53.1,63.5 53.7,63.1  53.7,64.1 54.3,63.7 54.3,62.8  "
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
)
export default Rocket;
