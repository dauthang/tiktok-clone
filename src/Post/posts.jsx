import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  Animated,
  Easing,
} from "react-native";
import Video from "react-native-video";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";

const Posts = () => {
  const uriVideo =
    "https://cdn.videvo.net/videvo_files/video/premium/video0121/small_watermarked/48%20Adventure_preview.webm";
  const uriAvatar =
    "https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg";
  const [pause, setPause] = useState(false);
  const onPlayPausePress = () => {
    pause === false ? setPause(true) : setPause(false);
  };
  const spinValue = new Animated.Value(0);

  // First set up animation
  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    })
  ).start();

  // Next, interpolate beginning and end values (in this case 0 and 1)
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  return (
    <View style={style.container}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <Video
          source={{ uri: uriVideo }}
          resizeMode="cover"
          style={style.video}
          onError={(e) => {
            console.log(e.error);
          }}
          repeat={true}
          paused={pause}
        />
      </TouchableWithoutFeedback>
      <View style={style.uiContainer}>
        <View style={style.rightContainer}>
          <View>
            <Image style={style.profileAvatar} source={{ uri: uriAvatar }} />
            <MaterialIcons
              style={style.iconContainerPlus}
              name={"add"}
              size={20}
              color={"white"}
            />
          </View>

          <View>
            <MaterialIcons
              style={style.iconContainer}
              name={"favorite"}
              size={24}
              color={"white"}
            />
            <Text style={style.labelIcon}>500</Text>
          </View>
          <View>
            <FontAwesome
              style={style.iconContainer}
              name={"commenting"}
              size={24}
              color={"white"}
            />
            <Text style={style.labelIcon}>20</Text>
          </View>
          <View>
            <Fontisto
              style={style.iconContainer}
              name={"share-a"}
              size={15}
              color={"white"}
            />
            <Text style={style.labelIcon}>8</Text>
          </View>
        </View>
        <View style={style.bottomContainer}>
          <View>
            <Text style={style.userName}>@Thang</Text>
            <Text style={style.content}>aksdjhflkajshdgk</Text>
            <View style={style.songRow}>
              <Entypo
                style={style.song}
                name={"beamed-note"}
                size={24}
                color={"white"}
              />
              <Text style={style.nameMusic}>aksdjhflkajshdgk</Text>
            </View>
          </View>
          {/*<Image style={style.songImage} exiting={keyframe.duration(3000).delay(200)} source={{uri: uriAvatar}}/>*/}
          <Animated.Image
            style={{ ...style.songImage, transform: [{ rotate: spin }] }}
            source={{ uri: uriAvatar }}
          />
        </View>
        {pause ? (
          <View style={style.iconPlay}>
            <MaterialIcons
              name={"play-arrow"}
              size={60}
              color={"white"}
              onPress={onPlayPausePress}
            />
          </View>
        ) : null}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: Dimensions.get("window").height - 50,
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  uiContainer: {
    height: "100%",
    justifyContent: "flex-end",
    marginLeft: 5,
    bottom: 25,
  },
  userName: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 15,
  },
  content: {
    color: "white",
  },
  song: {
    fontSize: 20,
  },
  uiIcon: {},
  nameMusic: {
    marginLeft: 5,
    color: "white",
  },
  songRow: {
    flexDirection: "row",
    marginTop: 5,
  },
  rightContainer: {
    alignSelf: "flex-end",
    height: 300,
    justifyContent: "space-between",
    padding: 5,
  },
  profileAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#fff",
  },
  iconContainer: {
    alignItems: "center",
    alignSelf: "center",
  },
  labelIcon: {
    color: "white",
    alignSelf: "center",
    fontSize: 16,
    fontWeight: "700",
  },
  bottomContainer: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  songImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 8,
    borderColor: "#4c4c4c",
    left: 5,
    top: 10,
    transform: [{ rotate: "90deg" }],
  },
  iconContainerPlus: {
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 10,
    backgroundColor: "red",
    bottom: 10,
  },
  iconPlay: {
    height: "100%",
    position: "absolute",
    alignSelf: "center",
    justifyContent: "center",
    flex: 1,
    zIndex: 100,
    marginLeft: 5,
    bottom: 25,
  },
});

export default Posts;
