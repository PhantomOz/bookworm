import { Pressable, StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import { ClipPath, Defs, G, Mask, Path, Rect, Svg } from "react-native-svg";
import { Image } from "react-native-web";
import {
  Montserrat_300Light,
  Montserrat_300Light_Italic,
  Montserrat_600SemiBold,
  useFonts,
} from "@expo-google-fonts/montserrat";
// import { useFonts } from "expo-font";

function Auth({ navigation }) {
  const [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_300Light,
    Montserrat_300Light_Italic,
  });
  if (!fontsLoaded) {
    return null;
  }
  const onPressFunction = (e) => {
    navigation.navigate("Signup");
  };

  return (
    <View style={styles.container}>
      <Svg
        width="225"
        height="56"
        viewBox="0 0 225 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Mask
          id="mask0_57_619"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="225"
          height="56"
        >
          <Path
            d="M23.279 24.3829C22.6016 25.0639 21.3435 25.9946 19.5047 27.175C19.8434 27.4474 20.3515 27.7878 21.0289 28.1964C21.7064 28.5596 22.287 28.9228 22.7709 29.286C23.2548 29.6038 23.6419 29.9897 23.9322 30.4437C25.9161 33.3493 26.4484 36.2321 25.529 39.0923C24.7548 41.4531 23.4967 43.4279 21.7548 45.0169C20.0612 46.5605 17.8837 47.9452 15.2224 49.171C11.8352 50.76 9.02869 51.8722 6.80283 52.5078C6.70606 52.5078 6.46411 52.5532 6.07701 52.644C5.6899 52.7802 5.42377 52.871 5.2786 52.9164C5.13344 52.9618 4.86731 53.0072 4.4802 53.0526C4.14148 53.1434 3.85115 53.1661 3.60921 53.1207C3.41566 53.1207 3.17372 53.0753 2.88339 52.9845C2.59306 52.9391 2.32693 52.8483 2.08499 52.7121C1.35917 52.3489 0.923672 51.8495 0.778508 51.2139C0.584955 50.6238 0.73012 50.0336 1.214 49.4434C2.0366 48.4446 3.00436 47.9225 4.11729 47.8771C4.55278 47.8317 4.81892 47.7182 4.91569 47.5366C5.06086 47.355 5.08505 47.0599 4.98828 46.6513C4.79472 46.1519 4.79472 45.2893 4.98828 44.0635C5.18183 42.8378 5.25441 41.9752 5.20602 41.4758C5.06086 39.8414 5.18183 36.7996 5.56893 32.3505C5.61732 31.8965 5.49635 31.5106 5.20602 31.1928C4.52859 30.421 4.50439 29.7173 5.13344 29.0817C5.52055 28.6277 5.73829 27.8105 5.78668 26.6302C6.07701 22.0448 6.24637 18.7761 6.29476 16.8239C6.29476 16.3245 6.34314 15.6208 6.43992 14.7128C6.5367 13.7594 6.58508 13.0557 6.58508 12.6017C6.58508 12.1024 6.5367 11.3987 6.43992 10.4907C6.29476 9.85508 6.5125 9.19679 7.09316 8.5158C7.67382 7.83481 8.30286 7.44891 8.9803 7.35811C15.4643 6.22313 20.5935 7.971 24.3677 12.6017C25.8678 14.2815 26.5452 16.1883 26.4 18.3221C26.2549 20.4558 25.2145 22.4761 23.279 24.3829ZM10.7223 32.6229C10.6255 33.8487 10.3836 38.207 9.99645 45.6979C12.7546 44.7445 15.0772 43.5868 16.9643 42.2249C19.5289 40.3635 20.8112 38.2524 20.8112 35.8916C20.8596 34.1665 19.9644 32.9407 18.1257 32.2143C17.2063 31.8511 16.3837 31.7149 15.6579 31.8057C14.2062 31.8965 13.1175 31.8057 12.3917 31.5333C11.7626 31.3517 11.3271 31.3517 11.0852 31.5333C10.8432 31.6695 10.7223 32.0327 10.7223 32.6229ZM11.3029 20.0245C11.3029 20.3877 11.2787 20.8644 11.2303 21.4546C11.2303 21.9994 11.2062 22.4761 11.1578 22.8847C11.1578 23.2933 11.1336 23.77 11.0852 24.3148C11.0368 24.8596 10.9642 25.359 10.8674 25.813C11.5933 25.5406 12.2707 25.2455 12.8997 24.9277C13.5772 24.6099 14.3756 24.1786 15.295 23.6338C16.2627 23.0436 16.8676 22.6804 17.1095 22.5442C18.0289 21.9994 18.8031 21.3865 19.4321 20.7055C20.158 19.9338 20.5693 19.2074 20.666 18.5264C20.7628 17.8454 20.5451 17.0282 20.0128 16.0748C19.4321 15.0306 18.6095 14.2588 17.545 13.7594C16.5288 13.2146 15.2708 12.7606 13.7707 12.3974C12.6578 12.1705 12.0046 12.1251 11.811 12.2612C11.6658 12.3974 11.5691 13.0557 11.5207 14.2361C11.4239 17.2325 11.3513 19.162 11.3029 20.0245Z"
            fill="white"
          />
          <Path
            d="M53.1545 41.4758C49.0415 41.3396 46.7189 39.4101 46.1866 35.6874C45.8963 33.4628 46.114 31.3517 46.8399 29.3541C47.5657 27.3112 48.6786 25.1093 50.1786 22.7485C51.34 20.9779 52.4529 19.8657 53.5174 19.4117C54.4368 19.0031 55.3804 18.9804 56.3481 19.3436C57.3159 19.7068 58.0175 20.3196 58.453 21.1822C58.5982 21.5454 58.9127 21.7951 59.3966 21.9313C61.0418 22.4307 62.3241 23.3841 63.2434 24.7915C63.5338 25.2909 63.7757 26.1081 63.9693 27.2431C64.308 29.0136 64.1386 30.6707 63.4612 32.2143C62.8321 33.7579 61.816 35.3923 60.4127 37.1174C59.1546 38.661 57.7272 39.8414 56.1304 40.6586C55.3078 41.0672 54.3158 41.3396 53.1545 41.4758ZM53.1545 28.1964C52.1384 30.3756 51.5335 32.2143 51.34 33.7125C51.3883 33.7579 51.4367 34.1438 51.4851 34.8702C51.5819 35.5965 51.848 36.0732 52.2835 36.3002C52.7674 36.5272 53.3481 36.4818 54.0255 36.164C56.0578 35.1199 57.5094 33.5309 58.3804 31.3971C58.6708 30.6253 58.8885 30.1259 59.0337 29.8989C59.1788 29.5811 59.2272 29.1952 59.1788 28.7412C59.1304 28.2418 58.9853 27.7652 58.7433 27.3112C58.5014 26.8572 58.2353 26.5621 57.9449 26.4259C55.9126 25.4271 54.3884 25.8811 53.3723 27.7879C53.3239 27.8333 53.2755 27.9013 53.2271 27.9921C53.1787 28.0829 53.1545 28.151 53.1545 28.1964ZM32.5412 42.9059C30.3153 42.5427 28.8153 41.1126 28.0411 38.6156C27.412 36.5726 27.4846 34.0303 28.2588 30.9885C29.1298 27.7198 30.5089 24.9504 32.396 22.6804C32.4444 22.635 32.5412 22.5215 32.6863 22.3399C32.8799 22.1129 33.0009 21.9767 33.0492 21.9313C33.0976 21.8405 33.1944 21.7043 33.3396 21.5227C33.5331 21.3411 33.6541 21.2276 33.7025 21.1822C33.7993 21.1368 33.9444 21.046 34.138 20.9098C34.3315 20.7282 34.4767 20.6374 34.5735 20.6374C34.6702 20.6374 34.8396 20.592 35.0815 20.5012C35.3235 20.365 35.4928 20.3423 35.5896 20.4331C35.7348 20.4785 35.9525 20.5012 36.2429 20.5012C37.4526 20.6828 38.2752 21.2503 38.7106 22.2037C38.9042 22.6123 39.2187 22.9301 39.6542 23.1571C41.493 23.9743 42.7511 24.9504 43.4285 26.0854C44.1543 27.175 44.5172 28.6731 44.5172 30.5799C44.614 32.1689 43.8882 34.1665 42.3398 36.5726C40.8881 38.7518 39.1703 40.477 37.1864 41.7482C35.5412 42.7924 33.9928 43.1783 32.5412 42.9059ZM34.7912 28.8093C33.7267 30.9431 33.0976 33.2585 32.9041 35.7554C33.1944 36.7996 33.3396 37.3671 33.3396 37.4579C33.4847 38.0481 33.7993 38.1389 34.2831 37.7303C34.4283 37.5941 34.6219 37.4579 34.8638 37.3217C35.1057 37.1855 35.3477 37.0493 35.5896 36.9131C35.8316 36.7315 36.0251 36.5499 36.1703 36.3683C37.8155 34.7794 38.9284 32.9634 39.5091 30.9204C39.7994 29.8762 39.6058 28.9909 38.9284 28.2645C38.3477 27.6744 37.5977 27.4474 36.6783 27.5836C35.759 27.6744 35.1299 28.0829 34.7912 28.8093ZM60.4127 44.4721C61.1386 44.5175 61.8402 44.9034 62.5176 45.6298C62.9531 46.1292 63.0983 46.674 62.9531 47.2642C62.8079 47.8998 62.3966 48.3311 61.7192 48.5581C61.6224 48.6035 61.3805 48.6943 60.9934 48.8305C60.6063 49.0121 60.2918 49.1256 60.0498 49.171C59.8079 49.2164 59.5417 49.2391 59.2514 49.2391C57.0256 49.1029 52.1384 55.2091 46.0415 55.4361C42.5575 55.5723 39.3571 55.568 35.6928 51.0926C35.1258 50.8266 34.8422 50.0286 32.396 50.4649C30.9927 50.5103 30.1701 50.0563 29.9282 49.1029C29.5895 47.8771 30.0008 46.9237 31.1621 46.2427C31.7911 45.9249 32.6863 45.6979 33.8476 45.5617C39.751 45.0623 39.8583 49.7839 43.348 50.2946C46.0415 50.6888 49.0184 49.7626 50.1786 49.1029C53.1545 47.4108 56.1304 44.2043 60.4127 44.4721Z"
            fill="white"
          />
          <Path
            d="M89.5176 40.1819C90.7273 41.9071 90.3402 43.3144 88.3563 44.404C87.9208 44.6764 87.4127 44.7445 86.8321 44.6083C86.2514 44.4267 85.7434 44.0862 85.3079 43.5868C84.6788 42.7243 83.7836 41.5212 82.6223 39.9776C81.461 38.3886 80.7352 37.4125 80.4449 37.0493C78.6545 34.6432 77.348 33.0769 76.5254 32.3505C75.9931 31.8511 75.5818 31.6014 75.2915 31.6014C75.0496 31.6014 74.6383 31.8284 74.0576 32.2824C73.7189 32.5094 73.4286 32.7818 73.1866 33.0996C72.9447 33.4174 72.7511 33.6898 72.606 33.9168C72.5092 34.1438 72.4366 34.4843 72.3882 34.9383C72.3398 35.3469 72.3156 35.6646 72.3156 35.8916C72.3156 36.0732 72.3156 36.4137 72.3156 36.9131C72.3156 37.4125 72.3156 37.753 72.3156 37.9346C72.2673 42.747 72.2189 46.1519 72.1705 48.1495C72.1221 49.1937 71.3721 50.1017 69.9204 50.8735C69.4366 51.1005 68.9043 51.0324 68.3236 50.6692C67.7914 50.3514 67.4043 49.8747 67.1623 49.2391C67.0171 48.9213 66.8962 48.5127 66.7994 48.0133C66.751 47.5593 66.7268 47.2415 66.7268 47.0599C66.7268 46.8783 66.7268 46.447 66.7268 45.766C66.7752 45.085 66.7994 44.7218 66.7994 44.6764C66.7994 44.5402 66.7752 43.7911 66.7268 42.4292C66.7268 41.0218 66.7752 40.25 66.872 40.1138C66.9204 39.6598 66.5816 39.2966 65.8558 39.0242C65.1784 38.7064 64.7187 38.1843 64.4768 37.4579C64.2832 36.7315 64.4042 36.0732 64.8397 35.4831C66.001 33.8033 66.6058 32.9634 66.6542 32.9634C66.751 32.7818 66.8236 32.6002 66.872 32.4186C66.9688 32.237 67.0171 32.0327 67.0171 31.8057C67.0655 31.5787 67.0897 31.3744 67.0897 31.1928C67.0897 31.0112 67.0655 30.8069 67.0171 30.5799C67.0171 30.3075 67.0171 30.1032 67.0171 29.967C67.0171 29.3768 67.0413 27.4474 67.0897 24.1786C67.1381 20.7736 67.2349 17.9135 67.3801 15.5981C67.622 12.1478 67.8881 9.17409 68.1785 6.67712C68.2752 6.17773 68.4204 4.86114 68.614 2.72737C68.7107 1.81938 69.243 1.04759 70.2108 0.412002C71.0817 -0.0873936 71.8801 -0.132794 72.606 0.275801C73.3318 0.638997 73.7673 1.22919 73.9125 2.04638C73.9608 2.31878 73.985 2.59117 73.985 2.86357C73.985 3.13597 73.9608 3.40836 73.9125 3.68076C73.9125 3.95315 73.8883 4.22555 73.8399 4.49795C73.8399 4.72495 73.8157 4.99734 73.7673 5.31514C73.7189 5.58753 73.6947 5.83723 73.6947 6.06423C73.0657 13.4643 72.7028 18.5491 72.606 21.3184C72.606 21.5 72.606 23.3614 72.606 26.9026C73.1382 26.6756 73.6705 26.2443 74.2028 25.6087C75.0254 24.6553 76.3077 23.5884 78.0496 22.408C78.4367 22.1356 78.848 21.7951 79.2835 21.3865C79.719 20.9779 80.1545 20.5693 80.59 20.1607C81.0739 19.7068 81.5094 19.3436 81.8965 19.0712C82.5739 18.5718 83.5417 18.027 84.7998 17.4368C85.7675 17.0282 86.6143 17.3006 87.3402 18.254C87.7273 18.7988 87.8724 19.3663 87.7757 19.9565C87.6789 20.5466 87.4127 21.046 86.9772 21.4546C86.6869 21.6816 84.9208 23.0663 81.6787 25.6087C81.582 25.6995 81.5094 25.7449 81.461 25.7449C81.3642 25.8811 81.2191 26.04 81.0255 26.2216C80.832 26.3578 80.6626 26.494 80.5174 26.6302C80.4207 26.721 80.2997 26.8572 80.1545 27.0388C80.0094 27.2204 79.9126 27.3793 79.8642 27.5155C79.7674 27.7878 79.7916 28.0148 79.9368 28.1964C80.1303 28.378 80.3723 28.5823 80.6626 28.8093C80.9529 28.9909 81.1465 29.1498 81.2433 29.286C84.1949 32.7818 86.9531 36.4137 89.5176 40.1819Z"
            fill="white"
          />
          <Path
            d="M127.004 20.2969C127.778 20.8871 128.069 21.6135 127.875 22.4761C127.778 22.8847 127.585 23.77 127.294 25.132C127.052 26.4486 126.859 27.4247 126.714 28.0602C126.569 28.6504 126.351 29.4903 126.061 30.5799C125.819 31.6241 125.528 32.5775 125.19 33.4401C124.851 34.2573 124.488 35.0745 124.101 35.8916C122.891 38.2524 121.681 39.796 120.472 40.5224C119.214 41.3396 117.98 41.7028 116.77 41.612C115.56 41.4758 114.302 40.8175 112.996 39.6371C112.705 39.3647 112.439 39.0923 112.197 38.8199C111.955 38.5475 111.713 38.2297 111.471 37.8665C111.278 37.4579 111.109 37.1401 110.963 36.9131C110.818 36.6407 110.649 36.2548 110.455 35.7554C110.262 35.2561 110.141 34.9156 110.092 34.734C110.044 34.5524 109.923 34.1665 109.73 33.5763C109.536 32.9407 109.415 32.5775 109.367 32.4867C109.318 32.3505 109.27 32.1462 109.221 31.8738C109.221 31.6014 109.197 31.3971 109.149 31.2609C109.1 31.0793 109.004 30.9885 108.859 30.9885C108.471 30.9885 108.012 31.4198 107.479 32.2824C105.737 35.1426 103.608 38.0481 101.092 40.9991C99.9793 42.2703 98.5519 43.1102 96.8099 43.5187C95.9873 43.7003 95.0679 43.5868 94.0518 43.1783C93.0356 42.7697 92.2614 42.1795 91.7291 41.4077C91.1001 40.4543 90.6404 39.5236 90.3501 38.6156C90.1081 37.6622 89.963 36.2548 89.9146 34.3935C90.3017 28.9909 91.6323 24.1332 93.9066 19.8203C94.3421 19.0031 94.9953 18.4583 95.8663 18.1859C96.7857 17.8681 97.6083 17.9362 98.3341 18.3902C99.0599 18.8442 99.5196 19.5252 99.7132 20.4331C99.9067 21.2957 99.7616 22.0221 99.2777 22.6123C99.1809 22.7485 99.0357 22.8847 98.8422 23.0209C98.6486 23.1571 98.4793 23.316 98.3341 23.4976C98.1889 23.6338 98.068 23.7927 97.9712 23.9743C97.7292 24.4737 97.4873 25.0412 97.2454 25.6768C97.0518 26.3124 96.8825 26.8799 96.7373 27.3793C96.6405 27.8786 96.4954 28.4915 96.3018 29.2179C96.1566 29.8989 96.0357 30.4664 95.9389 30.9204C95.3098 33.145 95.2373 35.3696 95.7212 37.5941C95.9147 38.5021 96.3502 38.6383 97.0276 38.0027C97.318 37.6849 97.8986 36.9358 98.7696 35.7554C102.399 30.7161 104.987 26.9026 106.536 24.3148C107.02 23.4976 107.697 22.8166 108.568 22.2718C109.342 21.8178 110.189 21.7497 111.109 22.0675C112.076 22.3853 112.681 22.9528 112.923 23.77C113.117 24.451 113.334 25.4271 113.576 26.6983C113.867 27.9694 114.06 28.832 114.157 29.286C114.254 29.513 114.375 30.0124 114.52 30.7842C114.713 31.5106 114.859 32.0554 114.955 32.4186C115.052 32.7364 115.197 33.1904 115.391 33.7806C115.633 34.3254 115.875 34.8021 116.117 35.2107C116.165 35.3015 116.214 35.415 116.262 35.5511C116.359 35.6873 116.431 35.8008 116.48 35.8916C116.576 35.9824 116.649 36.0732 116.697 36.164C116.794 36.2548 116.891 36.3229 116.988 36.3683C117.085 36.4137 117.181 36.4364 117.278 36.4364C117.665 36.391 118.076 35.937 118.512 35.0745C120.06 32.1235 121.052 29.286 121.488 26.5621C121.585 26.2443 121.706 25.7222 121.851 24.9958C121.996 24.2694 122.093 23.7019 122.141 23.2933C122.335 22.1583 122.915 21.046 123.883 19.9565C124.173 19.6387 124.633 19.5252 125.262 19.616C125.94 19.6614 126.52 19.8884 127.004 20.2969Z"
            fill="white"
          />
          <Path
            d="M141.393 22.2037C142.894 22.8847 144.006 23.8154 144.732 24.9958C145.506 26.1308 145.797 27.4474 145.603 28.9455C144.926 34.3935 142.7 38.8653 138.926 42.3611C136.99 44.177 134.692 44.7445 132.03 44.0635C129.659 43.4733 128.135 41.9298 127.458 39.4328C127.167 38.2524 127.046 37.3217 127.095 36.6407C127.095 34.0984 127.796 31.329 129.2 28.3326C129.877 26.7891 130.603 25.4952 131.377 24.451C131.522 24.224 131.619 23.8608 131.667 23.3614C131.764 22.8166 131.837 22.4761 131.885 22.3399C132.127 21.7043 132.369 21.3638 132.611 21.3184C132.95 21.1822 133.458 20.9779 134.135 20.7055C134.813 20.3877 135.418 20.138 135.95 19.9565C136.53 19.7749 137.087 19.6841 137.619 19.6841C138.684 19.6387 139.555 20.1607 140.232 21.2503C140.474 21.6589 140.861 21.9767 141.393 22.2037ZM140.305 28.605C140.402 27.9694 140.063 27.3339 139.289 26.6983C138.514 26.0627 137.813 25.813 137.184 25.9492C136.99 25.9946 136.797 26.1081 136.603 26.2897C134.232 29.6946 132.901 32.9407 132.611 36.0278C132.708 36.9812 132.756 37.5033 132.756 37.5941C132.756 37.6395 132.756 37.7303 132.756 37.8665C132.805 37.9573 132.829 38.0481 132.829 38.1389C132.877 38.1843 132.926 38.2524 132.974 38.3432C133.022 38.434 133.071 38.5248 133.119 38.6156C133.168 38.661 133.216 38.7291 133.264 38.8199C133.361 38.8653 133.482 38.9107 133.627 38.9561C134.353 39.0923 135.006 38.888 135.587 38.3432C138.151 35.8008 139.724 32.5548 140.305 28.605Z"
            fill="white"
          />
          <Path
            d="M167.685 24.1786C168.701 25.4952 168.628 26.6302 167.467 27.5836C167.031 27.9467 166.354 28.1056 165.435 28.0602C164.564 27.9694 163.91 27.6971 163.475 27.2431C163.33 27.1523 162.652 26.4032 161.443 24.9958C161.056 24.5418 160.717 24.5872 160.426 25.132C160.088 25.9038 159.41 27.1523 158.394 28.8774C157.378 30.6026 156.676 31.9646 156.289 32.9634C156.096 33.5082 155.805 34.1438 155.418 34.8702C155.031 35.5965 154.668 36.3002 154.33 36.9812C154.039 37.6622 153.797 38.2978 153.604 38.888C153.313 39.9322 152.612 40.7721 151.499 41.4077C150.579 41.8617 149.636 41.9071 148.668 41.5439C147.749 41.1353 147.168 40.4543 146.926 39.5009C146.781 38.9107 146.66 38.2524 146.563 37.526C146.515 36.7542 146.466 36.164 146.418 35.7554C146.418 35.3469 146.394 34.6432 146.346 33.6444C146.346 32.6456 146.346 32.0327 146.346 31.8057C146.346 31.0793 146.394 29.9443 146.491 28.4007C146.491 27.5836 146.805 26.8118 147.434 26.0854C148.063 25.3136 148.789 25.132 149.612 25.5406C151.305 26.3124 152.104 27.3112 152.007 28.5369C152.007 28.5823 152.055 28.9455 152.152 29.6265C152.539 29.0817 152.902 28.5142 153.241 27.924C153.628 27.3339 154.039 26.5621 154.475 25.6087C154.959 24.6099 155.273 23.997 155.418 23.77C155.902 22.8166 156.773 21.5681 158.031 20.0245C158.709 19.2074 159.58 18.7761 160.644 18.7307C161.757 18.6853 162.749 19.0258 163.62 19.7522C164.927 20.8417 166.281 22.3172 167.685 24.1786Z"
            fill="white"
          />
          <Path
            d="M208.511 41.8163C208.607 42.5427 208.51 43.1783 208.22 43.723C207.978 44.2224 207.567 44.5629 206.986 44.7445C206.357 44.9261 205.704 44.858 205.027 44.5402C204.349 44.2224 203.817 43.7684 203.43 43.1783C203.236 42.8151 203.091 42.4519 202.994 42.0887C202.897 41.7255 202.825 41.2261 202.777 40.5905C202.728 39.9549 202.704 39.569 202.704 39.4328C202.559 38.5248 202.002 33.9849 201.035 25.813C201.035 25.813 200.986 25.4952 200.889 24.8596C199.099 26.9934 198.155 28.1056 198.059 28.1964C197.043 29.3768 195.784 31.1701 194.284 33.5763C192.784 35.937 191.768 37.5033 191.236 38.2751C190.8 38.8199 190.244 39.2512 189.567 39.569C188.938 39.8868 188.333 39.9776 187.752 39.8414C187.075 39.7052 186.47 39.3193 185.937 38.6837C185.405 38.0481 185.091 37.3217 184.994 36.5045C184.8 35.1426 184.607 32.4867 184.413 28.5369C184.413 28.4915 184.316 27.8106 184.123 26.494C183.881 26.8118 183.155 27.6517 181.945 29.0136C180.736 30.3756 179.865 31.4652 179.332 32.2824C178.8 33.145 177.252 35.5058 174.687 39.3647C174.058 40.3181 173.695 41.0218 173.598 41.4758C173.405 41.9752 173.018 42.4292 172.437 42.8378C171.905 43.201 171.397 43.3825 170.913 43.3825C169.558 43.2918 168.687 42.5427 168.3 41.1353C168.01 40.2727 167.961 38.9788 168.155 37.2536C168.784 30.2167 169.365 24.8596 169.897 21.1822C169.994 20.6828 170.042 19.7749 170.042 18.4583C170.09 17.5049 170.381 16.5969 170.913 15.7343C171.348 14.9625 171.977 14.5539 172.8 14.5085C173.623 14.4177 174.348 14.6901 174.978 15.3257C175.51 15.8705 175.8 16.5288 175.849 17.3006C175.897 18.0724 175.873 18.7761 175.776 19.4117C175.679 20.4104 175.51 21.9086 175.268 23.9062C175.026 25.8584 174.857 27.2885 174.76 28.1964C174.76 28.2872 174.687 28.4688 174.542 28.7412C174.445 29.0136 174.397 29.2633 174.397 29.4903C174.445 29.6719 174.566 29.8535 174.76 30.0351C176.453 27.9014 177.349 26.7891 177.445 26.6983C177.687 26.3805 178.002 25.9719 178.389 25.4725C178.824 24.9277 179.163 24.4964 179.405 24.1786C179.695 23.8154 180.034 23.4295 180.421 23.0209C180.808 22.5669 181.195 22.1583 181.583 21.7951C182.599 20.9325 183.518 20.3423 184.341 20.0245C186.663 19.0712 188.284 19.9791 189.204 22.7485C189.446 23.3841 189.615 24.0424 189.712 24.7234C189.808 25.4044 189.881 26.3351 189.929 27.5155C189.978 28.6504 190.026 29.3314 190.075 29.5584C190.075 29.9216 190.147 30.1259 190.292 30.1713C190.534 30.0351 190.752 29.8535 190.946 29.6265C191.188 29.3541 191.405 29.059 191.599 28.7412C191.792 28.378 191.962 28.1056 192.107 27.924C192.446 27.5155 193.002 26.7664 193.776 25.6768C194.551 24.5418 195.18 23.7019 195.663 23.1571C197.26 21.3411 198.833 20.0245 200.381 19.2074C200.962 18.935 201.639 18.8669 202.414 19.0031C203.188 19.1393 203.817 19.4571 204.301 19.9565C205.317 21.0006 205.994 22.3399 206.333 23.9743C206.623 25.5179 207.18 29.9443 208.002 37.2536C208.002 37.526 208.172 39.0469 208.511 41.8163Z"
            fill="white"
          />
          <Path
            d="M217.405 21.3184C216.195 22.408 215.469 23.6338 215.227 24.9958C215.082 25.7222 215.251 26.3124 215.735 26.7664C215.88 26.9026 216.292 27.3112 216.969 27.9921C217.647 28.6277 218.179 29.1044 218.566 29.4222C220.501 31.0566 221.663 32.8726 222.05 34.8702C222.34 36.0505 222.074 37.3898 221.252 38.888C220.477 40.3862 219.364 41.4758 217.913 42.1568C215.203 43.428 212.784 43.8819 210.654 43.5187C210.364 43.4734 210.001 43.4506 209.566 43.4506C209.13 43.4506 208.767 43.4506 208.477 43.4506C208.042 43.4053 207.558 43.1556 207.025 42.7016C206.493 42.2476 206.179 41.8163 206.082 41.4077C205.985 40.9537 206.106 40.4316 206.445 39.8414C206.735 39.2512 207.098 38.888 207.533 38.7518C207.582 38.7518 208.38 38.7064 209.929 38.6156C210.267 38.7064 210.654 38.7518 211.09 38.7518C211.525 38.7518 211.888 38.7291 212.179 38.6837C212.469 38.6383 212.88 38.5702 213.413 38.4794C213.945 38.3432 214.332 38.2524 214.574 38.207C215.3 38.0708 215.88 37.753 216.316 37.2536C216.8 36.7542 216.945 36.2321 216.751 35.6874C216.509 34.8248 215.977 34.0757 215.155 33.4401C213.171 31.9419 211.671 30.3983 210.654 28.8093C209.735 27.3112 209.59 25.4498 210.219 23.2252C210.848 21.273 211.84 19.6841 213.195 18.4583C215.421 16.4153 217.792 15.6889 220.308 16.2791C221.276 16.5061 222.171 17.119 222.993 18.1178C223.864 19.0712 224.3 20.0018 224.3 20.9098C224.348 21.727 224.01 22.3626 223.284 22.8166C222.558 23.2252 221.784 23.2479 220.961 22.8847C219.8 22.3853 219.05 21.8859 218.711 21.3865C218.372 20.8417 217.937 20.819 217.405 21.3184Z"
            fill="white"
          />
        </Mask>
        <G mask="url(#mask0_57_619)">
          <Rect
            x="0.695557"
            y="-10.0859"
            width="259.212"
            height="68.6812"
            fill="#171919"
          />
          <Rect
            x="28.8708"
            y="43.9463"
            width="34.0664"
            height="26.4159"
            fill="#004BE0"
          />
        </G>
      </Svg>

      <View style={styles.btn}>
        <Button />
        <Button log={true} nav={navigation} />
        <Pressable onPress={onPressFunction}>
          <Text style={styles.text}>Sign up with email instead</Text>
        </Pressable>

        <Text style={styles.tos}>
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    // gap: "14.4375rem",
    paddingVertical: 0,
    paddingHorizontal: "1.3125rem",
    alignSelf: "stretch",
    height: "100%",
  },
  logo: {
    width: "200",
    height: "400",
  },
  btn: {
    gap: "1.31rem",
  },
  text: {
    color: "#171919",
    fontSize: "0.9375rem",
    fontFamily: "Montserrat_600SemiBold",
    fontWeight: 600,
    alignSelf: "center",
  },
  tos: {
    color: "#63646F",
    alignSelf: "center",
    fontSize: "0.625rem",
    fontFamily: `Montserrat_300Light`,
    paddingBottom: "0.625rem",
    paddingTop: "0.75rem",
    paddingHorizontal: "0.625rem",
    textAlign: "center",
  },
});
export default Auth;
