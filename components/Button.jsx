import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Montserrat_600SemiBold } from "@expo-google-fonts/montserrat";
import { ClipPath, Defs, G, Path, Rect, Svg } from "react-native-svg";

function Button({ log }) {
  if (log) {
    return (
      <Pressable onPress={""}>
        <View style={styles.containerLog}>
          <Text style={styles.textLog}>Login</Text>
        </View>
      </Pressable>
    );
  }
  return (
    <Pressable onPress={""}>
      <View style={styles.container}>
        {/* <Image source={apple} /> */}
        <Svg
          width="15"
          height="16"
          viewBox="0 0 15 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <G id="apple logo" clip-path="url(#clip0_293_143)">
            <Path
              id="Vector"
              d="M7.875 3.67434C7.82628 3.67487 7.77793 3.66579 7.73272 3.64763C7.6875 3.62948 7.64631 3.60259 7.61149 3.56851C7.57666 3.53443 7.54889 3.49383 7.52977 3.44901C7.51064 3.4042 7.50052 3.35606 7.5 3.30734C7.5 1.88734 8.676 0.737339 10.124 0.737339C10.1728 0.736678 10.2212 0.745662 10.2664 0.763772C10.3117 0.781883 10.353 0.808764 10.3878 0.84287C10.4227 0.876975 10.4504 0.917633 10.4695 0.962505C10.4886 1.00738 10.4986 1.05558 10.499 1.10434C10.499 2.52434 9.324 3.67434 7.875 3.67434Z"
              fill="white"
            />
            <Path
              id="Vector_2"
              d="M7.875 3.67434C7.82628 3.67487 7.77793 3.66579 7.73272 3.64763C7.6875 3.62948 7.64631 3.60259 7.61149 3.56851C7.57666 3.53443 7.54889 3.49383 7.52977 3.44901C7.51064 3.4042 7.50052 3.35606 7.5 3.30734C7.5 1.88734 8.676 0.737339 10.124 0.737339C10.1728 0.736678 10.2212 0.745662 10.2664 0.763772C10.3117 0.781883 10.353 0.808764 10.3878 0.84287C10.4227 0.876975 10.4504 0.917633 10.4695 0.962505C10.4886 1.00738 10.4986 1.05558 10.499 1.10434C10.499 2.52434 9.324 3.67434 7.875 3.67434ZM13.35 11.4053C13.495 11.5113 13.542 11.7053 13.46 11.8633C12.14 14.4493 11.087 15.7373 10.125 15.7373C9.677 15.7373 9.237 15.5953 8.808 15.3193C8.50009 15.1217 8.14353 15.0129 7.7777 15.0052C7.41188 14.9974 7.05102 15.0909 6.735 15.2753C6.215 15.5803 5.72 15.7373 5.25 15.7373C3.835 15.7373 1.5 11.4703 1.5 9.12934C1.5 6.62934 2.839 4.72334 4.875 4.72334C5.833 4.72334 6.66 4.86134 7.355 5.14234C7.649 5.26034 7.982 5.25234 8.269 5.11734C8.833 4.85134 9.577 4.72334 10.499 4.72334C11.626 4.72334 12.609 5.27334 13.425 6.33834C13.4545 6.37674 13.476 6.42068 13.4883 6.46755C13.5005 6.51442 13.5032 6.56327 13.4962 6.6112C13.4892 6.65913 13.4726 6.70517 13.4475 6.74659C13.4224 6.78801 13.3893 6.82397 13.35 6.85234C12.439 7.52234 12 8.27334 12 9.12934C12 9.98434 12.439 10.7363 13.35 11.4053Z"
              fill="white"
            />
            <Path
              id="Vector_3"
              d="M13.35 11.4056C13.495 11.5116 13.542 11.7056 13.46 11.8636C12.14 14.4496 11.087 15.7376 10.125 15.7376C9.677 15.7376 9.237 15.5956 8.808 15.3196C8.50009 15.1219 8.14353 15.0132 7.7777 15.0055C7.41188 14.9977 7.05102 15.0912 6.735 15.2756C6.215 15.5806 5.72 15.7376 5.25 15.7376C3.835 15.7376 1.5 11.4706 1.5 9.12963C1.5 6.62963 2.839 4.72363 4.875 4.72363C5.833 4.72363 6.66 4.86163 7.355 5.14263C7.649 5.26063 7.982 5.25263 8.269 5.11763C8.833 4.85163 9.577 4.72363 10.499 4.72363C11.626 4.72363 12.609 5.27363 13.425 6.33863C13.4545 6.37704 13.476 6.42098 13.4883 6.46785C13.5005 6.51471 13.5032 6.56356 13.4962 6.61149C13.4892 6.65942 13.4726 6.70546 13.4475 6.74688C13.4224 6.7883 13.3893 6.82426 13.35 6.85263C12.439 7.52263 12 8.27363 12 9.12963C12 9.98463 12.439 10.7366 13.35 11.4056Z"
              fill="white"
            />
          </G>
          <Defs>
            <ClipPath id="clip0_293_143">
              <Rect
                width="15"
                height="15"
                fill="white"
                transform="translate(0 0.737305)"
              />
            </ClipPath>
          </Defs>
        </Svg>

        <Text style={styles.text}>Sign up with Apple</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: "18px",
    paddingHorizontal: "71px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    alignSelf: "stretch",
    borderRadius: "30px",
    backgroundColor: "#171919",
  },
  containerLog: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: "18px",
    paddingHorizontal: "71px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    alignSelf: "stretch",
    borderRadius: "30px",
    backgroundColor: "#FFF",
    borderWidth: "2px",
    borderColor: "#171919",
    borderStyle: "solid",
    color: "#171919",
  },
  text: {
    color: "#FFF",
    textAlign: "center",
    fontSize: "0.9375rem",
    fontFamily: "Montserrat_600SemiBold",
    fontWeight: 600,
  },
  textLog: {
    color: "#171919",
    textAlign: "center",
    fontSize: "0.9375rem",
    fontFamily: "Montserrat_600SemiBold",
    fontWeight: 600,
  },
  appleLogo: {
    display: "flex",
    flexDirection: "column",
    width: 15,
    height: 15,
  },
});

export default Button;
