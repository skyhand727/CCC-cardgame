import Link from 'next/link';
import { ReactNode, useState } from 'react';
import { useRouter } from 'next/router'
import Image from 'next/image';

interface SidebarInterface {
    mode: "dark" | "light",
    open: boolean,
}

const Sidebar = ({open = false}) => {
    // const [toggle, setToggle] = useState(props.checked);
    const router = useRouter()
    let locationHref: number = 0;
    switch ( router.pathname.split("/").pop()) {
        case "dashboard":
            locationHref = 0
            break;
        case "trade":
            locationHref = 1
            break;
        case "loan":
            locationHref = 2
            break;
        case "support":
            locationHref = 3
            break;
        case "setting":
            locationHref = 4
            break;
                
        default:
            break;
    }
    const inactiveClass = "w-14 h-14 flex items-center p-2 transition-colors hover:text-gray-800 dark:hover:text-white hover:bg-gray-400 dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg my-2";
    const activeClass = "w-14 h-14 flex items-center p-2 transition-colors hover:text-gray-800 dark:hover:text-white hover:bg-blue-400 dark:hover:bg-purple-400 duration-200 text-gray-600 dark:text-gray-400 rounded-lg my-2 bg-blue-500 dark:bg-purple-500";

    console.log(locationHref);
    return (
        <aside className="flex flex-col sm:flex-row sm:justify-around h-full">
            <div className={`${ open ? "w-60" : "w-20"} h-full bg-light-color-main-1 dark:bg-dark-color-main-1 rounded-2xl flex flex-col justify-between`}>
                <nav className="p-3">
                    <Link href="/dashboard">
                    <a className={locationHref===0?activeClass:inactiveClass}>
                        { locationHref!==0?
                            <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.6" d="M31.7546 15.3333H35.7049C37.3409 15.3333 38.6665 16.6701 38.6665 18.3199V22.3035C38.6665 23.9533 37.3409 25.2902 35.7049 25.2902H31.7546C30.1186 25.2902 28.793 23.9533 28.793 22.3035V18.3199C28.793 16.6701 30.1186 15.3333 31.7546 15.3333Z" fill="#8388A8"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.2949 15.3333H22.2452C23.8811 15.3333 25.2068 16.6701 25.2068 18.3199V22.3035C25.2068 23.9533 23.8811 25.2902 22.2452 25.2902H18.2949C16.6589 25.2902 15.3333 23.9533 15.3333 22.3035V18.3199C15.3333 16.6701 16.6589 15.3333 18.2949 15.3333ZM18.2949 28.7097H22.2452C23.8811 28.7097 25.2068 30.0465 25.2068 31.6963V35.68C25.2068 37.3286 23.8811 38.6666 22.2452 38.6666H18.2949C16.6589 38.6666 15.3333 37.3286 15.3333 35.68V31.6963C15.3333 30.0465 16.6589 28.7097 18.2949 28.7097ZM35.705 28.7097H31.7547C30.1187 28.7097 28.7931 30.0465 28.7931 31.6963V35.68C28.7931 37.3286 30.1187 38.6666 31.7547 38.6666H35.705C37.341 38.6666 38.6666 37.3286 38.6666 35.68V31.6963C38.6666 30.0465 37.341 28.7097 35.705 28.7097Z" fill="#8388A8"/>
                            </svg>
                            :
                            <svg className="mx-auto" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.6" d="M18.7551 2.33334H22.7054C24.3413 2.33334 25.667 3.67017 25.667 5.31997V9.30362C25.667 10.9534 24.3413 12.2902 22.7054 12.2902H18.7551C17.1191 12.2902 15.7935 10.9534 15.7935 9.30362V5.31997C15.7935 3.67017 17.1191 2.33334 18.7551 2.33334Z" fill="#F9FAFF"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.29511 2.33334H9.2454C10.8814 2.33334 12.207 3.67017 12.207 5.31997V9.30362C12.207 10.9534 10.8814 12.2902 9.2454 12.2902H5.29511C3.65913 12.2902 2.3335 10.9534 2.3335 9.30362V5.31997C2.3335 3.67017 3.65913 2.33334 5.29511 2.33334ZM5.29511 15.7098H9.2454C10.8814 15.7098 12.207 17.0466 12.207 18.6964V22.6801C12.207 24.3287 10.8814 25.6667 9.2454 25.6667H5.29511C3.65913 25.6667 2.3335 24.3287 2.3335 22.6801V18.6964C2.3335 17.0466 3.65913 15.7098 5.29511 15.7098ZM22.7052 15.7098H18.7549C17.1189 15.7098 15.7933 17.0466 15.7933 18.6964V22.6801C15.7933 24.3287 17.1189 25.6667 18.7549 25.6667H22.7052C24.3412 25.6667 25.6668 24.3287 25.6668 22.6801V18.6964C25.6668 17.0466 24.3412 15.7098 22.7052 15.7098Z" fill="#F9FAFF"/>
                            </svg>
                        }

                        { open ? 
                        <span className="mx-4 text-lg font-normal">
                            Element
                        </span> : ""}
                    </a>
                    </Link>
                    <Link href="/trade">
                    <a className={locationHref===1?activeClass:inactiveClass}>
                        { locationHref!==1?
                            <svg className="mx-auto" width="54" height="54" viewBox="4 4 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.6" d="M20.8231 27.0389C20.2209 27.0389 19.7335 27.5336 19.7335 28.1447L19.4331 33.4866C19.4331 34.2653 20.0557 34.8958 20.8231 34.8958C21.5904 34.8958 22.2117 34.2653 22.2117 33.4866L21.9126 28.1447C21.9126 27.5336 21.4252 27.0389 20.8231 27.0389Z" fill="#8388A8"/>
                                <path d="M22.3106 16.2857C22.3106 16.2857 21.9979 15.9642 21.804 15.8243C21.5228 15.6081 21.176 15.5 20.8305 15.5C20.4428 15.5 20.0823 15.6219 19.7887 15.852C19.7355 15.906 19.5088 16.1097 19.3218 16.2995C18.1475 17.4095 16.2265 20.307 15.6393 21.8243C15.5465 22.0543 15.3458 22.6363 15.3335 22.9481C15.3335 23.2446 15.399 23.5301 15.5328 23.8003C15.7199 24.1384 16.0135 24.41 16.3603 24.5583C16.6006 24.6539 17.3201 24.8022 17.3338 24.8022C18.1216 24.9518 19.4023 25.0322 20.8169 25.0322C22.1645 25.0322 23.392 24.9518 24.1921 24.8299C24.2057 24.816 25.0987 24.6677 25.4059 24.5042C25.9657 24.2063 26.3139 23.6243 26.3139 23.0021V22.9481C26.3002 22.5421 25.9521 21.6885 25.9398 21.6885C25.3527 20.2529 23.5244 17.4233 22.3106 16.2857Z" fill="#8388A8"/>
                                <path opacity="0.6" d="M33.1776 24.9612C33.7797 24.9612 34.2671 24.4665 34.2671 23.8554L34.5661 18.5134C34.5661 17.7347 33.9449 17.1042 33.1776 17.1042C32.4102 17.1042 31.7876 17.7347 31.7876 18.5134L32.088 23.8554C32.088 24.4665 32.5754 24.9612 33.1776 24.9612Z" fill="#8388A8"/>
                                <path d="M38.4676 28.1995C38.2805 27.8614 37.987 27.5912 37.6401 27.4415C37.3998 27.3459 36.6789 27.1977 36.6666 27.1977C35.8788 27.048 34.5981 26.9676 33.1835 26.9676C31.8359 26.9676 30.6084 27.048 29.8083 27.1699C29.7947 27.1838 28.9017 27.3335 28.5945 27.4956C28.0333 27.7935 27.6865 28.3755 27.6865 28.9991V29.0531C27.7002 29.4592 28.047 30.3114 28.0606 30.3114C28.6478 31.747 30.4746 34.578 31.6898 35.7143C31.6898 35.7143 32.0025 36.0358 32.1964 36.1744C32.4763 36.3919 32.8231 36.5 33.1713 36.5C33.5577 36.5 33.9168 36.3781 34.2117 36.148C34.2649 36.094 34.4916 35.8903 34.6786 35.7018C35.8515 34.5905 37.774 31.6929 38.3597 30.177C38.4539 29.9469 38.6546 29.3635 38.6669 29.0531C38.6669 28.7552 38.6014 28.4697 38.4676 28.1995Z" fill="#8388A8"/>
                            </svg>
                            :
                            <svg className="mx-auto" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.6" d="M7.82306 15.0391C7.22093 15.0391 6.73349 15.5338 6.73349 16.1448L6.43311 21.4867C6.43311 22.2655 7.05572 22.8959 7.82306 22.8959C8.59041 22.8959 9.21166 22.2655 9.21166 21.4867L8.91264 16.1448C8.91264 15.5338 8.4252 15.0391 7.82306 15.0391Z" fill="#F9FAFF"/>
                                <path d="M9.31035 4.28569C9.31035 4.28569 8.99768 3.96421 8.80379 3.82425C8.52252 3.60808 8.17572 3.5 7.83027 3.5C7.44251 3.5 7.08205 3.62194 6.78849 3.85197C6.73524 3.90601 6.50859 4.10971 6.32153 4.29955C5.1473 5.40949 3.22621 8.30697 2.6391 9.82431C2.54625 10.0543 2.34554 10.6363 2.33325 10.9481C2.33325 11.2446 2.39879 11.5301 2.5326 11.8003C2.71965 12.1384 3.01321 12.41 3.36002 12.5583C3.60033 12.6539 4.31988 12.8022 4.33353 12.8022C5.12136 12.9518 6.40209 13.0322 7.81662 13.0322C9.16425 13.0322 10.3917 12.9518 11.1918 12.8299C11.2055 12.816 12.0985 12.6677 12.4057 12.5042C12.9655 12.2063 13.3136 11.6243 13.3136 11.0021V10.9481C13.3 10.5421 12.9518 9.68851 12.9395 9.68851C12.3524 8.25293 10.5242 5.42334 9.31035 4.28569Z" fill="#F9FAFF"/>
                                <path opacity="0.6" d="M20.1771 12.9613C20.7792 12.9613 21.2666 12.4666 21.2666 11.8555L21.5657 6.51353C21.5657 5.73475 20.9444 5.10425 20.1771 5.10425C19.4097 5.10425 18.7871 5.73475 18.7871 6.51353L19.0875 11.8555C19.0875 12.4666 19.5749 12.9613 20.1771 12.9613Z" fill="#F9FAFF"/>
                                <path d="M25.4673 16.1994C25.2803 15.8613 24.9867 15.5911 24.6399 15.4414C24.3996 15.3458 23.6787 15.1976 23.6664 15.1976C22.8786 15.0479 21.5978 14.9675 20.1833 14.9675C18.8357 14.9675 17.6082 15.0479 16.8081 15.1698C16.7944 15.1837 15.9015 15.3334 15.5943 15.4955C15.0331 15.7934 14.6863 16.3754 14.6863 16.999V17.053C14.6999 17.4591 15.0467 18.3113 15.0604 18.3113C15.6475 19.7469 17.4744 22.5779 18.6896 23.7142C18.6896 23.7142 19.0022 24.0357 19.1961 24.1743C19.476 24.3918 19.8228 24.4999 20.171 24.4999C20.5574 24.4999 20.9165 24.378 21.2114 24.1479C21.2647 24.0939 21.4913 23.8902 21.6784 23.7017C22.8513 22.5904 24.7737 19.6928 25.3595 18.1769C25.4537 17.9468 25.6544 17.3634 25.6667 17.053C25.6667 16.7551 25.6011 16.4697 25.4673 16.1994Z" fill="#F9FAFF"/>
                            </svg>
                        }


                        { open ? 
                        <span className="mx-4 text-lg font-normal">
                            Element
                        </span> : ""}
                    </a>
                    </Link>
                    <Link href="/loan">
                        <a className={locationHref===2?activeClass:inactiveClass}>
                        { locationHref!==2?
                            <svg width="54" height="54" viewBox="4 4 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.6" d="M29.5 28C33.0841 28 36 25.0841 36 21.5C36 17.9159 33.0841 15 29.5 15C25.9159 15 23 17.9159 23 21.5C23 25.0841 25.9159 28 29.5 28ZM27.4113 23.5283C27.6004 23.2416 27.988 23.1611 28.2771 23.3488C28.6982 23.6221 28.8571 23.6472 29.4128 23.6434C29.9552 23.6398 30.27 23.2387 30.3329 22.8676C30.3635 22.687 30.3752 22.2461 29.8244 22.053C29.1784 21.8264 28.5172 21.5674 28.0573 21.2095C27.5973 20.8516 27.3867 20.2337 27.5076 19.5971C27.6387 18.907 28.124 18.3576 28.7741 18.1633C28.78 18.1616 28.7857 18.1602 28.7916 18.1585V17.9233C28.7916 17.5806 29.0716 17.3028 29.417 17.3028C29.7624 17.3028 30.0424 17.5806 30.0424 17.9233V18.1194C30.4672 18.22 30.7638 18.4128 30.8843 18.5021C31.1609 18.7073 31.2175 19.096 31.0107 19.3705C30.8039 19.645 30.412 19.7012 30.1354 19.4959C30.0072 19.4009 29.653 19.1965 29.1348 19.3514C28.8321 19.4419 28.7536 19.7383 28.7367 19.8269C28.7037 20.0011 28.7408 20.1643 28.8292 20.2331C29.148 20.4812 29.7219 20.7009 30.2413 20.883C31.1989 21.2188 31.7314 22.099 31.5664 23.0732C31.4853 23.5513 31.2429 23.9948 30.8838 24.3222C30.6391 24.5452 30.3543 24.7042 30.0424 24.795V25.0767C30.0424 25.4193 29.7624 25.6971 29.417 25.6971C29.0716 25.6971 28.7916 25.4193 28.7916 25.0767V24.8568C28.3872 24.8082 28.0477 24.6828 27.5923 24.3872C27.3033 24.1996 27.2223 23.815 27.4113 23.5283Z" fill="#8388A8"/>
                                <path d="M16.6679 33.6613C16.6679 32.997 16.1294 32.4584 15.4651 32.4584H14.8652C14.4602 32.4584 14.1318 32.7321 14.1318 33.0697V37.8614C14.1318 38.199 14.4602 38.4726 14.8652 38.4726H15.4651C16.1294 38.4726 16.6679 37.9341 16.6679 37.2698L16.6679 33.6613Z" fill="#8388A8"/>
                                <path d="M39.6227 32.3456C38.2365 30.9593 35.9809 30.9593 34.5948 32.3456L32.3793 34.561L31.4713 35.4691C31.1043 35.836 30.6065 36.0422 30.0875 36.0422H25.672C25.2732 36.0422 24.9301 35.7357 24.9113 35.3374C24.8913 34.9121 25.2301 34.561 25.6511 34.561H30.1391C31.0415 34.561 31.8242 33.9185 31.9793 33.0296C32.015 32.8255 32.0335 32.6156 32.0335 32.4014C32.0336 31.9922 31.7021 31.6602 31.2929 31.6602H28.8337C28.03 31.6602 27.2583 31.2956 26.4411 30.9096C25.5841 30.5047 24.6978 30.0861 23.6616 30.0172C22.7553 29.9568 21.8469 30.056 20.9615 30.3117C20.0135 30.5854 19.0356 31.4295 18.9529 32.4019C18.9498 32.4017 18.9466 32.4016 18.9434 32.4014V34.8638C18.9434 37.521 21.0975 39.6752 23.7547 39.6752H31.9817C32.8577 39.6752 33.6814 39.334 34.301 38.7144L39.6225 33.3929C39.9119 33.1038 39.9119 32.6348 39.6227 32.3456Z" fill="#8388A8"/>
                            </svg>
                            :
                            <svg className="mx-auto" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.6" d="M16.5 15C20.0841 15 23 12.0841 23 8.50002C23 4.91594 20.0841 2 16.5 2C12.9159 2 10 4.9159 10 8.49998C10 12.0841 12.9159 15 16.5 15ZM14.4113 10.5283C14.6004 10.2416 14.988 10.1611 15.2771 10.3488C15.6982 10.6221 15.8571 10.6472 16.4128 10.6434C16.9552 10.6398 17.27 10.2387 17.3329 9.86755C17.3635 9.68701 17.3752 9.24612 16.8244 9.05296C16.1784 8.82637 15.5172 8.5674 15.0573 8.20949C14.5973 7.85158 14.3867 7.2337 14.5076 6.59709C14.6387 5.90695 15.124 5.35757 15.7741 5.16333C15.78 5.1616 15.7857 5.16019 15.7916 5.15845V4.92327C15.7916 4.58062 16.0716 4.30283 16.417 4.30283C16.7624 4.30283 17.0424 4.58062 17.0424 4.92327V5.11937C17.4672 5.21996 17.7638 5.41275 17.8843 5.50205C18.1609 5.70725 18.2175 6.09602 18.0107 6.3705C17.8039 6.64499 17.412 6.70116 17.1354 6.49592C17.0072 6.40086 16.653 6.19653 16.1348 6.35144C15.8321 6.44194 15.7536 6.73826 15.7367 6.8269C15.7037 7.00108 15.7408 7.16434 15.8292 7.23308C16.148 7.48117 16.7219 7.70085 17.2413 7.88297C18.1989 8.2188 18.7314 9.09899 18.5664 10.0732C18.4853 10.5513 18.2429 10.9948 17.8838 11.3222C17.6391 11.5452 17.3543 11.7042 17.0424 11.795V12.0767C17.0424 12.4193 16.7624 12.6971 16.417 12.6971C16.0716 12.6971 15.7916 12.4193 15.7916 12.0767V11.8568C15.3872 11.8082 15.0477 11.6828 14.5923 11.3872C14.3033 11.1996 14.2223 10.815 14.4113 10.5283Z" fill="#F9FAFF"/>
                                <path d="M3.66814 20.6613C3.66814 19.997 3.12961 19.4585 2.4653 19.4585H1.86548C1.46045 19.4585 1.13208 19.7322 1.13208 20.0697V24.8615C1.13208 25.199 1.46045 25.4727 1.86548 25.4727H2.46533C3.12965 25.4727 3.66818 24.9342 3.66817 24.2699L3.66814 20.6613Z" fill="#F9FAFF"/>
                                <path d="M26.6227 19.3456C25.2365 17.9593 22.9809 17.9593 21.5948 19.3456L19.3793 21.561L18.4713 22.4691C18.1043 22.836 17.6065 23.0422 17.0875 23.0422H12.672C12.2732 23.0422 11.9301 22.7357 11.9113 22.3374C11.8913 21.9121 12.2301 21.561 12.6511 21.561H17.1391C18.0415 21.561 18.8242 20.9185 18.9793 20.0296C19.015 19.8255 19.0335 19.6156 19.0335 19.4014C19.0336 18.9922 18.7021 18.6602 18.2929 18.6602H15.8337C15.03 18.6602 14.2583 18.2956 13.4411 17.9096C12.5841 17.5047 11.6978 17.0861 10.6616 17.0172C9.75526 16.9568 8.84686 17.056 7.96148 17.3117C7.01348 17.5854 6.03556 18.4295 5.95292 19.4019C5.94977 19.4017 5.94656 19.4016 5.94336 19.4014V21.8638C5.94336 24.521 8.09748 26.6752 10.7547 26.6752H18.9817C19.8577 26.6752 20.6814 26.334 21.301 25.7144L26.6225 20.3929C26.9119 20.1038 26.9119 19.6348 26.6227 19.3456Z" fill="#F9FAFF"/>
                            </svg>
                        }


                        { open ? 
                        <span className="mx-4 text-lg font-normal">
                            Element
                        </span> : ""}
                    </a>
                    </Link>
                    <Link href="/support">
                        <a className={locationHref===3?activeClass:inactiveClass}>
                        { locationHref!==3?
                            <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.6" d="M26.69 14C19.9117 14 15 19.53 15 25.6667C15 27.6267 15.5717 29.645 16.575 31.4883C16.7617 31.7917 16.785 32.1767 16.6567 32.5383L15.875 35.1516C15.7 35.7817 16.2367 36.2483 16.8317 36.0617L19.1883 35.3617C19.83 35.1516 20.3317 35.42 20.9278 35.7817C22.6312 36.785 24.7533 37.2983 26.6667 37.2983C32.4533 37.2983 38.3333 32.83 38.3333 25.6317C38.3333 19.425 33.3167 14 26.69 14Z" fill="#8388A8"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M24.9956 37.1739C25.5599 37.2567 26.1218 37.2983 26.6668 37.2983C32.4534 37.2983 38.3334 32.83 38.3334 25.6317C38.3334 24.2849 38.0972 22.9749 37.6596 21.7492C40.3373 23.5994 42.0001 26.7044 42.0001 30.015C42.0001 31.6975 41.5101 33.4301 40.6501 35.0125C40.4901 35.2729 40.4701 35.6034 40.5801 35.9139L41.2501 38.1572C41.4001 38.698 40.9401 39.0986 40.4301 38.9384L38.4101 38.3375C37.8601 38.1572 37.4301 38.3876 36.9191 38.698C35.4591 39.5593 33.6401 40 32.0001 40C29.456 40 26.8909 38.9909 24.9956 37.1739Z" fill="#8388A8"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M26.9771 27.5051C26.1488 27.4934 25.4838 26.8284 25.4838 26.0001C25.4838 25.1834 26.1604 24.5068 26.9771 24.5184C27.8054 24.5184 28.4705 25.1834 28.4705 26.0118C28.4705 26.8284 27.8054 27.5051 26.9771 27.5051ZM21.5983 27.5051C20.7816 27.5051 20.105 26.8284 20.105 26.0118C20.105 25.1834 20.77 24.5184 21.5983 24.5184C22.4266 24.5184 23.0916 25.1834 23.0916 26.0118C23.0916 26.8284 22.4266 27.4934 21.5983 27.5051ZM30.8619 26.0118C30.8619 26.8284 31.5269 27.5051 32.3552 27.5051C33.1835 27.5051 33.8485 26.8284 33.8485 26.0118C33.8485 25.1834 33.1835 24.5184 32.3552 24.5184C31.5269 24.5184 30.8619 25.1834 30.8619 26.0118Z" fill="#8388A8"/>
                            </svg>
                            :
                            <svg className="mx-auto" width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.6" d="M13.69 2C6.91167 2 2 7.53 2 13.6667C2 15.6267 2.57167 17.645 3.575 19.4883C3.76167 19.7917 3.785 20.1767 3.65667 20.5383L2.875 23.1517C2.7 23.7817 3.23667 24.2483 3.83167 24.0617L6.18833 23.3617C6.83 23.1517 7.33167 23.42 7.92783 23.7817C9.63117 24.785 11.7533 25.2983 13.6667 25.2983C19.4533 25.2983 25.3333 20.83 25.3333 13.6317C25.3333 7.425 20.3167 2 13.69 2Z" fill="#F9FAFF"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.9956 25.1738C12.5599 25.2565 13.1218 25.2982 13.6668 25.2982C19.4534 25.2982 25.3334 20.8299 25.3334 13.6315C25.3334 12.2847 25.0972 10.9748 24.6596 9.74902C27.3373 11.5993 29.0001 14.7042 29.0001 18.0149C29.0001 19.6974 28.5101 21.43 27.6501 23.0124C27.4901 23.2728 27.4701 23.6033 27.5801 23.9137L28.2501 26.1571C28.4001 26.6979 27.9401 27.0985 27.4301 26.9383L25.4101 26.3374C24.8601 26.1571 24.4301 26.3874 23.9191 26.6979C22.4591 27.5592 20.6401 27.9999 19.0001 27.9999C16.456 27.9999 13.8909 26.9907 11.9956 25.1738Z" fill="#F9FAFF"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.9771 15.5054C13.1488 15.4937 12.4838 14.8287 12.4838 14.0004C12.4838 13.1837 13.1604 12.507 13.9771 12.5187C14.8054 12.5187 15.4705 13.1837 15.4705 14.012C15.4705 14.8287 14.8054 15.5054 13.9771 15.5054ZM8.59831 15.5053C7.78165 15.5053 7.10498 14.8287 7.10498 14.012C7.10498 13.1837 7.76998 12.5187 8.59831 12.5187C9.42665 12.5187 10.0916 13.1837 10.0916 14.012C10.0916 14.8287 9.42665 15.4937 8.59831 15.5053ZM17.8619 14.012C17.8619 14.8287 18.5269 15.5054 19.3552 15.5054C20.1835 15.5054 20.8485 14.8287 20.8485 14.012C20.8485 13.1837 20.1835 12.5187 19.3552 12.5187C18.5269 12.5187 17.8619 13.1837 17.8619 14.012Z" fill="#F9FAFF"/>
                            </svg>
                        }


                        { open ? 
                        <span className="mx-4 text-lg font-normal">
                            Element
                        </span> : ""}
                    </a>
                    </Link>

                    <Link href="/setting">
                        <a className={locationHref===4?activeClass:inactiveClass}>
                            { locationHref!==4?
                                <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.6" d="M24.764 31.6176H17.0926C16.1216 31.6176 15.3335 32.3919 15.3335 33.3458C15.3335 34.2984 16.1216 35.074 17.0926 35.074H24.764C25.7349 35.074 26.5231 34.2984 26.5231 33.3458C26.5231 32.3919 25.7349 31.6176 24.764 31.6176Z" fill="#8388A8"/>
                                    <path opacity="0.6" d="M38.6668 20.4416C38.6668 19.489 37.8786 18.7147 36.909 18.7147H29.2376C28.2667 18.7147 27.4785 19.489 27.4785 20.4416C27.4785 21.3955 28.2667 22.1699 29.2376 22.1699H36.909C37.8786 22.1699 38.6668 21.3955 38.6668 20.4416Z" fill="#8388A8"/>
                                    <path d="M23.3575 20.4417C23.3575 22.6194 21.5622 24.3846 19.3455 24.3846C17.1302 24.3846 15.3335 22.6194 15.3335 20.4417C15.3335 18.2651 17.1302 16.5 19.3455 16.5C21.5622 16.5 23.3575 18.2651 23.3575 20.4417Z" fill="#8388A8"/>
                                    <path d="M38.6666 33.2991C38.6666 35.4756 36.8712 37.2407 34.6546 37.2407C32.4392 37.2407 30.6426 35.4756 30.6426 33.2991C30.6426 31.1213 32.4392 29.3562 34.6546 29.3562C36.8712 29.3562 38.6666 31.1213 38.6666 33.2991Z" fill="#8388A8"/>
                                </svg>
                                :
                                <svg className="mx-auto" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.6" d="M11.7638 18.6177H4.09232C3.1214 18.6177 2.33325 19.392 2.33325 20.3459C2.33325 21.2985 3.1214 22.0741 4.09232 22.0741H11.7638C12.7347 22.0741 13.5228 21.2985 13.5228 20.3459C13.5228 19.392 12.7347 18.6177 11.7638 18.6177Z" fill="#F9FAFF"/>
                                    <path opacity="0.6" d="M25.6665 7.44178C25.6665 6.48917 24.8784 5.71484 23.9088 5.71484H16.2373C15.2664 5.71484 14.4783 6.48917 14.4783 7.44178C14.4783 8.39568 15.2664 9.17 16.2373 9.17H23.9088C24.8784 9.17 25.6665 8.39568 25.6665 7.44178Z" fill="#F9FAFF"/>
                                    <path d="M10.3573 7.44165C10.3573 9.61943 8.56192 11.3846 6.34527 11.3846C4.12991 11.3846 2.33325 9.61943 2.33325 7.44165C2.33325 5.26515 4.12991 3.5 6.34527 3.5C8.56192 3.5 10.3573 5.26515 10.3573 7.44165Z" fill="#F9FAFF"/>
                                    <path d="M25.6666 20.2989C25.6666 22.4754 23.8712 24.2405 21.6546 24.2405C19.4392 24.2405 17.6426 22.4754 17.6426 20.2989C17.6426 18.1211 19.4392 16.356 21.6546 16.356C23.8712 16.356 25.6666 18.1211 25.6666 20.2989Z" fill="#F9FAFF"/>
                                </svg>

                            }
                            

                            { open ? 
                            <span className="mx-4 text-lg font-normal">
                                Element
                            </span> : ""}
                        </a>
                    </Link>
                </nav>
                <div className="px-3 py-3 ">
                    <a className="w-14 h-14 hover:text-gray-800 hover:bg-indigo-400 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-200 flex items-center p-2 rounded-lg" href="#">
                        <Image className="w-8 h-8 m-auto" src="/icons/icon_logout.png" />
                        { open ? 
                        <span className="mx-4 font-medium">
                            Support
                        </span> : ""}
                    </a>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar;