import React from 'react'
import { StyleSheet, View } from 'react-native'

export const HomeworkScreen_EX5_6_7_8_9_10 = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.purpleBox]} />
      <View style={[styles.box, styles.orangeBox]} />
      <View style={[styles.box, styles.blueBox]} />
    </View>
  )
}

// EX 5
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#28425b",
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   box: {
//     width: 100,
//     borderWidth: 10,
//     borderColor: "white"
//   },
//   purpleBox: {
//     backgroundColor: "#5856d6"
//   },
//   orangeBox: {
//     backgroundColor: "#f0a23b"
//   },
//   blueBox: {
//     backgroundColor: "#28c4d9",
//   },
// })

// EX 6
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#28425b",
//     flexDirection: "column",
//   },
//   box: {
//     height: 100,
//     borderWidth: 10,
//     borderColor: "white"
//   },
//   purpleBox: {
//     flex:2,
//     backgroundColor: "#5856d6"
//   },
//   orangeBox: {
//     flex:2,
//     backgroundColor: "#f0a23b"
//   },
//   blueBox: {
//     flex:4,
//     backgroundColor: "#28c4d9",
//   },
// })

// // EX 7
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#28425b",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   box: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: "white"
//   },
//   purpleBox: {
//     backgroundColor: "#5856d6"
//   },
//   orangeBox: {
//     backgroundColor: "#f0a23b"
//   },
//   blueBox: {
//     backgroundColor: "#28c4d9",
//   },
// })


// // EX 8
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#28425b",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   box: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: "white"
//   },
//   purpleBox: {
//     backgroundColor: "#5856d6"
//   },
//   orangeBox: {
//     backgroundColor: "#f0a23b",
//     marginLeft: 200 //right:-100
//   },
//   blueBox: {
//     backgroundColor: "#28c4d9",
//   },
// })


// // EX 9
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#28425b",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   box: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: "white"
//   },
//   purpleBox: {
//     backgroundColor: "#5856d6",
//     top: 100
//   },
//   orangeBox: {
//     backgroundColor: "#f0a23b",
//     right: -100
//   },
//   blueBox: {
//     backgroundColor: "#28c4d9",
//   },
// })

// EX 10
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#28425b",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: "white"
  },
  purpleBox: {
    backgroundColor: "#5856d6",
  },
  orangeBox: {
    backgroundColor: "#f0a23b",
    marginTop: 100
  },
  blueBox: {
    backgroundColor: "#28c4d9",
  },
})